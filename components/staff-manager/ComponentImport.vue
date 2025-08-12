
<script lang="ts" setup>
const props = defineProps({
  store: {
    type: Function,
    required: false // ou false si optionnel
  }
})

const loading=ref(false)
const impoted=[
{
        id:1,
    label:'Import all informations',
    value:'all'
    },
    {
        id:2,
label:'Import with payroll',
    value:'payrollActif'
    },
    {
    id:3,
    label:'Import with contract',
    value:'contractActif'
    },
    {
    id:4,
    label:'Import with recrutement',
    value:'posteActif'
    },
]

const keyContract={
 // Contract Actif
  contract_actif_bg_level_equivalent: "Niveau Équivalent",
  contract_actif_contract_end_date: "Fin Contrat",
  contract_actif_contract_start_date: "Début Contrat",
//   contract_actif_created_at: "Créé le (Contrat)",
  contract_actif_date: "Date Contrat",
//   contract_actif_employee_id: "ID Employé (Contrat)",
//   contract_actif_id: "ID Contrat",
  contract_actif_is_active: "Statut Contrat",
  contract_actif_position_classification: "Classification Poste (Contrat)",
  contract_actif_position_posno: "Poste N° (Contrat)",
  contract_actif_probation_end_date_1: "Fin Période d'essai 1",
  contract_actif_probation_end_date_2: "Fin Période d'essai 2",
  contract_actif_recrutement_id: "ID Recrutement (Contrat)",
  contract_actif_resno: "Référence Contrat",
  contract_actif_supervisor_posno: "Poste Superviseur (Contrat)",
  contract_actif_type_of_contract: "Type Contrat",
//   contract_actif_updated_at: "Mis à jour le (Contrat)",
//   contract_actif_uuid: "UUID Contrat",
}
const keyPayroll={
  // Payroll Actif
  payroll_actif_arrival_shipping_allowance: "Indemnité Arrivée",
  payroll_actif_basic_salary: "Salaire de base",
//   payroll_actif_created_at: "Créé le (Paie)",
//   payroll_actif_date: "Date Paie",
  payroll_actif_departure_shipping_allowance: "Indemnité Départ",
  payroll_actif_dependent_allowance: "Indemnité Dépendants",
//   payroll_actif_employee_id: "ID Employé (Paie)",
  payroll_actif_flight_ticket: "Billet d'avion",
  payroll_actif_health_insurance: "Assurance santé",
  payroll_actif_home_leave: "Congé à domicile",
  payroll_actif_housing_allowance: "Indemnité Logement",
//   payroll_actif_id: "ID Paie",
  payroll_actif_installation_allowance: "Indemnité Installation",
  payroll_actif_installation_assistance: "Assistance Installation",
  payroll_actif_is_active: "Statut Paie",
  payroll_actif_life_insurance: "Assurance vie",
  payroll_actif_recrutement_id: "ID Recrutement (Paie)",
  payroll_actif_salary_currency: "Devise Salaire",
  payroll_actif_salary_frequency: "Fréquence Salaire",
  payroll_actif_salary_taxes: "Taxes Salaire",
  payroll_actif_social_contribution: "Cotisation Sociale",
  payroll_actif_transport_allowance: "Indemnité Transport",
//   payroll_actif_updated_at: "Mis à jour le (Paie)",
//   payroll_actif_uuid: "UUID Paie",
}

const keyPost  = {
  // Poste Actif
  poste_actif_center: "Centre",
  poste_actif_cgiar_appointed: "Nomination CGIAR",
  poste_actif_cgiar_group: "Groupe CGIAR",
  poste_actif_cgiar_workforce_group: "Groupe de travail CGIAR",
  poste_actif_city_duty_station: "Ville Poste",
//   poste_actif_code_recrutement: "Code Recrutement",
  poste_actif_contract_from: "Début Contrat Poste",
  poste_actif_contract_time: "Type Contrat Poste",
  poste_actif_contract_to: "Fin Contrat Poste",
  poste_actif_country_duty_station: "Pays Poste",
  poste_actif_country_of_recruitment: "Pays Recrutement",
  poste_actif_created_at: "Créé le (Poste)",
  poste_actif_date: "Date Poste",
  poste_actif_division: "Division",
  poste_actif_education_level: "Niveau d’Éducation",
//   poste_actif_employee_id: "ID Employé (Poste)",
  poste_actif_grade: "Grade",
//   poste_actif_id: "ID Poste",
  poste_actif_initiative_lead: "Initiative Lead",
  poste_actif_initiative_personnel: "Initiative Personnel",
  poste_actif_is_active: "Statut Poste",
  poste_actif_percent_time_other_center: "Pourcentage Temps Autre Centre",
  poste_actif_position_title: "Titre Poste",
  poste_actif_program: "Programme",
  poste_actif_recruitment_type: "Type Recrutement",
  poste_actif_recrutement_id: "ID Recrutement (Poste)",
  poste_actif_resources_type: "Type Ressources",
  poste_actif_salary_post: "Salaire Poste",
  poste_actif_shared_working_arrangement: "Organisation Travail Partagée",
  poste_actif_sub_unit: "Sous-Unité",
  poste_actif_supervisor_name: "Nom Superviseur (Poste)",
  poste_actif_supervisor_position: "Poste Superviseur (Poste)",
//   poste_actif_updated_at: "Mis à jour le (Poste)",
//   poste_actif_uuid: "UUID Poste",
}

const keyGenerale = {
//   employeeId: "ID Employé",
    lastName: "Nom",
    firstName: "Prénom",
    jobTitle: "Poste",
    matricule: "Matricule",
    phone2: "Téléphone 2",
    supervisor: "Superviseur",
    // uuid: "UUID",
};

function buildHeaderFromSections(sections: string[]) {
  const header = { ...keyGenerale };

  if (sections.includes('payrollActif')) {
    Object.assign(header, keyPayroll);
  }

  if (sections.includes('contractActif')) {
    Object.assign(header, keyContract);
  }

  if (sections.includes('posteActif')) {
    Object.assign(header, keyPost);
  }

  return header;
}


const onselected =ref([])

const toggleSelect = (value) => {
    if (value === 'all') {
        if (onselected.value.length === impoted.length) {
        // Si tout est déjà coché → on vide
        onselected.value = []
        } else {
        // Coche tout
        onselected.value = impoted.map(item => item.value)
        }
    } else {
        const index = onselected.value.indexOf(value)
        if (index === -1) {
        onselected.value.push(value)
        } else {
        onselected.value.splice(index, 1)
        }
        // Si on décoche un élément → on retire "all"
        if (onselected.value.length !== impoted.length) {
        onselected.value = onselected.value.filter(v => v !== 'all')
        }
    }
}


const handleImport=async()=>{
    const valuesToSend = onselected.value.filter(v => v !== 'all')

    loading.value = true
    const data = await props.store.importEmployee(valuesToSend)

    loading.value = false
    const transformed = data.response.map(item => {
    // On crée un objet plat avec les clés et valeurs extraites et renommées selon ta map
    let newItem = {
        employeeId: item.employeeId,
        uuid: item.uuid,
        matricule: item.matricule,
        lastName: item.lastName,
        firstName: item.firstName,
        jobTitle: item.jobTitle,
        phone2: item.phone2,
        supervisor: item.supervisor ?? null,  // null ou objet, selon ta donnée
    };

     // Fonction utilitaire pour "aplatir" un sous-objet avec un prefixe
    function flattenSubObject(subObj, prefix) {
        if (subObj && typeof subObj === 'object') {
        for (const [key, value] of Object.entries(subObj)) {
            newItem[`${prefix}_${key}`] = value;
        }
        }
    }

    // payroll_actif (si existant)
    if (item.payroll_actif) {
  // Appliquer à chaque sous-objet
        flattenSubObject(item.payroll_actif, 'payroll_actif');
        // newItem.arrival_shipping_allowance = item.payroll_actif.arrival_shipping_allowance;
        // newItem.basic_salary = item.payroll_actif.basic_salary;
        // newItem.created_at = item.payroll_actif.created_at;
        // newItem.date = item.payroll_actif.date;
        // newItem.departure_shipping_allowance = item.payroll_actif.departure_shipping_allowance;
        // newItem.employee_id = item.payroll_actif.employee_id;
        // newItem.flight_ticket = item.payroll_actif.flight_ticket;
        // newItem.health_insurance = item.payroll_actif.health_insurance;
        // newItem.home_leave = item.payroll_actif.home_leave;
        // newItem.housing_allowance = item.payroll_actif.housing_allowance;
        // newItem.id = item.payroll_actif.id;
        // newItem.installation_allowance = item.payroll_actif.installation_allowance;
        // newItem.installation_assistance = item.payroll_actif.installation_assistance;
        // newItem.is_active = item.payroll_actif.is_active;
        // newItem.life_insurance = item.payroll_actif.life_insurance;
        // newItem.recrutement_id = item.payroll_actif.recrutement_id;
        // newItem.salary_currency = item.payroll_actif.salary_currency;
        // newItem.salary_frequency = item.payroll_actif.salary_frequency;
        // newItem.salary_taxes = item.payroll_actif.salary_taxes;
        // newItem.social_contribution = item.payroll_actif.social_contribution;
        // newItem.transport_allowance = item.payroll_actif.transport_allowance;
        // newItem.updated_at = item.payroll_actif.updated_at;
        // newItem.uuid = item.payroll_actif.uuid;
        // ajoute les autres champs que tu veux ici...
    }

    // contract_actif (si existant)
    if (item.contract_actif) {
        flattenSubObject(item.contract_actif, 'contract_actif');

        // newItem.contract_actif_id = item.contract_actif.id;
        // newItem.contract_actif_type_of_contract = item.contract_actif.type_of_contract;
        // newItem.contract_actif_contract_start_date = item.contract_actif.contract_start_date;
        // newItem.contract_actif_contract_end_date = item.contract_actif.contract_end_date;
        // ajoute les autres champs ici...
    }

    // poste_actif (si existant)
    if (item.poste_actif) {
        flattenSubObject(item.poste_actif, 'poste_actif');

        // newItem.poste_actif_id = item.poste_actif.id;
        // newItem.poste_actif_center = item.poste_actif.center;
        // newItem.poste_actif_position_title = item.poste_actif.position_title;
        // ajoute les autres champs ici...
    }

    return newItem;
    });

    const headers = buildHeaderFromSections(valuesToSend)
    useUtilsStores().useXlsx(transformed,headers)
    // useUtilsStores().importExcell(transformed,header)
    // console.log(JSON.stringify(transformed,null,2));
    // console.log(JSON.stringify(header,null,2));
}

</script>


<template>
  <div class="w-96 flex flex-col gap-2">
    <button 
      v-for="(item, index) in impoted"
      :key="index"
      type="button"
      @click="toggleSelect(item.value)"
      class="text-center text-[14px] border  gap-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer border-gray-200 w-full p-2 rounded-md"
      :class="{ '': onselected.includes(item.value) }"
    >
      <input 
        type="checkbox" 
        :value="item.value" 
        v-model="onselected"
        @click.stop  
      />
      <span>{{ item.label }}</span>
      <i class="uil uil-import"></i>
    </button>

    <ui-button-submit  @click="handleImport" :is-loading="loading" :disabled="onselected.length ==0" type="button" icon="uil uil-import" label="Import now"/>
    <!-- <button :disabled="onselected.length ==0" @click="handleImport" type="button" class="disabled:opacity-85 w-full disabled:cursor-not-allowed bg-primary text-white rounded-md p-2 cursor-pointer mt-1">Import now <i class="uil uil-import"></i></button> -->
<!-- 
    <div class="mt-3">
      <strong>Valeurs sélectionnées :</strong> {{ onselected }}
    </div> -->
  </div>
</template>


<style>

</style>