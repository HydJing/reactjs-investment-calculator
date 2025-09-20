# Gemini Project Context

This `GEMINI.md` file serves as a specialized context document for the Gemini AI agent, providing key information about the `reactjs-investment-calculator` project to facilitate efficient and accurate assistance.

## Project Overview

This is a React-based investment calculator application.

## Key Technologies

*   **Frontend:** React (JavaScript/JSX)
*   **Build Tool:** Vite
*   **Styling:** CSS (primarily `index.css`)

## Project Structure and Conventions

*   **Components:** React components are located in `src/components/`.
*   **Utilities:** Helper functions are located in `src/util/`.
*   **Assets:** Images and other static assets are in `src/assets/` and `public/`.
*   **Styling:** Global styles are in `src/index.css`. Component-specific styling is typically handled via IDs or class names defined in `index.css`.

### Styling Conventions (for Input Forms)

*   Input forms use `id="user-input"` for the main section.
*   Input groups within forms use `className="input-group"`.
*   These elements are styled in `index.css` to be centered rectangles with a green background.

## Development Commands

*   **Start Development Server:** `npm run dev` (or `yarn dev`)
*   **Build for Production:** `npm run build` (or `yarn build`)

## Gemini-Specific Instructions

*   When modifying components, prioritize creating new, modular components in `src/components/` rather than heavily modifying existing ones, unless the change is minor and localized.
*   Adhere to existing naming conventions (e.g., PascalCase for React components, camelCase for utility functions).
*   Before making significant changes, always check for existing tests or suggest creating new ones if none are present for the affected functionality.
*   When adding new features, consider how they integrate with the existing `calculateInvestmentResults` utility and the `formatter` for currency display.