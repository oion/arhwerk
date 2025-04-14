import { createClient } from "contentful";

let client = null;

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  client = createClient({
    space: config.app.contentful.spaceId,
    accessToken: config.app.contentful.accessToken,
    environment: config.app.contentful.environment,
  });

  return {
    provide: {
      contentful: client,
    },
  };
});
