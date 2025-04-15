<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Proiecte</h2>

      <nav>
        <ul class="mt-8 flex flex-col gap-4">
          <li
            v-for="type in allTypes"
            :key="type"
            class="group flex items-center"
            :class="[
              isSelected(type) ? 'font-bold text-primary' : 'text-primary/50',
              'transition hover:cursor-pointer hover:text-primary-dark',
            ]"
            @click="handleClick(type)"
          >
            <span
              class="w-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:w-10 group-hover:opacity-100"
            >
              <IconsGGBorderBottom
                v-if="type === 'Restaurare'"
                class="size-8 text-primary-dark"
                name="gg:border-bottom"
                title="Restaurare"
              />
              <IconsGGBorderAll
                v-if="type === 'Construcție nouă'"
                class="size-8 text-primary-dark"
                title="Construcție nouă"
              />
              <IconsGGBorderLeft
                v-if="type === 'Extindere'"
                class="size-8 text-primary-dark"
                name="gg:border-left"
                title="Extindere"
              />

              <IconsGGBorderTop
                v-if="type === 'Design interior'"
                class="size-8 text-primary-dark"
                name="gg:border-top"
                title="Design interior"
              />
            </span>
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
        :key="JSON.stringify(project.fields.slug)"
        v-motion-appear
        :project
        :index
      />
    </div>
  </SectionBase>
</template>
x

<script setup lang="ts">
import type { TypeProject } from "~/types/contentful";

const props = defineProps<{
  projects: TypeProject[];
}>();

const selectedType = ref<string | null>(null);

const allTypes = ref([
  "Construcție nouă",
  "Design interior",
  "Restaurare",
  "Extindere",
]);

const filteredProjects = computed(() => {
  if (!selectedType.value) return props.projects;

  return props.projects.filter((project) => {
    return (
      Array.isArray(project.fields?.type) &&
      selectedType.value &&
      project.fields.type.includes(selectedType.value)
    );
  });
});

const isSelected = (type: string) => {
  return type === selectedType.value;
};

const handleClick = (type: string) => {
  selectedType.value = type === selectedType.value ? null : type;
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
