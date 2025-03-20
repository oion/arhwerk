<script setup lang="ts">
import type { Project } from "~/types/projects";
import projectsData from "~/content/projects";

const projects = ref<Project[]>(projectsData);

const slug = useRoute().params.slug as string;

const project = computed(() => {
  return projects.value.find((project) => project.slug === slug);
});
</script>

<template>
  <main>
    <section
      class="flex flex-col md:flex-row gap-4 px-4 py-32 scroll-m-32 max-w-screen-xl mx-auto"
    >
      <ProjectDetails v-if="project" :project />
    </section>

    <SectionContact id="contact" />
  </main>
</template>
