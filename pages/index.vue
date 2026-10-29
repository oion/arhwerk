<script setup lang="ts">
import { usePages } from "~/composables/usePages";

const { fetchPageBySlug } = usePages();

const { data: page } = await useAsyncData("page-home", () =>
  fetchPageBySlug("homepage")
);

const title = "Arhwerk | Arhitectură și restaurare în Brașov";
const description =
  "Studio de arhitectură din Brașov, specializat în restaurarea clădirilor de patrimoniu, reabilitarea fondului construit istoric și proiectarea de construcții noi.";

// Contentful types linked entries as possibly undefined
const projects = computed(
  () => page.value?.fields.projects?.filter((p) => p !== undefined) ?? []
);
const team = computed(
  () => page.value?.fields.team?.filter((a) => a !== undefined) ?? []
);
const services = computed(
  () => page.value?.fields.services?.filter((s) => s !== undefined) ?? []
);

const { siteUrl } = useRuntimeConfig().public;

// Share image comes from the first featured project, so it follows Contentful
const image = computed(() => {
  const first = projects.value[0];
  const url = first?.fields.image?.fields.file?.url as string | undefined;
  return url ? `https:${url}?w=1200&h=630&fit=fill&fm=jpg&q=80` : undefined;
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogImageAlt: "Arhwerk — proiect de arhitectură",
  ogUrl: `${siteUrl}/`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: () => (image.value ? "summary_large_image" : "summary"),
});

// Structured data so search engines can show the studio as a local business
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Arhwerk",
          description,
          url: `${siteUrl}/`,
          image: image.value,
          foundingDate: "2018",
          telephone: "+40744331261",
          email: "arhwerk.contact@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Strada Mureșenilor nr. 27",
            addressLocality: "Brașov",
            addressCountry: "RO",
          },
          areaServed: "RO",
          sameAs: [
            "https://www.facebook.com/arhwerk",
            "https://www.instagram.com/arhwerk",
          ],
        }),
    },
  ],
});
</script>

<template>
  <main v-if="page">
    <ProjectsList v-if="projects.length" id="proiecte" :projects />

    <SectionAbout id="despre">{{ page.fields.about }}</SectionAbout>

    <SectionTeam
      id="echipa"
      :team
    />

    <SectionServices
      id="servicii"
      :services
    />

    <SectionContact id="contact" />
  </main>
</template>
