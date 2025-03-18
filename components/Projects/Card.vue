<template>
  <NuxtLink
    :to="`/project/${project.id}`"
    class="flex flex-col wrap gap-4"
    @click.prevent.stop
  >
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
  </NuxtLink>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Project } from "~/types/projects";

defineProps<{
  project: Project;
}>();

const showModal = computed(() => true);
</script>
