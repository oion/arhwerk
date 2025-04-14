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

      <!-- <p v-if="project.meta?.technical_data?.sd">
        <strong>Sd</strong><br />
        {{ project.meta.technical_data.sd }}
      </p> -->

      <div v-if="project.fields.description">
        {{ project.fields.description }}
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
