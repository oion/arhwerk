<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Proiecte</h2>

      <nav>
        <ul class="mt-8 flex flex-col gap-4">
          <li
            v-for="type in allTypes"
            :key="type"
            :class="[
              isSelected(type)
                ? 'font-bold text-primary'
                : 'text-primary-light',
              'transition hover:cursor-pointer hover:text-primary-dark',
            ]"
            @click="selectedType = type"
          >
            {{ type }}
          </li>
        </ul>
      </nav>
    </template>

    <div
      class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-10"
    >
      <ProjectsCard
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        v-motion-appear
        :project
        :index
      />
    </div>
  </SectionBase>
</template>
x

<script setup lang="ts">
import type { Project, ProjectType } from "~/types/projects";

import projectsData from "~/content/projects";

const selectedType = ref<ProjectType>("Toate");

const _computedTypes = computed(() => {
  return projects.value.reduce((acc, project) => {
    if (project.type) {
      project.type.forEach((type) => {
        acc.add(type);
      });
    }
    return acc;
  }, new Set<ProjectType>());
});

const projects = computed<Project[]>(() =>
  projectsData.filter((project) => project.hidden !== true)
);

const allTypes = ref<ProjectType[]>([
  "Toate",
  "Restaurare",
  "Design interior",
  "Construcție nouă",
  "Extindere",
]);

const filteredProjects = computed(() => {
  if (selectedType.value === "Toate") return projects.value;

  return projects.value.filter((project) => {
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
