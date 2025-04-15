<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Servicii</h2>
    </template>

    <div class="flex flex-col gap-4 lg:flex-row">
      <div
        class="flex flex-col font-light lg:flex-row lg:justify-between lg:gap-40"
      >
        <div v-if="firstColumnServices.length" v-motion-appear class="max-w-sm">
          <div
            v-for="service in firstColumnServices"
            :key="JSON.stringify(service.fields.title)"
          >
            <h3 class="my-4 text-sm font-bold">{{ service.fields.title }}</h3>
            <div
              class="text-sm"
              v-html="md.render(service.fields.description)"
            />
          </div>
        </div>

        <div v-motion-appear :delay="200" class="max-w-sm">
          <div
            v-for="service in secondColumnServices"
            :key="JSON.stringify(service.fields.title)"
          >
            <h3 class="my-4 text-sm font-bold">{{ service.fields.title }}</h3>
            <div
              class="text-sm"
              v-html="md.render(service.fields.description)"
            />
          </div>
        </div>
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts">
import markdownit from "markdown-it";
import type { TypeServices } from "~/types/contentful";

const md = new markdownit({
  html: true,
  breaks: true,
  linkify: true,
});

const { services } = defineProps<{
  services: TypeServices[];
}>();

const firstColumnServices = services.slice(0, services.length / 2);
const secondColumnServices = services.slice(services.length / 2);
</script>
