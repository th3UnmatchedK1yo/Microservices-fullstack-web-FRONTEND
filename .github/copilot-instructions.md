# Copilot Instructions for Microservices-Web-Frontend

## Project Overview
- This is a Next.js frontend project, bootstrapped with `create-next-app`.
- The main application code is in the `client/src/app` directory, with global styles in `globals.css` and layout in `layout.tsx`.
- UI components are located in `client/src/components` (e.g., `Navbar.tsx`, `Footer.tsx`, `ProductList.tsx`, `SearchBar.tsx`).
- Static assets (images, icons) are in `client/public` and subfolders.

## Developer Workflows
- **Start development server:**
  - Use `npm run dev`, `yarn dev`, `pnpm dev`, or `bun dev` from the `client` directory.
  - Default port is `3000`.
- **Edit main page:** Modify `src/app/page.tsx`.
- **Global styles:** Edit `src/app/globals.css`.
- **Component development:** Add new components to `src/components` and import them in `src/app/layout.tsx` or other pages.
- **Configuration files:**
  - `next.config.ts` for Next.js settings
  - `tsconfig.json` for TypeScript
  - `eslint.config.mjs` for linting
  - `postcss.config.mjs` for CSS processing

## Patterns & Conventions
- **File-based routing:** Pages are defined by files in `src/app`.
- **Component structure:** Use functional React components with TypeScript.
- **Styling:** Use CSS modules or global CSS. No evidence of styled-components or Tailwind in the base setup.
- **Image assets:** Reference images from `public` using relative paths (e.g., `/products/1g.png`).
- **Font optimization:** Uses `next/font` for loading and optimizing fonts (see README).

## Integration Points
- No backend or API integration is present in the base code. Add API calls using Next.js `fetch` or React Query as needed.
- No custom server or middleware detected; use Next.js API routes if needed.

## External Dependencies
- Next.js, React, TypeScript, PostCSS, ESLint (see `package.json` for details).
- No custom microservices integration in the frontend codebase as of this analysis.

## Example: Adding a New Product Card
1. Add product image to `public/products/`.
2. Create a new component in `src/components/ProductCard.tsx`.
3. Import and use the component in `src/app/page.tsx` or `ProductList.tsx`.

## Key Files & Directories
- `client/src/app/` — main app logic, layout, pages
- `client/src/components/` — reusable UI components
- `client/public/` — static assets
- `client/package.json` — dependencies and scripts
- `client/README.md` — basic project info

---

**If any conventions or workflows are unclear, please provide feedback or specify which areas need more detail.**
