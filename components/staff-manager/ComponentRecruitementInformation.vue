
<script lang="ts" setup>
const props =defineProps(['data','store','callback'])

const jobFieldLabels = [
  // { key: 'id', label: 'ID' },
  // { key: 'uuid', label: 'UUID' },
  // { key: 'employee_id', label: 'Employee ID' },
  { key: 'center', label: 'Center' },
  { key: 'country_duty_station', label: 'Country Duty Station' },
  { key: 'city_duty_station', label: 'City Duty Station' },
  { key: 'position_title', label: 'Position Title' },
  { key: 'recrutement_id', label: 'Recrutment ID' },
  { key: 'contract_from', label: 'Contract Start Date' },
  { key: 'contract_to', label: 'Contract End Date' },
  { key: 'grade', label: 'Grade' },
  { key: 'division', label: 'Division' },
  { key: 'program', label: 'Program' },
  { key: 'sub_unit', label: 'Sub Unit' },
  { key: 'education_level', label: 'Education Level' },
  { key: 'resources_type', label: 'Resources Type' },
  { key: 'contract_time', label: 'Contract Time' },
  { key: 'is_active', label: 'Status' },
  { key: 'supervisor_name', label: 'Supervisor Name' },
  { key: 'supervisor_position', label: 'Supervisor Position' },
  { key: 'recruitment_type', label: 'Recruitment Type' },
  { key: 'country_of_recruitment', label: 'Country of Recruitment' },
  { key: 'cgiar_workforce_group', label: 'CGIAR Workforce Group' },
  { key: 'cgiar_group', label: 'CGIAR Group' },
  { key: 'cgiar_appointed', label: 'CGIAR Appointed' },
  { key: 'percent_time_other_center', label: 'Time at Other Center (%)' },
  { key: 'shared_working_arrangement', label: 'Shared Working Arrangement' },
  { key: 'initiative_lead', label: 'Initiative Lead' },
  { key: 'initiative_personnel', label: 'Initiative Personnel' },
  { key: 'salary_post', label: 'Salary' },
  // { key: 'created_at', label: 'Created At' },
  // { key: 'updated_at', label: 'Updated At' },
]

const recrutement_id =ref('')
const loading =ref(false)

const handleAssingn=async(data)=>{
  console.log(data?.uuid);
  
    let items={
      uuid:data?.uuid,
      recrutement_id:recrutement_id.value
    }
    loading.value =true
    await props.store.assignPostToEmployee(items)
    if (props.callback) await props.callback()
    loading.value = false
}

</script>

<template>
  <div>
   <!-- <pre> {{ data.poste_actif }}</pre> -->
      <div class="w-full mx-auto  p-4 border border-gray-200 bg-white  mt-3 rounded-md">
        
        <div v-if="data.poste_actif" class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div v-for="field in jobFieldLabels" :key="field.key">
            <strong class="text-[12px]">{{ field?.label }}:</strong> {{ data?.poste_actif[field?.key] ?? '—' }}
          </div>
        </div>
        <div v-else>
        <div class="w-2xs mx-auto flex flex-col">
          <form action=""
          @submit.prevent="handleAssingn(data)"
          >
            <h6>Assign recrutement to this employee</h6>
              <UiBaseInput
              v-model="recrutement_id"
              placeholder="Enter recrutement number"
              />
              <div class="mt-3">
                <UiButtonSubmit
                :is-loading="loading"
                label="Assign"
                />
              </div>
          </form>
         </div>
        </div>
      </div>
  </div>
</template>


<style>

</style>