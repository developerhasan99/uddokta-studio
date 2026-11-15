import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// The agency pages were retired when the site became the Uddokta Commerce product site.
export default defineConfig({
  site: "https://uddokta.co",
  integrations: [tailwind()],
  redirects: {
    "/about": "/",
    "/portfolio": "/",
    "/contact": "/#contact",
    "/services/digital-strategy": "/#features",
    "/services/ui-ux-design": "/#features",
    "/services/web-development": "/#features",
    "/services/app-solution": "/#features",
    "/services/brand-growth": "/#features",
    "/services/ecommerce-solution": "/#features",
  },
});
