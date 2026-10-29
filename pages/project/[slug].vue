<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { fetchProjectBySlug } = useProjects();

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  fetchProjectBySlug(slug)
);

const truncate = (text: string, max = 160) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, clean.lastIndexOf(" ", max - 1))}…`;
};

const title = computed(() =>
  project.value?.fields.title
    ? `${project.value.fields.title} | Arhwerk`
    : "Arhwerk"
);

// Falls back to a summary of the project's facts when it has no description
const description = computed(() => {
  const fields = project.value?.fields;
  if (!fields) return undefined;
  if (fields.description) return truncate(fields.description);

  const facts = [
    fields.function?.join(", "),
    fields.location,
    fields.year,
  ].filter(Boolean);
  return truncate(
    `${fields.title ?? "Proiect"}${facts.length ? ` — ${facts.join(", ")}` : ""}. Proiect de arhitectură Arhwerk.`
  );
});

// Contentful returns protocol-relative URLs; social crawlers need an absolute one
const image = computed(() => {
  const url = project.value?.fields.image?.fields.file?.url as
    | string
    | undefined;
  return url ? `https:${url}?w=1200&h=630&fit=fill&fm=jpg&q=80` : undefined;
});

const pageUrl = `${useRuntimeConfig().public.siteUrl}${route.path}`;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: pageUrl,
  ogType: "article",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: () => (image.value ? "summary_large_image" : "summary"),
});
</script>

<template>
  <main>
    <section
      class="mx-auto flex max-w-screen-xl scroll-m-32 flex-col gap-4 px-4 py-32 md:flex-row"
    >
      <ProjectDetails v-if="project" :project />
    </section>

    <SectionContact id="contact" />
  </main>
</template>
