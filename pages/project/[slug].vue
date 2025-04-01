<script setup lang="ts">
import type { Project } from "~/types/projects";

const slug = useRoute().params.slug as string;

const { data: projectData } = await useFetch<{ data: Project[] }>(
  `/api/collections/projects/entries/?filter[slug:contains]=${slug}`,
  {
    server: false,
  }
);
const project = computed<Project>(() => projectData.value?.data[0] || []);

useSeoMeta({
  description: project.value?.title,
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
