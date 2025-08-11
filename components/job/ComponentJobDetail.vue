
<script lang="ts" setup>
const props =defineProps(['item'])

const excludedKeys = ['id', 'created_at', 'updated_at', 'employee_id', 'employee']

const filteredRecruitment = computed(() => {
  const source = props.item ?? {}
  const result: Record<string, any> = {}

  for (const [key, value] of Object.entries(source)) {
    if (!excludedKeys.includes(key)) {
      result[key] = value
    }
  }

  return result
})

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

</script>

<template>
    <div class="max-w-4xl mx-auto mt-10 p-6 bg-white  rounded-2xl">
      <!-- {{ item }} -->
    <div v-if="item" class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
      <div v-for="field in jobFieldLabels" :key="field.key">
      <strong class="text-[12px]">{{ field.label }}:</strong> {{ item[field?.key] ?? '—' }}
    </div>
<!--        
      <div><strong>Recruitment Type:</strong> {{ item?.recruitmentType }}</div>
      <div><strong>Resources Type:</strong> {{ item?.resourcesType }}</div> -->

    </div>
  </div>
</template>


<style>

</style>