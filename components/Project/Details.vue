<script setup lang="ts">
import type { Project } from "~/types/projects";

interface Props {
  project: Project;
}

defineProps<Props>();
</script>

<template>
  <div class="flex w-full">
    <aside class="md:w-80 flex-shrink-0">
      <div class="flex flex-col gap-4 p-8">
        <h1 class="text-heading-lg">{{ project.title }}</h1>
        <p>{{ project.info }}</p>
      </div>
    </aside>

    <div class="flex-1">
      <ProjectGallery v-if="project.gallery" :images="project.gallery" />
    </div>
  </div>
</template>
