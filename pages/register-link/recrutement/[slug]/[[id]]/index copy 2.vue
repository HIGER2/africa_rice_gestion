
<script lang="ts" setup>
const openPersonelInfo = ref(true);
const openMaritalStatus = ref(true);
const openDependents = ref(true);
const openEmergencyContact = ref(true);
const openBeneficiaries = ref(true);
</script>



<template>
  <div>
    <div class="w-full p-4  min-h-screen  flex  justify-center">
        <div class="w-lg  mx-auto space-y-6 text-sm text-gray-700">
            <!-- Personal Information -->
            <section  class="bg-white w-full cursor-pointer p-4  rounded-lg border border-gray-200">
                <div class="w-full flex items-center justify-between"> 
                     <h5 class=" font-semibold mb-4 text-gray-800">Personal Information</h5>
                     <div @click="openPersonelInfo=!openPersonelInfo" class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-gray-600 cursor-pointer">
                        <i class="uil uil-angle-up text-2xl" v-if="openPersonelInfo"></i>
                        <i class="uil uil-angle-down text-2xl" v-else></i>
                        <!-- <span class="text-xs text-gray-500">Click to edit</span>
                        <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                     </div>
               </div>
                <div @click.stop="" class="w-full" v-if="openPersonelInfo">
                    <div class="flex gap-2 items-end w-full mb-3">
                            <div class="w-full">
                                <label class="block mb-1">Name</label>
                                <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                            </div>
                            <div class="w-full">
                                <label class="block mb-1">Surnames</label>
                                <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                            </div>
                    </div>
                    <div class="flex gap-2 items-end w-full mb-3">
                        <div class="w-full">
                            <label class="block mb-1">Date of birth</label>
                            <input type="date" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div class="w-full">
                            <label class="block mb-1">Country of birth</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                    </div>
                    <div class="w-full mb-3">
                        <label class="block mb-1">Gender</label>
                        <select class="w-full border border-gray-300 rounded-md px-3 py-1.5">
                            <option value="">Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class=" flex items-end gap-2 w-full mb-3">
                        <div class="w-full">
                            <label class="block mb-1">Nationality 1</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div class="w-full">
                            <label class="block mb-1">Nationality 2</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                    </div>
                    <div class="flex items-end gap-2 w-full  mb-3">
                        <div class="w-full">
                            <label class="block mb-1">Passport/ID Card Number</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div class="w-full">
                            <label class="block mb-1">National Social Security Number</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                    </div>
                    <div class="flex items-end gap-2 w-full mb-3">
                        <div class="w-full">
                            <label class="block mb-1">Permanent Address</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div class="w-full">
                            <label class="block mb-1">Country of residence</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                    </div>
                    <div class="flex items-end gap-2 w-full mb-3">
                        <div class="w-full">
                            <label class="block mb-1">Town of residence</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div class="w-full">
                            <label class="block mb-1">Phone number</label>
                            <input type="tel" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                    </div>
                    <div class="w-full">
                        <label class="block mb-1">Personal Email</label>
                        <input type="email" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                </div>
            </section>

            <!-- Marital Status / Dependents -->
            <section class="bg-white w-full  p-4 md:p-6 rounded-lg border border-gray-200">
                
                <div class="w-full flex items-center justify-between"> 
                    <h5 class="text-lg font-semibold mb-1 text-gray-800">Marital Status</h5>
                     <div @click="openMaritalStatus=!openMaritalStatus" class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-gray-600 cursor-pointer">
                        <i class="uil uil-angle-up text-2xl" v-if="openMaritalStatus"></i>
                        <i class="uil uil-angle-down text-2xl" v-else></i>
                        <!-- <span class="text-xs text-gray-500">Click to edit</span>
                        <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                     </div>
               </div>
                <div class="space-y-6 mb-3" v-if="openMaritalStatus">
                    <div class="flex gap-2">
                        <div class="w-full">
                            <label class="block mb-1">Marital status</label>
                            <select class="w-full border border-gray-300 rounded-md px-3 py-1.5">
                                <option value="">Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label class="block mb-1">Number of child</label>
                            <input type="number" min="0" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                    </div>
                    <!-- Question 1: Family resides with you -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Does your family reside or will reside with you at your duty station?
                    </label>
                    <div class="flex gap-6">
                        <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" :value="true" 
                        class="text-green-600 focus:ring-green-500" />
                        <span>Yes</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" :value="false" 
                        class="text-green-600 focus:ring-green-500" />
                        <span>No</span>
                        </label>
                    </div>

                    <!-- If No: Ask where -->
                    <div  class="mt-3">
                        <label class="block text-sm text-gray-700 mb-1">If no, where does your family reside?</label>
                        <input type="text" 
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
                        <input type="radio" :value="true"  class="text-green-600 focus:ring-green-500" />
                        <span>Yes</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" :value="false"  class="text-green-600 focus:ring-green-500" />
                        <span>No</span>
                        </label>
                    </div>

                    <!-- If Yes: Ask institution -->
                    <div class="mt-3">
                        <label class="block text-sm text-gray-700 mb-1">
                        If yes, name and address of the institution where he/she works?
                        </label>
                        <input type="text" 
                        class="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                    </div>
                    </div>

                </div>
            </section>

            <!-- Dependents -->
            <section class="bg-white w-full p-4 md:p-6 rounded-lg border border-gray-200">
                <div class="w-full flex items-center justify-between"> 
                    <h5 class="text-lg font-semibold mb-1 text-gray-800">Dependents</h5>
                    <div @click="openDependents=!openDependents" class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-gray-600 cursor-pointer">
                        <i class="uil uil-angle-up text-2xl" v-if="openDependents"></i>
                        <i class="uil uil-angle-down text-2xl" v-else></i>
                    <!-- <span class="text-xs text-gray-500">Click to edit</span>
                    <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                    </div>
                </div>
                <div class="w-full" v-if="openDependents">
                    <p class="text-xs text-gray-500 mb-4">(Note that only & spouse and 4 children are taken in account)</p>
                    <!-- Dépendants -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end mb-6">
                        <div>
                            <label class="block mb-1">Full name</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div>
                            <label class="block mb-1">Relation</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div>
                            <label class="block mb-1">Gender</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div>
                            <label class="block mb-1">Date of birth</label>
                            <input type="date" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div>
                            <label class="block mb-1">Nationality</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                        <div>
                            <label class="block mb-1">Country of residence / Schooling</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                        </div>
                    </div>
                </div>  


            </section>
            <!-- Emergency Contact -->
            <section class="bg-white w-full p-4 md:p-6 rounded-lg border border-gray-200">
                <div class="w-full flex items-center justify-between"> 
                    <h5 class="text-lg font-semibold mb-4 text-gray-800">Emergency Contact</h5>
                    <div @click="openEmergencyContact=!openEmergencyContact" class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-gray-600 cursor-pointer">
                        <i class="uil uil-angle-up text-2xl" v-if="openEmergencyContact"></i>
                        <i class="uil uil-angle-down text-2xl" v-else></i>
                    <!-- <span class="text-xs text-gray-500">Click to edit</span>
                    <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                    </div>
                </div>
                <div v-if="openEmergencyContact" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block mb-1">Full name</label>
                        <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Relationship</label>
                        <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Address</label>
                        <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Telephone</label>
                        <input type="tel" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Email</label>
                        <input type="email" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                </div>
            </section>

            <!-- Designation of Beneficiaries -->
            <section class="bg-white w-full p-4 md:p-6 rounded-lg border border-gray-200">
                <div class="w-full flex items-center justify-between"> 
                    <h5 class="text-lg font-semibold mb-2 text-gray-800">Designation of Beneficiaries</h5>
                    <div @click="openBeneficiaries=!openBeneficiaries" class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-gray-600 cursor-pointer">
                        <i class="uil uil-angle-up text-2xl" v-if="openBeneficiaries"></i>
                        <i class="uil uil-angle-down text-2xl" v-else></i>
                    <!-- <span class="text-xs text-gray-500">Click to edit</span>
                    <i class="uil uil-edit text-gray-400 hover:text-gray-600"></i> -->
                    </div>
                </div>
                <div class="w-full" v-if="openBeneficiaries">
                    <p class="text-xs text-gray-500 mb-4">
                    In case of death during my employment with AfricaRice, I designate the persons below as my beneficiaries.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block mb-1">Full name</label>
                        <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Relation</label>
                        <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Birthday</label>
                        <input type="date" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Address</label>
                        <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Email</label>
                        <input type="email" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                    <div>
                        <label class="block mb-1">Percentage (%)</label>
                        <input type="number" step="0.01" max="100" class="w-full border border-gray-300 rounded-md px-3 py-1.5" />
                    </div>
                </div>
                </div>
            </section>

            <div class="flex justify-end gap-3 mt-6">
                <button class="px-4 w-full py-2 border border-gray-200 bg-white rounded-md shadow  transition-colors duration-200">
                    cancel
                </button>
                <button class="px-4 w-full py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition-colors duration-200">
                    Submit now
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<style>

</style>