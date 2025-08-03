
import { defineStore } from 'pinia'
import type { NewEmployeeType, UpdateEmployeeType } from '~/composables';

export const useEmployeeViewModel = defineStore('EmployeeViewModel', () => {
    const employeeService = useEmployeeService()
    const employee = ref();
    const employeeDraft = ref([]);
    const toast = useToast()
    const init ={
            "employee_id": null,
            "code_recrutement": "",
            "center": "",
            "country_duty_station": "",
            "city_duty_station": "",
            "position_title": "",
            "recrutement_id": "",
            "contract_from": "",
            "contract_to": "",
            "date": "",
            "grade": "",
            "division": "",
            "program": "",
            "sub_unit": "",
            "education_level": "",
            "resources_type": "",
            "contract_time": "",
            "is_active": "",
            "supervisor_name": "",
            "supervisor_position": "",
            "recruitment_type": "",
            "country_of_recruitment": "",
            "cgiar_workforce_group": "",
            "cgiar_group": "",
            "cgiar_appointed": "",
            "percent_time_other_center": "",
            "shared_working_arrangement": "",
            "initiative_lead": "",
            "initiative_personnel": "",
            "salary_post": "",
        }
    const initPayroll= {
        "employee_id": null,
        "recruitement_id": null,
        "is_active": "active",
        "basic_salary": "",
        "salary_currency": "",
        "salary_frequency": "",
        "transport_allowance": "",
        "housing_allowance": "",
        "dependent_allowance": "",
        "installation_allowance": "",
        "arrival_shipping_allowance": "",
        "departure_shipping_allowance": "",
        "health_insurance": "21321.00",
        "social_contribution": "",
        "life_insurance": "",
        "salary_taxes": "",
        "home_leave": "",
        "flight_ticket": "",
        "installation_assistance": "",
        }
        const initContract={
                "employee_id": null,
                "recruitement_id": null,
                "is_active": "active",
                "date": "",
                "resno": "",
                "position_posno": "",
                "type_of_contract": "",
                "contract_start_date": "",
                "contract_end_date": "",
                "probation_end_date_1": "",
                "probation_end_date_2": "",
                "bg_level_equivalent": "",
                "supervisor_posno": "",
                "position_classification": "",
            }
    const columnsDraft = [
        { label: 'ID recrutement', key: 'recrutement_id' },
        { label: 'Name', key: 'firstName' },
        { label: 'Lastname', key: 'lastName' },
        { label: 'email', key: 'email' },
        { label: 'phone', key: 'phone' },
    ]

    const inputPairsPayroll = [
            [
                { key: 'basic_salary', label: 'Basic Salary', placeholder: 'Enter Basic Salary', type: 'number' },
                { key: 'salary_currency', label: 'Salary Currency', placeholder: 'Enter Salary Currency', type: 'number' },
            ],
            [
                { key: 'salary_frequency', label: 'Salary Frequency', placeholder: 'Enter Salary Frequency', type: 'text' },
                { key: 'transport_allowance', label: 'Transport Allowance', placeholder: 'Enter Transport Allowance', type: 'number' },
            ],
            [
                { key: 'housing_allowance', label: 'Housing Allowance', placeholder: 'Enter Housing Allowance', type: 'number' },
                { key: 'dependent_allowance', label: 'Dependent Allowance', placeholder: 'Enter Dependent Allowance', type: 'number' },
            ],
            [
                { key: 'installation_allowance', label: 'Installation Allowance', placeholder: 'Enter Installation Allowance', type: 'number' },
                { key: 'arrival_shipping_allowance', label: 'Arrival Shipping Allowance', placeholder: 'Enter Arrival Shipping Allowance', type: 'number' },
            ],
            [
                { key: 'departure_shipping_allowance', label: 'Departure Shipping Allowance', placeholder: 'Enter Departure Shipping Allowance', type: 'number' },
                { key: 'health_insurance', label: 'Health Insurance', placeholder: 'Enter Health Insurance', type: 'number' },
            ],
            [
                { key: 'social_contribution', label: 'Social Contribution', placeholder: 'Enter Social Contribution', type: 'number' },
                { key: 'life_insurance', label: 'Life Insurance', placeholder: 'Enter Life Insurance', type: 'number' },
            ],
            [
                { key: 'salary_taxes', label: 'Salary Taxes', placeholder: 'Enter Salary Taxes', type: 'number' },
                { key: 'home_leave', label: 'Home Leave', placeholder: 'Enter Home Leave', type: 'text' },
            ],
            [
                { key: 'flight_ticket', label: 'Flight Ticket', placeholder: 'Enter Flight Ticket', type: 'text' },
                { key: 'installation_assistance', label: 'Installation Assistance', placeholder: 'Enter Installation Assistance', type: 'text' },
            ],
            // [
            //     { key: 'created_at', label: 'Created At', placeholder: 'Creation Date', type: 'datetime-local' },
            //     { key: 'updated_at', label: 'Updated At', placeholder: 'Last Updated', type: 'datetime-local' },
            // ]
    ];
    
    const inputPairsContract = [
        [
        { key: 'resno', label: 'Res No', type: 'text' },
        { key: 'position_posno', label: 'Position POS No', type: 'text' },
        ],
        [
        { key: 'type_of_contract', label: 'Type of Contract', type: 'text' },
        { key: 'contract_start_date', label: 'Contract Start Date', type: 'date' },
        ],
        [
        { key: 'contract_end_date', label: 'Contract End Date', type: 'date' },
        { key: 'probation_end_date_1', label: 'Probation End Date 1', type: 'date' },
        ],
        [
             { key: 'probation_end_date_2', label: 'Probation End Date 2', type: 'date' },
    { key: 'bg_level_equivalent', label: 'BG Level Equivalent', type: 'text' },
        ],
        [
            { key: 'supervisor_posno', label: 'Supervisor POS No', type: 'text' },
            { key: 'position_classification', label: 'Position Classification', type: 'text' },
        ]
    ];

    let initStaff= {
            uuid:"",
            firstName:'',
            lastName:'',
            date_of_birth:'',
            country_of_birth:'',
            gender:'',
            nationality_1:'',
            nationality_2:'',
            indentity_number:'',
            social_security_number:'',
            permanent_address:'',
            country_of_residence:'',
            town_of_residence:'',
            phone:'',
            personal_email:'',
            marital_status:'',
            number_of_children:0,
            family_living_with_staff: false,
            family_residence_location:'',
            spouse_works:false,
            spouse_workplace:'',
    }
    let initDependent={
        employeeId:null,
        full_name:'',
        relation:'',
        gender:'',
        date_of_birth:'',
        residence_or_school:'',
        nationality:''
    }

    let defaultDependent=[
            {
            employeeId: null,
            full_name: 'Aminata Douma',
            relation: 'spouse',
            gender: 'female',
            date_of_birth: '2015-06-22',
            residence_or_school: 'École Sainte Marie, Abidjan',
            nationality: 'Ivoirienne'
        },
        {
            employeeId: null,
            full_name: 'Koffi Douma',
            relation: 'child',
            gender: 'male',
            date_of_birth: '2012-09-15',
            residence_or_school: 'Collège Moderne Cocody',
            nationality: 'Ivoirienne'
        }
        ]
    let defaultEmergency=[
              {
            employeeId: null,
            name: 'Fatou Koné',
            relationship: 'Épouse',
            birthday: '1987-04-12',
            address: 'Abidjan, Cocody Riviera 2',
            email: 'fatou.kone@example.com',
            phone:"0980989808098"
        },
        {
            employeeId: null,
            name: 'Yao Serge',
            relationship: 'Frère',
            birthday: '1990-10-03',
            address: 'Bouaké, Quartier Kennedy',
            email: 'yao.serge@example.com',
            phone:"0980989808098"
        }
    ]

    let defaultBeneficiary=[
         {
                employeeId: null,
                full_name: 'Aminata Traoré',
                relationship: 'Sœur',
                birthday: '1992-06-14',
                address: 'Yopougon, Abidjan',
                email: 'aminata.traore@example.com',
                percentage_share: '50'
            },
            {
                employeeId: null,
                full_name: 'Kouadio Jean',
                relationship: 'Père',
                birthday: '1965-02-28',
                address: 'Daloa, Quartier Commerce',
                email: 'kouadio.jean@example.com',
                percentage_share: '50'
            }
    ]

    let initEmergency={
        employeeId:null,
        name:'',
        relationship:'',
        address:'',
        email:'',
        phone:''
    }
    let initBeneficiary={
        employeeId:null,
        full_name:'',
        relationship:'',
        birthday:'',
        address:'',
        email:'',
        percentage_share:'',
    }

    let employeePayload = reactive({
        user:{
            // firstName:'',
            // lastName:'',
            // date_of_birth:'',
            // country_of_birth:'',
            // gender:'',
            // nationality_1:'',
            // nationality_2:'',
            // indentity_number:'',
            // social_security_number:'',
            // permanent_address:'',
            // country_of_residence:'',
            // town_of_residence:'',
            // phone:'',
            // email:'',
            // marital_status:'',
            // number_of_children:0,
            // family_living_with_staff: false,
            // family_residence_location:'',
            // spouse_works:false,
            // spouse_workplace:'',
                uuid:null,
                firstName: 'Armand',
                lastName: 'Douma',
                date_of_birth: '1995-04-12',
                country_of_birth: 'Côte d\'Ivoire',
                gender: 'Male',
                nationality_1: 'Ivoirienne',
                nationality_2: '',
                indentity_number: 'CI123456789',
                social_security_number: 'SSN987654321',
                permanent_address: 'Abidjan, Cocody, Rue des Jasmins',
                country_of_residence: 'Côte d\'Ivoire',
                town_of_residence: 'Abidjan',
                phone: '+2250778618454',
                personal_email: 'armand.douma@example.com',
                marital_status: 'married',
                number_of_children: 1,
                family_living_with_staff: false,
                family_residence_location: 'abidjan',
                spouse_works: false,
                spouse_workplace: 'abidjan',
        },
        dependent:[...defaultDependent],
        emergency:[ ...defaultEmergency ],
        beneficiary:[...defaultBeneficiary]
    })
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


    
    async function createEmployeeDraft() {
        const route = useRoute()
        let items = {
                ...employeePayload,
                user: {
                    ...employeePayload.user,
                    recrutement_id: route.params.id
                }
            };

            console.log(items);

            // return
            
        const { response, erreur } = await employeeService.createEmployeeDraft(items);
        if (erreur) {
            
            return erreur
        }
        alert('Votre formulaire a été soumis avec succès.')
        toast.add({ title: 'Operation completed successfully' })
        return response
    }

    async function updateEmployeeByLink() {
        let items = {
                ...employeePayload,
            };

            console.log(items);

        const { response, erreur } = await employeeService.updateEmployeeByLink(items);
        if (erreur) {
            
            return erreur
        }
        alert('Votre formulaire a été soumis avec succès.')
        toast.add({ title: 'Operation completed successfully' })
        return response
    }

    
    async function createOrUpdatePayroll(items:any) {
            
        const { response, erreur } = await employeeService.createOrUpdatePayroll(items);
        if (erreur) {
            console.log(erreur?.data?.message);
            alert(erreur?.data?.message)
            
            return erreur
        }
        alert('Votre formulaire a été soumis avec succès.')
        toast.add({ title: 'Operation completed successfully' })
        return response
    }

    async function assignPostInStaff(items:any) {
            
        const { response, erreur } = await employeeService.assignPostInStaff(items);
        if (erreur) {
            console.log(erreur?.data?.message);
            alert(erreur?.data?.message)
            
            return erreur
        }
        alert('Votre formulaire a été soumis avec succès.')
        toast.add({ title: 'Operation completed successfully' })
        return response
    }

    async function createOrUpdateContract(items:any) {
            
        const { response, erreur } = await employeeService.createOrUpdateContract(items);
        if (erreur) {
            alert(erreur?.data?.message)
            return erreur
        }
        alert('Votre formulaire a été soumis avec succès.')
        toast.add({ title: 'Operation completed successfully' })
        return response
    }

    
    const addItem =(type:string)=>{
        switch (type) {
            case 'dependent':
                if ( employeePayload.dependent.length >= 5) {
                    alert('limite fixe a 5')
                    return 
                }
                employeePayload.dependent.push({...initDependent})
                break;
            case 'beneficiary':
                    if (employeePayload.beneficiary.length >= 6) {
                        alert('limite fixe a 6')
                        return 
                    }

                    employeePayload.beneficiary.push({...initBeneficiary})

                    break;
            case 'emergency':
                    if ( employeePayload.emergency.length >= 4) {
                        alert('limite fixe a 4')
                        return 
                    }
                    employeePayload.emergency.push({...initEmergency})
                    break;
            default:
                break;
        }
    }


    const removeItem =(type:string,index:number)=>{
        switch (type) {
            case 'dependent':
                employeePayload.dependent.splice(index,1)
                break;
            case 'beneficiary':
                    employeePayload.beneficiary.splice(index,1)
                    break;
            case 'emergency':
                    employeePayload.emergency.splice(index,1)
                    break;
            default:
                break;
        }
    }


    async function approuvedEmployeeDraft(uuid:string) {
        const { response, erreur } = await employeeService.approuvedEmployeeDraft(uuid);
        if (!erreur) {
            employee.value = response
        }else{
            alert('An unexpected error occurred. If the issue persists, please contact the ICT support team.')
        }
    }

    async function getAllEmployee() {
        const { response, erreur } = await employeeService.getAllEmployee();
        if (!erreur) {
            employee.value = response
        }
    }

    async function getAllEmployeeDraft() {
        const { response, erreur } = await employeeService.getAllEmployeeDraft();
        if (!erreur) {
            employeeDraft.value = response
            console.log(employeeDraft.value);
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


    async function employeeDetail() {
        const {uuid}=useRoute().params

        const { response, erreur } = await employeeService.employeeFind(uuid);
        if (!erreur) {
            
        }

        return response
    }

     async function findByLink(uuid:string) {
        const { data, erreur } = await employeeService.findByLink(uuid);
        const common = Object.keys(data).reduce((acc, key) => {
            if (key in initStaff) {
                acc[key] = data[key];;
            }
            return acc;
            }, {});
        console.log(common);
        
        employeePayload.user =  {...common}
        employeePayload.beneficiary = [...data.beneficiaries]
        employeePayload.dependent = [...data.dependents]
        employeePayload.emergency = [...data.emergency_contacts]

        // console.log(data.beneficiaries);
        // console.log(data.dependents);
        // console.log(data.emergency_contacts);
        
        if (!erreur) {
            
        }

        return data
    }

    async function updateEmployee() {

        console.log(updateEmployeeData);

        const { response, erreur } = await employeeService.updateEmployee(updateEmployeeData);
        if (!erreur) {
            
        // Employee.value = response
        }
    }

    async function deleteEmployee(EmployeeId : number,EmployeeIud : string) {
        const { response, erreur } = await employeeService.deleteEmployee(EmployeeId,EmployeeIud);
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
        updateEmployeeData,
        employeePayload,
        addItem,
        removeItem,
        createEmployeeDraft,
        employeeDraft,
        getAllEmployeeDraft,
        columnsDraft,
        employeeDetail,
        approuvedEmployeeDraft,
        inputPairsPayroll,
        inputPairsContract,
        createOrUpdatePayroll,
        createOrUpdateContract,
        initPayroll,
        initContract,
        findByLink,
        updateEmployeeByLink
    }
})