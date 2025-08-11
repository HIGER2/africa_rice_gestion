<template>
  <div class="mt-4 flex w-full flex-col justify-start gap-1">
    <label :for="id" class="text-[13px] font-medium text-zinc-800">
      {{ label }}
    </label>
    <select
      :id="id"
      v-bind="$attrs"
      class="mt-1 disabled:bg-zinc-50 text-zinc-800 placeholder:text-[11px] placeholder:text-gray-400 text-[13px] w-full rounded-md border border-zinc-200 p-2 px-3 outline-none transition-all hover:border-green-500 focus:border-brand focus:border-green-500 disabled:text-zinc-500"
      v-model="inputValue"
    >
      <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: () => `select-${Math.random().toString(36).substring(2, 9)}`,
  },
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
