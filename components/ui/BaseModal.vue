<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex cursor-zoom-out items-center justify-center"
        @click.self="$emit('update:modelValue', false)"
      >
        <div
          class="bg-white rounded-lg flex flex-col py-3  cursor-pointer overflow-hidden max-h-[550px]  px-7 relative"
        >
          <div class="flex items-center justify-between p-3  w-full">
              <!-- Title slot -->
              <div v-if="$slots.title" class="mb-4 text-xl font-semibold text-gray-800">
                <slot name="title" />
            </div>
            <button
                class=" cursor-pointer text-gray-400 hover:text-gray-600"
                @click="$emit('update:modelValue', false)"
              >
                ✕
              </button>

          </div>
          <div class="w-full  overflow-y-auton p-3 flex-1 overflow-x-hidden">

              <!-- Body slot -->
              <div class="text-gray-700">
                <slot />
              </div>

          </div>
            <!-- Footer slot -->
            <div v-if="$slots.footer" class="mt-6 p-3 flex justify-end gap-3">
              <slot name="footer" />
            </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

defineEmits(['update:modelValue'])

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }else {
    document.body.style.overflow = ''; // Restore scrolling when modal is closed
  }
})
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
