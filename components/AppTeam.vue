<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-lg font-bold">Echipa</h2>
    </template>

    <div class="flex flex-col lg:flex-row gap-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
        <div
          v-for="(member, index) in team"
          :key="member.id"
          class="flex flex-col gap-2"
          v-motion-appear
          :delay="100 * index"
        >
          <NuxtImg
            :key="member.id"
            :src="member.image"
            :alt="member.name"
            fit="contain"
            format="webp"
            width="200"
            height="100"
            class="w-full h-auto object-cover filter grayscale hover:filter-none transition duration-700"
          />
          <h3 class="font-base font-bold">{{ member.name }}</h3>
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
    name: "John Doe",
    image: "https://mighty.tools/mockmind-api/content/human/1.jpg",
    role: "Architect",
  },
  {
    id: "2",
    name: "Jane Smith",
    image: "https://mighty.tools/mockmind-api/content/human/2.jpg",
    role: "Architect",
  },
  {
    id: "3",
    name: "Peter Jones",
    image: "https://mighty.tools/mockmind-api/content/human/3.jpg",
    role: "Architect",
  },
  {
    id: "4",
    name: "Sarah Williams",
    image: "https://mighty.tools/mockmind-api/content/human/4.jpg",
    role: "Architect",
  },
  {
    id: "5",
    name: "David Brown",
    image: "https://mighty.tools/mockmind-api/content/human/5.jpg",
    role: "Architect",
  },
  {
    id: "6",
    name: "Emily Davis",
    image: "https://mighty.tools/mockmind-api/content/human/6.jpg",
    role: "Architect",
  },
  {
    id: "7",
    name: "Michael Wilson",
    image: "https://mighty.tools/mockmind-api/content/human/7.jpg",
    role: "Caine mediu",
  },
  {
    id: "8",
    name: "Michelle Moore",
    image: "https://mighty.tools/mockmind-api/content/human/8.jpg",
    role: "Caine mare",
  },
] as const as TeamMember[];
</script>
