# uddokta.studio

Marketing site for Uddokta, the Bangla-first commerce app for Facebook and cash-on-delivery sellers. Astro + Tailwind, fully static, deployed to GitHub Pages by `.github/workflows/astro.yml` on every push to `main`.

```sh
yarn install
yarn dev      # http://localhost:4321
yarn build    # ./dist
```

- Colours and button styles copy the dashboard's tokens (`uddokta-app/apps/dashboard/src/styles/tokens.css`) into `src/styles/global.css`. Keep them in sync.
- App links and contact details live in `src/site.ts`.
- Figures in the product drawings are sample data and are labelled as such.
