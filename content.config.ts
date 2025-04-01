import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const TechnicalDataSchema = z.object({
  cd: z.string().optional(), // For "cd" field
  investment_value: z.string().optional(), // For investment value if present
});

const MetaSchema = z.object({
  id: z.string(),
  function: z.array(z.string()),
  year: z.string().optional(),
  location: z.string(),
  colaborators: z.array(z.string()),
  technical_data: TechnicalDataSchema,
});

const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  meta: MetaSchema,
  type: z.array(z.string()),
  stage: z.string(),
  description: z.string(),
  image: z.object({
    src: z.string(),
  }),
  gallery: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
    })
  ),
  hidden: z.boolean(),
});

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    projects: defineCollection({
      source: "projects/*.yml",
      type: "data",
      schema: ProjectSchema,
    }),
  },
});
