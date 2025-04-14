<script setup lang="ts">
import type { TypeProject } from "~/types/contentful";

const slug = useRoute().params.slug as string;

const project = ref<TypeProject | null>(null);

//get project from contentful
const { fetchProjectBySlug } = useProjects();

onMounted(async () => {
  project.value = await fetchProjectBySlug(slug);
  if (!project.value) {
    console.error(`Project with slug "${slug}" not found.`);
  }
});

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
