<template>
  <form class="flex flex-col gap-8">
    <ContactFormInput v-model="form.fullname" label="Name" />

    <ContactFormInput v-model="form.email" label="Email" />

    <ContactFormInput v-model="form.message" label="Mesaj" type="textarea" />

    <button
      type="submit"
      class="py-4 text-left font-bold ring-transparent transition-all focus:px-4 focus:outline-none focus:ring-1 focus:ring-primary"
    >
      Trimite
    </button>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  fullname: "",
  email: "",
  message: "",
});
</script>
