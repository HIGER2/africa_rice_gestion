<script setup lang="ts">
import { useEmployeeViewModel } from '~/stores/viewmodels/employeeViewModels';
import ComponentStaffDetailsCard from './ComponentStaffDetailsCard.vue';
const useStoreEmployee = useEmployeeViewModel();
const { employeeDraft } = storeToRefs(useStoreEmployee);

let employeeList = ref([]);
let showModal = ref(false);
let loading = ref(false);
const selectedRow = ref<Record<string, any> | null>(null);
const getAllEmployeeDraft = async () => {
    await useStoreEmployee.getAllEmployeeDraft()
}

function handleApprouved() {
  
}
onBeforeMount(() => {
    getAllEmployeeDraft()
})

function onRowClick(item: Record<string, any>, index: number) {
    selectedRow.value = item;
    showModal.value = true;
    console.log(JSON.stringify(selectedRow.value , null, 2));
    // navigateTo(`/account/employee/add?id=${item?.employeeId}`)
}



const handleApprove = async (item:any)=>{
  if (!confirm('Are you sure you want to submit?')) return

  loading.value = true
   await useStoreEmployee.approuvedEmployeeDraft(item.uuid)
   await   getAllEmployeeDraft()
    showModal.value = false;
    loading.value = false
}


</script>


<template>
  <div  class="content-table ">
        <div class="filterelement">
        <!-- <div class="groupeInput bg-white flex items-center gap-2 border border-zinc-200 rounded-md p-2 px-2">
            <i class="uil uil-search"></i>
            <input type="search" class="w-full text-[12px]" name="" id="" placeholder="search for an employee">
        </div> -->
    </div>
    <UiDynamicTable
    :rowClick="onRowClick" 
    :columns="useStoreEmployee.columnsDraft" 
    :data="employeeDraft" 
    
    />

    <UiBaseModal v-model="showModal">
      <template #title>
        <h2 class="!text-[16px]">STAFF DATA INFORMATION</h2>
      </template>

      <div class="w-2xl ">
        <ComponentStaffDetailsCard
        :user="selectedRow"
        :beneficiaries="selectedRow?.beneficiaries || []"
        :dependent="selectedRow?.dependents || []"
        :emergency="selectedRow?.emergency_contacts || []"
        
        />
      </div>
      <template #footer>
       <div class="flex justify-end items-center gap-2 text-sm">
            <button @click="showModal = false" type="button" class=" p-3 px-4 bg-gray-200 rounded-md">
              Close
            </button>
            <UiButtonSubmit
            @click="handleApprove(selectedRow)"
            :isLoading="loading"
            type="button"
            label=" Approuved"
            />
       </div>
      </template>
    </UiBaseModal>
</div>
</template>

<style>

</style>