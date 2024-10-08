<script setup lang="ts">

import type { EmployeeType } from '~/composables';
import { useEmployeeViewModel } from '~/stores/viewmodels/employeeViewModels';
import { useRapportViewModel } from '~/stores/viewmodels/rapportViewModels';


const useRapport = useRapportViewModel();
const filter = ref();
let employeeList = ref([]);

type ItemType = {
    value: number;
    label: string;
  };

const columns = [
  { label: 'Res No', key: 'matricule' },
  { label: 'Employee ID', key: 'employeeId' },
  { label: 'Staff Name', key: 'staffName' },
  { label: 'Email', key: 'email' },
  { label: 'Job Title', key: 'jobTitle' },
  { label: 'Supervisor', key: 'supervisor' },
  { label: 'Role', key: 'role' }
]


const itemFilter: ItemType[] = [
    { label: "staffs who have submitted their objectives", value: 1 },
    { label: "staffs who have not submitted", value: 2 },
    { label: "staffs whose objectives have been approved", value: 3 },
    { label: "staffs whose objectives have been rejected", value: 4 },
    { label: "staff who have submitted their evaluation", value: 5 },
    { label: "staff who have not submitted their evaluation", value: 6 },
    { label: "staffs whose evaluations have been finalized", value: 7 },
    { label: "staffs whose evaluations have not been finalized", value: 8 },
];


const getEmployee = async (q:string = '') => {
    await useRapport.getAllEmployeeFilter(q)
    employeeList.value = useRapport.rapportEmployee.map((employee: EmployeeType) => ({
    matricule: employee.matricule, 
    employeeId: employee.employeeId.toString(),
    staffName: employee.firstName +" "+ employee.lastName, // Vous pouvez ajouter une logique pour générer le nom complet
    email: employee.email,
    jobTitle: employee.role, // Supposons que role est le titre de poste
    supervisor:employee.supervisor ? employee.supervisor?.firstName+" "+ employee.supervisor?.lastName : "N/A",
    role: employee.role.charAt(0).toUpperCase() + employee.role.slice(1) // Capitaliser la première lettre du rôle
}));

}


const handelExportEmployee = async (q: string = '', date: string = '') => {
    await useRapport.exportEmployee(q,date) 
}


watch(() => filter.value, (value:string) => {
    getEmployee(value)
})


onMounted(() => {
    getEmployee()
    // console.log(getEmployee);
})



</script>
<template>
    <div>
        <NuxtLayout>
            <div class="content">
                <div class="header">
                    <h5>Rapport</h5>
                    <!-- <NuxtLink to="employee/add" class="btnadd">Add employee <i class="fi fi-sr-plus"></i></NuxtLink> -->
                </div>
                <div class="content-table">
                    <div class="filterelement">
                        <!-- <UiFormInput
                        placeholder="Search staff"
                        name="jobTitle"
                        /> -->
                        <UiFormSelect
                            :options="itemFilter"
                            name="jobTitle"
                            :placeholder="filter ? 'View all' : 'filter by ' "
                            v-model="filter"
                        />
                            <!-- @change="onSelectChange" -->
                        <button class="btn"
                        @click="handelExportEmployee(filter)"
                        >
                            Export
                            <i class="uil uil-export"></i>
                        </button>
                    </div>
                    
                    <UiDynamicTable
                    :columns="columns" :data="employeeList" />
                </div>  
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss">
.content{
    width: 100%;
    min-height: 100px;
       .btnadd{
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
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        h5{
            color: $text-zinc-800;
            text-transform: capitalize;
            font-size: 1rem;
        }
     
    }
    .content-table{
        width: 100%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        // min-height: 100px;
        // height: 10px;
        background-color: $white;
        box-shadow: $shadow_sm;
        border: 1px solid $zinc-200;
        border-radius: $rounded-md;
        .filterelement{
            width: 500px;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            margin-bottom: 1rem ;
            padding: 10px;
            margin-left: auto;
            .btn{
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
            .groupeInput{
                width: 30%;
                select,input{
                    padding:0.5rem 1rem;
                    width: 100%;
                    border: 1px solid $zinc-200;
                    border-radius: $rounded-md;
                    font-size: 0.74em;
                }
            }
        }
        .table{
            width: 100%;
            table {
                width: 100%;
                border-collapse: collapse;
                justify-content: space-between;
                thead {
                  border-bottom: 1px solid $zinc-200;
                    th {
                        padding: 20px 10px;
                        font-size: 12px;
                        text-align: left;
                    }
                }
                tbody{
                    height: 10px;
                }

            tr {
                cursor: pointer;
                border-bottom: 1px solid $zinc-200;
                width: 100%;
                &:last-child{
                    border: none;
                }
                td {
                    padding: 15px 15px;
                    font-size: 14px;
                    text-align: left;
                    font-weight: 300;
                    width: calc(100% / 7);
                }
            }
            
            }
        }
            
    }
}
</style>