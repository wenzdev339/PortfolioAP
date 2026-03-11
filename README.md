# Anatcha Pankean — Portfolio

Personal portfolio website built as a single-page application showcasing projects, skills, and background.

---

## Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Framework | React 18 + Vite 5                   |
| Routing   | React Router DOM v7 (BrowserRouter) |
| Styling   | SCSS (sass-embedded)                |
| Linting   | ESLint 9 with react/react-hooks     |
| Build     | Vite (ESM, HMR)                     |

---

## Project Structure

```
src/
├── main.jsx              # Entry point, mounts <App /> to #root
├── App.jsx               # Root component, composes all sections
├── components/
│   ├── Navigation.jsx    # Sticky nav, scroll-spy active section, responsive hamburger menu
│   ├── Hero.jsx          # Landing section with entrance animation
│   ├── About.jsx         # Bio section
│   ├── Education.jsx     # Academic background
│   ├── Skills.jsx        # Filterable skill grid (8 categories, 5-level rating)
│   ├── Work.jsx          # 18 projects rendered via ProjectCard
│   ├── ProjectCard.jsx   # Reusable card component (image, tags, optional YouTube link)
│   ├── Contact.jsx       # Contact form / info
│   ├── Footer.jsx        # Footer
│   └── CustomCursor.jsx  # Custom cursor overlay
└── styles/               # SCSS partials per component
```

---

## How It Works

**Rendering**: Single HTML shell (`index.html` → `#root`). React hydrates and manages all DOM from there. No SSR.

**Navigation**: `Navigation.jsx` attaches a `scroll` event listener on mount. On each scroll event it iterates through section IDs (`home`, `about`, `education`, `skills`, `work`, `contact`), checks `offsetTop` against `window.scrollY`, and sets the active anchor. Cleans up listener on unmount.

**Animations**: Components use a `isVisible` state flag toggled in `useEffect` on mount. CSS classes (`visible`) trigger transitions defined in SCSS — no animation library involved.

**Skills filter**: All skill data is a static array in `Skills.jsx`. `activeCategory` state drives a `.filter()` on render. No external state management.

**Projects**: Static array in `Work.jsx`, mapped to `<ProjectCard />`. Layout alternates left/right via `reversed` prop.

---

## Getting Started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## Sections

- **Hero** — name, title (Full Stack & Game Developer), CTA, LinkedIn
- **About** — personal background
- **Education** — academic history
- **Skills** — 50+ skills across: Programming Languages, Frameworks, Development, Design, Tools, Management, Languages
- **Work** — 18 projects: game development, web apps, desktop apps, hackathons, startup pitches, BI tools
- **Contact** — contact information

---

## Notes

- No state management library. All state is local `useState`.
- Styling is component-scoped SCSS, no CSS-in-JS.
- Assets (images) are bundled via Vite's static import at build time.
- `CustomCursor` renders as an overlay on top of all content via CSS positioning.
