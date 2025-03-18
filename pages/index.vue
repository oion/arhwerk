<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <AppHero id="hero" />

  <ProjectsList id="proiecte" />

  <AppAbout id="despre" />

  <AppTeam id="echipa" />

  <AppServices id="servicii" />

  <AppContact id="contact" />
</template>
