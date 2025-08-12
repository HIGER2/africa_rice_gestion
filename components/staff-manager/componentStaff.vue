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
const searchTerm = ref("")       // Texte tapé par l'utilisateur

const getEmployee = async () => {
    await useEmployee.getAllEmployee()
     employeeList.value = useEmployee.employee.map((employee: EmployeeType) => ({
        matricule: employee.matricule, 
        uuid: employee.uuid,
        employeeId: employee.employeeId.toString(),
        name: employee.firstName,
        lastname: employee.lastName,
        jobTitle: employee.jobTitle, // Supposons que role est le titre de poste
        division: employee.phone2,
        supervisor : employee.supervisorLastName+" "+ employee.supervisorFirstName ,
}));

}

const tabs= ref([
    { label: 'List of staff', active: true },
    { label: 'List of inscrition', active: false }
]);

const toggleTab = (index: number) => {
    tabs.value.forEach((tab, i) => {
        tab.active = i === index;
    });
};


onMounted(() => {

    getEmployee()
    // console.log(getEmployee);
})

const filteredEmployees = computed(() => {
  if (!searchTerm.value.trim()) {
    return employeeList.value // si recherche vide, tout afficher
  }
  
  const term = searchTerm.value.toLowerCase()
  return employeeList.value.filter(emp =>
    (emp.name || "").toLowerCase().includes(term) || // correspond à firstName
    (emp.lastname || "").toLowerCase().includes(term) // correspond à lastName
  )
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
    console.log(item);
    navigateTo(`/account/staff-manager/staff/${item?.uuid}`)
}
</script>


<template>
    <div  class="content-table ">
        <div class="filterelement flex items-center justify-end mb-2 gap-2">
            <div class="max-w-max mb-2 bg-white flex items-center gap-2 border border-zinc-200 rounded-md p-2 px-2">
                <i class="uil uil-search"></i>
                <input type="search"
                v-model="searchTerm"
                class="w-full text-[12px]" name="" id="" placeholder="search for an employee">
            </div>
            <button @click="setOpen(true)" type="button" class="max-w-max mb-2  cursor-pointer bg-white flex items-center gap-2 border border-zinc-200 rounded-md p-2 px-2">
                <span>Import</span>
                <i class="uil uil-import"></i>
            </button>
    </div>
    <UiBaseModal v-model="isOpen" title="Import data">
        <template #title>
                <span>Import</span>
        </template>
       <StaffManagerComponentImport :store="useEmployee"/>
    </UiBaseModal>
    <UiDynamicTable
    :rowClick="onRowClick" 
    :columns="columns" 
    :data="filteredEmployees" />
</div>
</template>

<style>

</style>e