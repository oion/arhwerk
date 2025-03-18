<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Proiecte</h2>

      <nav>
        <ul class="flex flex-col gap-4 mt-8">
          <li
            v-for="type in allTypes"
            :class="[
              isSelected(type) ? 'text-primary' : 'text-primary-light',
              'hover:text-primary-dark hover:cursor-pointer transition',
            ]"
            @click="selectedType = type"
          >
            {{ type }}
          </li>
        </ul>
      </nav>
    </template>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ProjectsCard
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        :project
        v-motion-appear
        :delay="100 * index"
      />
    </div>
  </SectionBase>
</template>

<script setup lang="ts">
import type { Project } from "~/types/projects";

import projectsData from "~/content/projects";

const projects: Project[] = projectsData;

const selectedType = ref<string>("Toate");

const types = computed(() => {
  return projects.reduce((acc, project) => {
    if (project.type && !acc.includes(project.type)) {
      acc.push(project.type);
    }
    return acc;
  }, [] as string[]);
});

const allTypes = computed(() => {
  return ["Toate", ...types.value];
});

const filteredProjects: ComputedRef<Project[]> = computed(() => {
  if (selectedType.value === "Toate") return projects;

  return projects.filter((project) => {
    return project.type === selectedType.value;
  });
});

const isSelected = (type: string) => {
  return type === selectedType.value;
};
</script>
