<script setup lang="ts">
import type { ProjectImage } from "~/types/projects";

interface Props {
  images: ProjectImage[];
}

const { images } = defineProps<Props>();
</script>

<template>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20"
  >
    <div v-for="(image, index) in images" :key="index" class="overflow-hidden">
      <NuxtImg
        :src="image.src"
        :alt="image.alt"
        fit="cover"
        format="webp"
        width="400"
        height="600"
        class="w-full h-auto object-cover hover:scale-110 transition duration-700 hover:cursor-pointer"
      />
    </div>
  </div>
</template>
