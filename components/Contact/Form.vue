<template>
  <form class="flex flex-col gap-8">
    <ContactFormInput v-model="form.name" label="Name" />

    <ContactFormInput v-model="form.email" label="Email" />

    <ContactFormInput v-model="form.message" label="Mesaj" type="textarea" />

    <button
      type="submit"
      class="py-4 text-left font-bold ring-transparent transition-all focus:px-4 focus:outline-none focus:ring-1 focus:ring-primary"
      @click="handleSubmit"
    >
      Trimite
    </button>

    <div v-if="message">{{ message }}</div>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  name: "",
  email: "",
  message: "",
});

const message = ref("");
const accessKey = "2e713f25-f8c2-4524-9704-c28b0d079cd0";
const subject = "New Contact Form Submission from Arwherk website";
const fromName = "Arwherk website";
const redirect = "https://arhwerk.ro/#thank-you";
const botcheck = "";

const handleSubmit = (e: Event) => {
  e.preventDefault();
  message.value = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      from_name: fromName,
      subject,
      redirect,
      botcheck,
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    }),
  })
    .then(async (response) => {
      const json = await response.json();
      if (response.status == 200) {
        message.value = "Form submitted successfully";
      } else {
        console.log(response);
        message.value = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      message.value = "Something went wrong!";
    })
    .then(function () {
      form.value.name = "";
      form.value.email = "";
      form.value.message = "";
      setTimeout(() => {
        message.value = "";
      }, 3000);
    });
};
</script>
