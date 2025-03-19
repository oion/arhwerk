<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});

const model = defineModel<string>({ required: true });

const isBlurred = ref(false);

const labelClasses = computed(() => {
  return [
    isBlurred.value || isFilled.value
      ? "text-xs -translate-y-4"
      : "text-xs  translate-y-4",
  ];
});

const component = computed<string>(() => {
  return props.type === "textarea" ? "textarea" : "input";
});

const isFilled = computed(() => model.value.length > 0);
</script>

<template>
  <div class="flex flex-col gap-8 relative">
    <label
      ref="my-label"
      for="name"
      class="absolute transition-all left-0"
      :class="labelClasses"
      >{{ label }}</label
    >

    <component
      :is="component"
      id="name"
      type="text"
      class="border-0 border-b border-black py-2 p-0 bg-transparent placeholder-gray-900"
      :value="model"
      @input="model = $event.target.value"
      @focus="isBlurred = true"
      @blur="isBlurred = false"
    />
  </div>
</template>
