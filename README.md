# ঢাকা পোস্ট (Dhaka Post) - News Portal Task Client

A modern, highly performant, and fully responsive news portal client built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

The application fetches dynamic news articles from a JSON server API and presents them using modern UI/UX patterns, optimized skeleton screens, custom error boundaries, and localized Bengali typography.

## 🔗 Live Demo
The application is live and deployed on Netlify:
👉 **[Dhaka Post Live Site (https://dhaka-post-apon.netlify.app)](https://dhaka-post-apon.netlify.app)**

---

## 🚀 Key Features

- **Dynamic Routing & Full SEO Optimization**: Fully leverages the Next.js App Router. Details page metadata (OpenGraph & Twitter Card headers) is dynamically generated using `generateMetadata` in the dynamic route to improve search engine visibility and shareability.
- **Premium News Layouts**:
  - A grid-based homepage showcasing a main featured article, secondary sidebar lists, and dual bottom teaser columns.
  - Hover micro-animations like smooth scaling on image elements.
- **Localized Bengali Interface**:
  - Uses the Google Font `Noto Serif Bengali` as the primary font family for authentic typographic experience.
  - Features custom localized time and date converters using the `bn-BD` locale.
- **Client Actions**:
  - Built-in social sharing integration using the Web Share API (with automated clipboard copying fallback).
  - Print-friendly layout options directly from the article view.
- **Polished UX (Skeletons & Error Handling)**:
  - Custom skeleton screens matching homepage and details layouts for smooth loading transitions without layout shifts.
  - Custom error page boundary and 404 Page Not Found screen.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js](https://nextjs.org/) (v16.2.9)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & [React](https://react.dev/) (v19.2.4)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/postcss` for lightning-fast styling build times)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Hosting**: [Netlify](https://www.netlify.com/)

---

## 📁 Project Structure

Here is a breakdown of the key files and directory layout:

```text
├── app/
│   ├── [id]/
│   │   ├── loading.tsx     # Skeleton screen for the article details view
│   │   └── page.tsx        # Dynamic route for viewing article details & SEO configuration
│   ├── error.tsx           # Global/Route-level error fallback component
│   ├── favicon.ico         # Dhaka Post favicon
│   ├── globals.css         # Tailwind v4 configuration, theme variables & default Bengali font
│   ├── layout.tsx          # Root HTML layout importing Noto Serif Bengali, Navbar, & Footer
│   ├── loading.tsx         # Skeleton screen for the homepage news grid
│   ├── not-found.tsx       # Custom 404 Page Not Found layout
│   └── page.tsx            # Main news homepage featuring grid layouts & data fetching
├── components/
│   ├── ArticleActions.tsx  # Interactive article tools: native share, bookmark, print
│   ├── Footer.tsx          # Global footer component with links and copyright
│   └── Navbar.tsx          # Global header navigation containing navigation links & actions
├── lib/
│   ├── getNewsDetails.ts   # Fetch client for retrieving specific article details by ID
│   └── getNewsList.ts      # Fetch client for retrieving the list of home articles
├── utils/
│   └── timeConvertBangla.ts # Formatter mapping timestamps into Bangla locale representation
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Local Development Setup

To run the application locally, follow these steps:

### 1. Clone the repository
```bash
git clone <repository-url>
cd dhakapost-task
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🌐 Netlify Deployment Notes

The project is configured for continuous deployment on Netlify using the default Next.js build commands:
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Environment**: Node.js environment configured to support React 19 and Next.js 16.
