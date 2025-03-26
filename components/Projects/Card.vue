<template>
  <NuxtLink :to="`/project/${project.slug}`" class="flex flex-col gap-4">
    <div
      class="relative w-full overflow-hidden bg-primary-dark hover:bg-black transition-all min-h-60"
    >
      <!-- <NuxtImg
        v-if="project.image"
        :src="project.image.src"
        :alt="project.title"
        fit="cover"
        format="webp"
        width="400"
        height="400"
        class="h-auto w-full object-cover transition duration-700 hover:scale-110 invert mix-blend-luminosity"
      /> -->
      <h3
        class="p-4 leading-[0.75em] absolute inset-0 flex items-end break-all text-5xl font-black text-white transition-all hover:leading-[1em]"
      >
        / {{ project.title }}
      </h3>
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
