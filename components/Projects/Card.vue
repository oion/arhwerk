<template>
  <div class="flex flex-col wrap gap-4">
    <picture class="overflow-hidden w-full">
      <NuxtImg
        :src="project.image.src"
        :alt="project.title"
        fit="cover"
        format="webp"
        width="400"
        height="600"
        class="w-full h-auto object-cover hover:scale-110 transition duration-700"
      />
    </picture>
    <div class="flex flex-col gap-3">
      <h3 class="text-base font-bold text-primary">
        {{ project.title }}
      </h3>
      <p class="text-xs">
        <span>{{ project.info }}</span
        ><br />
        <span>{{ project.type }} </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/projects";

defineProps<{
  project: Project;
}>();
</script>
