import adapter from '@sveltejs/adapter-auto'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            '~': path.resolve('./src'),
            '~lib': path.resolve('./src/lib'),
            '~routes': path.resolve('./src/routes'),
        },
    },
}

export default config
