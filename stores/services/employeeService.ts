import { Employee, UpdateEmployee } from './../../composables/models/employee';
import { defineStore } from 'pinia';
import type { LocationQueryValue } from 'vue-router';

import type { EmployeeType, NewEmployeeType, UpdateEmployeeType } from '~/composables';
    const toast = useToast()

export const  useEmployeeService = defineStore('employeeService', () => {
    // const useUtils =useUtilsStores()

    async function getAllEmployee() {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/all`,
                    success: async (res) => {
                        response = res.response.map((employee: EmployeeType) => new Employee(employee));
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
    async function createEmployee(item: NewEmployeeType) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/create`,
                    methods: 'POST',
                    body: item,
                    success: async (res) => {
                        response = new Employee(res?.data);
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


        // const response = await apiClient.post('/tasks', data);
        // return new Task(response.data);
    }
    
    async function getEmployee(id :LocationQueryValue |LocationQueryValue[]) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/get/one/${id}`,
                    success: async (res) => {
                        response = new UpdateEmployee(res.response);
                        // new SingleOrder(res.data);
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

    async function updateEmployee(item: UpdateEmployeeType) {   
            let response: any | null = null;
            let erreur: any | null = null;  
            await useFetching({
                uri: `/employee/update`,
                methods: 'POST',
                body: item,
                success: async (res) => {
                    response = new UpdateEmployee(res?.response);
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
    
    return {
        getAllEmployee, 
        createEmployee,
        getEmployee,
        updateEmployee
    }
})