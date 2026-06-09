# Moonshift

Landing page for Moonshift — AI agent orchestration platform.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build with type checking |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm test` | Run all tests |
| `npm run test:unit` | Run unit tests only |
| `npm run test:component` | Run component tests only |
| `npm run test:a11y` | Run accessibility tests only |
| `npm run audit` | Run npm security audit |

## Testing

Three test categories:

- **Unit** — pure logic and utility function tests
- **Component** — render and interaction tests with Testing Library
- **Accessibility** — automated aXe-core audits

```bash
npm test          # all tests
npm run test:unit # src/__tests__/unit/
npm run test:component # src/components/__tests__/ + src/app/__tests__/
npm run test:a11y # src/__tests__/a11y/
```

## CI Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push/PR to `main`:

```
Install Dependencies
  ├── Type Checking
  ├── Linting
  ├── Security Audit
  ├── Unit Tests
  ├── Component Tests
  ├── Accessibility Tests
  ├── Build
  │     ├── Bundle Size Analysis
  │     └── Performance Check
```
