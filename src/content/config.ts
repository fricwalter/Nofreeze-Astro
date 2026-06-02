import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    excerpt: z.string(),
    cover: z.string().optional(),
    related: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };
