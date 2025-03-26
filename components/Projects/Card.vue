<template>
  <NuxtLink :to="`/project/${project.slug}`" class="flex flex-col gap-4">
    <div
      class="group relative aspect-square w-full overflow-hidden bg-white transition-all after:absolute after:-right-4 after:-bottom-4 after:block after:size-4 after:rounded-xl after:bg-black after:transition-all after:duration-500 after:content-[''] hover:after:scale-[5000%] hover:after:bg-black"
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
        class="p-4 absolute flex flex-col justify-end inset-0 z-10 items-endp-4 text-3xl font-black leading-[1.0em] text-black transition-all duration-500 group-hover:leading-[1.2em] group-hover:text-white delay-200"
        v-html="formatTitle"
      />
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

const { project } = defineProps<{
  project: Project;
  index: number;
}>();

// add <br /> before string nr.
const formatTitle = computed(() => project.title.replace(/(nr.)/g, "<br />#"));
</script>
