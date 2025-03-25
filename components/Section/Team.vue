<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-lg font-bold">Echipa</h2>
    </template>

    <div class="flex flex-col gap-4 lg:flex-row">
      <div class="grid gap-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(member, index) in team"
          :key="member.id"
          v-motion-appear
          :delay="100 * index"
          class="flex flex-col gap-2"
        >
          <NuxtImg
            :key="member.id"
            :src="member.image"
            :alt="member.name"
            fit="contain"
            format="webp"
            width="400"
            height="400"
            class="h-auto w-full object-cover grayscale transition duration-700 hover:filter-none"
          />
          <h3 class="font-bold">{{ member.name }}</h3>

          <p class="text-xs font-light">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts">
interface TeamMember {
  id: string;
  name: string;
  image: string;
  role: string;
}

const team = [
  {
    id: "1",
    name: "Arh. Horațiu Vasilescu",
    image: "/images/team/horatiu-1.jpg",
    video: "/",
    role: "Arhitect",
  },
  {
    id: "2",
    name: "Arh. Silvia Creoșteanu",
    image: "/images/team/silvia-1.jpg",
    role: "Arhitect",
  },
  {
    id: "3",
    name: "Arh. Mara Catargiu",
    image: "/images/team/mara-1.jpg",
    role: "Arhitect",
  },
  {
    id: "8",
    name: "Otto",
    image: "/images/team/otto-1.jpg",
    role: "Caine mare",
  },
  {
    id: "4",
    name: "Arh. Raluca Olaru",
    image: "/images/team/raluca-1.jpg",
    role: "Arhitect",
  },
  {
    id: "5",
    name: "Arh. Ana Mărgăritescu",
    image: "/images/team/ana-1.jpg",
    role: "Arhitect",
  },
  {
    id: "6",
    name: "Arh. Victor Gogiu",
    image: "/images/team/victor-1.jpg",
    role: "Intern",
  },
  {
    id: "7",
    name: "Freddy",
    image: "/images/team/freddy-1.jpg",
    role: "Caine mediu",
  },
] as const as TeamMember[];
</script>
