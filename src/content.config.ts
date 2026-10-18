import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(180),
      category: z.string(),
      stack: z.array(z.string()).min(1),
      highlights: z.array(z.string()).max(4),
      order: z.number().int(),
      featured: z.boolean().default(false),
      year: z.number().int(),
      status: z.enum(['Em produção', 'Concluído', 'Em desenvolvimento']),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      links: z
        .object({
          live: z.url().optional(),
          repo: z.url().optional(),
        })
        .default({}),
    }),
});

export const collections = { projetos };
