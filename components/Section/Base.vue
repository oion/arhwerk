<template>
  <section
    class="flex flex-col md:flex-row gap-8 px-8 my-32 lg:my-64 scroll-m-32 max-w-screen-xl mx-auto"
  >
    <aside class="md:w-80 flex-shrink-0">
      <div class="sticky top-24 flex flex-col gap-4">
        <slot name="aside" />
      </div>
    </aside>

    <div class="flex-1">
      <slot />
    </div>
  </section>
</template>
