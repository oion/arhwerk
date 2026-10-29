<script setup lang="ts">
import type { TypeProject } from "~/types/contentful";

interface Props {
  project: TypeProject;
}

const props = defineProps<Props>();

// Contentful types linked entries as possibly undefined
const collaborators = computed(
  () => props.project.fields.collaborators?.filter((c) => c !== undefined) ?? []
);
const gallery = computed(
  () => props.project.fields.gallery?.filter((a) => a !== undefined) ?? []
);
</script>

<template>
  <aside class="shrink-0 md:w-80">
    <div class="space-y-4 pr-8">
      <h1 class="text-4xl font-bold">{{ project.fields.title }}</h1>

      <p v-if="project.fields.location">
        {{ project.fields.location }}
      </p>
      <p v-if="project.fields.function">
        <strong>Funcțiune</strong><br />

        <template
          v-for="projectFunction in project.fields.function"
          :key="projectFunction"
        >
          {{ projectFunction }}<br />
        </template>
      </p>
      <p v-if="project.fields.year">
        <strong>An</strong><br />
        {{ project.fields.year }}
      </p>

      <div v-if="project.fields.description">
        {{ project.fields.description }}
      </div>

      <div v-if="collaborators.length">
        <strong>Colaboratori</strong>
        <ul>
          <li
            v-for="collaborator in collaborators"
            :key="collaborator.sys.id"
          >
            {{ collaborator.fields.name }}
          </li>
        </ul>
      </div>
    </div>
  </aside>

  <div class="flex-1">
    <ProjectGallery v-if="gallery.length" :images="gallery" />
  </div>
</template>

<style></style>
