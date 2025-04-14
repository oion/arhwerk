<script setup lang="ts">
import type { TypeProject } from "~/types/contentful";
import { useProjects } from "~/composables/useProjects";

const { fetchProjects } = useProjects();

useHead({
  title: "Arhwerk",
});

const projects = ref<TypeProject[]>([]);

onMounted(async () => {
  //load projects from contentful
  projects.value = await fetchProjects();
});
</script>

<template>
  <main>
    <!-- <SectionHero id="hero" /> -->

    <ProjectsList id="proiecte" :projects />

    <SectionAbout id="despre" />

    <SectionTeam id="echipa" />

    <SectionServices id="servicii" />

    <SectionContact id="contact" />
  </main>
</template>
