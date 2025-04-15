<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-lg font-bold">Echipa</h2>
    </template>

    <div class="flex flex-col gap-4 lg:flex-row">
      <div class="grid gap-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(member, index) in team"
          :key="member.sys.id"
          v-motion-appear
          :delay="100 * index"
          class="flex flex-col gap-2"
        >
          <NuxtImg
            v-if="member.fields.file?.url"
            :key="member.sys.id"
            :src="member.fields.file?.url"
            :alt="member.fields.title"
            fit="contain"
            format="webp"
            width="400"
            height="400"
            provider="contentful"
            class="h-auto w-full object-cover grayscale transition duration-700 hover:filter-none"
          />
          <h3 class="font-bold">{{ member.fields.title }}</h3>

          <p class="text-xs font-light">{{ member.fields.description }}</p>
        </div>
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts">
import type { Asset } from "contentful";

defineProps<{
  team: Asset[];
}>();
</script>
