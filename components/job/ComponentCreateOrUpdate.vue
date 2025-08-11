
<script lang="ts" setup>

interface TableProps {
    payload: any,
    inputPairs:any,
    action: () => Promise<any>,
    callback?: () => Promise<any>,
    title:string,
    close:()=>void,
    open: boolean
}
const props = defineProps<TableProps>()
const loading=ref(false)
const handelAction=async()=>{
   if (!confirm('Are you sure you want to submit?'))  return false
    loading.value =true
    await props.action()
    if (props.callback) await props.callback()
    loading.value = false
}
</script>

<template>
    <div>
    <ui-right-modal :show="open" :title="title" @close="close">
        <form 
                @submit.prevent="handelAction"
                action="">
                    <div
                    v-for="(pair, index) in inputPairs"
                    :key="index"
                    class="flex items-end gap-2"
                  >
                  <template  v-for="(input, i) in pair" :key="input.key">
                    <UiBaseSelect
                    v-if="input.component === 'select'"
                    :label="input.label"
                    :options="input.options"
                    :placeholder="input.placeholder"
                    v-model="payload[input.key]"
                  />
                    <ui-base-input
                      v-else
                      :label="input.label"
                      :type="input.type"
                      :placeholder="input.placeholder"
                      v-model="payload[input.key]"
                    />
                  </template>
                    <!-- <ui-base-input
                      v-for="(input, i) in pair"
                      :key="input.key"
                      :label="input.label"
                      :type="input.type"
                      :placeholder="input.placeholder"
                      v-model="payload[input.key]"
                    /> -->
                  </div>
                  <div class="flex w-full mt-4 items-center justify-end gap-2">
                    <button type="button" @click="close" class="btns max-w-max !bg-white !text-black border border-gray-300">
                      Cancel
                    </button>
                    <div>
                    <ui-button-submit
                    :is-loading="loading"
                    label="Submit now"
                    />
                    </div>
                  </div>
        </form>
    </ui-right-modal>

  </div>
</template>

<style>

</style>