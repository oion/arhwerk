<template>
  <header
    class="flex justify-between items-center p-8 h-16 fixed bg-neutral w-full z-50"
  >
    <h1>
      <NuxtLink to="/">
        <IconsLogo />
      </NuxtLink>
    </h1>

    <nav class="hidden md:block">
      <ul class="flex space-x-8">
        <li v-for="navItem in navItems" :key="navItem.url">
          <NuxtLink :to="`${navItem.url}`" class="text-nav-link text-primary">{{
            navItem.name
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
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
</script>
