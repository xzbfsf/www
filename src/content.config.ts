import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const opinion = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/opinion' }),
  schema: z.object({
    title: z.string(),
    date: z.string().transform(s => new Date(s)),
    description: z.string().optional(), // maybe useless ?
    author: z.string(),
  })
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/team' }),
  schema: z.object({
    name: z.string(), // heavily suggested to be a pseudonym
    desc: z.string(),
    avatar: z.string().url().optional(),
    urls: z.object({
      social: z.string().url().optional(),
      website: z.string().url().optional(),
    })
  })
})

export const collections = { opinion, team };