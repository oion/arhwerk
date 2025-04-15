<template>
  <NuxtLink
    v-if="project"
    :to="`/project/${project.fields.slug}`"
    class="group/item flex flex-col gap-4"
  >
    <div
      class="relative aspect-square w-full overflow-hidden bg-primary-dark transition-all after:absolute after:-bottom-4 after:-right-4 after:block after:size-4 after:rounded-xl after:bg-black after:transition-all after:duration-500 after:content-[''] group-hover/item:after:scale-[10000%] group-hover/item:after:bg-black/90"
    >
      <NuxtImg
        v-if="image"
        :src="image"
        fit="contain"
        format="webp"
        alt=""
        width="400"
        height="400"
        provider="contentful"
        preload
        class="h-auto w-full object-cover opacity-50 saturate-0 transition-all duration-700 group-hover/item:scale-110"
      />

      <div class="absolute inset-0 z-10 flex flex-col justify-end gap-4 p-4">
        <div
          v-if="Array.isArray(props.project.fields.type)"
          class="absolute left-0 top-0"
        >
          <IconsGGBorderAll
            v-if="props.project.fields.type.includes('Construcție nouă')"
            class="size-8 text-white"
            title="Construcție nouă"
          />
          <IconsGGBorderLeft
            v-if="props.project.fields.type?.includes('Extindere')"
            class="size-8 text-white"
            name="gg:border-left"
            title="Extindere"
          />
          <IconsGGBorderBottom
            v-if="props.project.fields.type?.includes('Restaurare')"
            class="size-8 text-white"
            name="gg:border-bottom"
            title="Restaurare"
          />
          <IconsGGBorderTop
            v-if="props.project.fields.type?.includes('Design interior')"
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
          <!-- <span>{{ project.meta?.year }} ({{ project.status }})</span> -->
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TypeProject } from "~/types/contentful";

const props = defineProps<{
  project: TypeProject;
  index: number;
}>();

const formatTitle = computed(() => {
  const title = props.project.fields.title;
  return typeof title === "string" ? title.replace(/(nr.)/g, "<br />#") : "";
});

const image = computed(() => {
  if (!props.project.fields.image) return null;
  return props.project.fields.image?.fields.file?.url;
});
</script>
