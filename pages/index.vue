<script setup lang="ts">
import type { TypePage } from "~/types/contentful";
import { usePages } from "~/composables/usePages";

const { fetchPageBySlug } = usePages();

useHead({
  title: "Arhwerk",
});

const page = ref<TypePage | null>(null);

onMounted(async () => {
  page.value = await fetchPageBySlug("homepage");
});
</script>

<template>
  <main v-if="page">
    <ProjectsList
      v-if="page.fields.projects?.length"
      id="proiecte"
      :projects="
        Array.isArray(page.fields.projects) ? page.fields.projects : []
      "
    />

    <SectionAbout id="despre">{{ page.fields.about }}</SectionAbout>

    <SectionTeam
      id="echipa"
      :team="Array.isArray(page.fields.team) ? page.fields.team : []"
    />

    <SectionServices
      id="servicii"
      :services="
        Array.isArray(page.fields.services) ? page.fields.services : []
      "
    />

    <SectionContact id="contact" />
  </main>
</template>
