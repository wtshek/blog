interface ContentNode {
  type: string;
  content?: ContentNode[];
  text?: string;
  marks?: { type: string }[];
}

interface ArticleContent {
  type: string;
  content: ContentNode[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: ArticleContent;
  metadata: Record<string, any>;
  published_at: string;
  created_at: string;
  updated_at: string;
}

interface ArticlesResponse {
  articles: Article[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    limit: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

const API_BASE_URL = 'https://content-management-system-green.vercel.app/api';

export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
    }
    
    const data: ArticlesResponse = await response.json();
    
    if (data && Array.isArray(data.articles)) {
      return data.articles;
    } else {
      console.warn('API response does not contain articles array:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function fetchArticleById(id: string): Promise<Article | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch article: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Handle both single article and nested response
    if (data.article) {
      return data.article;
    } else if (data.id) {
      return data;
    } else {
      console.warn('Unexpected article response format:', data);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching article with id ${id}:`, error);
    return null;
  }
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const articles = await fetchArticles();
    return articles.find(article => article.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    return null;
  }
}

// Helper function to convert structured content to HTML
export function convertContentToHtml(content: ArticleContent): string {
  function processNode(node: ContentNode): string {
    if (node.type === 'paragraph') {
      const textContent = node.content?.map(processNode).join('') || '';
      return textContent ? `<p>${textContent}</p>` : '';
    }
    
    if (node.type === 'text') {
      let text = node.text || '';
      
      if (node.marks) {
        for (const mark of node.marks) {
          if (mark.type === 'bold') {
            text = `<strong>${text}</strong>`;
          }
          // Add more mark types as needed
        }
      }
      
      return text;
    }
    
    return '';
  }
  
  return content.content?.map(processNode).join('') || '';
}

// Helper function to extract excerpt from structured content
export function extractExcerpt(content: ArticleContent, maxLength: number = 160): string {
  function extractText(node: ContentNode): string {
    if (node.type === 'text') {
      return node.text || '';
    }
    
    if (node.content) {
      return node.content.map(extractText).join('');
    }
    
    return '';
  }
  
  const fullText = content.content?.map(extractText).join(' ') || '';
  
  if (fullText.length <= maxLength) {
    return fullText;
  }
  
  return fullText.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}