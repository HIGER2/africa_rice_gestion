
<script lang="ts" setup>
import { JobComponentStaffDetail,JobComponentJobDetail } from '#components';


const store = useJobViewModel()

const open = ref(false)
const close=(state:boolean)=>{
  open.value = state
}

const data =ref();
const tabs= ref([
    { label: 'Job details', active: 1 },
    { label: 'Personal informations', active: 2 },
]);

const isActive =ref(1)
const toggleTab = (index: number) => {
     isActive.value =index
};

const components: Record<number, Component> = {
  1: JobComponentJobDetail,
  2: JobComponentStaffDetail,
};

const handleDetail=async()=>{
    const route = useRoute()
    console.log(route.params.uuid);
   let response  = await store.find(route.params.uuid)
   data.value = response.data
   console.log(data.value);
   
}


const handle=async()=>{
 let response  =await store.createOrUpdate(data.value)
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

               <!-- <pre> {{ data }}</pre>
               <pre> {{ store.fieldsInit }}</pre> -->
                <div class="flex items-center gap-2">
                    <div class="flex justify-between items-center w-full">
                        <span class="text-black uppercase font-black text-2xl">
                         {{ data?.position_title }}
                        </span>
                        <button 
                        @click="close(true)"
                        type="button"  class="btns max-w-max !bg-white !text-black border border-gray-300">
                        <span> edit</span>
                        <i class="uil uil-pen"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full flex mt-5 font-medium  text-base cursor-pointer items-center  border-b border-zinc-200 ">
                    <button 
                    v-for="(tab, index) in tabs"
                    @click="toggleTab(tab.active)"
                    :class="[
                        'max-w-max px-16 cursor-pointer text-[12px] text-center p-2 hover:bg-gray-100  duration-200 ease-in-out',
                        isActive == tab.active ? 'border-b-2 border-black text-black font-bold' : 'text-gray-500'
                    ]">
                    {{ tab.label }}
                    </button>
            </div>
            <div class="w-full border border-gray-200 bg-white p-2 mt-3 rounded-md">
                <Component :is="components[isActive]"  :item="data"/>
            </div>
        </div>
        <JobComponentCreateOrUpdate
            :payload="data"
            :inputPairs="store.inputPairs"
            :action="handle"
            title="Update job"
            :open="open"
            :close="()=>close(false)"
            :callback="handleDetail"
            />
     </NuxtLayout>
  </div>
</template>

<style>

</style>