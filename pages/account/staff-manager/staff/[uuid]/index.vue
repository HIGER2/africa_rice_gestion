
<script lang="ts" setup>
import ComponentContractAdministrator from '~/components/staff-manager/ComponentContractAdministrator.vue';
import ComponentIformationPayroll from '~/components/staff-manager/ComponentIformationPayroll.vue';
import ComponentPersonalInformation from '~/components/staff-manager/ComponentPersonalInformation.vue';
import ComponentRecruitementInformation from '~/components/staff-manager/ComponentRecruitementInformation.vue';


const store = useEmployeeViewModel()
const data =ref();
const tabs= ref([
    { label: 'Personal information', active: 1 },
    { label: 'Information Recruitment', active: 2 },
    { label: 'Information Payroll', active: 3 },
    { label: 'Contract Administrator', active: 4},
]);

const isActive =ref(1)
const component: { [key: number]: Component } = {
  1: ComponentPersonalInformation,
  2: ComponentRecruitementInformation,
  3: ComponentIformationPayroll,
  4: ComponentContractAdministrator
};
const toggleTab = (index: number) => {
     isActive.value =index
};

const handleDetail=async()=>{
   data.value = await store.employeeDetail()
}

onBeforeMount(()=>{
    handleDetail()
})
</script>



<template>
  <div>
     <NuxtLayout >
        <div class="w-full">

            <div class="w-full">
                <!-- <pre>{{ data }}</pre> -->
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