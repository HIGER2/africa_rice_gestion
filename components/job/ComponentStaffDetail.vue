

<script lang="ts" setup>

const props=defineProps(['item'])

const link = computed(() => `http://localhost:3000/register-link/recrutement/create/${props.item?.recrutement_id}`);
const copied = ref(false);

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => {
    //   alert("Link copied!");
     copied.value = true;
      setTimeout(() => copied.value = false, 2000);
    })
    .catch((err) => {
      console.error("Copy failed:", err);
    });
}


const employeeFieldLabels = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'gender', label: 'Gender' },
  { key: 'date_of_birth', label: 'Date of Birth' },
  { key: 'country_of_birth', label: 'Country of Birth' },
  { key: 'nationality_1', label: 'Nationality 1' },
  { key: 'nationality_2', label: 'Nationality 2' },
  { key: 'indentity_number', label: 'Identity Number' },
  { key: 'social_security_number', label: 'Social Security Number' },
  { key: 'permanent_address', label: 'Permanent Address' },
  { key: 'country_of_residence', label: 'Country of Residence' },
  { key: 'town_of_residence', label: 'Town of Residence' },
  { key: 'phone', label: 'Phone' },
  { key: 'personal_email', label: 'Personal email' },
  { key: 'marital_status', label: 'Marital Status' },
  { key: 'number_of_children', label: 'Number of Children' },
  { key: 'family_living_with_staff', label: 'Family Living With Staff' },
  { key: 'family_residence_location', label: 'Family Residence Location' },
  { key: 'spouse_works', label: 'Spouse Works' },
  { key: 'spouse_workplace', label: 'Spouse Workplace' }
]
</script>


<template>
  <div class="w-full">
    <!-- <pre>{{ props.item }}</pre> -->
     <div v-if="item?.employee"  class="max-w-4xl mx-auto  p-6 bg-white rounded-2xl">

    <div v-if="item" class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
      <div v-for="field in employeeFieldLabels" :key="field.key">
        <strong class="text-[12px]">{{ field.label }}:</strong>
        {{ item?.employee[field.key] ?? '—' }}
      </div>
    </div>
  </div>
    <div v-else class=" flex-col h-96 w-full flex items-center justify-center">

        <!-- <span class="text-gray-600 mb-3  text-center block">
            No information found.
        </span> -->

    <!-- {{ item.employee }} -->
         <p class="mb-2 text-sm text-zinc-600">
         Link to share with the staff:
        <span 
        @click="navigateTo(link,{external:true})"
        class="text-blue-600 underline break-all">{{ link }}</span>
        </p>

      <button
        @click="copyToClipboard(link)"
        class="cursor-pointer mb-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-[13px] font-medium text-zinc-800 border border-zinc-300 rounded-md hover:bg-zinc-100 transition-all duration-200 ease-in-out"
      >
        Click here to copy the link to send to the staff
        <i class="uil uil-copy-alt text-lg"></i>
      </button>

        <p v-if="copied" class="text-green-600 text-sm mt-1">Copied to clipboard!</p>
    </div>
  </div>
</template>


<style>

</style>