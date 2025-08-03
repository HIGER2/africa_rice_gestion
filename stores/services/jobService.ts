import type{ UserConnectedType } from '../../composables/types/models';
import { Employee, UserConnected } from '../../composables/models/employee';
import { defineStore } from 'pinia';


export const  useJobService = defineStore('jobService', () => {
    async function createOrUpdate(item:any) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/job/create-update`,
                    methods: "POST",
                    body:item,
                    success: async (res) => {
                        response = res.response;
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

    async function all(item:any) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/job/all`,
                    success: async (res) => {
                        response = res?.response;
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

    async function find(uuid:any) {
            let data: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/job/find/${uuid}`,
                    success: async (res) => {
                        data = res?.data;
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

    return {
        createOrUpdate,
        all,
        find
    }
})