import { exec } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import path from 'path';

// Hard clear screen to remove npm lifecycle header lines
try { console.clear(); } catch {}

// Clear npm's two lifecycle lines (script header) from the terminal
try {
  if (process.stdout.isTTY) {
    process.stdout.write('\x1b[2A'); // up 2
    process.stdout.write('\x1b[2K'); // clear line
    process.stdout.write('\x1b[1B'); // down 1
    process.stdout.write('\x1b[2K'); // clear line
    process.stdout.write('\x1b[1B'); // down back to current
    process.stdout.write('\r');
  }
} catch {}

const spinner = ora(chalk.green('Building library...')).start();
spinner.color = 'green';

function run(cmd, opts = {}) {
  return new Promise((resolve, reject) => {
    exec(cmd, { ...opts }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || stdout || error.message));
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

(async () => {
  try {
    // Compile TypeScript using root tsconfig (rootDir: lib)
    await run('npx tsc -p ./tsconfig.json', { cwd: path.resolve(process.cwd()) });
    spinner.succeed(chalk.greenBright('TypeScript compilation complete.'));

    const copySpinner = ora(chalk.cyan('Copying assets...')).start();
    try {
      await run('node ./scripts/terminal/copy-assets.mjs', { cwd: process.cwd() });
      copySpinner.succeed(chalk.cyanBright('Assets copied.'));
    } catch (e) {
      copySpinner.fail(chalk.bgRed(`Asset copy failed: ${e.message}`));
      process.exit(1);
    }

    const pkgSpinner = ora(chalk.cyan('Copying package.json...')).start();
    try {
      await run('node ./scripts/terminal/copy-package.mjs', { cwd: process.cwd() });
      pkgSpinner.succeed(chalk.cyanBright('package.json copied.'));
    } catch (e) {
      pkgSpinner.fail(chalk.bgRed(`Package copy failed: ${e.message}`));
      process.exit(1);
    }
  } catch (e) {
    spinner.fail(chalk.bgRed(`Build failed: ${e.message}`));
    process.exit(1);
  }
})();


