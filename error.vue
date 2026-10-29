<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    default: null,
  },
});

const statusCode = computed(() => props.error?.statusCode ?? 500);
const isNotFound = computed(() => statusCode.value === 404);

const copy = computed(() =>
  isNotFound.value
    ? {
        title: "Această pagină nu a fost construită... încă.",
        text: "",
      }
    : {
        title: "Ceva a cedat pe parcurs.",
        text: "Pagina nu a putut fi încărcată acum. Încearcă din nou în câteva momente.",
      }
);

// clearError resets Nuxt's error state; a plain link would keep showing this page
const goHome = () => clearError({ redirect: "/" });

useHead({
  title: () => `${statusCode.value} | Arhwerk`,
  meta: [{ name: "robots", content: "noindex" }],
});
</script>

<template>
  <NuxtLayout>
    <main class="flex min-h-dvh items-center px-8 pb-16 pt-32">
      <div
        class="mx-auto flex w-full max-w-screen-xl flex-col items-center text-center"
      >
        <div class="w-fit">
          <p
            class="text-[38vw] font-light leading-none tracking-tighter motion-safe:animate-[rise_0.6s_ease-out_0.1s_both] md:text-[16rem]"
            aria-hidden="true"
          >
            {{ statusCode }}
          </p>

          <!-- Dimension line, as on a drawing -->
          <div
            class="mt-2 flex items-center gap-3 text-xs text-primary/60 motion-safe:animate-[rise_0.6s_ease-out_0.2s_both]"
            aria-hidden="true"
          >
            <span class="h-3 w-px bg-current" />
            <span class="h-px flex-1 bg-current" />
            <span class="tabular-nums">cod {{ statusCode }}</span>
            <span class="h-px flex-1 bg-current" />
            <span class="h-3 w-px bg-current" />
          </div>
        </div>

        <div
          class="mt-12 max-w-md space-y-4 motion-safe:animate-[rise_0.6s_ease-out_0.3s_both]"
        >
          <h1 class="text-heading-xl">{{ copy.title }}</h1>
          <p v-if="copy.text" class="text-base leading-relaxed">
            {{ copy.text }}
          </p>
        </div>

        <a
          href="/"
          class="uline mt-12 inline-block py-3 font-bold motion-safe:animate-[rise_0.6s_ease-out_0.4s_both]"
          @click.prevent="goHome"
          >Pagina principală</a
        >
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped>
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
