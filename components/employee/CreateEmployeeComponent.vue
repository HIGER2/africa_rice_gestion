<script setup lang="ts">
import { ref } from 'vue'

const {newEmployee ,createEmployee}= useEmployeeViewModel()
// Utiliser defineProps avec des valeurs par défaut
interface TypeProps {
  setOpen?: (state: boolean) => void
}

const isLoading = ref(false)
// Props définies via defineProps
const props = defineProps<TypeProps>();


// Exemple d'options pour un select
const jobOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'staff', label: 'Staff' },
  { value: 'consultant', label: 'Consultant' },
];
const handleCreate = async () => {
    isLoading.value=true;
    await createEmployee()
    isLoading.value=false;
}
</script>

<template>
  <div>
    <!-- Utiliser :modelValue et @update:modelValue pour gérer la modal -->
      <UCard :ui="{ ring: '', with:'w-[200px]', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900">
              Create account
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="setOpen(false)"
            />
          </div>
        </template>

        <div class="card">
          <form action="" @submit.prevent="handleCreate">
                <div class="flex gap-2 align-center">
            <UiFormInput
              label="First name"
              v-model="newEmployee.firstName"
              placeholder="Enter the name"
              name="jobTitle"
            />
            <UiFormInput
              label="Last name"
              v-model="newEmployee.lastName"
              placeholder="Enter the name"
              name="jobTitle"
            />
          </div>
          <div class="flex gap-2 align-center">
            <UiFormInput
              label="Email address"
              v-model="newEmployee.email"
              placeholder="Enter the email"
              name="jobTitle"
            />
            <UiFormInput
              label="Job title"
              v-model="newEmployee.jobTitle"
              placeholder="Enter the job title"
              name="jobTitle"
            />
          </div>
          <div class="flex gap-2 align-center">
            <UiFormInput
              label="Resno"
              v-model="newEmployee.matricule"
              placeholder="Enter the Resno"
              name="jobTitle"
            />
            <UiFormInput
              label="Supervisor Email"
              v-model="newEmployee.supervisor"
              placeholder="Enter the supervisor's email"
              name="jobTitle"
            />
          </div>
          <!-- Utiliser un select avec des options dynamiques -->
          <UiFormSelect
            label="Select role"
              v-model="newEmployee.role"
            :options="jobOptions"
            name="jobTitle"
          />
          <UiButtonSubmit
          type="submit"
          label="Create account"
          :isLoading="isLoading"
          />
          </form>
        </div>
      </UCard>
   
  </div>
</template>

<style scoped>
/* Ajoutez votre style ici si nécessaire */
</style>
