<script setup lang="ts">
import type { StepType } from '~/composables';
import { useSettingViewModel } from '~/stores/viewmodels/settingViewModels';

const storeSetting = useSettingViewModel();
const isLoading=ref(false);


const handleGet = async () => {
    await Promise.all([storeSetting.getSetting(), storeSetting.getStep()]);

}

const handleUpdateSetting = async () => {
    isLoading.value=true;
   await storeSetting.updateSetting()
    isLoading.value=false;
}


const handleUpdateStep = async (item :StepType) => {
    // isLoading.value=true;
   await storeSetting.updateStep(item)
    // isLoading.value=false;
}
// const label 
const evaluation: string[] = [
    "SETTING_MIN_OBJ",
    "SETTING_MAX_OBJ",
    "SETTING_MIN_CHAR",
    "SETTING_MAX_CHAR",
    "EVALUATION_QUESTION_1",
    "EVALUATION_QUESTION_2",
    "EVALUATION_QUESTION_3",
    "EVALUATION_QUESTION_4",
    "EVALUATION_QUESTION_5",
    "EVALUATION_QUESTION_FR_1",
    "EVALUATION_QUESTION_FR_2",
    "EVALUATION_QUESTION_FR_3",
    "EVALUATION_QUESTION_FR_4",
    "EVALUATION_QUESTION_FR_5",
];


onMounted(() => {
    handleGet()  
})
</script>
<template>
    <div>
        <NuxtLayout>
            <div class="content">
                <div class="header">
                    <!-- {{ storeSetting.step }} -->
                    <h5>Setting</h5>
                    <!-- <NuxtLink to="" class="btnadd">Add employee <i class="fi fi-sr-plus"></i></NuxtLink> -->
                </div>
                <div class="content-table">
                    <h5>Evaluation deadlines</h5>
                    <UCard class="mb-5" :ui="{ ring: '', divide: 'divide-y divide-gray-100  dark:divide-gray-800' }">
                            <div >
                               <form class="rowinput" v-for="(item, index) in storeSetting.step" :key="index" action="" @submit.prevent="handleUpdateStep(item)">
                                    <div class="groupeInput">
                                            <input type="date" name="" id="" v-model="item.dateFrom" placeholder="date for an employee">
                                        </div>
                                        <div class="groupeInput">
                                            <input type="date" name="" v-model="item.dateTo" id="" placeholder="search for an employee">
                                        </div>
                                        <UiButtonSubmit
                                        type="submit"
                                        label="Update"
                                        />
                                </form>
                            </div>
                        </UCard>
                    
                        <form action="" @submit.prevent="handleUpdateSetting">
                         <h5>Evaluation questions</h5>
                            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                <div class="groupeInput inputrow" v-for="(item, index) in storeSetting.setting" :key="index">
                                <label for="">{{ item?.label }}</label>
                                <textarea name="" id="" cols="30" v-model="item.value" rows="3" placeholder=""></textarea>
                            </div>
                        </UCard>
                        
                            <UiButtonSubmit
                            :is-loading="isLoading"
                            type="submit"
                            label="Update setting"
                            />
                    </form>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss">
.content {
    width: 600px;
    min-height: 100px;
    margin-inline: auto;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;

        h5 {
            color: $text-zinc-800;
            text-transform: capitalize;
            font-size: 1rem;
        }

        .btnadd {
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
    }

    .btn {
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
        position: relative;
        border: 1px solid $zinc-300;
        background-color: $primary_md;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 600;
        gap: 0.25rem;
        transition: all 0.2s ease-in-out;
        // box-shadow: $shadow_sm;
        border-radius: 0.375rem;
        color: $white;
    }
         h5 {
             font-size: 0.8rem;
             margin-bottom: 10px;
            //  color: red;
         }

   .rowinput {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .groupeInput {
            width: 100%;
            &.inputrow{
                // display: flex;
                // gap: 20px;
            }
            label{
                font-size: 0.8rem;
                margin-bottom: 20px;
                text-transform: lowercase;

            }
            textarea{
                resize: none;
            }
        textarea, select,
            input {
                padding: 0.7rem 1rem;
                width: 100%;
                border: 1px solid $zinc-200;
                border-radius: $rounded-md;
                font-size: 0.74em;
            }
        }
}
</style>