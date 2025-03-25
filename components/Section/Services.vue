<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Servicii</h2>
    </template>

    <div class="flex flex-col lg:flex-row gap-4">
      <div
        class="flex flex-col lg:flex-row lg:gap-40 lg:justify-between font-light"
      >
        <div v-motion-appear class="max-w-sm">
          <div v-for="service in firstColumnServices" :key="service.name">
            <h3 class="font-bold text-sm mb-4">{{ service.name }}</h3>
            <ul
              class="list-none pl-0 mb-10 text-sm text-primary-light space-y-2"
            >
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <div v-motion-appear :delay="200" class="max-w-sm">
          <div v-for="service in secondColumnServices" :key="service.name">
            <h3 class="font-bold text-sm mb-4">{{ service.name }}</h3>
            <ul
              class="list-none pl-0 mb-10 text-sm text-primary-light space-y-2"
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
