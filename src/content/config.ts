import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['beginner', 'survival', 'ships', 'multiplayer', 'settings', 'resources']),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Windrose Team'),
    readTime: z.string().optional(),
  }),
});

export const collections = { guides };
