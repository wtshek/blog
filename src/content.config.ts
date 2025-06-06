import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      // Enhanced blog features
      category: z
        .enum(['technology', 'programming', 'design', 'personal', 'tutorial'])
        .default('programming'),
      tags: z.array(z.string()).default([]),
      author: z.string().default('Blog Author'),
      language: z.enum(['en', 'zh-TW']).default('en'),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      readingTime: z.number().optional(),
    }),
});

// Newsletter subscription collection
const newsletter = defineCollection({
  loader: glob({ base: './src/content/newsletter', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    email: z.string().email(),
    subscribedAt: z.coerce.date(),
    isActive: z.boolean().default(true),
    preferences: z
      .object({
        categories: z.array(z.string()).default([]),
        frequency: z.enum(['weekly', 'monthly']).default('monthly'),
      })
      .optional(),
  }),
});

export const collections = { blog, newsletter };
