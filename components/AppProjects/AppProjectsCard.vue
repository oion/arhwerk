<template>
  <div class="flex flex-col wrap gap-4">
    <picture class="overflow-hidden">
      <NuxtImg
        :src="project.image.src"
        alt="Project 1"
        width="400"
        height="600"
        class="hover:scale-110 transition duration-700"
      />
    </picture>
    <div class="flex flex-col gap-3">
      <h3 class="text-base font-bold text-slate-700">
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
