import { DetailEmployee, Employee, UpdateEmployee } from './../../composables/models/employee';
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

    async function getAllEmployeeDraft() {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/all/draft`,
                    success: async (res) => {
                        response = res.data;
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

    async function approuvedEmployeeDraft(uuid: string) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/approuve/draft/${uuid}`,
                    success: async (res) => {
                        response = res?.data;
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

    
    async function replicatePosition(uuid: string) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/replicate/position/${uuid}`,
                    success: async (res) => {
                        response = res?.data;
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

    async function assignPostToEmployee(item) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/assign/post`,
                    methods:"POST",
                    body:item,
                    success: async (res) => {
                        response = res?.data;
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


    async function createOrUpdatePayroll(item: any) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/payroll/create-update`,
                    methods:"POST",
                    body:item,
                    success: async (res) => {
                        response = res?.data;
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
    
    async function createOrUpdateContract(item: any) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/contract/create-update`,
                    methods:"POST",
                    body:item,
                    success: async (res) => {
                        response = res?.data;
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
    async function createEmployeeDraft(item: any) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/create/draft`,
                    methods: 'POST',
                    body: item,
                    success: async (res) => {
                        response =res?.data;
                        
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

    async function updateEmployeeByLink(item: any) {
            let response: any | null = null;
                let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/update/by-link`,
                    methods: 'POST',
                    body: item,
                    success: async (res) => {
                        response =res?.data;
                        
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
    
    async function getEmployee(id :LocationQueryValue |LocationQueryValue[]) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/get/one/${id}`,
                    success: async (res) => {
                        response = res.response;
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


    async function employeeFind(identifier :LocationQueryValue |LocationQueryValue[]) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/find/${identifier}`,
                    success: async (res) => {
                        response = res.data;
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

    async function findByLink(identifier: string) {
            let data: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/employee/find/by-link/${identifier}`,
                    success: async (res) => {
                        data = res.data;
                        // new SingleOrder(res.data);
                    },
                    error: (err) => {
                        erreur = err
                    }
                })
                return {
                    data,
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
        updateEmployee,
        createEmployeeDraft,
        getAllEmployeeDraft,
        employeeFind,
        approuvedEmployeeDraft,
        createOrUpdatePayroll,
        createOrUpdateContract,
        findByLink,
        updateEmployeeByLink,
        assignPostToEmployee,
        replicatePosition
    }
})