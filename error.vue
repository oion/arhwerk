<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: null,
  },
});
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <h1 class="text-8xl">Eroare: {{ error?.statusCode }}</h1>
    <NuxtLink to="/">Inapoi</NuxtLink>
  </div>
</template>
