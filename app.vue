<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});

// Site-wide defaults; pages override title, description and images
useSeoMeta({
  description:
    "Studio de arhitectură din Brașov, specializat în restaurarea clădirilor de patrimoniu, reabilitarea fondului construit istoric și proiectarea de construcții noi.",
  ogSiteName: "Arhwerk",
  ogLocale: "ro_RO",
  ogType: "website",
  twitterCard: "summary",
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
