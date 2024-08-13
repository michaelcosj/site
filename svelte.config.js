import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeSlug from 'rehype-slug'
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { mdsvex } from "mdsvex";


const mdsvexOptions = {
  extensions: ['.md'],
  remarkPlugins: [remarkUnwrapImages],
  rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter(),
  },
};

export default config;
