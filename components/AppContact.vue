<template>
  <section class="flex flex-col md:flex-row bg-primary-light px-4 py-24">
    <aside class="md:w-80 flex-shrink-0">
      <div class="sticky top-20 flex gap-4">
        <h2 class="text-heading-lg">Contact</h2>
      </div>
    </aside>

    <div class="flex flex-col lg:flex-row gap-4">
      <div class="flex-1 flex flex-col gap-4 p-4">
        <ContactForm />
      </div>
      <div class="flex-1">
        <ContactInfo />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
