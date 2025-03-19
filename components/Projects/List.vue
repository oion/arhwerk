<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Proiecte</h2>

      <nav>
        <ul class="flex flex-col gap-4 mt-8">
          <li
            v-for="type in allTypes"
            :key="type"
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

    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20"
    >
      <ProjectsCard
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        v-motion-appear
        :delay="100 * index"
        :project
      />
    </div>
  </SectionBase>
</template>

<script setup lang="ts">
import type { Project, ProjectType } from "~/types/projects";

import projectsData from "~/content/projects";

const projects: Project[] = projectsData;

const selectedType = ref<ProjectType | "Toate">("Toate");

const types = computed(() => {
  return projects.reduce((acc, project) => {
    if (project.type) {
      project.type.forEach((type) => {
        acc.add(type);
      });
    }
    return acc;
  }, new Set<ProjectType>());
});

const allTypes = computed(() => {
  return ["Toate", ...types.value];
});

const filteredProjects = computed(() => {
  if (selectedType.value === "Toate") return projects;

  return projects.filter((project) => {
    return project.type?.includes(selectedType.value);
  });
});

const isSelected = (type: string) => {
  return type === selectedType.value;
};

watch(
  selectedType,
  () => {
    const el = document.getElementById("proiecte");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
  { immediate: false }
);
</script>
