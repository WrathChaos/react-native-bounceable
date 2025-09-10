import { exec } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';

try { console.clear(); } catch {}

// Clear npm's two lifecycle lines
try {
  if (process.stdout.isTTY) {
    process.stdout.write('\x1b[2A');
    process.stdout.write('\x1b[2K');
    process.stdout.write('\x1b[1B');
    process.stdout.write('\x1b[2K');
    process.stdout.write('\x1b[1B');
    process.stdout.write('\r');
  }
} catch {}

const spinner = ora(chalk.cyan('Copying UI assets...')).start();
spinner.color = 'cyan';

exec("npx cpx 'lib/ui/assets/**' './build/dist/ui/assets'", (error, stdout, stderr) => {
  if (error) {
    spinner.fail(chalk.bgRed(`copy-assets error: ${stderr || stdout}`));
    process.exit(1);
  } else {
    spinner.succeed(chalk.cyanBright('UI assets copied successfully!'));
  }
});
