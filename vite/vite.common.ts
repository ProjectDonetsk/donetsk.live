import pkg from '../package.json';

import { splitVendorChunkPlugin, type UserConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const config: UserConfig = {
    plugins: [
        svelte(),
        splitVendorChunkPlugin(),
        ViteImageOptimizer({
            test: /\.(svg)$/i,
            logStats: false
        })
    ],

    define: {
        APP_VERSION: JSON.stringify(`${pkg.version}`)
    }
};

export default config;
