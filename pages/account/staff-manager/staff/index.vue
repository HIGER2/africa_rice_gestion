<script setup lang="ts">


const tabs= ref([
    { label: 'List of staff', active: false },
    { label: 'List of inscrition', active: true }
]);

const toggleTab = (index: number) => {
    tabs.value.forEach((tab, i) => {
        tab.active = i === index;
    });
};

</script>
<template>
    <div>
        <NuxtLayout>
        <!-- <UModal v-model="isOpen" >
            <EmployeeCreateEmployeeComponent v-if="isOpen" 
            :setOpen="setOpen"
            /> 
        </UModal> -->
            <div class="content">
                <div class="header">
                    <h5>Employee</h5>
                    <div class="flex items-center gap-2">
                        <staff-manager-register-link-component/>
                        <!-- <button type="button" @click="setOpen(true)" 
                        class="btnadd cursor-pointer">Send link <i class="uil uil-link"></i></button> -->
                        <button type="button" 
                        class="btnadd cursor-pointer">Nouveau <i class="fi fi-sr-plus"></i></button>
                    </div>
                </div>
                <div class="w-full flex mt-5 justify-between font-medium  text-base cursor-pointer items-center  border-b border-zinc-200 ">
                    <button 
                    v-for="(tab, index) in tabs"
                    @click="toggleTab(index)"
                    :class="[
                       'w-full cursor-pointer text-[12px] text-center p-2 hover:bg-gray-100 transition-all duration-200 ease-in-out',
                        tab.active ? 'border-b-2 border-black text-black font-bold' : 'text-gray-500'
                    ]">
                    {{ tab.label }}
                    </button>
                </div>
                <template v-if="tabs[0].active">
                    <StaffManagerComponentStaff/>
                </template>

                <template v-if="tabs[1].active">
                    <StaffManagerComponentStaffDraft/>
                </template>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss">
.content{
    width: 100%;
    min-height: 100px;
    .btnadd{
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
        position: relative;
        border: 1px solid $zinc-300;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 600;
        gap: 0.25rem;
        transition: all 0.2s ease-in-out;
        box-shadow: $shadow_sm;
        border-radius: 0.375rem;
        color: $text-zinc-800;
    }
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        h5{
            color: $text-zinc-800;
            text-transform: capitalize;
            font-size: 1rem;
        }
       
    }
    .content-table{
        width: 100%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        // padding: 10px;
        // min-height: 100px;
        // height: 10px;
        // background-color: $white;
        // box-shadow: $shadow_sm;
        // border: 1px solid $zinc-200;
        // border-radius: $rounded-md;
        .filterelement{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            // background-color: $white;
            // box-shadow: $shadow_sm;
            // border: 1px solid $zinc-200;
            // border-radius: $rounded-md;
            margin-bottom: 1rem ;
            .btn{
                    padding: 0.5rem 1rem;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    border: 1px solid $zinc-300;
                    align-items: center;
                    font-size: 0.75rem;
                    font-weight: 600;
                    gap: 0.25rem;
                    transition: all 0.2s ease-in-out;
                    box-shadow: $shadow_sm;
                    border-radius: 0.375rem;
                    color: $text-zinc-800;
                }
            .groupeInput{
                width: 30%;
                select,input{
                    // padding:0.6rem 1rem;
                    // width: 100%;
                    // border: 1px solid $zinc-200;
                    // border-radius: $rounded-md;
                    // font-size: 0.74em;
                }
            }
        }
       
            
    }
}
</style>