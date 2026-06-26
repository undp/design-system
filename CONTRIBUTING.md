# Contributing to the UNDP Design System

Thank you for contributing! This guide explains how to add or modify components,
submit changes, and meet the quality bar required for the design system to
remain consistent, accessible, and maintainable across UNDP's digital products.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Component Lifecycle](#component-lifecycle)
3. [Adding a New Component](#adding-a-new-component)
4. [Story Quality Standards](#story-quality-standards)
5. [Accessibility Checklist](#accessibility-checklist)
6. [Naming & API Stability](#naming--api-stability)
7. [Token Contribution](#token-contribution)
8. [Deprecation Policy](#deprecation-policy)
9. [Pull Request Process](#pull-request-process)
10. [CI Gates](#ci-gates)

---

## Getting Started

```bash
git clone https://github.com/undp/design-system.git
cd design-system
npm install

# Run Storybook locally
npm run storybook

# Build production assets
npm run build

# Lint JS and SCSS
npm run lint

# Smoke-test the build output
npm run smoke-test

# Check bundle sizes are within budget
npm run check-bundle-size
```

---

## Component Lifecycle

Every component carries one of four lifecycle statuses that controls how it
is documented, tested, and versioned.

| Status       | Meaning                                                                                               | Production use? |
|--------------|-------------------------------------------------------------------------------------------------------|-----------------|
| **draft**    | Under active design/development. API may break between commits.                                       | No              |
| **beta**     | Feature-complete and reviewed. Minor API tweaks still possible.                                       | With caution    |
| **stable**   | Production-ready. API is stable within a semver major version.                                        | Yes             |
| **deprecated** | Replaced by a newer component or pattern. Will be removed in the next major release.               | Migrate away    |

### Setting a status

Add a JSDoc `@status` tag to the story file's default export comment:

```js
/**
 * @status beta
 */
export default {
  title: 'Components/UI components/MyComponent',
  …
};
```

The `scripts/generate-component-metadata.js` script reads this tag and publishes
it in `docs/component-metadata.json` for tooling and consumers.

---

## Adding a New Component

Follow these steps to add a new component. Use the provided template:

```
.storybook/story-template.jsx
```

### File structure

```
stories/
└── Components/
    └── <Category>/
        └── <ComponentName>/
            ├── <ComponentName>.jsx       # React component
            ├── <ComponentName>.scss      # Component styles
            ├── <ComponentName>Utils.js   # Locale/data helpers
            └── <ComponentName>.stories.js
```

If the component requires JavaScript behaviour, add a corresponding file to:

```
stories/assets/js/<component-name>.js
```

And register it in alphabetical order in both:
- `stories/assets/js/init.js` (production initialiser)
- `stories/assets/js/storybook-init.js` (Storybook lazy-initialiser)

### Required elements for a story

- `title` following the existing taxonomy  
  e.g. `Components/Navigation components/Breadcrumbs`
- `argTypes` with `name`, `control`, `description`, and `table.category` for
  each consumer-facing prop
- `colorTheme` arg (`inline-radio`, `['light', 'dark']`)
- `parameters.docs.page` — inline JSX documentation (see template)
- At least a `Default` (light) story and a `Dark` story
- CDN CSS and JS references in the documentation section

---

## Story Quality Standards

To maintain consistency across the system, every component story should
include the following stories (or a justification for omitting them):

| Story name         | Required? | Notes                                        |
|--------------------|-----------|----------------------------------------------|
| Default (light)    | ✅        |                                              |
| Dark               | ✅        | `colorTheme: 'dark'`                         |
| RTL                | ✅ if text | Set `dir="rtl"` on the wrapper              |
| States (hover, focus, disabled, error) | ✅ where applicable | |
| Edge cases         | 🟡 where applicable | Long text, empty state, many items    |
| Locale variants    | 🟡 where applicable | Use existing locale toolbar            |

### Chromatic visual testing

All stories are automatically captured by Chromatic in multiple viewport modes
(`small`, `medium`, `large`, `xlarge`, `hd`). Ensure that:

- Animations settle within 1 500 ms or use `pauseAnimationAtEnd: true`
- No random content (timestamps, random IDs) that would cause false positives
- Dark-mode variant is explicitly tested

---

## Accessibility Checklist

Before submitting a component, verify:

- [ ] Uses semantic HTML elements (`nav`, `button`, `ul`, etc.)
- [ ] All interactive elements are reachable via `Tab` / `Shift-Tab`
- [ ] `Enter` / `Space` activates buttons and links
- [ ] `Escape` closes any overlay, modal, or expanded state
- [ ] Focus ring is visible and not suppressed without an equivalent
- [ ] `aria-expanded`, `aria-controls`, `aria-current` applied where appropriate
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI elements)
- [ ] Images have meaningful `alt` text or are marked `alt=""`
- [ ] Form inputs are associated with `<label>` or `aria-label`
- [ ] Component passes `@storybook/addon-a11y` with zero violations

---

## Naming & API Stability

### CSS class names

- Use BEM-like naming consistent with existing components.
- **Stable** components guarantee no removals or renames within a semver major.
- **Deprecated** classes must be kept for one additional major release with a
  console warning and documented migration path.

### JS init API

- Component functions follow the pattern: `<camelCaseName>(element?, options?)`.
- The `data-undpds-component` attribute key must not be renamed without a
  deprecation period.
- New optional parameters must not change positional arguments of existing ones.

### Design tokens (SASS / CSS custom properties)

- Token names follow the pattern `$category-[sub]-name` (SASS) /
  `--undpds-category-[sub]-name` (CSS).
- Primitive tokens (e.g. `$color-blue-600`) are the stable foundation; semantic
  tokens (e.g. `$color-brand`) are the preferred API for component styling.
- Removing or renaming a primitive token is a **breaking change** and requires
  a major version bump with a migration guide.

---

## Token Contribution

Design tokens live in `figma-tokens/input/tokens.json` and are
the single source of truth for all design values.

### Workflow

1. Export updated tokens from Figma (using the Figma Variables / Tokens plugin).
2. Update `figma-tokens/input/tokens.json`.
3. Run locally to verify: `npm run transform-tokens && npm run build`.
4. Open a PR — the `sync-figma-tokens` workflow will generate a token changelog
   at `figma-tokens/CHANGELOG.md`.
5. Review the changelog for breaking removals (🔴) before merging.

### Token naming policy

- Use `camelCase` for Figma token group names; the transform script converts
  them to `kebab-case` for SASS/CSS.
- Do **not** delete a primitive token without first creating a backwards-
  compatibility alias (the transform script does this automatically where
  possible, but explicit aliases may be required for complex cases).
- Semantic tokens must always reference a primitive token — never a hard-coded
  value.

---

## Deprecation Policy

When a component, CSS class, JS API, or token must be removed:

1. **Announce** — document the deprecation in the current release notes and
   add a `@status deprecated` tag to the story.
2. **Keep** — retain the deprecated item for **at least one additional major
   release**, emitting a `console.warn` from the JS initialiser where feasible.
3. **Guide** — provide a migration note explaining what to use instead:
   - In the story documentation
   - In `CHANGELOG.md` (breaking-changes section)
   - In `docs/component-metadata.json` (via the story `parameters.deprecationNote`)
4. **Remove** — remove the item in the next major version after the grace
   period, noting the removal in the changelog.

---

## Pull Request Process

1. Branch from `develop`.
2. Ensure `npm run lint` passes with no errors.
3. Ensure `npm run build` succeeds.
4. Ensure `npm run smoke-test` passes.
5. Ensure `npm run check-bundle-size` passes (or justify the increase).
6. Ensure all new/changed stories pass the `@storybook/addon-a11y` panel.
7. Open a PR against `develop` — the CI workflow runs all checks automatically.
8. At least one maintainer must approve before merging.

---

## CI Gates

The following checks run automatically on every pull request and must pass:

| Check                    | Command                          |
|--------------------------|----------------------------------|
| ESLint (JS)              | `npm run lint:js`                |
| Stylelint (SCSS)         | `npm run lint:css`               |
| Webpack build            | `npm run build`                  |
| Build smoke tests        | `npm run smoke-test`             |
| Bundle size budgets      | `npm run check-bundle-size`      |
| Visual regression        | Chromatic (on push)              |

Chromatic visual tests run on every push; the PR author is responsible for
reviewing and accepting UI changes in the Chromatic interface.
