
import { defineStore } from 'pinia'
import type { NewEmployeeType } from '~/composables';

export const useRapportViewModel = defineStore('RapportViewModel', () => {
    const rapportService = useRapportService()
    const rapportEmployee = ref([]);
    const columns = [
        { label: '# Matricule', key: 'matricule' },
        { label: 'EmployeeLastName', key: 'firstName' },
        { label: 'EmployeeFirstName', key: 'lastName' },
        { label: 'Title', key: 'title' },
        { label: 'SupervisorLastName', key: 'supervisorLastName' },
        { label: 'SupervisorFirstName', key: 'supervisorFirstName' },
        { label: 'Division', key: 'division' },
    ]
        function buildColumns(data: any[]): { label: string; key: string }[] {
                const baseColumns: { [key: string]: string } = {
                    matricule: '# Matricule',
                    firstName: 'EmployeeLastName',
                    lastName: 'EmployeeFirstName',
                    title: 'Title',
                    supervisorLastName: 'SupervisorLastName',
                    supervisorFirstName: 'SupervisorFirstName',
                    division: 'Division',
                    year: 'ObjectiveYear', // ici on laisse year mais il sera ajouté UNIQUEMENT s'il existe dans les données
                };

                // Récupère toutes les clés présentes dans au moins un objet
                const presentKeys = new Set<string>();
                data.forEach((item) => {
                    Object.keys(item).forEach((key) => {
                    if (item[key] !== undefined && item[key] !== null) {
                        presentKeys.add(key);
                    }
                    });
                });

                // Génère les colonnes en gardant l'ordre défini dans baseColumns
                const columns: { key: string; label: string }[] = [];

                for (const key of Object.keys(baseColumns)) {
                    if (presentKeys.has(key)) {
                    columns.push({ key, label: baseColumns[key] });
                    }
                }

                return columns;
        }


    async function getRapportStaff(query:any) {
        const { response, erreur } = await rapportService.getRapportStaff(query);
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
        getRapportStaff,
        rapportEmployee,
        exportEmployee,
        buildColumns,
    }
})