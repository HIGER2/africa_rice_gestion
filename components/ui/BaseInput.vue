<template>
  <div class="mt-4 flex w-full flex-col justify-start gap-1">
    <label :for="id" class="text-[13px] font-medium text-zinc-800">
      {{ label }}
    </label>
    <input
      :id="id"
        v-bind="$attrs"
      autocomplete="off"
      autocorrect="off"
      spellcheck="false"
      class="mt-1 disabled:bg-zinc-50 text-zinc-800  placeholder:text-[11px] placeholder:text-gray-400 text-[13px] w-full rounded-md border border-zinc-200 p-2 px-3  outline-none transition-all  hover:border-green-500 focus:border-brand focus:border-green-500 disabled:text-zinc-500"
      v-model="inputValue"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
defineOptions({
  inheritAttrs: false, // important pour éviter l'injection automatique dans le div
})
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substring(2, 9)}`,
  },
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
