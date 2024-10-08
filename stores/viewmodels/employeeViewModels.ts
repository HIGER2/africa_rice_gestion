
import { defineStore } from 'pinia'
import type { NewEmployeeType, UpdateEmployeeType } from '~/composables';

export const useEmployeeViewModel = defineStore('EmployeeViewModel', () => {
    const employee = ref();
    const employeeService = useEmployeeService()
        let NewEmployeeType = {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            matricule: "",
            supervisor: "",
            role:"",
        }
        let UpdateEmployeeInitial = {
        employeeId: "",
        role: "",
        email: "",
        supervisor: "",
        personalEmail: "",
        phone2: "",
        phone: "",
        address: "",
        firstName: "",
        lastName: "",
        password: "",
        jobTitle: "",
        category: "",
        grade: "",
        matricule: "",
        };

    const newEmployee = reactive<NewEmployeeType>({...NewEmployeeType});
    const updateEmployeeData = reactive<UpdateEmployeeType>({...UpdateEmployeeInitial});
   
    async function createEmployee() {
        const { response, erreur } = await employeeService.createEmployee(newEmployee);
        if (!erreur) {
        employee.value.push(response);
        }
    }

    async function getAllEmployee() {
        const { response, erreur } = await employeeService.getAllEmployee();
        if (!erreur) {
            employee.value = response
        }
    }

    async function getEmployee() {
         const {id}=useRoute().query
        const { response, erreur } = await employeeService.getEmployee(id);
        if (!erreur) {
            Object.assign(updateEmployeeData, response)

            console.log(updateEmployeeData);
            
        }
    }

    async function updateEmployee() {

        console.log(updateEmployeeData);

        const { response, erreur } = await employeeService.updateEmployee(updateEmployeeData);
        if (!erreur) {
            
        // Employee.value = response
        }
    }

    async function deleteEmployee(EmployeeId : number,EmployeeIud : string) {
        const { response, erreur } = await EmployeeService.deleteEmployee(EmployeeId,EmployeeIud);
        if (!erreur) {
        Employee.value = response
        }
    }
    return {
        createEmployee,
        getAllEmployee,
        updateEmployee,
        deleteEmployee,
        employee,
        newEmployee,
        getEmployee,
        updateEmployeeData
    }
})