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
  <div class="flex h-screen items-center justify-center flex-col">
    <h1 class="text-8xl">Eroare: {{ error?.statusCode }}</h1>
    <NuxtLink to="/">Inapoi</NuxtLink>
  </div>
</template>
