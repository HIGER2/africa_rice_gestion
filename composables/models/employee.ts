import type { EmployeeType, RapportStaffType, UpdateEmployeeType, UserConnectedType } from "../types/models";


export class Employee {
  employeeId: number;
  role: string;
  uuid:string;
  email: string;
  supervisor: any;
  personalEmail: string;
  phone2: string;
  phone: string;
  address: string;
  firstName: string;
  lastName: string;
  supervisorFirstName: string;
  supervisorLastName: string;
  password: string;
  jobTitle: string;
  category: string;
  grade: string;
  bgLevel: string;
  matricule: string;
  deletedAt: string | null;
  secretKey: string;
  constructor({
    employeeId,
    role,
    email,
    uuid,
    supervisor,
    personalEmail,
    phone2,
    phone,
    address,
    firstName,
    lastName,
    supervisorFirstName,
    supervisorLastName,
    password,
    jobTitle,
    category,
    grade,
    bgLevel,
    matricule,
    deletedAt,
    secretKey,
  }: EmployeeType) {
    this.employeeId = employeeId;
    this.uuid=uuid,
    this.role = role;
    this.email = email;
    this.supervisorFirstName = supervisorFirstName;
    this.supervisorLastName = supervisorLastName;
    this.supervisor = supervisor;
    this.personalEmail = personalEmail;
    this.phone2 = phone2;
    this.phone = phone;
    this.address = address;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.jobTitle = jobTitle;
    this.category = category;
    this.grade = grade;
    this.bgLevel = bgLevel;
    this.matricule = matricule;
    this.deletedAt = deletedAt;
    this.secretKey = secretKey;
  }
}

export class UserConnected{
  employeeId: number;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  token: string;
  constructor({employeeId, firstName, lastName, role, email,token}:UserConnectedType) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.token = token;
  }

}


export class UpdateEmployee {
  employeeId?: number | null;
  role: string;
  email: string;
  supervisor?: string | null;
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

  constructor({
    employeeId=null,
    role,
    email,
    supervisor = null,
    personalEmail = null,
    phone2 = null,
    phone = null,
    address = null,
    firstName,
    lastName,
    password,
    jobTitle,
    category = null,
    grade = null,
    bgLevel = null,
    matricule,
    deletedAt = null,
    secretKey = null,
  }: UpdateEmployeeType) {
    this.employeeId = employeeId;
    this.role = role;
    this.email = email;
    this.supervisor = supervisor?.email;
    this.personalEmail = personalEmail;
    this.phone2 = phone2;
    this.phone = phone;
    this.address = address;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.jobTitle = jobTitle;
    this.category = category;
    this.grade = grade;
    this.bgLevel = bgLevel;
    this.matricule = matricule;
    this.deletedAt = deletedAt;
    this.secretKey = secretKey;
  }
}

export type ExtendedUpdateEmployeeType = UpdateEmployeeType & {
  dependents?: Array<any> | null;
  emergency_contacts?: Array<any> | null;
  beneficiaries?: Array<any> | null;
  contract?: object | null;
  payroll?: object | null;
  position?: object | null;
};

export class DetailEmployee {
  employeeId?: number | null;
  role: string;
  email: string;
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
  supervisor?: object | null;
  dependents?:Array<any> | null;
  emergency_contacts?:Array<any> | null;
  beneficiaries?:Array<any> | null;
  contract?: object | null;
  payroll?:object | null;
  position?:object | null;
  constructor({
    employeeId=null,
    role,
    email,
    supervisor = null,
    personalEmail = null,
    phone2 = null,
    phone = null,
    address = null,
    firstName,
    lastName,
    password,
    jobTitle,
    category = null,
    grade = null,
    bgLevel = null,
    matricule,
    deletedAt = null,
    secretKey = null,
    dependents,
    emergency_contacts,
    beneficiaries,
    contract,
    payroll,
    position,
  }:ExtendedUpdateEmployeeType
) {
    this.employeeId = employeeId;
    this.role = role;
    this.email = email;
    this.supervisor = supervisor;
    this.dependents = dependents;
    this.emergency_contacts = emergency_contacts;
    this.beneficiaries = beneficiaries;
    this.contract = contract;
    this.payroll = payroll;
    this.position = position;
    this.personalEmail = personalEmail;
    this.phone2 = phone2;
    this.phone = phone;
    this.address = address;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.jobTitle = jobTitle;
    this.category = category;
    this.grade = grade;
    this.bgLevel = bgLevel;
    this.matricule = matricule;
    this.deletedAt = deletedAt;
    this.secretKey = secretKey;
  }
}

export class RapportStaff{
  matricule: string;
  firstName: string;
  lastName: string;
  title: string;
  supervisorFirstName: string;
  supervisorLastName: string;
  division: string;
  year?: string | null;
  constructor({
    matricule,
    employeeLastName,
    employeeFirstName,
    title,
    supervisorLastName,
    supervisorFirstName,
    division,
    year = null,
  }:RapportStaffType ) {
    this.matricule = matricule;
    this.firstName = employeeLastName;
    this.lastName = employeeFirstName;
    this.title =title;
    this.supervisorFirstName = supervisorFirstName;
    this.supervisorLastName = supervisorLastName;
    this.division = division;
    if (typeof year !== 'undefined' && year !== null) {
      this.year = year;
    }
  }
}