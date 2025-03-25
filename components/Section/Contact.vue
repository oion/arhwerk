<template>
  <section class="flex flex-col bg-primary-light md:flex-row">
    <aside class="shrink-0 px-4 py-24 md:w-80 lg:py-24">
      <div class="sticky top-20 flex gap-4">
        <h2 class="text-heading-lg">Contact</h2>
      </div>
    </aside>

    <div class="flex w-full flex-col gap-4 lg:flex-row">
      <div class="flex flex-1 flex-col p-4 lg:py-24">
        <h3 class="pb-8">Trimite-ne un mesaj</h3>
        <ContactForm class="max-w-80" />
      </div>
      <div class="flex flex-1 items-end bg-black p-4 py-24 text-white lg:p-8">
        <ContactInfo />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
