<script setup lang="ts">
import type { Project } from "~/types/projects";

interface Props {
  project: Project;
}

defineProps<Props>();
</script>

<template>
  <aside class="shrink-0 md:w-80">
    <div class="space-y-4 pr-8">
      <h1 class="text-heading-lg">{{ project.title }}</h1>

      <p v-if="project.meta?.location">
        {{ project.meta.location }}
      </p>
      <p v-if="project.meta?.function">
        <strong>Funcțiune</strong><br />
        {{ project.meta.function }}
      </p>
      <p v-if="project.meta?.year">
        <strong>An</strong><br />
        {{ project.meta.year }}
      </p>

      <p v-if="project.meta?.technical_data?.sd">
        <strong>Sd</strong><br />
        {{ project.meta.technical_data.sd }}
      </p>

      <div v-if="project.description">
        {{ project.description }}
      </div>

      <div
        v-if="project.meta?.colaborators && project.meta.colaborators.length"
      >
        <strong>Colaboratori</strong>
        <ul>
          <li
            v-for="colaborator in project.meta.colaborators"
            :key="colaborator"
          >
            {{ colaborator }}
          </li>
        </ul>
      </div>
    </div>
  </aside>

  <div class="flex-1">
    <ProjectGallery v-if="project.gallery" :images="project.gallery" />
  </div>
</template>

<style></style>
