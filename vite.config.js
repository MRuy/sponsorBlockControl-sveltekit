import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit({
    preprocess: preprocess(),
    kit: {
      prerender: {
        default: true
      },
      paths: {
        base: process.env.BASE_PATH ?? '',
      },
      adapter: adapter({
        // default options are shown
        pages: 'build',
        assets: 'build',
        fallback: null
      }),
      trailingSlash: 'always'
    }
  })]
};

export default config;
