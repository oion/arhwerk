<template>
  <section class="h-screen w-full relative">
    <transition>
      <div :key="activeSlide.url" class="w-full h-full flex-shrink-0">
        <NuxtImg
          :src="activeSlide.url"
          :alt="activeSlide.alt"
          width="1920"
          height="1080"
          class="w-full h-full object-cover object-center"
        />
        <h2 class="absolute bottom-4 left-4 text-white">
          {{ activeSlide.alt }}
        </h2>
      </div>
    </transition>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full hover:bg-white/80',
          activeClasses(index),
        ]"
        @click="active = index"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Slide {
  url: string;
  title: string;
  alt: string;
}

const slides = [
  {
    url: "/images/samples/sample-landscape.webp",
    alt: "Casa Pădurii - Vedere panoramică din grădină",
    title: "Armonie în natură",
  },
  {
    url: "/images/samples/sample-landscape.webp",
    alt: "Centrul Cultural Civic - Fațada principală iluminată",
    title: "Cultură și comunitate",
  },
  {
    url: "/images/samples/sample-landscape.webp",
    alt: "Ansamblul Rezidențial Verde - Spațiu interior comun",
    title: "Spații pentru viață",
  },
  {
    url: "/images/samples/sample-landscape.webp",
    alt: "Hotel Montana - Zona de recepție și lounge",
    title: "Ospitalitate modernă",
  },
  {
    url: "/images/samples/sample-landscape.webp",
    alt: "Vila Mediteraneană - Terasă cu vedere spre mare",
    title: "Relaxare la malul mării",
  },
];

const active = ref<number>(0);

const activeSlide = computed<Slide>(() => {
  return slides[active.value];
});

const activeClasses = (index: number) => {
  return index === active.value ? "bg-slate-900" : "bg-slate-300";
};
</script>
