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
  name: {
    type: String,
    required: true,
  },
  autocomplete: {
    type: String,
    default: undefined,
  },
});

const model = defineModel<string>({ required: true });

const id = useId();
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
  <div class="relative flex flex-col gap-8">
    <label :for="id" class="absolute left-0 transition-all" :class="labelClasses">{{ label }}</label>

    <component
      :is="component"
      :id="id"
      :name="name"
      :type="component === 'input' ? type : undefined"
      :autocomplete="autocomplete"
      required
      class="border-0 border-b border-primary bg-transparent p-0 py-2 placeholder:text-gray-900 focus:border-primary-dark focus:outline-none"
      :value="model"
      @input="model = ($event.target as HTMLInputElement).value"
      @focus="isBlurred = true"
      @blur="isBlurred = false"
    />
  </div>
</template>
