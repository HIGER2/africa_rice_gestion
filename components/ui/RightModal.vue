
<script setup>

let props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Titre du modal',
  },
})
const show = toRef(props, 'show')

defineEmits(['close'])
watch(show, (val) => {
  if (val) {
   document.body.style.overflow = 'hidden';
  }else{
       document.body.style.overflow = ''; // Restore scrolling when modal is closed
  }
})
</script>

<template>
  <Transition name="fade">

       <div
    v-if="show"
    class="fixed inset-0 bg-black/50 flex justify-end z-50"
     @click.self="$emit('close')"
  >
    <!-- MODAL PANEL -->
    <div class="w-full max-w-lg h-full bg-white shadow-xl flex flex-col ">

      <!-- HEADER -->
      <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 class="!text-sm font-semibold">{{ title }}</h2>
        <button
          class="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          @click="$emit('close')"
        >
          &times;
        </button>
      </div>

      <!-- BODY SCROLLABLE -->
      <div class="flex-1 overflow-y-auto px-6 py-4">
        <slot />
      </div>

      <!-- FOOTER -->
        <!-- <div class="px-6 py-4 border-t border-gray-200">
            <slot name="footer">
            <button
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                @click="$emit('close')"
            >
                Fermer
            </button>
            </slot>
        </div> -->
    </div>
  </div>
  </Transition>
</template>\

<style>


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

