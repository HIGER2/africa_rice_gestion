<template>
  <div>
    <button @click="showModal = true" class="px-4 cursor-pointer  py-2 flex justify-center items-center relative border border-zinc-300 text-xs font-semibold gap-1 transition-all duration-200 ease-in-out shadow-sm rounded-md text-zinc-800">
    Send link <i class="uil uil-link"></i>
    </button>

    <UiBaseModal v-model="showModal">
      <template #title>
        <span class="text-sm">Lien d'enregistrement</span>
      </template>

      <div class="w-full">
        <button
            class="
            w-full
            cursor-pointer
            inline-flex items-center justify-center gap-2 px-4 py-2 text-[13px] font-medium text-zinc-800 border border-zinc-300 rounded-md shadow hover:bg-zinc-100 transition-all duration-200 ease-in-out"
          >
            Copier ce lien pour envoyer au staff
            <i class="uil uil-copy-alt"></i>
          </button>
      </div>

      <!-- <template #footer>
        <button @click="showModal = false" class="px-4 py-2 bg-gray-200 rounded-md">
          Annuler
        </button>
        <button @click="confirm" class="px-4 py-2 bg-blue-600 text-white rounded-md">
          Confirmer
        </button>
      </template> -->
    </UiBaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)

function confirm() {
  alert('Action confirmée')
  showModal.value = false
}
</script>
