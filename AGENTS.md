<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Dhaka Post Project Guidelines

This file serves as a guide for agents editing or extending the Dhaka Post news client. Please follow the architectural conventions and code styles established here.

## 🛠️ Technology Baseline
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript & React 19
- **Styling**: Tailwind CSS v4

## 📐 Architecture & Standards

### 1. File Structure & Responsibilities
- **`app/`**: Contains page routes and global styles. Keep layouts, skeletons, and error boundary pages here.
- **`components/`**: Houses shared UI modules like `Navbar`, `Footer`, and `ArticleActions`. Avoid placing routing/data-fetching logic inside these components.
- **`lib/`**: Reserved for external API calls and queries. Custom query modules must be typed correctly.
- **`utils/`**: Houses utility formatters and conversion helpers.

### 2. Next.js 16 Route Parameters
In Next.js 16, page route parameters are asynchronous. When accessing parameters in page or metadata functions:
- Always define parameters as a promise: `params: Promise<{ id: string }>`
- Always await parameters before using them: `const { id } = await params`

### 3. Localization & Formatting
- **Font**: Use the primary Bengali font `--font-noto-serif-bengali` (configured in `globals.css`) for all Bengali text content.
- **Time/Date**: For displaying publication timestamps, import and use `formatPublishedDateTime` from `@/utils/timeConvertBangla`. This utility ensures uniform representation (`bn-BD` locale, `Asia/Dhaka` time zone).

### 4. Styling Conventions (Tailwind v4)
Theme configurations are managed in `app/globals.css` using the `@theme inline` directive.
- Always use utility classes corresponding to theme colors rather than writing raw color codes:
  - `--color-darkblue` $\rightarrow$ `bg-darkblue`, `text-darkblue`
  - `--color-hoverColor` $\rightarrow$ `text-hoverColor`
  - `--color-border` $\rightarrow$ `border-border`
- Hover state interactions should be responsive and use smooth transitions (e.g. `transition-transform duration-300 group-hover:scale-105`).

### 5. SEO & Metadata
Every route page should provide appropriate metadata:
- Static pages should declare metadata configurations.
- Dynamic route pages must define `generateMetadata` fetching the underlying article to set up detailed OpenGraph headers and Twitter Card titles, descriptions, and images.

### 6. External APIs
- Use `https://news-json.vercel.app` as the base API path.
- `lib/getNewsList.ts` retrieves the list of news.
- `lib/getNewsDetails.ts` retrieves individual article content.
