
<script setup>
// const props = defineProps({
//   history: Array, // tableau contenant les objets d’historique avec contrat et payroll
// })
const props = defineProps(['data','store','callback'])

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
  <div class="grid gap-4 mt-3">
    <div
      v-for="record in data.postes"
      :key="record.id"
      class="rounded-md bg-white border border-zinc-200 p-4   transition-all"
    >
      <!-- Header: Recrutement ID & Status -->
      <div class="mb-6 flex items-center justify-between">
        <h2 class="!text-sm font-semibold text-zinc-800">Recrutement ID: {{ record.recrutement_id }}</h2>
        <span
          class="px-2 py-0.5 text-xs rounded-md font-medium"
          :class="record.is_active === 'active'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'"
        >
          {{ record.is_active }}
        </span>
      </div>

      <!-- POST -->
      <div class="space-y-2">
        <h3 class="!text-[14px]   text-black font-bold mb-1">📌 Information Recruitment</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5">
          <template v-for="field in postFieldLabels" :key="field.key">
            <div>
              <p class="text-[11px] text-zinc-500">{{ field.label }}</p>
              <p class="text-sm text-zinc-800">{{ record?.[field.key] ?? '—' }}</p>
            </div>
          </template>
        </div>
      </div>

      <!-- CONTRACT -->
      <div class="space-y-2 mt-4">
        <h3 class="!text-[14px]   text-black font-bold mb-1">📄 Contract Administrator</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5">
          <template v-for="field in contractFieldLabels" :key="field.key">
            <div>
              <p class="text-[11px] text-zinc-500">{{ field.label }}</p>
              <p class="text-sm text-zinc-800">{{ record.contract?.[field.key] ?? '—' }}</p>
            </div>
          </template>
        </div>
      </div>

      <!-- PAYROLL -->
      <div class="space-y-2 mt-4">
        <h3 class="!text-[14px]   text-black font-bold mb-1">💰 Information Payroll</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5">
          <template v-for="field in payrollFieldLabels" :key="field.key">
            <div>
              <p class="text-[11px] text-zinc-500">{{ field.label }}</p>
              <p class="text-sm text-zinc-800">{{ record.payroll?.[field.key] ?? '—' }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optionally add styles for light hover/focus cards */
</style>
