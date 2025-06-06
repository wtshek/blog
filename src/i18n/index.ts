export const languages = {
  en: 'English',
  'zh-TW': '繁體中文',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'blog.categories': 'Categories',
    'blog.tags': 'Tags',
    'blog.readMore': 'Read More',
    'blog.readingTime': 'min read',
    'blog.publishedOn': 'Published on',
    'blog.updatedOn': 'Updated on',
    'blog.author': 'By',
    'newsletter.title': 'Subscribe to Newsletter',
    'newsletter.description': 'Get the latest articles delivered to your inbox',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.success': 'Successfully subscribed!',
    'newsletter.error': 'Something went wrong. Please try again.',
    'categories.technology': 'Technology',
    'categories.programming': 'Programming',
    'categories.design': 'Design',
    'categories.personal': 'Personal',
    'categories.tutorial': 'Tutorial',
    'footer.copyright': 'All rights reserved.',
    'home.title': 'Hello, Astronaut!',
    'home.welcome':
      'Welcome to the official Astro blog starter template. This template serves as a lightweight, minimally-styled starting point for anyone looking to build a personal website, blog, or portfolio with Astro.',
    'home.description':
      'This template comes with a few integrations already configured in your astro.config.mjs file. You can customize your setup with Astro Integrations to add tools like Tailwind, React, or Vue to your project.',
    'home.ideas':
      'Here are a few ideas on how to get started with the template:',
    'home.editPage': 'Edit this page in src/pages/index.astro',
    'home.editHeader':
      'Edit the site header items in src/components/Header.astro',
    'home.editFooter':
      'Add your name to the footer in src/components/Footer.astro',
    'home.checkPosts': 'Check out the included blog posts in src/content/blog/',
    'home.customizeLayout':
      'Customize the blog post page layout in src/layouts/BlogPost.astro',
    'home.haveFun':
      'Have fun! If you get stuck, remember to read the docs or join us on Discord to ask questions.',
    'home.morePersonality':
      'Looking for a blog template with a bit more personality? Check out astro-blog-template by Maxi Ferreira.',
    'about.title': 'About Me',
    'about.description': 'Learn more about me and my journey.',
  },
  'zh-TW': {
    'nav.home': '首頁',
    'nav.about': '關於',
    'nav.blog': '部落格',
    'nav.contact': '聯絡',
    'blog.categories': '分類',
    'blog.tags': '標籤',
    'blog.readMore': '繼續閱讀',
    'blog.readingTime': '分鐘閱讀',
    'blog.publishedOn': '發表於',
    'blog.updatedOn': '更新於',
    'blog.author': '作者',
    'newsletter.title': '訂閱電子報',
    'newsletter.description': '將最新文章直接送到您的信箱',
    'newsletter.placeholder': '輸入您的電子郵件',
    'newsletter.subscribe': '訂閱',
    'newsletter.success': '訂閱成功！',
    'newsletter.error': '發生錯誤，請重試。',
    'categories.technology': '科技',
    'categories.programming': '程式設計',
    'categories.design': '設計',
    'categories.personal': '個人',
    'categories.tutorial': '教學',
    'footer.copyright': '保留所有權利。',
    'home.title': '您好，太空人！',
    'home.welcome':
      '歡迎來到官方 Astro 部落格入門模板。此模板作為一個輕量級、極簡風格的起點，適合任何想要使用 Astro 建立個人網站、部落格或作品集的人。',
    'home.description':
      '此模板在您的 astro.config.mjs 文件中已預先配置了一些整合。您可以使用 Astro 整合來自訂您的設定，為您的專案添加 Tailwind、React 或 Vue 等工具。',
    'home.ideas': '以下是一些開始使用此模板的想法：',
    'home.editPage': '在 src/pages/index.astro 中編輯此頁面',
    'home.editHeader': '在 src/components/Header.astro 中編輯網站標題項目',
    'home.editFooter': '在 src/components/Footer.astro 中將您的名字添加到頁腳',
    'home.checkPosts': '查看 src/content/blog/ 中包含的部落格文章',
    'home.customizeLayout':
      '在 src/layouts/BlogPost.astro 中自訂部落格文章頁面佈局',
    'home.haveFun':
      '玩得開心！如果遇到困難，記得閱讀文檔或加入我們的 Discord 提問。',
    'home.morePersonality':
      '想要一個更有個性的部落格模板？查看 Maxi Ferreira 的 astro-blog-template。',
    'about.title': '關於我',
    'about.description': '了解更多關於我和我的旅程。',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
