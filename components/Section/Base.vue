<template>
  <section
    class="flex flex-col md:flex-row gap-4 px-4 my-32 md:my-96 scroll-m-32 max-w-screen-xl mx-auto"
  >
    <aside class="md:w-80 flex-shrink-0">
      <div class="sticky top-20 flex flex-col gap-4">
        <slot name="aside" />
      </div>
    </aside>

    <div class="flex-1">
      <slot />
    </div>
  </section>
</template>
