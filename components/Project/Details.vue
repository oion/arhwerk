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

      <MDC
        v-if="project.description"
        :value="project.description"
        tag="article"
        class="description"
      />

      <div v-if="project.meta?.colaborators">
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

<style>
.markdown-content h1 {
  @apply text-4xl font-bold mb-6 text-gray-900;
}

.markdown-content h2 {
  @apply text-3xl font-bold mb-5 text-gray-900;
}

.markdown-content h3 {
  @apply text-2xl font-bold mb-4 text-gray-900;
}

.markdown-content p {
  @apply mb-4 text-gray-700 leading-relaxed;
}

.markdown-content ul {
  @apply mb-4 list-disc list-inside;
}

.markdown-content ol {
  @apply mb-4 list-decimal list-inside;
}

.markdown-content li {
  @apply mb-2;
}

.markdown-content a {
  @apply text-blue-600 hover:text-blue-800 hover:underline;
}

.markdown-content blockquote {
  @apply pl-4 border-l-4 border-gray-200 italic my-4 text-gray-600;
}

.markdown-content code {
  @apply bg-gray-100 rounded px-1 py-0.5 font-mono text-sm;
}

.markdown-content pre {
  @apply bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto;
}

.markdown-content pre code {
  @apply bg-transparent p-0;
}

.markdown-content img {
  @apply max-w-full h-auto my-4;
}

.markdown-content table {
  @apply w-full border-collapse mb-4;
}

.markdown-content th {
  @apply bg-gray-50 border border-gray-200 px-4 py-2 text-left;
}

.markdown-content td {
  @apply border border-gray-200 px-4 py-2;
}

/* Optional: Style inline code differently from code blocks */
.markdown-content p code {
  @apply bg-gray-100 text-red-600 rounded px-1 py-0.5 font-mono text-sm;
}

/* Optional: Add styling for horizontal rules */
.markdown-content hr {
  @apply my-8 border-t border-gray-200;
}
</style>
