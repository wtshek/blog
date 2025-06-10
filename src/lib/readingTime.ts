/**
 * Calculate reading time for text content
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  // Remove HTML tags and normalize whitespace
  const cleanText = text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  // Count words (split by whitespace and filter empty strings)
  const wordCount = cleanText.split(/\s+/).filter(word => word.length > 0).length;
  
  // Calculate reading time in minutes, minimum 1 minute
  const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return readingTime;
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @param language - Language for localization
 * @returns Formatted reading time string
 */
export function formatReadingTime(minutes: number, language: 'en' | 'zh-TW' = 'en'): string {
  if (language === 'zh-TW') {
    return `${minutes} 分鐘閱讀`;
  }
  
  return `${minutes} min read`;
} 