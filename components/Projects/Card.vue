<template>
  <NuxtLink :to="`/project/${project.slug}`" class="flex flex-col wrap gap-4">
    <div class="overflow-hidden w-full">
      <NuxtImg
        :src="project.image.src"
        :alt="project.title"
        fit="cover"
        format="webp"
        width="400"
        height="600"
        class="w-full h-auto object-cover hover:scale-110 transition duration-700"
      />
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-sm font-bold text-primary">
        {{ project.title }}
      </h3>

      <p class="text-xs flex flex-col gap-1">
        <span>{{ project.meta?.location }}</span>
        <span>{{ project.meta?.year }} ({{ project.status }})</span>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Project } from "~/types/projects";

defineProps<{
  project: Project;
  index: number;
}>();
</script>
