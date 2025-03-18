<template>
  <header
    class="flex justify-between items-center p-4 h-16 fixed bg-neutral w-full z-50"
  >
    <h1>
      <NuxtLink to="/">
        <IconsLogo />
      </NuxtLink>
    </h1>

    <nav class="hidden md:block">
      <ul class="flex space-x-8">
        <li v-for="navItem in navItems">
          <NuxtLink
            :to="`#${navItem.anchor}`"
            class="text-nav-link text-primary"
            >{{ navItem.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { name: "Proiecte", anchor: "proiecte" },
  { name: "Despre", anchor: "despre" },
  { name: "Servicii", anchor: "servicii" },
  { name: "Echipa", anchor: "echipa" },
  { name: "Contact", anchor: "contact" },
];
</script>
