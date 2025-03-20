<script setup lang="ts">
useHead({
  title: "Arhwerk",
});

useSeoMeta({
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});
</script>

<template>
  <main>
    <SectionHero id="hero" />

    <ProjectsList id="proiecte" />

    <SectionAbout id="despre" />

    <SectionTeam id="echipa" />

    <SectionServices id="servicii" />

    <SectionContact id="contact" />
  </main>
</template>
