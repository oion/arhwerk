<template>
  <NuxtLink
    :to="`/project/${project.slug}`"
    class="group/item flex flex-col gap-4"
  >
    <div
      class="relative aspect-square w-full overflow-hidden bg-primary-dark transition-all after:absolute after:-bottom-4 after:-right-4 after:block after:size-4 after:rounded-xl after:bg-black after:transition-all after:duration-500 after:content-[''] group-hover/item:after:scale-[10000%] group-hover/item:after:bg-black/90"
    >
      <NuxtImg
        v-if="project.image.src"
        :src="project.image.src"
        :alt="project.title"
        fit="cover"
        format="webp"
        width="400"
        height="400"
        class="h-auto w-full object-cover opacity-50 saturate-0 transition-all duration-700 group-hover/item:scale-110"
      />
      <div class="absolute inset-0 z-10 flex flex-col justify-end gap-4 p-4">
        <div class="absolute top-0 left-0">
          <Icon
            v-if="project.type?.includes('Construcție nouă')"
            class="size-8 text-white"
            name="gg:border-all"
            title="Construcție nouă"
          />
          <Icon
            v-if="project.type?.includes('Extindere')"
            class="size-8 text-white"
            name="gg:border-left"
            title="Extindere"
          />
          <Icon
            v-if="project.type?.includes('Restaurare')"
            class="size-8 text-white"
            name="gg:border-bottom"
            title="Restaurare"
          />
          <Icon
            v-if="project.type?.includes('Design interior')"
            class="size-8 text-white"
            name="gg:border-top"
            title="Design interior"
          />
        </div>

        <h3
          class="text-3xl font-black leading-[1.0em] text-white transition-all duration-500 group-hover/item:leading-[1.5em] group-hover/item:text-white"
          v-html="formatTitle"
        />
        <p
          class="flex h-0 flex-col overflow-hidden text-xs transition-all delay-200 duration-500 group-hover/item:h-8 group-hover/item:text-white"
        >
          <span>{{ project.meta?.location }}</span>
          <!-- <span>{{ project.meta?.year }} ({{ project.status }})</span> -->
        </p>
      </div>
    </div>

    <!-- <div class="flex flex-col gap-3">
      <h3 class="text-sm font-bold text-primary">
        {{ project.title }}
      </h3>

      <p class="flex flex-col gap-1 text-xs">
        <span>{{ project.meta?.location }}</span>
        <span>{{ project.meta?.year }} ({{ project.status }})</span>
      </p>
    </div> -->
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from "~/types/projects";

const { project } = defineProps<{
  project: Project;
  index: number;
}>();

const formatTitle = computed(() => project.title.replace(/(nr.)/g, "<br />#"));
</script>
