import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://fineartinstall.biz",
  integrations: [
    sanity({
      projectId: "9ts1poxt",
      dataset: "production",
      apiVersion: "2023-08-31",
      useCdn: false,
    }),
    svelte(),
  ],
  compressHTML: true,
  build: {
    format: "file",
  },
});
