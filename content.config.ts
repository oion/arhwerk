import { defineContentConfig, defineCollection, z } from "@nuxt/content";

import { Project } from "./types/projects";

const TechnicalDataSchema = z.object({
  cd: z.string().optional(), // For "cd" field
  investment_value: z.string().optional(), // For investment value if present
});

const InfoSchema = z.object({
  id: z.string(),
  function: z.array(z.string()),
  year: z.string().optional(),
  location: z.string(),
  colaborators: z.array(z.string()),
  technical_data: TechnicalDataSchema,
});

const ProjectSchema = z.object(Project);

export const ServiceSchema = z.object({
  name: z.string(),
  items: z.array(z.string()),
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
    services: defineCollection({
      source: "services.json",
      type: "data",
      schema: z.object({
        services: z.array(ServiceSchema),
      }),
    }),
  },
});
