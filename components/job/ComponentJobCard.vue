
<script lang="ts" setup>
defineProps(['item'])
</script>



<template>
 <div  
        @click="navigateTo(`/account/recrutement/post-manager/${item?.uuid}`)"
            class="bg-white p-5 rounded-xl border border-gray-300">
            <div class="text-sm text-gray-400 mb-2">Active until: <span class="font-medium text-black">
                {{ item?.contract_from }}
            </span></div>
            <h2 class="!text-sm font-semibold mb-2 uppercase">
                {{ item?.position_title }}
            </h2>
            <p class="text-gray-600 text-sm mb-4">
            Gathering and evaluating user requirements, in collaboration with product managers and engineers
            </p>
            <div class="flex flex-wrap gap-2">
            <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                {{ item?.cgiar_workforce_group }}
            </span>
            <span class="bg-gray-100 capitalize text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                {{ item?.contract_time }}
            </span>
            <span class="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                {{ item?.country_of_recruitment }}
            </span>
            </div>
        </div>
</template>

<style>

</style>