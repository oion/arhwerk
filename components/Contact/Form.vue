<template>
  <form class="flex flex-col gap-8">
    <ContactFormInput label="Name" v-model="form.fullname" />

    <ContactFormInput label="Email" v-model="form.email" />

    <ContactFormInput label="Mesaj" v-model="form.message" type="textarea" />

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
