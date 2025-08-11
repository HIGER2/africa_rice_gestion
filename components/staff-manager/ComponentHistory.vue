
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: Object // attend un objet avec une propriété postes: array
})

// Gestion ouverture accordéon
const openIds = ref([])

function toggle(id) {
  if (openIds.value.includes(id)) {
    openIds.value = openIds.value.filter(x => x !== id)
  } else {
    openIds.value.push(id)
  }
}

function isOpen(id) {
  return openIds.value.includes(id)
}

// Trie les postes en mettant les actifs en premier
const sortedPosts = computed(() => {
  if (!props.data?.postes) return []
  return [...props.data.postes].sort((a, b) => {
    if (a.is_active === b.is_active) return 0
    if (a.is_active === 'active') return -1
    return 1
  })
})

const contractFieldLabels = [
  { key: 'resno', label: 'Resno' },
  { key: 'position_posno', label: 'Position Posno' },
  { key: 'type_of_contract', label: 'Type Of Contract' },
  { key: 'contract_start_date', label: 'Start Date' },
  { key: 'contract_end_date', label: 'End Date' },
  { key: 'probation_end_date_1', label: 'Probation End 1' },
  { key: 'probation_end_date_2', label: 'Probation End 2' },
  { key: 'bg_level_equivalent', label: 'BG Level' },
  { key: 'supervisor_posno', label: 'Supervisor Posno' },
  { key: 'position_classification', label: 'Classification' },
]

const payrollFieldLabels = [
  { key: 'basic_salary', label: 'Basic Salary' },
  { key: 'salary_currency', label: 'Currency' },
  { key: 'salary_frequency', label: 'Frequency' },
  { key: 'transport_allowance', label: 'Transport' },
  { key: 'housing_allowance', label: 'Housing' },
  { key: 'dependent_allowance', label: 'Dependent' },
  { key: 'installation_allowance', label: 'Installation' },
  { key: 'arrival_shipping_allowance', label: 'Arrival Shipping' },
  { key: 'departure_shipping_allowance', label: 'Departure Shipping' },
  { key: 'health_insurance', label: 'Health Insurance' },
  { key: 'social_contribution', label: 'Social Contribution' },
  { key: 'life_insurance', label: 'Life Insurance' },
  { key: 'salary_taxes', label: 'Taxes' },
  { key: 'home_leave', label: 'Home Leave' },
  { key: 'flight_ticket', label: 'Flight Ticket' },
  { key: 'installation_assistance', label: 'Installation Assist.' },
]

const postFieldLabels = [
  { key: 'center', label: 'Center' },
  { key: 'country_duty_station', label: 'Country' },
  { key: 'city_duty_station', label: 'City' },
  { key: 'position_title', label: 'Position Title' },
  { key: 'grade', label: 'Grade' },
  { key: 'division', label: 'Division' },
  { key: 'program', label: 'Program' },
  { key: 'sub_unit', label: 'Sub Unit' },
  { key: 'education_level', label: 'Education' },
  { key: 'resources_type', label: 'Resource Type' },
  { key: 'contract_time', label: 'Contract Time' },
  { key: 'recruitment_type', label: 'Recruitment Type' },
  { key: 'country_of_recruitment', label: 'Recruitment Country' },
  { key: 'supervisor_name', label: 'Supervisor Name' },
  { key: 'supervisor_position', label: 'Supervisor Position' },
  { key: 'initiative_lead', label: 'Initiative Lead' },
  { key: 'initiative_personnel', label: 'Initiative Personnel' },
]
</script>


<template>
  <div class="space-y-4 mt-4" v-if=" sortedPosts.length>0">
    <div
      v-for="post in sortedPosts"
      :key="post.id"
      class="border rounded-md border-gray-200 bg-white"
    >
      <!-- En-tête accordéon -->
      <button
        @click="toggle(post.id)"
        class="w-full cursor-pointer flex justify-between items-center px-4 py-3 text-left focus:outline-none"
      >
        <div>
          <h3 class="font-semibold !text-sm text-zinc-800">
            {{ post.position_title ?? 'No title' }}
          </h3>
          <span class="text-sm text-zinc-600">
            Recrutement ID: {{ post.recrutement_id ?? '—' }}
          </span>
        </div>

        <span
          :class="[
            'inline-block px-3 py-1 rounded-full text-xs font-semibold',
            post.is_active === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
          ]"
        >
          {{ post.is_active }}
        </span>

        <svg
          :class="['transform transition-transform duration-300', isOpen(post.id) ? 'rotate-180' : 'rotate-0']"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Contenu accordéon -->
      <transition name="accordion" >
        <div v-show="isOpen(post.id)" class="px-4 pb-4">
          <!-- POST INFO -->
          <section class="mb-4">
            <h4 class="!text-[14px]   text-black font-bold mb-1">Post Information</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-zinc-800">
              <template v-for="field in postFieldLabels" :key="field.key">
                <div>
                  <span class="font-medium text-zinc-500">{{ field.label }}:</span> {{ post[field.key] ?? '—' }}
                </div>
              </template>
            </div>
          </section>

          <!-- CONTRACT -->
          <section class="mb-4">
            <h4 class="!text-[14px]   text-black font-bold mb-1">Contract Information</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-zinc-800">
              <template v-for="field in contractFieldLabels" :key="field.key">
                <div>
                  <span class="font-medium text-zinc-500">{{ field.label }}:</span> {{ post.contract?.[field.key] ?? '—' }}
                </div>
              </template>
            </div>
          </section>

          <!-- PAYROLL -->
          <section>
            <h4 class="!text-[14px]   text-black font-bold mb-1">Payroll Information</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-zinc-800">
              <template v-for="field in payrollFieldLabels" :key="field.key">
                <div>
                  <span class="font-medium text-zinc-500">{{ field.label }}:</span> {{ post.payroll?.[field.key] ?? '—' }}
                </div>
              </template>
            </div>
          </section>
        </div>
      </transition>
    </div>
  </div>
    <div v-else class="w-full mx-auto  p-4 border border-gray-200 bg-white  mt-3 rounded-md">
      <div class="text-center">no information available</div>
    </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 2000px;
  opacity: 1;
}
</style>
