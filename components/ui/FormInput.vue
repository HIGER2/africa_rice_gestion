<script lang="ts" setup>

const props = defineProps<{
  label: string;
  placeholder: string;
  modelValue: string;
  name: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const inputValue = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue;
});

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <div class="mt-4 flex w-full flex-col justify-start gap-1">
    <label :for="name" class="text-[13px] font-[500] text-zinc-700">
      {{ label }}
    </label>
    <input
      :id="name"
      v-model="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full rounded-md border border-zinc-200 p-3 px-3 text-xs font-sm outline-none transition-all placeholder:text-zinc-300 hover:border-zinc-500 focus:border-brand focus:outline-brand-light disabled:text-zinc-500"
      type="text"
    />
  </div>
</template>
