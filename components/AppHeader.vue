<template>
  <header
    ref="header"
    class="fixed inset-x-0 top-0 z-30 bg-white transition-all duration-300"
    :class="[{ '-translate-y-full': isHidden && isScrolled }]"
  >
    <div class="mx-auto flex items-center justify-between gap-8 px-8 py-0">
      <h1 class="flex items-center justify-start overflow-hidden bg-white">
        <NuxtLink to="/" aria-label="Pagina principală" class="block p-6">
          <IconsLogo class="h-4" :is-hidden="isHidden" />
        </NuxtLink>
      </h1>

      <nav class="ml-auto h-auto md:block">
        <ul class="hidden space-x-8 transition-all duration-300 md:flex">
          <li v-for="navItem in navItems" :key="navItem.url">
            <NuxtLink :to="`${navItem.url}`" class="uline transition-colors">{{
              navItem.name
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { name: "Proiecte", url: "/#proiecte" },
  { name: "Despre", url: "/#despre" },
  { name: "Servicii", url: "/#servicii" },
  { name: "Echipa", url: "/#echipa" },
  { name: "Contact", url: "/#contact" },
];

const isScrolled = ref(false);
const isHidden = ref(false);
const lastScrollY = ref(0);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  isHidden.value = currentScrollY > lastScrollY.value;

  lastScrollY.value = currentScrollY;

  isScrolled.value = currentScrollY > window.innerHeight;
};

// Debounce the scroll handler for better performance
const debouncedScroll = useThrottleFn(handleScroll, 100);

onMounted(() => {
  window.addEventListener("scroll", debouncedScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", debouncedScroll);
});
</script>
