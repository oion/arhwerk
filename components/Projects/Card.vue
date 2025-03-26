<template>
  <NuxtLink :to="`/project/${project.slug}`" class="flex flex-col gap-4">
    <div
      class="relative w-full overflow-hidden bg-white hover:bg-black transition-all aspect-square"
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
        class="p-4 leading-[1.0em] absolute inset-0 flex items-end break-word text-3xl font-black text-black transition-all hover:leading-[1.2em] hover:text-white duration-500"
      >
        . <br />
        {{ project.title }}
      </h3>
    </div>

    <div class="flex flex-col gap-3">
      <!-- <h3 class="text-sm font-bold text-primary">
        {{ project.title }}
      </h3> -->

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
