import fs from 'fs';
import path from 'path';
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

const spinner = ora(chalk.cyan('Writing dist package.json...')).start();
spinner.color = 'cyan';

try {
  const root = process.cwd();
  const pkgPath = path.resolve(root, 'package.json');
  const distDir = path.resolve(root, 'build', 'dist');

  const pkgRaw = fs.readFileSync(pkgPath, 'utf-8');
  const pkg = JSON.parse(pkgRaw);

  const distPkg = {
    ...pkg,
    main: './index.js',
    module: './index.js',
    'react-native': './index.js',
    types: './index.d.ts',
    exports: {
      '.': {
        types: './index.d.ts',
        'react-native': './index.js',
        import: './index.js',
        default: './index.js'
      }
    }
  };

  // Ensure minimal fields for dist package
  delete distPkg.files; // not needed inside dist
  delete distPkg.devDependencies; // avoid leaking build-time deps
  delete distPkg.scripts; // avoid running scripts from dependency

  fs.mkdirSync(distDir, { recursive: true });
  fs.writeFileSync(path.resolve(distDir, 'package.json'), JSON.stringify(distPkg, null, 2));
  spinner.succeed(chalk.cyanBright('dist/package.json written.'));
} catch (e) {
  spinner.fail(chalk.bgRed(`copy-package error: ${e.message}`));
  process.exit(1);
}
