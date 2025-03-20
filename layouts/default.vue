<template>
  <div>
    <AppHeader />

    <slot />
  </div>
</template>

<script setup lang="ts">
// add page transition between pages
</script>

<style scoped>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}

.layout-enter-from,
.layout-leave-to {
  transform: translateY(100px);
}
</style>
