
<script lang="ts" setup>
import { StaffManagerComponentCreateOrUpdateContract } from '#components';

const props = defineProps(['data','store','callback'])

const contractFieldLabels = [
  // { key: 'id', label: 'ID' },
  // { key: 'uuid', label: 'UUID' },
  // { key: 'employee_id', label: 'Employee ID' },
  { key: 'resno', label: 'Resno' },
  { key: 'position_posno', label: 'Position Posno' },
  { key: 'type_of_contract', label: 'Type Of Contract' },
  { key: 'contract_start_date', label: 'Contract Start Date' },
  { key: 'contract_end_date', label: 'Contract End Date' },
  { key: 'probation_end_date_1', label: 'Probation End Date 1' },
  { key: 'probation_end_date_2', label: 'Probation End Date 2' },
  { key: 'bg_level_equivalent', label: 'Bg Level Equivalent' },
  { key: 'supervisor_posno', label: 'Supervisor Posno' },
  { key: 'position_classification', label: 'Position Classification' },
  // { key: 'created_at', label: 'Created At' },
  // { key: 'updated_at', label: 'Updated At' }
]


const open=ref(false)
const loading =ref(false);
const setOpen=(state:boolean)=>{
  open.value = state
}

const handleSubmit=async()=>{
    if (!confirm('Are you sure you want to submit this form?')) {
      return false; 
    }

    let items= props.data.contract_actif ? {...props.data.contract_actif} : {...props.store.initContract}

    if (!items.employee_id) {
      items.employee_id = props.data.employeeId
    } 
    await props.store.createOrUpdateContract(items)
    await props.callback()
}

</script>

<template>
  <div>
     <div class="w-full flex justify-between   my-4">
     <!-- <pre> {{ data.contract_actif }}</pre> -->
      <!-- <h5 class="!text-[13px]">Information Payroll</h5> -->
        <button 
        @click="setOpen(true)"
        type="button"  class="btns max-w-max !bg-white !text-black border border-gray-300">
          <span> edit</span>
          <i class="uil uil-pen"></i>
        </button>
    </div>
   <div class="w-full mx-auto  p-4 border border-gray-200 bg-white  mt-3 rounded-md">
      <div v-if="data.contract_actif" class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div v-for="field in contractFieldLabels" :key="field.key" >
            <strong class="text-[12px]">{{ field.label }}:</strong> {{ data.contract_actif[field.key] ?? '—' }}
          </div>
        </div>
        <div v-else>
        <div class="text-center">no information available</div>
      </div>
  </div>

  <StaffManagerComponentCreateOrUpdateContract
    :payload="data.contract_actif || store.initContract"
    :inputPairs="store.inputPairsContract"
    :action="handleSubmit"
    title="Contract Administrator"
    :open="open"
    :close="()=>setOpen(false)"
    />
  </div>
</template>


<style>

</style>