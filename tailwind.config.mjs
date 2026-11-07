/** @type {import('tailwindcss').Config} */
// Colours mirror the dashboard's tokens (uddokta-app/apps/dashboard/src/styles/tokens.css).
export default {
  content: ["./src/**/*.{astro,html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", '"Noto Sans Bengali"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        frame: { DEFAULT: "var(--color-frame)", 2: "var(--color-frame-2)", 3: "var(--color-frame-3)", ink: "var(--color-frame-ink)", muted: "var(--color-frame-muted)", rule: "var(--color-frame-rule)", active: "var(--color-frame-active)" },
        paper: { DEFAULT: "var(--color-paper)", 2: "var(--color-paper-2)", 3: "var(--color-paper-3)" },
        ink: { DEFAULT: "var(--color-ink)", 2: "var(--color-ink-2)" },
        muted: "var(--color-muted)",
        rule: { DEFAULT: "var(--color-rule)", strong: "var(--color-rule-strong)" },
        primary: { DEFAULT: "var(--color-primary)", 2: "var(--color-primary-2)", soft: "var(--color-primary-soft)" },
        info: { DEFAULT: "var(--color-info)", soft: "var(--color-info-soft)" },
        warning: { DEFAULT: "var(--color-warning)", soft: "var(--color-warning-soft)" },
        success: { DEFAULT: "var(--color-success)", soft: "var(--color-success-soft)" },
        error: { DEFAULT: "var(--color-error)", soft: "var(--color-error-soft)" },
      },
      borderRadius: { control: "8px", card: "12px", panel: "16px" },
      maxWidth: { site: "1200px" },
    },
  },
  plugins: [],
};
