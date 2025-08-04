
<script lang="ts" setup>
import { de } from '@nuxt/ui/runtime/locale/index.js';

const openPersonelInfo = ref(true);
const openMaritalStatus = ref(true);
const openDependents = ref(true);
const openEmergencyContact = ref(true);
const openBeneficiaries = ref(true);
const store = useEmployeeViewModel();
const loading =ref(false);

const handleSubmit = async() => {
    if (!confirm('Voulez-vous soumettre le formulaire ?')) {
        return;
    }
    loading.value =true
   let data = await store.createEmployeeDraft();
   
//   console.log('Form submitted with data:', store.employeePayload);
    loading.value = false
};

const handleInit=async()=>{
    const route  = useRoute()
    if (route.params.slug !=='update') return
    await store.findByLink(route.params.id)
    console.log(route.params.slug);
    
    // alert('hello')
}

onBeforeMount(()=>{

    handleInit()
})
</script>


<template>
  <div>
    <div class="w-full p-4  min-h-screen bg-white  flex  justify-center">
        <!-- {{ store.employeePayload.user }} -->
        <!-- <pre>{{ store.employeePayload }}</pre> -->
        <!-- <pre>{{ store.employeePayload }}</pre> -->
        <div class="w-lg  mx-auto   text-[13px] text-gray-700">
            <h5 class=" font-semibold mb-4 text-center  text-gray-800">STAFF DATA INFORMATION FORM</h5>
            <form action="" @submit.prevent="handleSubmit" class="space-y-3">
                        <!-- Personal Information -->
                    <section  class="bg-white w-full cursor-pointer p-4 rounded-lg border border-gray-200">
                        <div class="w-full flex items-center justify-between"> 
                            <h6 class=" font-semibold mb-4 text-base text-gray-800">Personal Information</h6>
                            <div @click="openPersonelInfo=!openPersonelInfo" class="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md text-gray-600 cursor-pointer">
                                <i class="uil uil-angle-up text-xl" v-if="openPersonelInfo"></i>
                                <i class="uil uil-angle-down text-xl" v-else></i>
                                <!-- <span class="text-xs text-gray-500">Click to edit</span>
                                <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                            </div>
                        </div>
                        <div @click.stop="" class="w-full" v-if="openPersonelInfo">
                            <div class="flex gap-2 items-end w-full mb-3">
                                    <div class="w-full">
                                        <label class="block mb-1">Name</label>
                                        <input 
                                        placeholder="Name"
                                        v-model="store.employeePayload.user.firstName"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div class="w-full">
                                        <label class="block mb-1">Surnames</label>
                                        <input 
                                        placeholder="Surnames"
                                        v-model="store.employeePayload.user.lastName"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                            </div>
                            <div class="flex gap-2 items-end w-full mb-3">
                                <div class="w-full">
                                    <label class="block mb-1">Date of birth</label>
                                    <input 
                                    placeholder="Date of birth"
                                    v-model="store.employeePayload.user.date_of_birth"
                                    type="date" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                                <div class="w-full">
                                    <label class="block mb-1">Country of birth</label>
                                    <input 
                                    placeholder="Country of birth"
                                    v-model="store.employeePayload.user.country_of_birth"
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                            </div>
                            <div class="w-full mb-3">
                                <label class="block mb-1">Gender</label>
                                <select 
                                v-model="store.employeePayload.user.gender"
                                class="w-full border border-gray-300 rounded-md px-3 py-1.5">
                                    <option value="">Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class=" flex items-end gap-2 w-full mb-3">
                                <div class="w-full">
                                    <label class="block mb-1">Nationality 1</label>
                                    <input 
                                    placeholder="Nationality 1"
                                    v-model="store.employeePayload.user.nationality_1"
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                                <div class="w-full">
                                    <label class="block mb-1">Nationality 2</label>
                                    <input 
                                    placeholder="Nationality 2"
                                    v-model="store.employeePayload.user.nationality_2"
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                            </div>
                            <div class="flex items-end gap-2 w-full  mb-3">
                                <div class="w-full">
                                    <label class="block mb-1">Passport/ID Card Number</label>
                                    <input 
                                    placeholder="Passport/ID Card Number"
                                    v-model="store.employeePayload.user.indentity_number"
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                                <div class="w-full">
                                    <label class="block mb-1">National Social Security Number</label>
                                    <input
                                    placeholder="National Social Security Number"
                                    v-model="store.employeePayload.user.social_security_number" 
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                            </div>
                            <div class="flex items-end gap-2 w-full mb-3">
                                <div class="w-full">
                                    <label class="block mb-1">Permanent Address</label>
                                    <input 
                                    placeholder="Permanent Address"
                                    v-model="store.employeePayload.user.permanent_address"
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                                <div class="w-full">
                                    <label class="block mb-1">Country of residence</label>
                                    <input 
                                    placeholder="Country of residence"
                                    v-model="store.employeePayload.user.country_of_residence"
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                            </div>
                            <div class="flex items-end gap-2 w-full mb-3">
                                <div class="w-full">
                                    <label class="block mb-1">Town of residence</label>
                                    <input
                                    placeholder="Town of residence"
                                    v-model="store.employeePayload.user.town_of_residence"
                                    type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                                <div class="w-full">
                                    <label class="block mb-1">Phone number</label>
                                    <input 
                                    placeholder="Phone number"
                                    v-model="store.employeePayload.user.phone"
                                    type="tel" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label class="block mb-1">Personal Email</label>
                                <input 
                                placeholder="Personal Email"
                                v-model="store.employeePayload.user.personal_email"
                                type="email" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                            </div>
                        </div>
                    </section>

                    <!-- Marital Status / Dependents -->
                    <section class="bg-white w-full  p-4  rounded-lg border border-gray-200">
                        
                        <div class="w-full flex items-center justify-between"> 
                        <h6 class="text-base font-semibold mb-1 text-gray-800">Marital Status</h6>
                        <div @click="openMaritalStatus=!openMaritalStatus" class="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md text-gray-600 cursor-pointer">
                            <i class="uil uil-angle-up text-xl" v-if="openMaritalStatus"></i>
                            <i class="uil uil-angle-down text-xl" v-else></i>
                            <!-- <span class="text-xs text-gray-500">Click to edit</span>
                            <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                    </div>
                    </div>
                        <div class="space-y-6 mb-3" v-if="openMaritalStatus">
                            <div class="flex gap-2">
                                <div class="w-full">
                                    <label class="block mb-1">Marital status</label>
                                    <select 
                                    v-model="store.employeePayload.user.marital_status"
                                    class="w-full border border-gray-300 rounded-md px-3 py-1.5">
                                        <option value="">Select gender</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                        <option value="widowed">Widowed</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div class="w-full">
                                    <label class="block mb-1">Number of child</label>
                                    <input 
                                    v-model="store.employeePayload.user.number_of_children"
                                    type="number" min="0" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                </div>
                            </div>
                            <!-- Question 1: Family resides with you -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Does your family reside or will reside with you at your duty station?
                            </label>
                            <div class="flex gap-6">
                                <label class="flex items-center space-x-2 cursor-pointer">
                                <input 
                                v-model="store.employeePayload.user.family_living_with_staff"
                                type="radio" value="yes" 
                                class="text-green-600 focus:ring-green-500" />
                                <span>Yes</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                <input 
                                v-model="store.employeePayload.user.family_living_with_staff"
                                type="radio" value="no" 
                                class="text-green-600 focus:ring-green-500" />
                                <span>No</span>
                                </label>
                            </div>

                            <!-- If No: Ask where -->
                            <div  class="mt-3">
                                <label class="block text-sm text-gray-700 mb-1">If no, where does your family reside?</label>
                                <input 
                                placeholder="Where does your family reside?"
                                v-model="store.employeePayload.user.family_residence_location"
                                type="text" 
                                class="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                            </div>
                            </div>

                            <!-- Question 2: Spouse works -->
                            <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Does your spouse work?
                            </label>
                            <div class="flex gap-6">
                                <label class="flex items-center space-x-2 cursor-pointer">
                                <input 
                                v-model="store.employeePayload.user.spouse_works"
                                type="radio" value="yes"  class="text-green-600 focus:ring-green-500" />
                                <span>Yes</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                <input 
                                v-model="store.employeePayload.user.spouse_works"
                                type="radio" value="no"  class="text-green-600 focus:ring-green-500" />
                                <span>No</span>
                                </label>
                            </div>

                            <!-- If Yes: Ask institution -->
                            <div class="mt-3">
                                <label class="block text-sm text-gray-700 mb-1">
                                If yes, name and address of the institution where he/she works?
                                </label>
                                <input 
                                v-model="store.employeePayload.user.spouse_workplace"
                                placeholder="Name and address of the institution"
                                type="text" 
                                class="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                            </div>
                            </div>

                        </div>
                    </section>

                    <!-- Dependents -->
                    <section class="bg-white w-full p-4 rounded-lg border border-gray-200">
                        <div class="w-full flex items-center justify-between"> 
                            <h6 class="text-base font-semibold mb-1 text-gray-800">Dependents</h6>
                            <div @click="openDependents=!openDependents" class="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md text-gray-600 cursor-pointer">
                                <i class="uil uil-angle-up text-xl" v-if="openDependents"></i>
                                <i class="uil uil-angle-down text-xl" v-else></i>
                            <!-- <span class="text-xs text-gray-500">Click to edit</span>
                            <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                            </div>
                        </div>
                        <div class="w-full" v-if="openDependents">
                            <p class="text-xs text-gray-500 mb-4">(Note that only & spouse and 4 children are taken in account)</p>
                            <!-- Dépendants -->
                            <div 
                            v-for="(dependent, index) in store.employeePayload.dependent"
                            class="w-full">
                                <div class="w-full flex items-center justify-between mb-2">
                                    <p class="mb-2 font-bold">Dependent #{{index+1 }}</p>
                                    <button 
                                    @click="store.removeItem('dependent', index)"
                                    type="button" class="text-red-500 hover:text-red-700 p-2 cursor-pointer">
                                    <i class="uil uil-trash-alt"></i>
                                    </button>
                                </div>
                                    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-2 items-end mb-6 bg-gray-50 p-2 rounded-md">
                                    <div>
                                        <label class="block mb-1">Full name</label>
                                        <input 
                                        v-model="dependent.full_name"
                                        type="text" placeholder="Full name" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Relation</label>
                                        <!-- <input 
                                        v-model="dependent.relation"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" /> -->
                                        <select 
                                            v-model="dependent.relation"
                                            class="w-full border border-gray-300 rounded-md px-3 py-1.5">
                                                <option value="" disabled>Select relation</option>
                                                <option value="spouse">Spouse</option>
                                                <option value="child">child</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block mb-1">Gender</label>
                                        <select 
                                            v-model="dependent.gender"
                                            class="w-full border border-gray-300 rounded-md px-3 py-1.5">
                                                <option value="" disabled>Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block mb-1">Date of birth</label>
                                        <input 
                                        v-model="dependent.date_of_birth"
                                        type="date" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Nationality</label>
                                        <input 
                                        placeholder="Nationality"
                                        v-model="dependent.nationality"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Country of residence / Schooling</label>
                                        <input 
                                        placeholder="Country of residence / Schooling"
                                        v-model="dependent.residence_or_school"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    </div>
                                </div>

                            <button 
                            @click="store.addItem('dependent')"
                            type="button"
                            class="max-w-max mx-auto flex items-center cursor-pointer justify-center gap-2 px-4 py-2 text-xs font-semibold text-gray-800 border border-gray-300 rounded-md shadow hover:bg-gray-100 transition-all duration-200 ease-in-out">
                                Add dependent
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>  


                    </section>
                    <!-- Emergency Contact -->
                    <section class="bg-white w-full p-4 rounded-lg border border-gray-200">
                        <div class="w-full flex items-center justify-between"> 
                            <h6 class="text-base font-semibold mb-4 text-gray-800">Emergency Contact</h6>
                            <div @click="openEmergencyContact=!openEmergencyContact" class="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md text-gray-600 cursor-pointer">
                                <i class="uil uil-angle-up text-xl" v-if="openEmergencyContact"></i>
                                <i class="uil uil-angle-down text-xl" v-else></i>
                            <!-- <span class="text-xs text-gray-500">Click to edit</span>
                            <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                            </div>
                        </div>
                        <div v-if="openEmergencyContact" class="w-full">
                            <div 
                            v-for="(emergency, index) in store.employeePayload.emergency"
                            class="w-full mb-2 ">
                                <div class="w-full flex items-center justify-between">
                                    <p class="mb-2 font-bold">Emergency #{{ index+1 }}</p>
                                    <button 
                                        @click="store.removeItem('emergency', index)"
                                        type="button" class="text-red-500 hover:text-red-700 p-2 cursor-pointer">
                                        <i class="uil uil-trash-alt"></i>
                                        </button>
                                </div>
                                <div class="w-full mb-6 bg-gray-50 p-2 rounded-md">
                                    <div class="w-full mb-3">
                                            <label class="block mb-1">Full name</label>
                                            <input
                                            v-model="emergency.name"
                                            placeholder="Full name" type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div class="flex gap-1 items-end">
                                        <div class="w-full">
                                            <label class="block mb-1">Relationship</label>
                                            <input 
                                            v-model="emergency.relationship"
                                            type="text" placeholder="Relationship" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                        </div>
                                        <div class="w-full">
                                            <label class="block mb-1">Address</label>
                                            <input
                                            v-model="emergency.address"
                                            type="text" placeholder="Address" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                        </div>
                                    </div>
                                    <div class="flex gap-1 items-end mt-3">
                                        <div class="w-full">
                                            <label class="block mb-1">Phone</label>
                                            <input type="tel" 
                                            v-model="emergency.phone"
                                            placeholder="Phone" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                        </div>
                                        <div class="w-full">
                                            <label class="block mb-1">Email</label>
                                            <input 
                                            v-model="emergency.email"
                                            type="email" placeholder="Email" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button 
                            type="button"
                            @click="store.addItem('emergency')"
                            class="max-w-max mt-3 mx-auto flex items-center cursor-pointer justify-center gap-2 px-4 py-2 text-xs font-semibold text-gray-800 border border-gray-300 rounded-md shadow hover:bg-gray-100 transition-all duration-200 ease-in-out">
                            Add emergency
                            <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </section>

                    <!-- Designation of Beneficiaries -->
                    <section class="bg-white w-full p-4 rounded-lg border border-gray-200">
                        <div class="w-full flex items-center justify-between"> 
                            <h6 class="text-base font-semibold mb-2 text-gray-800">Designation of Beneficiaries</h6>
                            <div @click="openBeneficiaries=!openBeneficiaries" class="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md text-gray-600 cursor-pointer">
                                <i class="uil uil-angle-up text-xl" v-if="openBeneficiaries"></i>
                                <i class="uil uil-angle-down text-xl" v-else></i>
                            <!-- <span class="text-xs text-gray-500">Click to edit</span>
                            <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                            </div>
                        </div>
                        <div class="w-full" v-if="openBeneficiaries">
                            <p class="text-xs text-gray-500 mb-4">
                            In case of death during my employment with AfricaRice, I designate the persons below as my beneficiaries.
                        </p>
                            <div 
                            v-for="(beneficiary, index) in store.employeePayload.beneficiary"
                            class="w-full mb-3">
                                <div class="w-full flex items-center justify-between">
                                    <p class="mb-2 font-bold">Beneficiary #{{ index+1 }}</p>
                                    <button 
                                    @click="store.removeItem('beneficiary', index)"
                                    type="button" class="text-red-500 hover:text-red-700 p-2 cursor-pointer">
                                    <i class="uil uil-trash-alt"></i>
                                    </button>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 bg-gray-50 p-2 rounded-md">
                                    <div>
                                        <label class="block mb-1">Full name</label>
                                        <input 
                                        v-model="beneficiary.full_name"
                                        placeholder="Full name"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Relation</label>
                                        <input 
                                        v-model="beneficiary.relationship"
                                        placeholder="Relation"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Birthday</label>
                                        <input 
                                        v-model="beneficiary.birthday"
                                        placeholder="Birthday"
                                        type="date" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Address</label>
                                        <input 
                                        v-model="beneficiary.address"
                                        placeholder="Address"
                                        type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Email</label>
                                        <input
                                        v-model="beneficiary.email"
                                        placeholder="Email"
                                        type="email" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                    <div>
                                        <label class="block mb-1">Percentage (%)</label>
                                        <input 
                                        v-model="beneficiary.percentage_share"
                                        placeholder="Percentage (%)"
                                        type="number" step="0.01" max="100" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                                    </div>
                                </div>
                            </div>
                            <button 
                            @click="store.addItem('beneficiary')"
                            type="button"
                            class="max-w-max mt-3 mx-auto flex items-center cursor-pointer justify-center gap-2 px-4 py-2 text-xs font-semibold text-gray-800 border border-gray-300 rounded-md shadow hover:bg-gray-100 transition-all duration-200 ease-in-out">
                            Add beneficiary
                            <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </section>

                    <div class="flex justify-end gap-3 mt-6">
                        <!-- <button type="button" class="px-4 w-full py-2 border border-gray-200 bg-white rounded-md shadow  transition-colors duration-200">
                            cancel
                        </button> -->
                        <UiButtonSubmit
                        :isLoading="loading"
                        label=" Submit now"
                        />
                    </div>
            </form>
        </div>
    </div>
  </div>
</template>

<style>
input,select{
    font-size: 13px;
}
</style>