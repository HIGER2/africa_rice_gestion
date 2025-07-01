import { baseURL } from "../axios";
import type {UseFetchingParams } from "~/composables" 



export const useFetching = async ({ uri = '',resType='', methods = 'GET', header = {},param={}, body = {}, success, error }: UseFetchingParams) => {
  const options = {
    url: uri,
    method: methods,
    headers: { ...header },
    params:{...param},
    data: body,
    responseType: resType,
    onUploadProgress: function (progressEvent: any) {
      const { loaded, total } = progressEvent;
      // Progress bar logic
    },
    onDownloadProgress: function (progressEvent: any) {
      // Progress bar logic
    },
  };

  try {
    const res = await baseURL.request(options);
      if (success) success(res?.data);  // Vérifiez si success est défini avant d'appeler

  } catch (errors: any) {
    if (errors.response?.data?.message == "Unauthenticated.") {
      const {removeCookie} =useCookies()
      removeCookie('token')
        // localStorage.removeItem('user');
        navigateTo('/auth/login')
      }
      if (error) error(errors.response);  // Vérifiez si error est défini avant d'appeler
  }
  
};
