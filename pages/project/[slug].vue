<script setup lang="ts">
import type { Project } from "~/types/projects";
import projectsData from "~/content/projects";

const projects = ref<Project[]>(projectsData);

const slug = useRoute().params.slug as string;

const project = computed(() => {
  return projects.value.find((project) => project.slug === slug);
});

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
