# Modern Multilingual Blog

A modern, fast, and feature-rich blog built with **Astro**, **TypeScript**, **React**, and **Tailwind CSS**.

## ✨ Features

### Core Features

- 🚀 **Astro** - Ultra-fast static site generation with island architecture
- 🎯 **TypeScript** - Full type safety throughout the application
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- ⚛️ **React** - Interactive components where needed
- 📝 **MDX** - Enhanced Markdown with React components

### Blog Features

- 🌍 **Multilingual Support** - English and Chinese (Traditional)
- 📧 **Newsletter Subscription** - Email collection with API endpoint
- 🏷️ **Category System** - Organized content by topic
- 🔖 **Tagging System** - Flexible content labeling
- 👤 **Author Support** - Multi-author blog capability
- 📅 **Publication Dates** - Created and updated timestamps
- 🖼️ **Hero Images** - Featured images for posts
- ⏱️ **Reading Time** - Estimated reading duration
- 🌟 **Featured Posts** - Highlight important content
- 📝 **Draft System** - Work-in-progress post management

### Categories Available

- **Technology** - Latest tech trends and insights
- **Programming** - Code tutorials and best practices
- **Design** - UI/UX and creative processes
- **Personal** - Life experiences and reflections
- **Tutorial** - Step-by-step guides

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository** (if from git)

   ```bash
   git clone <your-repo-url>
   cd blog
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── NewsletterSignup.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── content/         # Blog content
│   │   ├── blog/        # Blog posts (MDX)
│   │   └── newsletter/  # Newsletter subscribers
│   ├── i18n/           # Internationalization
│   │   └── index.ts     # Language translations
│   ├── layouts/        # Page layouts (Astro)
│   ├── lib/            # Utility functions
│   │   └── utils.ts     # Helper functions
│   ├── pages/          # Routes (Astro)
│   │   └── api/        # API endpoints
│   │       └── newsletter.ts
│   └── styles/         # Global styles
│       └── global.css   # Tailwind + custom CSS
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 📝 Writing Blog Posts

Create new blog posts in `src/content/blog/` with the following frontmatter:

```yaml
---
title: 'Your Post Title'
description: 'Brief description of your post'
pubDate: 2024-01-15
updatedDate: 2024-01-15
heroImage: '/path-to-image.jpg'
category: 'programming' # technology, programming, design, personal, tutorial
tags: ['tag1', 'tag2', 'tag3']
author: 'Your Name'
language: 'en' # en, zh-TW
draft: false # true to hide from production
featured: false # true to highlight the post
---
Your content here...
```

## 🌍 Internationalization

### Adding New Languages

1. Add the language to `astro.config.mjs`:

   ```js
   i18n: {
     locales: ['en', 'zh-TW', 'de'], // Add 'de' for German
     // ...
   }
   ```

2. Add translations to `src/i18n/index.ts`:

   ```ts
   export const languages = {
     en: 'English',
     'zh-TW': '繁體中文',
     de: 'Deutsch', // Add German
   };
   ```

3. Add translation strings for the new language in the `ui` object.

### URL Structure

- English (default): `/` `/blog/` `/about/`
- Chinese Traditional: `/zh-TW/` `/zh-TW/blog/` `/zh-TW/about/`

## 📧 Newsletter

The newsletter system includes:

- Email collection form
- Server-side API endpoint
- Basic validation and storage
- Language preference tracking

### API Endpoints

- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Get subscriber count

### Database Integration

Currently uses in-memory storage. For production, integrate with:

- Database (PostgreSQL, MongoDB, etc.)
- Email service (Mailchimp, ConvertKit, SendGrid)

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.mjs`:

```js
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Typography

Custom typography classes are available in `src/styles/global.css`:

- `.prose-custom` - Enhanced prose styling
- `.btn-primary`, `.btn-secondary` - Button styles
- `.category-*` - Category badge styles

## 📊 Performance

This blog is optimized for performance:

- Static generation with Astro
- Minimal JavaScript (only for interactive components)
- Optimized images and assets
- Fast loading times

## 🔧 Development Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

This blog can be deployed to various platforms:

- **Vercel** - Recommended for Node.js features
- **Netlify** - Great for static hosting
- **Cloudflare Pages** - Fast global CDN
- **GitHub Pages** - Free hosting for public repos

For server-side features (newsletter API), use platforms that support Node.js.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Astro, TypeScript, and modern web technologies.

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
