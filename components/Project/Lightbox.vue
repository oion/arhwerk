<script setup lang="ts">
import type { ContentfulAsset } from "~/types/contentful";

interface Props {
  images: ContentfulAsset[];
}

const { images } = defineProps<Props>();
const index = defineModel<number | null>({ default: null });

const IMAGE_SIZES = "100vw lg:1600px";

const isLoading = ref(true);

const isOpen = computed(() => index.value !== null);
const current = computed(() =>
  index.value === null ? null : images[index.value]
);

const close = () => {
  index.value = null;
};

const go = (step: number) => {
  if (index.value === null) return;
  index.value = (index.value + step + images.length) % images.length;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;
  if (e.key === "Escape") close();
  else if (e.key === "ArrowLeft") go(-1);
  else if (e.key === "ArrowRight") go(1);
};

useEventListener("keydown", handleKeydown);

const isLocked = useScrollLock(import.meta.client ? document.body : null);
const closeButton = ref<HTMLButtonElement | null>(null);
let lastFocused: HTMLElement | null = null;

// The dialog is teleported outside #__nuxt, so making the app inert keeps
// Tab and screen readers inside the dialog
watch(
  isOpen,
  async (open) => {
    isLocked.value = open;
    const app = document.getElementById("__nuxt");
    if (app) app.inert = open;

    if (open) {
      lastFocused = document.activeElement as HTMLElement | null;
      await nextTick();
      closeButton.value?.focus();
    } else {
      lastFocused?.focus({ preventScroll: true });
      lastFocused = null;
    }
  },
  { immediate: true }
);

const stage = ref<HTMLElement | null>(null);
const { direction } = useSwipe(stage, {
  threshold: 40,
  onSwipeEnd: () => {
    if (direction.value === "left") go(1);
    else if (direction.value === "right") go(-1);
    else if (direction.value === "down") close();
  },
});

// Preload neighbours so swiping doesn't show a blank frame on slow connections
const img = useImage();
const preload = (image: ContentfulAsset | undefined) => {
  const src = image?.fields.file?.url as string | undefined;
  if (!src) return;
  const { srcset, sizes } = img.getSizes(src, {
    sizes: IMAGE_SIZES,
    modifiers: { format: "webp" },
    provider: "contentful",
  });
  const preloader = new Image();
  preloader.sizes = sizes ?? "";
  preloader.srcset = srcset;
};

const thumbs = ref<HTMLElement | null>(null);
watch(index, async (i) => {
  isLoading.value = true;
  if (i === null || images.length < 2) return;
  preload(images[(i + 1) % images.length]);
  preload(images[(i - 1 + images.length) % images.length]);

  await nextTick();
  thumbs.value
    ?.querySelector<HTMLElement>(`[data-thumb="${i}"]`)
    ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}, { immediate: true });
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen && current"
        class="fixed inset-0 z-50 flex h-dvh flex-col overscroll-contain bg-black/95 text-white"
        role="dialog"
        aria-modal="true"
        :aria-label="current.fields.title as string"
      >
        <div
          class="flex items-center justify-between px-4 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] text-sm md:p-4"
        >
          <span class="tabular-nums">
            {{ (index ?? 0) + 1 }} / {{ images.length }}
          </span>
          <button
            ref="closeButton"
            class="-mr-2 rounded-full p-3 transition hover:bg-white/10"
            aria-label="Închide"
            @click="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          ref="stage"
          class="relative flex min-h-0 flex-1 items-center justify-center md:px-20"
          @click.self="close"
        >
          <div
            v-if="isLoading"
            class="pointer-events-none absolute inset-0 flex items-center justify-center"
            role="status"
            aria-label="Se încarcă"
          >
            <span
              class="size-8 animate-spin rounded-full border-2 border-white/20 border-t-white"
            />
          </div>
          <NuxtImg
            :key="current.sys.id"
            :src="current.fields.file?.url as string"
            :alt="current.fields.title as string"
            :sizes="IMAGE_SIZES"
            format="webp"
            provider="contentful"
            class="max-h-full max-w-full select-none object-contain transition-opacity duration-300"
            :class="isLoading ? 'opacity-0' : 'opacity-100'"
            draggable="false"
            @load="isLoading = false"
            @error="isLoading = false"
          />

          <template v-if="images.length > 1">
            <button
              class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 transition hover:bg-white/10 md:bg-transparent md:p-3"
              aria-label="Imaginea anterioară"
              @click="go(-1)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 md:size-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 transition hover:bg-white/10 md:bg-transparent md:p-3"
              aria-label="Imaginea următoare"
              @click="go(1)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 md:size-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </template>
        </div>

        <div
          v-if="images.length > 1"
          ref="thumbs"
          class="overflow-x-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 [scrollbar-width:none] md:p-4"
        >
          <div class="mx-auto flex w-max gap-2">
            <button
              v-for="(image, i) in images"
              :key="image.sys.id"
              :data-thumb="i"
              class="shrink-0 transition"
              :class="i === index ? 'opacity-100 ring-1 ring-white' : 'opacity-40 hover:opacity-80'"
              :aria-label="`Imaginea ${i + 1}`"
              :aria-current="i === index"
              @click="index = i"
            >
              <NuxtImg
                :src="image.fields.file?.url as string"
                :alt="image.fields.title as string"
                width="96"
                height="64"
                densities="x1 x2"
                fit="fill"
                format="webp"
                provider="contentful"
                loading="lazy"
                class="h-10 w-14 object-cover md:h-16 md:w-24"
              />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
