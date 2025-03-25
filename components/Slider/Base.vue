<template>
  <section class="relative min-h-screen w-full">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute size-full shrink-0 transition-opacity duration-1000"
      :class="index === active ? 'opacity-100' : 'opacity-0'"
    >
      <NuxtImg
        :src="slide.url"
        :alt="slide.alt"
        format="webp"
        width="1920"
        height="1080"
        class="size-full object-cover object-center"
      />
      <h2 class="absolute bottom-24 left-16 text-xs font-light text-white">
        {{ slide.alt }}
      </h2>
    </div>

    <div class="absolute bottom-16 left-16 flex gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        :aria-label="`${index}`"
        :class="['h-1 w-10 transition hover:bg-white/50', activeClasses(index)]"
        @click="active = index"
      >
        <span class="hidden">{{ index }}</span>
      </button>
    </div>

    <div class="absolute bottom-16 right-16">
      <svg viewBox="0 0 32 32" class="size-8 animate-bounce text-white">
        <path
          fill="currentColor"
          d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
        />
      </svg>
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
    url: "images/projects/venetia/venetia-3.jpg",
    alt: "Casa Boierului Comaniciu",
    title: "Casa Boierului Comaniciu",
  },
  {
    url: "/images/samples/sample-landscape-2.jpg",
    alt: "Centrul Cultural Civic - Fațada principală iluminată",
    title: "Cultură și comunitate",
  },
  {
    url: "/images/samples/sample-landscape-3.jpg",
    alt: "Ansamblul Rezidențial Verde - Spațiu interior comun",
    title: "Spații pentru viață",
  },
] as Slide[];

const active = ref<number>(0);

const activeClasses = (index: number) => {
  return index === active.value ? "bg-white" : "bg-neutral-300/50";
};

let interval: ReturnType<typeof setTimeout>;

onMounted(() => {
  interval = setInterval(() => {
    active.value = (active.value + 1) % slides.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
