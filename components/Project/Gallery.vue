<script setup lang="ts">
import type { ProjectImage } from "~/types/projects";

interface Props {
  images: ProjectImage[];
}

const { images } = defineProps<Props>();
const selectedImage = ref<ProjectImage | null>(null);
const isModalOpen = ref(false);

const openModal = (image: ProjectImage) => {
  selectedImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedImage.value = null;
};
</script>

<template>
  <div>
    <div
      class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          fit="cover"
          format="webp"
          width="400"
          height="600"
          class="h-auto w-full object-cover transition duration-700 hover:scale-110 hover:cursor-pointer"
          @click="openModal(image)"
        />
      </div>
    </div>
    <AppModal :is-open="isModalOpen" @close="closeModal">
      <NuxtImg
        v-if="selectedImage"
        :src="selectedImage.src"
        :alt="selectedImage.alt"
        width="1600"
        height="1200"
        format="webp"
        class="max-h-[90vh] max-w-[90vw] object-contain"
      />
    </AppModal>
  </div>
</template>
