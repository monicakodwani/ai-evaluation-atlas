// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The Atlas is a standalone project deployed as a GitHub Pages *project
// site*. With a GitHub repository named `ai-evaluation-atlas` under the
// `monicakodwani` account, GitHub serves it at
// https://monicakodwani.github.io/ai-evaluation-atlas/ — which is what
// `site` + `base` below encode. If the repository is named differently,
// change `base` to `/<repo-name>` (and nothing else).
export default defineConfig({
  site: 'https://monicakodwani.github.io',
  base: '/ai-evaluation-atlas',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
