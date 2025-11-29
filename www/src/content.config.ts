import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const personas = defineCollection({
  loader: glob({ base: "./src/data/personas", pattern: "*.md" }),
  schema: z.object({
    persona: z.string(),
    rank: z.optional(z.number()),
    profilePicUrl: z.optional(z.string()),
  }),
});

export const collections = { personas };
