export const usePages = () => {
  const { $contentful } = useNuxtApp();

  // fetch page by slug
  const fetchPageBySlug = async (slug: string): Promise<any | null> => {
    if (!slug) {
      console.error("Slug is required to fetch a page.");
      return null;
    }
    try {
      const response = await $contentful.getEntries({
        content_type: "page",
        "fields.slug": slug,
        limit: 1, // Limit to 1 since we only need one entry
      });

      const entry = response.items[0];
      if (!entry) {
        console.warn(`Page with slug "${slug}" not found.`);
        return null;
      }

      return entry;
    } catch (error) {
      console.error("Error fetching page by slug:", error);
      return null;
    }
  };

  return {
    fetchPageBySlug,
  };
};
