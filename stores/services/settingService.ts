import { Employee } from '../../composables/models/employee';
import { defineStore } from 'pinia';

import type { EmployeeType, NewEmployeeType, SettingType, StepType } from '~/composables';
import { Setting, Step } from '~/composables/models/setting';

export const  useSettingService = defineStore('settingService', () => {
    // const useUtils =useUtilsStores()
    const toast = useToast()

    async function getSetting() {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `setting/get/setting`,
                    success: async (res) => {
                        response = res.response.map((setting: SettingType) => new Setting(setting));
                    },
                    error: (err) => {
                        erreur = err
                    }
                })
                return {
                    response,
                    erreur
                }
    }

    async function updateSetting(item :SettingType) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/setting/update/setting`,
                    methods: 'POST',
                    body:item,
                    success: async (res) => {
                    toast.add({ title: 'Operation completed successfully' })

                    },
                    error: (err) => {
                        erreur = err
                    }
                })
                return {
                    response,
                    erreur
                }
    }

    async function updateStep(item :StepType) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/setting/update/step`,
                    methods: 'POST',
                    body:item,
                    success: async (res) => {
                    toast.add({ title: 'Operation completed successfully' })

                    },
                    error: (err) => {
                        erreur = err
                    }
                })
                return {
                    response,
                    erreur
                }
    }

    async function getStep() {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/setting/get/step`,
                    success: async (res) => {
                        response = res.response.map((step:StepType) => new Step(step));
                    },
                    error: (err) => {
                        erreur = err
                    }
                })
                return {
                    response,
                    erreur
                }
    }

    return {
        getSetting,
        getStep,
        updateSetting,
        updateStep
    }
})