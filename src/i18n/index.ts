export const languages = {
  en: 'English',
  'zh-TW': '繁體中文',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'nav.menu.open': 'MENU',
    'nav.menu.close': 'CLOSE',
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
    'home.title': 'Hello, World!',
    'home.welcome':
     `
     Welcome! I'm Shek, a software engineer turned solopreneur, sharing my journey of building products and navigating the business side of tech.
     <br/><br/>
    People aren't one-dimensional, and neither is this blog. You'll find technical deep-dives, business lessons, random thoughts, and whatever else I'm figuring out. Whether you're here for the code or the startup stories, glad you stopped by.
     `
  },
  'zh-TW': {
    'nav.home': '首頁',
    'nav.blog': '部落格',
    'nav.contact': '聯絡',
    'nav.language': '語言',
    'nav.menu.open': '選單',
    'nav.menu.close': '關閉',
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
    'home.title': 'Hello, World!',
    'home.welcome':
      '歡迎來到 Shek 的部落格。這裡記錄了我從軟體工程師轉型為獨立開發者的過程，分享我如何建立產品、解決複雜問題，以及在技術與商業之間的探索。',
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
