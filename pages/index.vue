<script setup lang="ts">
import { usePages } from "~/composables/usePages";

const { fetchPageBySlug } = usePages();

useHead({
  title: "Arhwerk",
});

const page = ref();

onMounted(async () => {
  page.value = await fetchPageBySlug("homepage");
});
</script>

<template>
  <main v-if="page">
    <ProjectsList id="proiecte" :projects="page.fields.projects" />

    <SectionAbout id="despre">{{ page.fields.about }}</SectionAbout>

    <SectionTeam id="echipa" :team="page.fields.team" />

    <SectionServices id="servicii" />

    <SectionContact id="contact" />
  </main>
</template>
