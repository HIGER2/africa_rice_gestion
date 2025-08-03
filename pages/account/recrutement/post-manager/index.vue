
<script lang="ts" setup>
import { useJobViewModel } from '~/stores/viewmodels/jobViewModels';

const open = ref(false)
const close=(state:boolean)=>{
  open.value = state
}
const store=useJobViewModel()

let form =reactive({...store.fieldsInit})


const handleAll=async()=>{
  await store.all();

  console.log(store.jobs);
  
}
const handle=async()=>{

 let response  =await store.createOrUpdate(form)
}

onBeforeMount(()=>{
  handleAll()
})
</script>

<template>
  <div>
   <NuxtLayout >
          <div class="w-full">
              <div class=" w-full flex mb-4 justify-between items-center">
                  <h5>Post manager</h5>
                  <div class="flex items-center gap-2">
                      <button type="button" 
                      class="btns" @click="close(true)">
                      Add new post <i class="fi fi-sr-plus"></i></button>
                  </div>
              </div>
              <div class="w-full min-h-screen">
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <!-- {{  }} -->
                    <!-- Job Card -->
                     <template v-for="item in store.jobs">
                        <JobComponentJobCard :item="item"/>
                     </template>

                    <!-- Répéter les autres cartes ici comme Motion Graphic, SEO Specialist, etc. -->

                  </div>
              </div>

                
               <JobComponentCreateOrUpdate
               :payload="form"
               :inputPairs="store.inputPairs"
               :action="handle"
               title="Add new job"
               :open="open"
               :close="()=>close(false)"
               :callback="handleAll"
               />
          </div>
   </NuxtLayout>
  </div>
</template>


<style>

</style>