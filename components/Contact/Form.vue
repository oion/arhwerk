<template>
  <form>
    <div class="flex flex-col gap-4">
      <label for="name">Name</label>
      <input type="text" id="name" />
    </div>
    <div class="flex flex-col gap-4">
      <label for="email">Email</label>
      <input type="email" id="email" />
    </div>
    <div class="flex flex-col gap-4">
      <label for="message">Message</label>
      <textarea id="message"></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</template>
