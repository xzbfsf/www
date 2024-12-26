import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const opinion = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/opinion' }),
  schema: z.object({
    title: z.string(),
    date: z.string().transform(s => new Date(s)),
    description: z.string().optional(), // maybe useless ?
    author: z.string(),
  })
});

export const collections = { opinion };