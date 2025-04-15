<script setup lang="ts">
import type { TypeProject } from "~/types/contentful";

interface Props {
  project: TypeProject;
}

defineProps<Props>();
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

      <div v-if="project.fields.collaborators?.length">
        <strong>Colaboratori</strong>
        <ul>
          <li
            v-for="collaborator in project.fields.collaborators"
            :key="collaborator.sys.id"
          >
            {{ collaborator.fields.name }}
          </li>
        </ul>
      </div>
    </div>
  </aside>

  <div class="flex-1">
    <ProjectGallery
      v-if="project.fields.gallery"
      :images="project.fields.gallery"
    />
  </div>
</template>

<style></style>
