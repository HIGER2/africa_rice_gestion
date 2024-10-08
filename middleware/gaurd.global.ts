

export default defineNuxtRouteMiddleware((to, from, next) => {
    // const Auth = useAuthStores();
 const { getCookie } = useCookies();
  const token = getCookie('token');
    if (to.path.includes("/auth")) {
         if (token) {
            return navigateTo("/account")
        }
    } else if (to.path.includes('/account')) {
        if (!token) {
            return navigateTo("/auth/login")
        } 
    }

})
