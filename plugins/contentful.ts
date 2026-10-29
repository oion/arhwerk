import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  // Unresolvable links (unpublished or deleted entries) are dropped instead of
  // reaching templates as bare link objects; types/contentful assumes this
  const client = createClient({
    space: config.public.contentful.spaceId,
    accessToken: config.public.contentful.accessToken,
    environment: config.public.contentful.environment,
  }).withoutUnresolvableLinks;

  return {
    provide: {
      contentful: client,
    },
  };
});
