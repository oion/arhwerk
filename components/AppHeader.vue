<template>
  <header
    class="flex justify-between items-center p-4 h-16 fixed bg-white w-full z-50"
  >
    <h1>
      <NuxtLink to="/">
        <IconsLogo />
      </NuxtLink>
    </h1>

    <nav>
      <ul class="flex space-x-4">
        <li v-for="navItem in navItems">
          <NuxtLink :to="`#${navItem.anchor}`" class="text-slate-400">{{
            navItem.name
          }}</NuxtLink>
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
