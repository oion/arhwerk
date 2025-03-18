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

  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>

  <AppContact id="contact" />
</template>
