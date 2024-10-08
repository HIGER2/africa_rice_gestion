
import { defineStore } from 'pinia'
import type { NewEmployeeType } from '~/composables';

export const useRapportViewModel = defineStore('RapportViewModel', () => {
    const rapportService = useRapportService()
    const rapportEmployee = ref();

    async function getAllEmployeeFilter(q:string){
        const { response, erreur } = await rapportService.getAllEmployeeFilter(q);
        if (!erreur) {
            rapportEmployee.value = response
        }
    }

    async function exportEmployee(q?:string,date?:string) {
        const { response, erreur } = await rapportService.exportEmployee(q);
        if (!erreur) {
            rapportEmployee.value = response
        }
    }

    return {
        getAllEmployeeFilter,
        rapportEmployee,
        exportEmployee
    }
})