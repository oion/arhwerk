<template>
  <form class="flex flex-col gap-8">
    <ContactFormInput v-model="form.fullname" label="Name" />

    <ContactFormInput v-model="form.email" label="Email" />

    <ContactFormInput v-model="form.message" label="Mesaj" type="textarea" />

    <button type="submit" class="font-bold py-4 text-left">Trimite</button>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  fullname: "",
  email: "",
  message: "",
});
</script>
