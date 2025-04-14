import { createClient } from "contentful";

let client = null;

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  console.log("Initializing Contentful client...");
  console.log("Contentful space ID:", config.public.app.contentful.spaceId);
  console.log(
    "Contentful access token:",
    config.public.app.contentful.accessToken
  );
  console.log(
    "Contentful environment:",
    config.public.app.contentful.environment
  );

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
