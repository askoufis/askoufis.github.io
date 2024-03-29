import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({ title: z.string(), description: z.string() }),
});
export const collections = {
  blog: blogCollection,
};
