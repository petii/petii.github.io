import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const personas = defineCollection({ 
    loader: glob({base: './src/data/personas', pattern: '*.md'}),
    schema: z.object({
        persona: z.string()
    })
 });

export const collections = { personas };