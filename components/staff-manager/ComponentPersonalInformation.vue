
<script lang="ts" setup>
const props =defineProps(['data'])


const link = computed(() => `http://localhost:3000/register-link/staff/${props.data?.uuid}`);
const copied = ref(false);
function format(value: any): string {
  return value === null || value === undefined || value === '' ? 'N/A' : value
}

function formatBoolean(value: boolean | number| null | undefined): string {
  if (value === true) return 'Yes'
  if (value === false) return 'No'
  if (value === 1) return 'Yes'
  if (value === 0) return 'No'
  return 'N/A'
}

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


</script>

<template>
      <!-- <pre>{{ data }}</pre> -->
    <div class="w-full">
        <!-- <span 
        @click="navigateTo(link,{external:true})"
        class="text-blue-600 underline break-all">{{ link }}</span> -->
      
         <button
        @click="copyToClipboard(link)"
        class="cursor-pointer mt-2 mb-2 inline-flex items-center justify-center gap-2 border-b py-2 text-[13px] font-medium text-zinc-800 underline-offset-1 underline border-zinc-300  hover:bg-zinc-100 transition-all duration-200 ease-in-out"
      >
        Click here to copy the link to send to the staff for update information
        <i class="uil uil-copy-alt text-lg"></i>
      </button>
        <p v-if="copied" class="text-green-600 text-sm mt-1">Copied to clipboard!</p>

  <div class="w-full mx-auto  p-4 border border-gray-200 bg-white  mt-3 rounded-md" v-if="data">
    <div>
      <!-- <pre>{{ data }}</pre> -->
        <h2 class="!text-sm font-medium text-gray-800 mb-4">👤 Personal Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[13px] text-gray-700">
          <div>
            <span class="font-medium text-gray-900">Full Name:</span>
            {{ format(data.firstName) }} {{ format(data.lastName) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Date of Birth:</span>
            {{ format(data.date_of_birth) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Gender:</span>
            {{ format(data.gender) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Marital Status:</span>
            {{ format(data.marital_status) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Number of Children:</span>
            {{ format(data.number_of_children) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Country of Birth:</span>
            {{ format(data.country_of_birth) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Nationality 1:</span>
            {{ format(data.nationality_1) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Nationality 2:</span>
            {{ format(data.nationality_2) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Passport/ID Card:</span>
            {{ format(data.indentity_number) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Social Security #:</span>
            {{ format(data.social_security_number) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Address:</span>
            {{ format(data.permanent_address) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Country of Residence:</span>
            {{ format(data.country_of_residence) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Town of Residence:</span>
            {{ format(data.town_of_residence) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Email CGIAR:</span>
            {{ format(data.email) }}
          </div>

           <div>
            <span class="font-medium text-gray-900">personal email:</span>
            {{ format(data.personalEmail) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Phone:</span>
            {{ format(data.phone) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Spouse Works:</span>
            {{ format(data.spouse_works) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Spouse Workplace:</span>
            {{ format(data.spouse_workplace) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Family Lives with Staff:</span>
            {{ format(data.family_living_with_staff) }}
          </div>

          <div>
            <span class="font-medium text-gray-900">Family Residence Location:</span>
            {{ format(data.family_residence_location) }}
          </div>

        </div>
    </div>


    

    <!-- 👨‍👩‍👧 Dependent -->

    <div v-if="data?.dependents.length" class="mt-4">
      <h2 class="!text-sm  text-gray-800 mb-4">👨‍👩‍👧 Dependent(s)</h2>
      <div v-for="(d, i) in data?.dependents" :key="i" class="bg-gray-100 p-4 rounded-lg mb-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[13px] text-gray-700">
              <div>
                <span class="font-medium text-gray-900">Full Name:</span>
                {{ format(d.full_name) }}
              </div>

              <div>
                <span class="font-medium text-gray-900">Relation:</span>
                {{ format(d.relation) }}
              </div>

              <div>
                <span class="font-medium text-gray-900">Gender:</span>
                {{ format(d.gender) }}
              </div>

              <div>
                <span class="font-medium text-gray-900">Date of Birth:</span>
                {{ format(d.date_of_birth) }}
              </div>

              <div>
                <span class="font-medium text-gray-900">School/Residence:</span>
                {{ format(d.residence_or_school) }}
              </div>

              <div>
                <span class="font-medium text-gray-900">Nationality:</span>
                {{ format(d.nationality) }}
              </div>

            </div>

      </div>
    </div>

      <!-- 🚨 Emergency Contacts -->
    <div v-if="data?.emergency_contacts?.length" class="mt-4">
      <h2 class="!text-sm font-bold text-gray-800 mb-4">🚨 Emergency Contact(s)</h2>

      <div
        v-for="(e, i) in data.emergency_contacts"
        :key="'emergency-' + i"
        class="bg-red-50 border border-red-200 rounded-lg p-5 mb-4"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[13px] text-gray-700">
          <div>
            <span class="font-medium text-gray-900">Name:</span>
            {{ format(e.name) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Relationship:</span>
            {{ format(e.relationship) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Address:</span>
            {{ format(e.address) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Email:</span>
            {{ format(e.email) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Phone:</span>
            {{ format(e.phone) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 💰 Beneficiaries -->
    <div v-if="data?.beneficiaries?.length" class="mt-4">
      <h2 class="!text-sm font-bold text-gray-800 mb-4">💰 Beneficiary(ies)</h2>

      <div
        v-for="(b, i) in data.beneficiaries"
        :key="'beneficiary-' + i"
        class="bg-green-50 border border-green-200 rounded-lg p-5 mb-4"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[13px] text-gray-700">
          <div>
            <span class="font-medium text-gray-900">Full Name:</span>
            {{ format(b.full_name) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Relationship:</span>
            {{ format(b.relationship) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Birthday:</span>
            {{ format(b.birthday) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Address:</span>
            {{ format(b.address) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Email:</span>
            {{ format(b.email) }}
          </div>
          <div>
            <span class="font-medium text-gray-900">Share (%):</span>
            {{ b.percentage_share ?? 'N/A' }}%
          </div>
        </div>
      </div>
    </div>

  </div>
    </div>
</template>


<style>

</style>