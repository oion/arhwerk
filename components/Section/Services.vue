<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Servicii</h2>
    </template>

    <div class="flex flex-col gap-4 lg:flex-row">
      <div
        class="flex flex-col font-light lg:flex-row lg:justify-between lg:gap-40"
      >
        <div v-motion-appear class="max-w-sm">
          <div v-for="service in firstColumnServices" :key="service.name">
            <h3 class="mb-4 text-sm font-bold">{{ service.name }}</h3>
            <ul
              class="mb-10 list-none space-y-2 pl-0 text-sm text-primary-light"
            >
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <div v-motion-appear :delay="200" class="max-w-sm">
          <div v-for="service in secondColumnServices" :key="service.name">
            <h3 class="mb-4 text-sm font-bold">{{ service.name }}</h3>
            <ul
              class="mb-10 list-none space-y-2 pl-0 text-sm text-primary-light"
            >
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts">
import { services } from "~/content/services";

const firstColumnServices = services.slice(0, 4);
const secondColumnServices = services.slice(4);
</script>

<style></style>
