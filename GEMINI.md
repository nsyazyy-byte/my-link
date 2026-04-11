# Project Overview: my-profile

This is a modern web application built with **Next.js 16** (App Router) and **React 19**. It leverages **Tailwind CSS 4** for styling and is written in **TypeScript**. The project is structured as a single-package PNPM workspace.

## Tech Stack

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Library:** [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/postcss`)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Package Manager:** [PNPM](https://pnpm.io/)
*   **Fonts:** Geist Sans and Geist Mono (via `next/font`)

## Project Structure

*   `my-profile/`: The main application directory.
    *   `app/`: Contains the App Router routes, layouts, and global styles.
        *   `components/`: Reusable React components (e.g., `Puppy.tsx`).
        *   `globals.css`: Global CSS with Tailwind 4 imports.
        *   `layout.tsx`: Root layout defining the HTML structure and fonts.
        *   `page.tsx`: The main landing page.
    *   `public/`: Static assets like SVG icons and logos.
    *   `package.json`: Project dependencies and scripts.
    *   `next.config.ts`: Next.js configuration.
    *   `tsconfig.json`: TypeScript configuration.

## Building and Running

All commands should be run from the `my-profile/` directory.

| Task | Command |
| :--- | :--- |
| **Development** | `pnpm dev` |
| **Build** | `pnpm build` |
| **Production Start** | `pnpm start` |
| **Linting** | `pnpm lint` |

## Development Conventions

*   **Routing:** Uses the Next.js App Router (`app/` directory).
*   **Styling:** Utility-first CSS using Tailwind CSS 4. Prefer using Tailwind classes over custom CSS where possible.
*   **Components:** Functional components with TypeScript interfaces for props.
*   **Icons:** Assets are stored in `public/` and used with the `next/image` component.
*   **Animations:** Some components (like `Puppy.tsx`) use Tailwind's built-in animation utilities.

## Key Files

*   `my-profile/app/page.tsx`: The entry point for the home page.
*   `my-profile/app/components/Puppy.tsx`: A decorative, CSS-only animated puppy component.
*   `my-profile/next.config.ts`: Configuration for the Next.js environment.
