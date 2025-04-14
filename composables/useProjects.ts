import type { IProject } from "~/types/contentful";

export const useProjects = () => {
  const { $contentful } = useNuxtApp();

  const fetchProjects = async (): Promise<IProject[]> => {
    try {
      const response = await $contentful.getEntries<IProject>({
        content_type: "project",
        order: ["fields.title"],
      });
      return response.items || [];
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  };

  const fetchProjectBySlug = async (slug: string): Promise<IProject | null> => {
    if (!slug) {
      console.error("Slug is required to fetch a project.");
      return null;
    }

    try {
      const response = await $contentful.getEntries<IProject>({
        content_type: "project",
        "fields.slug": slug,
        limit: 1, // Limit to 1 since we only need one entry
      });

      const entry = response.items[0];
      if (!entry) {
        console.warn(`Project with slug "${slug}" not found.`);
        return null;
      }

      return entry;
    } catch (error) {
      console.error("Error fetching project by slug:", error);
      return null;
    }
  };

  return {
    fetchProjects,
    fetchProjectBySlug,
  };
};
