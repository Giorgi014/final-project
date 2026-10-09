# Stygar

Stygar is a frontend project built with React, TypeScript, and Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — run TypeScript checks and create a production build
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

## Project Structure

```text
src/
├── assets/       # Images, icons, and fonts
├── components/
│   ├── about/    # About page components
│   ├── auth/     # Sign-in and sign-up forms
│   ├── contact/  # Contact page and form
│   ├── home/     # Home page components
│   ├── layout/   # Header, mobile menu, and footer
│   ├── project/  # Project detail page components
│   ├── services/ # Services page components
│   ├── shared/   # Sections reused across pages
│   └── ui/       # Reusable base UI components
├── data/
│   ├── about/    # About page content
│   ├── home/     # Home page content
│   ├── project/  # Project detail content
│   └── services/ # Services page content
├── hooks/        # React hooks
├── layouts/      # Shared page layouts
├── pages/        # Route-level pages
├── schema/       # Form schemas and validation
└── types/        # Shared and domain-specific TypeScript types
```

The `@/` alias points to the `src/` directory. Components are exported from their feature folders and can also be imported through `@/components`.
