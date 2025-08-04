
<script lang="ts" setup>
import { StaffManagerComponentCreateOrUpdatePayroll } from '#components';

const props = defineProps(['data','store','callback'])
const open=ref(false)
const loading =ref(false);
const setOpen=(state:boolean)=>{
  open.value = state
}
const payrollFieldLabels = [
  { key: 'basic_salary', label: 'Basic Salary' },
  { key: 'salary_currency', label: 'Salary Currency' },
  { key: 'salary_frequency', label: 'Salary Frequency' },
  { key: 'transport_allowance', label: 'Transport Allowance' },
  { key: 'housing_allowance', label: 'Housing Allowance' },
  { key: 'dependent_allowance', label: 'Dependent Allowance' },
  { key: 'installation_allowance', label: 'Installation Allowance' },
  { key: 'arrival_shipping_allowance', label: 'Arrival Shipping Allowance' },
  { key: 'departure_shipping_allowance', label: 'Departure Shipping Allowance' },
  { key: 'health_insurance', label: 'Health Insurance' },
  { key: 'social_contribution', label: 'Social Contribution' },
  { key: 'life_insurance', label: 'Life Insurance' },
  { key: 'salary_taxes', label: 'Salary Taxes' },
  { key: 'home_leave', label: 'Home Leave' },
  { key: 'flight_ticket', label: 'Flight Ticket' },
  { key: 'installation_assistance', label: 'Installation Assistance' },
  // { key: 'created_at', label: 'Created At' },
  // { key: 'updated_at', label: 'Updated At' }
]


const handleSubmit=async()=>{
    if (!confirm('Are you sure you want to submit this form?')) {
      return false; 
    }
    let items= props.data.payroll_actif ? {...props.data.payroll_actif} : {...props.store.initPayroll}

    if (!items.employee_id) {
      items.employee_id = props.data.employeeId
    }
    await props.store.createOrUpdatePayroll(items)
    await props.callback()
}
</script>

<template>
  <div>
  <!-- <pre> {{ data.payroll_actif }}</pre> -->
    <div class="w-full flex justify-between   my-4">
      <!-- <h5 class="!text-[13px]">Information Payroll</h5> -->
        <button 
        @click="setOpen(true)"
        type="button"  class="btns max-w-max !bg-white !text-black border border-gray-300">
          <span> edit</span>
          <i class="uil uil-pen"></i>
        </button>
    </div>
    <div class="w-full mx-auto  p-4 border border-gray-200 bg-white  mt-3 rounded-md">
        <div v-if="data.payroll_actif" class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div v-for="field in payrollFieldLabels" :key="field.key" >
              <strong class="text-[12px]">{{ field.label }}:</strong> {{ data.payroll_actif[field.key] ?? '—' }}
            </div>
        </div>
        <div v-else>
        <div class="text-center">no information available</div>
      </div>
    </div>
    <StaffManagerComponentCreateOrUpdatePayroll
    :payload="data.payroll_actif || store.initPayroll"
    :inputPairs="store.inputPairsPayroll"
    :action="handleSubmit"
    title="Information Payroll"
    :open="open"
    :close="()=>setOpen(false)"
    />
  </div>
</template>



<style>

</style>