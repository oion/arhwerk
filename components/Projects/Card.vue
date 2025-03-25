<template>
  <NuxtLink :to="`/project/${project.slug}`" class="wrap flex flex-col gap-4">
    <div class="w-full overflow-hidden">
      <NuxtImg
        :src="project.image.src"
        :alt="project.title"
        fit="cover"
        format="webp"
        width="400"
        height="600"
        class="h-auto w-full object-cover transition duration-700 hover:scale-110"
      />
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-sm font-bold text-primary">
        {{ project.title }}
      </h3>

      <p class="flex flex-col gap-1 text-xs">
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
