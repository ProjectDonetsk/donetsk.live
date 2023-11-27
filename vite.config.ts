import { defineConfig } from 'vite';

import prodConfig from './vite/vite.prod';
import devConfig from './vite/vite.dev';

import { existsSync, rmSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));
export default defineConfig(({ command, mode }) => {
    if (command === `serve` && mode === `development`) {
        if (existsSync(resolve(DIRNAME, `./dist`))) rmSync(resolve(DIRNAME, `./dist`), { recursive: true, force: true });
    }

    return command === `serve` ? devConfig : prodConfig;
});
