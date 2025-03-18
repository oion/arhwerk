<template>
  <section class="flex flex-col md:flex-row bg-primary-light">
    <aside class="md:w-80 flex-shrink-0 px-4 py-24 lg:py-24">
      <div class="sticky top-20 flex gap-4">
        <h2 class="text-heading-lg">Contact</h2>
      </div>
    </aside>

    <div class="w-full flex flex-col lg:flex-row gap-4">
      <div class="flex-1 flex flex-col p-4 lg:py-24">
        <h3 class="pb-8">Trimite-ne un mesaj</h3>
        <ContactForm class="max-w-80" />
      </div>
      <div class="flex-1 bg-black text-white p-4 py-24 lg:p-8 flex items-end">
        <ContactInfo />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
