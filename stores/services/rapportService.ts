import { Employee } from '../../composables/models/employee';
import { defineStore } from 'pinia';
import {saveAs} from "file-saver"
import type { EmployeeType, NewEmployeeType } from '~/composables';

export const  useRapportService = defineStore('rapportService', () => {
    // const useUtils =useUtilsStores()
    async function getAllEmployeeFilter(q:string) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/rapport/all/employee/by/filter${q}`,
                    success: async (res) => {
                        response = res.response.map((employee:EmployeeType) => new Employee(employee));
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

    async function exportEmployee(q:string="",date:string='') {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/rapport/export/employee${q && '/' + q}/${date && '/' + date}`,
                    resType:"blob",
                    success: async (res) => {
                        
                        let blob = new Blob([res])
                    //   const url = window.URL.createObjectURL(blob);
                    //     // Créer un lien temporaire pour déclencher le téléchargement
                    //     const link = document.createElement('a');
                    //     link.href = url;
                    //     link.setAttribute('download', 'employees.xlsx'); // Nom du fichier
                    //     document.body.appendChild(link);
                    //     link.click();
                    //     document.body.removeChild(link); // Supprimer le lien après le téléchargement

                        saveAs(blob, "world.xlsx");
                        // response = res.response.map((employee:EmployeeType) => new Employee(employee));
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
        getAllEmployeeFilter,
        exportEmployee
    }
})