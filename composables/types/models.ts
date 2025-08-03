
export interface EmployeeType {
  employeeId: number;
  role: string;
  email: string;
  uuid:string;
  supervisor: EmployeeType;
  personalEmail: string;
  supervisorFirstName: string;
  supervisorLastName: string;
  phone2: string;
  phone: string;
  address: string;
  firstName: string;
  lastName: string;
  password: string;
  jobTitle: string;
  category: string;
  grade: string;
  bgLevel: string;
  matricule: string;
  deletedAt: string | null;
  secretKey: string;
}


export interface RapportStaffType {
    matricule: string;
    employeeLastName: string;
    employeeFirstName: string;
    title: string;
    supervisorFirstName: string;
    supervisorLastName: string;
    division: string;
    year?:string | null;
  }

export interface NewEmployeeType {
  role: string;
  email: string;
  supervisor: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  matricule:string;
}

export interface UpdateEmployeeType {
  employeeId?: number | null;
  role: string;
  email: string;
  supervisor?: {email :string} | null;
  personalEmail?: string | null;
  phone2?: string | null;
  phone?: string | null;
  address?: string | null;
  firstName: string;
  lastName: string;
  password: string;
  jobTitle: string;
  category?: string | null;
  grade?: string | null;
  bgLevel?: string | null;
  matricule: string;
  deletedAt?: string | null;
  secretKey?: string | null;
}



export interface SettingType {
  settingId: number;
  label: string;
  name: string;
  value: string;
}


export interface UserConnectedType {
  employeeId: number;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  token: string;
}




export interface StepType {
  stepId: number;
  name: string;
  message: string;
  messageFr: string;
  active: string;
  dateFrom: string;
  dateTo: string;
  sent: string;
}


