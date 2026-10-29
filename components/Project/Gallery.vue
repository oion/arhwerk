<script setup lang="ts">
import type { Asset } from "contentful";

interface Props {
  images: Asset[];
}

const { images } = defineProps<Props>();
const route = useRoute();
const router = useRouter();

// The open photo lives in ?foto=N so the back button closes the gallery
// and a photo can be shared by link
const openedHere = ref(false);

const queryWithPhoto = (i: number | null) => {
  const query = { ...route.query };
  if (i === null) delete query.foto;
  else query.foto = String(i + 1);
  return query;
};

const activeIndex = computed<number | null>({
  get() {
    const n = Number(route.query.foto);
    return Number.isInteger(n) && n >= 1 && n <= images.length ? n - 1 : null;
  },
  set(i) {
    if (i === null) {
      // Pop our own history entry; a shared link has none to pop
      if (openedHere.value) router.back();
      else router.replace({ query: queryWithPhoto(null) });
      openedHere.value = false;
    } else if (activeIndex.value === null) {
      openedHere.value = true;
      router.push({ query: queryWithPhoto(i) });
    } else {
      // Moving between photos shouldn't add history entries
      router.replace({ query: queryWithPhoto(i) });
    }
  },
});
const loaded = ref(new Set<string>());

const markLoaded = (id: string) => {
  loaded.value.add(id);
};

const aspectRatio = (image: Asset) => {
  const size = image.fields.file?.details.image;
  return size ? `${size.width} / ${size.height}` : undefined;
};

// Images rendered on the server may finish loading before hydration,
// so their load event is never seen by Vue
const grid = ref<HTMLElement | null>(null);
onMounted(() => {
  grid.value
    ?.querySelectorAll<HTMLImageElement>("img[data-id]")
    .forEach((el) => {
      if (el.complete) markLoaded(el.dataset.id!);
    });
});
</script>

<template>
  <div>
    <div
      ref="grid"
      class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20"
    >
      <button
        v-for="(image, index) in images"
        :key="image.sys.id"
        class="overflow-hidden bg-neutral-100"
        :class="{ 'animate-pulse': !loaded.has(image.sys.id) }"
        :style="{ aspectRatio: aspectRatio(image) }"
        :aria-label="`Deschide imaginea ${index + 1}`"
        @click="activeIndex = index"
      >
        <NuxtImg
          :src="image.fields.file?.url as string"
          :alt="image.fields.title as string"
          :data-id="image.sys.id"
          sizes="100vw md:50vw lg:400px"
          format="webp"
          provider="contentful"
          loading="lazy"
          class="size-full object-cover transition duration-700 hover:cursor-pointer md:hover:scale-110"
          :class="loaded.has(image.sys.id) ? 'opacity-100' : 'opacity-0'"
          @load="markLoaded(image.sys.id)"
          @error="markLoaded(image.sys.id)"
        />
      </button>
    </div>
    <ClientOnly>
      <ProjectLightbox v-model="activeIndex" :images />
    </ClientOnly>
  </div>
</template>
