import { createClient } from "contentful";
import type { TypeProjectSkeleton } from "~/types/contentful";

export default defineEventHandler(async (event) => {
  const { siteUrl, contentful } = useRuntimeConfig(event).public;

  const client = createClient({
    space: contentful.spaceId,
    accessToken: contentful.accessToken,
    environment: contentful.environment,
  });

  const { items } = await client.getEntries<TypeProjectSkeleton>({
    content_type: "project",
    select: ["fields.slug", "sys.updatedAt"],
    limit: 1000,
  });

  const urls = [
    { loc: `${siteUrl}/`, lastmod: undefined as string | undefined },
    ...items
      .filter((item) => item.fields.slug)
      .map((item) => ({
        loc: `${siteUrl}/project/${item.fields.slug}`,
        lastmod: item.sys.updatedAt,
      })),
  ];

  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) =>
      `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`
  )
  .join("\n")}
</urlset>
`;
});
