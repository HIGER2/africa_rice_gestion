
import { defineStore } from 'pinia'
import { useAuthService } from '../services/authService';

export const useAuthViewModel = defineStore('authViewModel', () => {
    const authService = useAuthService()
    const {setCookie,getCookie,removeCookie} =useCookies()

    const credential = reactive<{email:string,password:string}>({
        email: "admin@mail.com",
        password: 'admin',
    });
    async function login(){
        const { response, erreur } = await authService.login(credential);
        if (!erreur) {
          setCookie('token', response?.token)
            navigateTo('/')
            // rapportEmployee.value = response
        }
  }
  

  async function logout(){
        const { response, erreur } = await authService.logout();
        if (!erreur) {
          removeCookie('token')
            navigateTo('/auth/login')
            // rapportEmployee.value = response
        }
    }

    return {
        login,
      credential,
        logout
    }
})