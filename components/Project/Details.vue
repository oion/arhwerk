<script setup lang="ts">
import type { Project } from "~/types/projects";

interface Props {
  project: Project;
}

defineProps<Props>();
</script>

<template>
  <aside class="md:w-80 flex-shrink-0">
    <div class="space-y-4">
      <h1 class="text-heading-lg">{{ project.title }}</h1>

      <p v-if="project.meta?.location">
        {{ project.meta.location }}
      </p>
      <p v-if="project.meta?.function">
        <strong>Funcțiune</strong><br />
        {{ project.meta.function }}
      </p>
      <p v-if="project.meta?.year">
        <strong>An</strong><br />
        {{ project.meta.year }}
      </p>
      <p>{{ project.description }}</p>
    </div>
  </aside>

  <div class="flex-1">
    <ProjectGallery v-if="project.gallery" :images="project.gallery" />
  </div>
</template>
