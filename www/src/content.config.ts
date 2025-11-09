import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const personas = defineCollection({
  loader: glob({ base: "./src/data/personas", pattern: "*.md" }),
  schema: z.object({
    persona: z.string(),
    rank: z.optional(z.number()),
  }),
});

export const collections = { personas };
