<script setup lang="ts">
const slug = useRoute().params.slug as string;

const { fetchProjectBySlug } = useProjects();

const { data: project } = await useAsyncData("project", () =>
  fetchProjectBySlug(slug)
);

useSeoMeta({
  description: "qweq",
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
