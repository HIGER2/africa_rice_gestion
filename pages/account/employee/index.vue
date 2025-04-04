<script setup lang="ts">
import type { EmployeeType } from '~/composables';
import { useEmployeeViewModel } from '~/stores/viewmodels/employeeViewModels';

const isOpen = ref(false)
const useEmployee = useEmployeeViewModel();

const columns = [
    { label: 'Matricule', key: 'matricule' },
    { label: 'Name', key: 'name' },
    { label: 'Lastname', key: 'lastname' },
    { label: 'Supervisor', key: 'supervisor' },
//   { label: 'Employee ID', key: 'employeeId' },
    { label: 'Division', key: 'division' },
//   { label: 'Email', key: 'email' },
    { label: 'Job Title', key: 'jobTitle' },
//   { label: 'Supervisor', key: 'supervisor' },
//   { label: 'Role', key: 'role' }
]
let employeeList = ref([]);
const getEmployee = async () => {
    await useEmployee.getAllEmployee()
     employeeList.value = useEmployee.employee.map((employee: EmployeeType) => ({
   matricule: employee.matricule, 
     // employeeId: employee.employeeId.toString(),
        name: employee.firstName,
        lastname: employee.lastName,
        // Vous pouvez ajouter une logique pour générer le nom complet
    // email: employee.email,
    jobTitle: employee.jobTitle, // Supposons que role est le titre de poste
    division: employee.phone2,
    supervisor : employee.supervisorLastName+" "+ employee.supervisorFirstName ,
}));

}


onMounted(() => {

    getEmployee()
    // console.log(getEmployee);
})

// Liste d'employés exemple

// const employeeList = [
//     { resNo: 1, employeeId: '123', staffName: 'John Doe', email: 'john@example.com', jobTitle: 'Developer', supervisor: 'Jane', role: 'Staff' },
//     { resNo: 2, employeeId: '124', staffName: 'Jane Smith', email: 'jane@example.com', jobTitle: 'Manager', supervisor: 'John', role: 'Supervisor' },
//     { resNo: 2, employeeId: '124', staffName: 'Jane Smith', email: 'jane@example.com', jobTitle: 'Manager', supervisor: 'John', role: 'Supervisor' },
//     { resNo: 2, employeeId: '124', staffName: 'Jane Smith', email: 'jane@example.com', jobTitle: 'Manager', supervisor: 'John', role: 'Supervisor' },
    
// ];


const setOpen = (state:boolean) => {
    isOpen.value =state
}
function onRowClick(item: Record<string, any>, index: number) {
    navigateTo(`/account/employee/add?id=${item?.employeeId}`)
}
</script>
<template>
    <div>
        <NuxtLayout>
        <UModal v-model="isOpen" >
            <EmployeeCreateEmployeeComponent v-if="isOpen" 
            :setOpen="setOpen"
            /> 
        </UModal>
            <div class="content">
                <div class="header">
                    <h5>Employee</h5>
                    <button type="button" @click="setOpen(true)" class="btnadd">Add employee <i class="fi fi-sr-plus"></i></button>
                </div>
                <div class="content-table border border-zinc-200">
                    <div class="filterelement">
                        <div class="groupeInput">
                            <input type="search" name="" id="" placeholder="search for an employee">
                        </div>
                    </div>
                    <UiDynamicTable
                    :rowClick="onRowClick" 
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
        padding: 10px;
        // min-height: 100px;
        // height: 10px;
        background-color: $white;
        // box-shadow: $shadow_sm;
        // border: 1px solid $zinc-200;
        border-radius: $rounded-md;
        .filterelement{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;
            // background-color: $white;
            // box-shadow: $shadow_sm;
            // border: 1px solid $zinc-200;
            // border-radius: $rounded-md;
            margin-bottom: 1rem ;
            padding: 10px;
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
                    padding:0.6rem 1rem;
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
                    th {
                        padding: 20px 10px;
                        text-align: left;
                    }
                }
                tbody{
                    height: 10px;
                }

            tr {
                cursor: pointer;
                width: 100%;
                &:last-child{
                    border: none;
                }
                td {
                    padding: 15px 15px;
                    font-size: 12px;
                    text-align: left;
                }
            }
            
            }
        }
            
    }
}
</style>