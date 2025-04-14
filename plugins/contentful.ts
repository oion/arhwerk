import { createClient } from "contentful";

let client = null;

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  console.log("Initializing Contentful client...");

  client = createClient({
    space: config.public.app.contentful.spaceId,
    accessToken: config.public.app.contentful.accessToken,
    environment: config.public.app.contentful.environment,
  });

  return {
    provide: {
      contentful: client,
    },
  };
});
