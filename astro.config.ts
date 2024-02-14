import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://antoine-fricker.vercel.app/",
  integrations: [icon()],
  markdown: {
    shikiConfig: {
      // tester: https://textmate-grammars-themes.netlify.app/?theme=slack-dark&grammar=typescript
      theme: "slack-dark",
    },
  },
  vite: {
    ssr: {},
  },
});
