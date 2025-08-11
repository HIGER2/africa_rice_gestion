
import { defineStore } from 'pinia'
import { useJobService } from '../services/jobService';
import { useUtilsStores } from './../../composables/utils/index';

export const useJobViewModel = defineStore('JobViewModel', () => {
    const store = useJobService()
    const toast = useToast()

    const jobs =ref([])
    const inputPairs = [
        [
            { key: 'recrutement_id', label: 'Recrutement code', placeholder: 'Recrutement code', type: 'text' },
        ],
        [
            { key: 'center', label: 'Center (AfricaRice/Hosted)', placeholder: 'Center (AfricaRice/Hosted)', type: 'text' },
            { key: 'country_duty_station', label: 'Country Duty Station', placeholder: 'Country Duty Station', type: 'text' },
        ],
        [
            { key: 'position_title', label: 'Position Title', placeholder: 'Position Title', type: 'text' },
            { key: 'city_duty_station', label: 'City Duty Station', placeholder: 'City Duty Station', type: 'text' },
        ],
        [
            { key: 'contract_from', label: 'Period of contract from', placeholder: 'Period of contract: from', type: 'date' },
            { key: 'contract_to', label: 'Period of contract to', placeholder: 'Period of contract: to', type: 'date' },
        ],
        [
            { key: 'grade', label: 'Grade', placeholder: 'Grade', type: 'text' },
            { key: 'program', label: 'Program', placeholder: 'Program', type: 'text' },
        ],
        [
            { key: 'division', label: 'Division', placeholder: 'Division', type: 'text' },
            { key: 'education_level', label: 'Education level', placeholder: 'Education level', type: 'text' },
        ],
        [
            { key: 'sub_unit', label: 'SUB Unit', placeholder: 'SUB Unit', type: 'text' },
            // { key: 'contract_time', label: 'Full time / Part time', placeholder: 'Full time / Part time', type: 'text' },
            { key: 'contract_time',
            component: 'select',
            options:[
                    { label: 'Full time', value: 'full_time' },
                    { label: 'Part time', value: 'part_time' }
                ],
                label: 'Contract time', placeholder: 'Select contract time', type: 'text' },
        ],
        [
            { key: 'resources_type', label: 'Resources type', placeholder: 'Resources type', type: 'text' },
            { key: 'recruitment_type', label: 'Recruitment Type', placeholder: 'Recruitment Type', type: 'text' },
        ],
        [
            { key: 'supervisor_name', label: 'Supervisor Name', placeholder: 'Supervisor Name', type: 'text' },
            { key: 'supervisor_position', label: 'Supervisor Position', placeholder: 'Supervisor Position', type: 'text' },
        ],
        [
            { key: 'country_of_recruitment', label: 'Country of recruitment', placeholder: 'Country of recruitment', type: 'text' },
            { key: 'cgiar_workforce_group', label: 'CGIAR workforce Group', placeholder: 'CGIAR workforce Group', type: 'text' },
        ],
        [
            { key: 'cgiar_group', label: 'CGIAR Group', placeholder: 'CGIAR Group', type: 'text' },
            { key: 'percent_time_other_center', label: '% Time working for other center', placeholder: '% Time working for other center', type: 'number' },
        ],
        [
            // { key: 'cgiar_appointed', label: 'CGIAR appointed', placeholder: 'CGIAR appointed', type: 'text' },
            { key: 'cgiar_appointed',
            component: 'select',
            options:[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no'}
                ],
                label: 'CGIAR appointed', placeholder: 'CGIAR appointed', type: 'text' },
            { key: 'initiative_lead', label: 'Initiative/Impact Platform Lead/Co-Lead', placeholder: 'Initiative/Impact Platform Lead/Co-Lead', type: 'text' },
        ],
        [
            // { key: 'shared_working_arrangement', label: 'Shared working arrangement', placeholder: 'Shared working arrangement', type: 'text' },
            { key: 'shared_working_arrangement',
            component: 'select',
            options:[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no'}
                ],
                label: 'Shared working arrangement', placeholder: 'Shared working arrangement', type: 'text' },
            { key: 'initiative_personnel', label: 'Initiative/Impact Platform Personnel', placeholder: 'Initiative/Impact Platform Personnel', type: 'text' },
        ],
        [
            { key: 'salary_post', label: 'Post salary', placeholder: 'Post salary', type: 'number' },
        ],
    ];

    const fieldsInitData = {
        employee_id: '',
        center: 'IITA',
        uuid: '',
        country_duty_station: 'Nigeria',
        city_duty_station: 'Ibadan',
        position_title: 'Research Scientist',
        recrutement_id: 'REC-2024-005',
        contract_from: '2024-01-01',
        contract_to: '2025-01-01',
        grade: 'P3',
        division: 'Agricultural Research',
        program: 'Climate & Food Security',
        sub_unit: 'Sub-unit A',
        education_level: 'PhD',
        resources_type: 'Core Staff',
        contract_time: 'full_time',
        supervisor_name: 'Dr. John Doe',
        supervisor_position: 'Program Manager',
        recruitment_type: 'External',
        country_of_recruitment: 'Kenya',
        cgiar_workforce_group: 'Research',
        cgiar_group: 'Genetic Innovation',
        cgiar_appointed: 'yes',
        percent_time_other_center: 20,
        shared_working_arrangement: 'Yes',
        initiative_lead: 'Dr. Jane Smith',
        initiative_personnel: 'John Smith',
        salary_post: 1000000
    };

    const fieldsInit = {
        employee_id: '',
        center: '',
        uuid: '',
        country_duty_station: '',
        city_duty_station: '',
        position_title: '',
        recrutement_id: '',
        contract_from: '',
        contract_to: '',
        grade: '',
        division: '',
        program: '',
        sub_unit: '',
        education_level: '',
        resources_type: '',
        contract_time: '',
        supervisor_name: '',
        supervisor_position: '',
        recruitment_type: '',
        country_of_recruitment: '',
        cgiar_workforce_group: '',
        cgiar_group: '',
        cgiar_appointed: '',
        percent_time_other_center: '',
        shared_working_arrangement: '',
        initiative_lead: '',
        initiative_personnel: '',
        salary_post: ''
        };
            
        
        
        async function createOrUpdate(item:any) {
           
            const { response, erreur } = await store.createOrUpdate(item);
            if (response) {
                toast.add({
                    title: 'Success',
                    description: 'Your action was completed successfully.',
                    color: 'success'
                })
            }
            if (erreur) {
                console.log(erreur?.data?.errors);
                let errorMessages = useUtilsStores().formatError(erreur?.data?.errors);
                if (errorMessages) {
                alert("Please fix the following errors:\n\n" + errorMessages);
                }else{
                alert("An error has occurred. If the problem persists, please contact IT support.")
                }
            }
            return { response, erreur }
        }

        async function all(item?:any) {
            const { response, erreur } = await store.all(item);
            jobs.value =response
            return { response, erreur }
        }

        async function find(uuid?:any) {
            const { data, erreur } = await store.find(uuid);
            return { data, erreur }
        }
    return {
        fieldsInit,
        fieldsInitData,
        inputPairs,
        createOrUpdate,
        all,
        jobs,
        find
    }
})