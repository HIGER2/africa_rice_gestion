
<script lang="ts" setup>
import ComponentContractAdministrator from '~/components/staff-manager/ComponentContractAdministrator.vue';
import ComponentHistory from '~/components/staff-manager/ComponentHistory.vue';
import ComponentIformationPayroll from '~/components/staff-manager/ComponentIformationPayroll.vue';
import ComponentPersonalInformation from '~/components/staff-manager/ComponentPersonalInformation.vue';
import ComponentRecruitementInformation from '~/components/staff-manager/ComponentRecruitementInformation.vue';


const store = useEmployeeViewModel()
const data =ref();
const loading=ref(false)
const tabs= ref([
    { label: 'Personal information', active: 1 },
    { label: 'Information Recruitment', active: 2 },
    { label: 'Contract Administrator ', active: 3 },
    { label: 'Information Payroll', active: 4},
    { label: 'History', active: 5},
]);

const isActive =ref(1)
const component: { [key: number]: Component } = {
  1: ComponentPersonalInformation,
  2: ComponentRecruitementInformation,
  3: ComponentContractAdministrator,
  4: ComponentIformationPayroll,
  5: ComponentHistory
};
const toggleTab = (index: number) => {
     isActive.value =index
};

const handleDetail=async()=>{
   data.value = await store.employeeDetail()
}

const handleReplicate =async(data)=>{
    loading.value =true
     await store.replicatePosition(data?.uuid)
     await   handleDetail()
    loading.value = false
    isActive.value =5
}
onBeforeMount(()=>{
    handleDetail()
})
</script>



<template>
  <div>
     <NuxtLayout >
        <div class="w-full">

            <div class="w-full flex justify-between items-center ">
                <!-- <pre>{{ data?.postes }}</pre> -->
                <div class="flex items-center gap-2">
                    <div class="w-18 h-18 border border-gray-200 bg-white rounded-full leading-18 text-center text-4xl">
                        <i class="uil uil-user"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-black font-medium text-xl">
                            {{ data?.lastName+' '+data?.firstName }}
                        </span>
                        <span class="text-sm">{{ data?.matricule || 'N/a' }}</span>
                    </div>
                </div>
                <div class="max-w-max">
                    <UiButtonSubmit 
                    @click="handleReplicate(data)"
                    :is-loading="loading"
                    type="button"
                 class="flex  bg-white items-center"
                label="Replicate" icon="fi fi-sr-plus" />
                </div>
            </div>
            
            <div class="w-full flex mt-5 justify-between font-medium  text-base cursor-pointer items-center  border-b border-zinc-200 ">
                    <button 
                    v-for="(tab, index) in tabs"
                    @click="toggleTab(tab.active)"
                    :class="[
                        'w-full cursor-pointer text-[12px] text-center p-2 hover:bg-gray-100  duration-200 ease-in-out',
                        isActive == tab.active ? 'border-b-2 border-black text-black font-bold' : 'text-gray-500'
                    ]">
                    {{ tab.label }}
                    </button>
            </div>
            <div class="w-full ">
               <KeepAlive>
                <component 
                :callback="handleDetail"
                :is="component[isActive]"
                :data="data"
                :store="store"
                />
               </KeepAlive>
            </div>
        </div>

     </NuxtLayout>
  </div>
</template>

<style>

</style>