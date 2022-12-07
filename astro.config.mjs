import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://asneakytoast.github.io',
  // Dont set base if usig custom or username
  // base: 'design-portfolio',
	integrations: [mdx(), sitemap()],
});
