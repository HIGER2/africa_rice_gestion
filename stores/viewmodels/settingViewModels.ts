
import { defineStore } from 'pinia'
import type { NewEmployeeType, StepType } from '~/composables';
import { useSettingService } from '../services/settingService';

export const useSettingViewModel = defineStore('SettingViewModel', () => {
    const settingService = useSettingService()
    const setting = ref();
    const step = ref();

    const initialSetting = {
        settingId: "",
        label: "",
        name: "",
        value: "",
    }

    const initialStep = {
       stepId: "",
        name: "",
        message: "",
        messageFr: "",
        active: "",
        dateFrom: "",
        dateTo: "",
        sent: "",
    }

    const newSetting =reactive({...initialSetting})
    const newStep = reactive({ ...initialStep})
    
    async function getSetting(){
        const { response, erreur } = await settingService.getSetting();
        if (!erreur) {

            setting.value = response

            // Object.assign(newSetting,response)
        }
    }

    async function updateSetting() {
        const { response, erreur } = await settingService.updateSetting(setting.value);
        if (!erreur) {
            // Object.assign(newSetting,response)
        }
    }
    async function getStep(){
        const { response, erreur } = await settingService.getStep();
        if (!erreur) {
            step.value = response;
        }
    }

    async function updateStep(item: StepType) {
        const { response, erreur } = await settingService.updateStep(item);
        if (!erreur) {
            // Object.assign(newSetting,response)
        }
    }

    return {
        getSetting,
        getStep,
        setting,
        updateSetting,
        step,
        updateStep
    }
})