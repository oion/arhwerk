<template>
  <form class="flex flex-col gap-8" @submit.prevent="handleSubmit">
    <ContactFormInput
      v-model="form.name"
      label="Nume"
      name="name"
      autocomplete="name"
    />

    <ContactFormInput
      v-model="form.email"
      label="Email"
      name="email"
      type="email"
      autocomplete="email"
    />

    <ContactFormInput
      v-model="form.message"
      label="Mesaj"
      name="message"
      type="textarea"
    />

    <!-- Honeypot: hidden from people, bots tend to fill it in -->
    <input
      v-model="botcheck"
      type="checkbox"
      name="botcheck"
      class="hidden"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
    />

    <button
      type="submit"
      class="py-4 text-left font-bold ring-transparent transition-all focus:px-4 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
      :disabled="status === 'sending'"
    >
      {{ status === "sending" ? "Se trimite…" : "Trimite" }}
    </button>

    <div role="status" aria-live="polite">
      <p v-if="status === 'success'">
        Mulțumim! Mesajul a fost trimis, revenim în curând.
      </p>
      <p v-else-if="status === 'error'">
        Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne direct la
        <a href="mailto:arhwerk.contact@gmail.com" class="underline">
          arhwerk.contact@gmail.com</a
        >.
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  name: "",
  email: "",
  message: "",
});

const status = ref<"idle" | "sending" | "success" | "error">("idle");
const botcheck = ref(false);

const accessKey = "2e713f25-f8c2-4524-9704-c28b0d079cd0";
const subject = "Mesaj nou de pe site-ul Arhwerk";
const fromName = "Site Arhwerk";

const handleSubmit = async () => {
  status.value = "sending";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: fromName,
        subject,
        botcheck: botcheck.value,
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      }),
    });
    if (!response.ok) throw new Error(`web3forms responded ${response.status}`);

    status.value = "success";
    // Only clear on success, so a failed send never loses the visitor's text
    form.value = { name: "", email: "", message: "" };
  } catch (error) {
    console.error(error);
    status.value = "error";
  }
};
</script>
