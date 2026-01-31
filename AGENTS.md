# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Nuxt application code: `pages/` for routes, `components/` for UI, `layouts/` for page shells, `composables/` for reusable logic, and `plugins/` for Nuxt plugin setup.
- `app/assets/` holds processed assets (e.g., CSS, images), while `public/` is for static files served as-is.
- `content/` holds markdown/content collections (e.g., `content/blogs/`, `content/project/`) managed by `@nuxt/content` v3.
- `server/api/` contains server routes for the Nuxt server runtime.
- Key configs: `nuxt.config.ts`, `app.config.ts`, `content.config.ts`, `tsconfig.json`, and `eslint.config.js`.

## Build, Test, and Development Commands
Use your preferred Node package manager (npm/pnpm/bun). Common commands:
- `npm run dev`: start local Nuxt dev server.
- `npm run build`: production build (Vercel preset).
- `npm run preview`: preview the production build locally.
- `npm run generate`: generate a static site build.
- `npm run lint` / `npm run lint:fix`: run ESLint (fix optional).
- `npm run format` / `npm run format:write`: check or apply Prettier formatting.

## Coding Style & Naming Conventions
- TypeScript-first (Nuxt 4 + Vue 3). Use 2-space indentation as standard for Vue/TS configs.
- ESLint rules live in `eslint.config.js` and enforce no `console`, strict equality, and unused vars (ignore leading `_`).
- Prettier is the formatter; Tailwind formatting is handled by `prettier-plugin-tailwindcss`.
- Name composables in `app/composables/` as `useThing.ts` and Vue components in PascalCase.

## Testing Guidelines
- No test framework is configured in this repo at the moment (no test or spec files found).
- If you add tests, document the framework and add scripts in `package.json`.
- Currently, no tests with suite wanted.

## Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits (e.g., `feat: add default og image`, `fix: correct meta path`).
- PRs should include a clear description, linked issue (if any), and screenshots or screen recordings for UI changes.

## Security & Configuration Tips
- Copy `.env.example` to `.env` for local development and fill in required tokens (GitHub, Nuxt Studio, Resend).
- Avoid committing secrets; use environment variables for deployments.
