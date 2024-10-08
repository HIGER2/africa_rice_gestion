import type{ UserConnectedType } from './../../composables/types/models';
import { Employee, UserConnected } from '../../composables/models/employee';
import { defineStore } from 'pinia';


export const  useAuthService = defineStore('authService', () => {
    async function login(item:{email:string, password:string}) {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/auth/login`,
                    methods: "POST",
                    body:item,
                    success: async (res) => {
                        response = new UserConnected(res.response);
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

    async function logout() {
            let response: any | null = null;
            let erreur: any | null = null;  
                await useFetching({
                    uri: `/auth/logout`,
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

    return {
        login,
        logout
    }
})