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
        label: "Pagină inexistentă",
        title: "Această pagină nu a fost construită.",
        text: "Adresa pe care ai urmat-o nu duce nicăieri. Poate a fost mutată, sau poate n-a existat niciodată.",
      }
    : {
        label: "Eroare de server",
        title: "Ceva a cedat pe parcurs.",
        text: "Pagina nu a putut fi încărcată acum. Încearcă din nou în câteva momente.",
      }
);

const links = [
  { name: "Pagina principală", to: "/" },
  { name: "Proiecte", to: "/#proiecte" },
  { name: "Contact", to: "/#contact" },
];

// clearError resets Nuxt's error state; a plain link would keep showing this page
const go = (to: string) => clearError({ redirect: to });

useHead({
  title: () => `${statusCode.value} | Arhwerk`,
  meta: [{ name: "robots", content: "noindex" }],
});
</script>

<template>
  <NuxtLayout>
    <main
      class="drafting-grid flex min-h-dvh items-center px-8 pb-16 pt-32"
    >
      <div
        class="mx-auto flex w-full max-w-screen-xl flex-col gap-8 md:flex-row"
      >
        <aside class="shrink-0 md:w-80">
          <p
            class="flex items-center gap-2 text-xs uppercase tracking-widest motion-safe:animate-[rise_0.6s_ease-out_both]"
          >
            <IconsGGBorderAll class="size-5" aria-hidden="true" />
            {{ copy.label }}
          </p>
        </aside>

        <div class="flex-1">
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

          <div
            class="mt-12 max-w-md space-y-4 motion-safe:animate-[rise_0.6s_ease-out_0.3s_both]"
          >
            <h1 class="text-heading-xl">{{ copy.title }}</h1>
            <p class="text-base leading-relaxed">{{ copy.text }}</p>
          </div>

          <nav
            class="mt-12 motion-safe:animate-[rise_0.6s_ease-out_0.4s_both]"
            aria-label="Navigare"
          >
            <ul class="flex flex-wrap gap-x-8 gap-y-2">
              <li v-for="link in links" :key="link.to">
                <a
                  :href="link.to"
                  class="uline inline-block py-3 font-bold"
                  @click.prevent="go(link.to)"
                  >{{ link.name }}</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.drafting-grid {
  background-image: linear-gradient(to right, #f4f4f4 1px, transparent 1px),
    linear-gradient(to bottom, #f4f4f4 1px, transparent 1px);
  background-size: 2rem 2rem;
  background-position: -1px -1px;
}

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
