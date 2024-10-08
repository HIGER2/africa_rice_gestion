<script setup lang="ts">
import type { UpdateEmployeeType } from '~/composables';

    const store = useEmployeeViewModel();
    const { employee, updateEmployeeData} =storeToRefs(store);

const labels: Record<keyof UpdateEmployeeType, string> = {
//   employeeId: "Employee ID",
    role: "Employee Role",
    email: "Work Email",
    supervisorId: "Supervisor ID",
    personalEmail: "Personal Email",
    phone2: "Alternate Phone Number",
    phone: "Primary Phone Number",
    address: "Home Address",
    firstName: "First Name",
    lastName: "Last Name",
    password: "Password",
    jobTitle: "Job Title",
    category: "Employee Category",
    grade: "Employee Grade",
    // bgLevel: "Background Check Level",
    matricule: "Employee Matricule",
};

const isLoading = ref(false)

const handleUpdate = async () => {
    isLoading.value=true;
    await store.updateEmployee()
    isLoading.value=false;
}


// Exemple d'options pour un select
const jobOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'staff', label: 'Staff' },
  { value: 'consultant', label: 'Consultant' },
];

onMounted(() => {

    store.getEmployee()
})
</script>
<template>
    <div>
        <NuxtLayout>
            <div class="content">
                <div class="header">
                    <h5>Staff Information</h5>
                </div>

                    <form action="" @submit.prevent="handleUpdate">
                        <div class="mb-3" >
                            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                <div class="">
                                <div class="flex gap-2 align-center">
                                    <UiFormInput
                                    label="First name"
                                    placeholder="Enter the name"
                                    name="jobTitle"
                                    v-model="store.updateEmployeeData.firstName"
                                    />
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.lastName"
                                    label="Last name"
                                    placeholder="Enter the name"
                                    name="jobTitle"
                                    />
                                </div>
                                <div class="flex gap-2 align-center">
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.email"
                                    label="Email address"
                                    placeholder="Enter the email"
                                    name="jobTitle"
                                    />
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.jobTitle"
                                    label="Job title"
                                    placeholder="Enter the job title"
                                    name="jobTitle"
                                    />
                                </div>
                                <div class="flex gap-2 align-center">
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.matricule"
                                    label="Resno"
                                    placeholder="Enter the Resno"
                                    name="jobTitle"
                                    />
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.supervisor"
                                    label="Supervisor Email"
                                    placeholder="Enter the supervisor's email"
                                    name="jobTitle"
                                    />
                                </div>
                                <UiFormSelect
                                    v-model="store.updateEmployeeData.role"
                                    label="Select role"
                                    :options="jobOptions"
                                    name="jobTitle"
                                />
                                </div>
                            </UCard>
                        </div>
                        <div class="mb-3">
                            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                <div class="">
                                <div class="flex gap-2 align-center">
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.personalEmail"
                                    label="Personal Email"
                                    placeholder="Personal Email"
                                    name="jobTitle"
                                    />
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.address"
                                    label="Home Address"
                                    placeholder="Home Address"
                                    name="jobTitle"
                                    />
                                </div>
                                <div class="flex gap-2 align-center">
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.phone"
                                    label="Primary Phone Number"
                                    placeholder="Primary Phone Number"
                                    name="jobTitle"
                                    />
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.phone2"
                                    label="Alternate Phone Number"
                                    placeholder="Alternate Phone Number"
                                    name="jobTitle"
                                    />
                                </div>
                                <div class="flex gap-2 align-center">
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.category"
                                    label="Employee Category"
                                    placeholder="Employee Category"
                                    name="jobTitle"
                                    />
                                    <UiFormInput
                                    v-model="store.updateEmployeeData.grade"
                                    label="Employee Grade"
                                    placeholder="Employee Grade"
                                    name="jobTitle"
                                    />
                                </div>
                            
                                </div>
                            </UCard>
                        </div>
                        <UiButtonSubmit
                        type="submit"
                        label="Update account"
                        :isLoading="isLoading"
                        />
                    </form>

                     
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss">
.content {
    width: 500px;
    min-height: 100px;
    margin-inline: auto;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;
        h5 {
            color: $text-zinc-800;
            text-transform: capitalize;
            font-size: 1rem;
        }

        .btnadd {
            padding: 0.5rem 1rem;
            display: flex;
            justify-content: center;
            position: relative;
            border: 1px solid $zinc-300;
            align-items: center;
            font-size: 0.75rem;
            font-weight: 600;
            gap: 0.25rem;
            transition: all 0.2s ease-in-out;
            box-shadow: $shadow_sm;
            border-radius: 0.375rem;
            color: $text-zinc-800;
        }
    }
    .btn {
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
        position: relative;
        border: 1px solid $zinc-300;
        background-color: $primary_md;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 600;
        gap: 0.25rem;
        transition: all 0.2s ease-in-out;
        // box-shadow: $shadow_sm;
        border-radius: 0.375rem;
        color: $white;
        width: 100%;
    }
    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: $white;
        box-shadow: $shadow_sm;
        border: 1px solid $zinc-200;
        border-radius: $rounded-md;
        margin-bottom: 1rem;
        padding: 20px;

       
        .rowinput{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        .groupeInput {
            width: 100%;
            select,
            input {
                padding: 0.7rem 1rem;
                width: 100%;
                border: 1px solid $zinc-200;
                border-radius: $rounded-md;
                font-size: 0.74em;
            }
        }
    }
}
</style>