# Language Switching Feature

This Astro blog now supports multi-language functionality with English and Chinese (Traditional).

## Features

- **Language Switcher UI**: A dropdown component in the header that allows users to switch between languages
- **Localized Routes**: Each language has its own URL structure:
  - English (default): `/`, `/about`, `/blog`
  - Chinese Traditional: `/zh-TW/`, `/zh-TW/about`, `/zh-TW/blog`
- **Translated Content**: All UI text is translated using the i18n system
- **Automatic Language Detection**: The system detects the current language from the URL

## Implementation Details

### Configuration

The i18n configuration is set up in `astro.config.mjs`:

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'zh-TW'],
  routing: {
    prefixDefaultLocale: false
  }
}
```

### Translation System

Translations are managed in `src/i18n/index.ts` with support for:

- Navigation items
- Page content
- Blog-related text
- Common UI elements

### Page Structure

Each language has its own page files:

- `src/pages/index.astro` (English)
- `src/pages/zh-TW/index.astro` (Chinese Traditional)

The same structure applies to all pages including blog posts.

## Usage

1. **Switching Languages**: Click the language switcher in the header and select your preferred language
2. **Direct Access**: Navigate directly to language-specific URLs (e.g., `/zh-TW/` for Chinese Traditional)
3. **Adding Translations**: Add new translation keys to the `ui` object in `src/i18n/index.ts`

## Adding New Languages

1. Add the language code to the `languages` object in `src/i18n/index.ts`
2. Add translations to the `ui` object
3. Update the `locales` array in `astro.config.mjs`
4. Create corresponding page files in `src/pages/[lang]/`

## Technical Notes

- The language switcher uses React hooks and requires the `@astrojs/react` integration
- Language detection is handled by the `getLangFromUrl` function
- The `useTranslations` function provides type-safe access to translations
- All pages automatically use the correct language based on their URL structure
