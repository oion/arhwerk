<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Proiecte</h2>

      <nav>
        <ul>
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

    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectsCard
          v-for="project in filteredProjects"
          :key="project.title"
          :project
        />
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts">
import type { Project } from "~/types/projects";

const projects = [
  {
    id: "a7c91b3e-f2d4-4e8b-9f5a-8d3c6b2e1d4a",
    title: "Casa Pădurii",
    info: "Brașov, Jud. Brașov, 2023-2024",
    type: "Rezidential",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
  {
    id: "b8d92c4f-e3a5-5f9c-0e6b-9e4d7c3f2e5b",
    title: "Centrul Cultural Civic",
    info: "Sibiu, Jud. Sibiu, 2022-2024",
    type: "Restaurare",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
  {
    id: "c9e03d5g-f4b6-6g0d-1f7c-0f5e8d4g3f6c",
    title: "Ansamblul Rezidențial Verde",
    info: "Cluj-Napoca, Jud. Cluj, 2023-2025",
    type: "Rezidential",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
  {
    id: "d0f14e6h-g5c7-7h1e-2g8d-1g6f9e5h4g7d",
    title: "Birouri Panorama",
    info: "București, Sector 1, 2024-2026",
    type: "Design Interior",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
  {
    id: "e1g25f7i-h6d8-8i2f-3h9e-2h7g0f6i5h8e",
    title: "Hotel Montana",
    info: "Poiana Brașov, Jud. Brașov, 2023-2025",
    type: "Design Interior",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
  {
    id: "f2h36g8j-i7e9-9j3g-4i0f-3i8h1g7j6i9f",
    title: "Casa Istorică",
    info: "Târgu Mureș, Jud. Mureș, 2024",
    type: "Restaurare",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
  {
    id: "g3i47h9k-j8f0-0k4h-5j1g-4j9i2h8k7j0g",
    title: "Vila Mediteraneană",
    info: "Constanța, Jud. Constanța, 2023-2024",
    type: "Rezidential",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
  {
    id: "h4j58i0l-k9g1-1l5i-6k2h-5k0j3i9l8k1h",
    title: "Conac Interbelic",
    info: "Timișoara, Jud. Timiș, 2024-2025",
    type: "Restaurare",
    image: {
      src: "/images/samples/sample-landscape.webp",
    },
  },
];

const selectedType = ref<string>("Toate");

const types = computed(() => {
  return projects.reduce((acc, project) => {
    if (!acc.includes(project.type)) {
      acc.push(project.type);
    }
    return acc;
  }, [] as string[]);
});

const allTypes = computed(() => {
  return ["Toate", ...types.value];
});

const filteredProjects = computed<Project[]>(() => {
  if (selectedType.value === "Toate") return projects;

  return projects.filter((project) => {
    return project.type === selectedType.value;
  });
});

const isSelected = (type: string) => {
  return type === selectedType.value;
};
</script>
