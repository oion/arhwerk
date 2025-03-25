<template>
  <section
    class="mx-auto my-32 flex max-w-screen-xl scroll-m-32 flex-col gap-8 px-8 md:flex-row lg:my-64"
  >
    <aside class="shrink-0 md:w-80">
      <div class="sticky top-24 flex flex-col gap-4">
        <slot name="aside" />
      </div>
    </aside>

    <div class="flex-1">
      <slot />
    </div>
  </section>
</template>
