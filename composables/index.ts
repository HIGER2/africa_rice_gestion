import { UpdateEmployee,Employee,UserConnected } from './models/employee';
export type{ EmployeeType,NewEmployeeType,UpdateEmployeeType ,SettingType,StepType,UserConnectedType} from './types/models';
export type { ApiResponse, ApiError, UseFetchingParams } from "./types/hooks"



// hooks export 
export { useFetching } from './hooks/useFetch';
export { useCookies } from './hooks/useCookie';
export { baseURL } from "./axios"
export { useXlsx } from './hooks/useXlsx';