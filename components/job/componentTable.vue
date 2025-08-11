
<script lang="ts" setup>
defineProps(['item'])
// navigateTo(`/account/recrutement/post-manager/${item?.uuid}`)

const columns = [
  { label: 'Recrutement id', key: 'recrutement_id' },
  { label: 'Center', key: 'center' },
  { label: 'Is Active', key: 'is_active' },
      { label: 'Country Duty Station', key: 'country_duty_station' },
  { label: 'City Duty Station', key: 'city_duty_station' },
  { label: 'Position Title', key: 'position_title' },

//   { label: 'Recrutement ID', key: 'recrutement_id' },
//   { label: 'Contract From', key: 'contract_from' },
//   { label: 'Contract To', key: 'contract_to' },
  { label: 'Date', key: 'date' },
  { label: 'Grade', key: 'grade' },
  { label: 'Division', key: 'division' },
  { label: 'Program', key: 'program' },
  { label: 'Sub Unit', key: 'sub_unit' },
  { label: 'Education Level', key: 'education_level' },
  { label: 'Resources Type', key: 'resources_type' },
//   { label: 'Contract Time', key: 'contract_time' },
//   { label: 'Supervisor Name', key: 'supervisor_name' },
//   { label: 'Supervisor Position', key: 'supervisor_position' },
//   { label: 'Recruitment Type', key: 'recruitment_type' },
  { label: 'Country Of Recruitment', key: 'country_of_recruitment' },
//   { label: 'CGIAR Workforce Group', key: 'cgiar_workforce_group' },/
//   { label: 'CGIAR Group', key: 'cgiar_group' },
//   { label: 'CGIAR Appointed', key: 'cgiar_appointed' },
//   { label: 'Percent Time Other Center', key: 'percent_time_other_center' },
//   { label: 'Shared Working Arrangement', key: 'shared_working_arrangement' },
//   { label: 'Initiative Lead', key: 'initiative_lead' },
  { label: 'Initiative Personnel', key: 'initiative_personnel' },
  { label: 'Salary Post', key: 'salary_post' },
  { label: 'Date', key: 'date' }
]


function onRowClick(item: Record<string, any>, index: number) {
    navigateTo(`/account/recrutement/post-manager/${item?.uuid}`)
}

</script>


<template>
    <UiDynamicTable
    :rowClick="onRowClick" 
    :columns="columns" 
    :data="item || []" />
</template>

<style>

</style>