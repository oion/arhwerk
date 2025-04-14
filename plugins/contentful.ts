import { createClient } from "contentful";

let client = null;

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  console.log("Initializing Contentful client...");

  client = createClient({
    space: config.public.contentful.spaceId,
    accessToken: config.public.contentful.accessToken,
    environment: config.public.contentful.environment,
  });

  return {
    provide: {
      contentful: client,
    },
  };
});
