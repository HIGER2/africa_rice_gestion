<script setup lang="ts">

const { logout } = useAuthViewModel();
const links = [
    {
        type: 'link',
        ico: 'uil uil-create-dashboard',
        label: 'dashboard',
        link: 'account/home',
    },
    {
        type: 'button',
        ico: 'uil uil-create-dashboard',
        label: 'Gestion personel',
        link: 'account/home',
        children: [
            {
                label: "eveluation",
                link: 'account/setting/eveluation',
            },
            {
                label: "eveluation",
                link: 'account/setting/eveluation',
            }
        ]
    },
    {
        type: 'link',
        ico: 'uil uil-user',
        label: 'Employees',
        link: 'account/employee',
    },
    {   
        type:'link',
        ico: 'uil uil-sliders-v',
        label: 'Settings',
        link: 'account/setting',
        children: [
            {
                label: "eveluation",
                link: 'account/setting/eveluation',
            },
            {
                label: "eveluation",
                link: 'account/setting/eveluation',
            }
        ]
    },

    {   
        type: 'link',
        ico: 'uil uil-analytics',
        label: 'Rapports',
        link: 'account/rapport',
    }
    
]

const isOpen :Ref<Boolean>= ref(false);
const setOpen = (state : boolean) => {
    isOpen.value=state
}
</script>

<template>
    <main>
            <nav class="navbar z-50 border-b border-zinc-200  sticky flex top-0 py-3 items-center justify-between w-full  px-4 bg-white ">
                <div class="itemlef">
                     <div class="logo">
                        <img src="~assets/images/logo.webp" alt="">
                    </div>
                </div>
                <div class="itemRight cursor-pointers">
                    <div class="user">
                        <button type="button"
                        @click="setOpen(!isOpen)"
                        class="flex h-9 hover:border-green-900 transition  border items-center gap-2 px-4 justify-center rounded-full  bg-green-100 p-2 text-xs font-bold text-green-900 transition-all border-transparent"
                        >
                        <div class="info">
                            <span>Doumaa armand</span>
                        </div>
                        <i class="fi fi-rr-menu-burger"></i>
                        </button>
                        <ul class="dropdown transition-all duration-300 "
                            :class="isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-[0.8]'">
                            <li class="items" >
                                <NuxtLink to="">Change password</NuxtLink>
                            </li>
                            <li class="items" @click="logout">
                                <span>Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section class="sidebar bg-white border-r border-zinc-200 overflow-y-auto ">
                    <LayoutsMenuComponent/>

                <!-- <header class="header">
                    <div class="logo">
                        <img src="~assets/images/logo.webp" alt="">
                    </div>
                </header> -->
                <!-- <ul class="navitems">
                    <li class="item" v-for="(item, index) in links" :key="index">
                        <template v-if="item.type =='link'">
                            <NuxtLink class="link" :to="`/${item.link}`">
                                <i :class="item.ico"></i>
                                <span>{{ item.label }}</span>
                            </NuxtLink>
                        </template>
                        <template v-else>
                            <button class="link" type="buton">
                                <i class="fi " :class="item.ico"></i>
                                <span>{{ item.label }}</span>
                            </button>
                            <ul class="ml-[25px]">
                                <li class="w-full" v-for="(item, index) in item.children" :key="index">
                                    <NuxtLink class="text-[14px]" :to="`/${item.link}`">
                                        <i class="fi " :class="item.ico"></i>
                                        <span>{{ item.label }}</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul> -->
            </section>
            <section class="main-content">
                <!-- <nav class="navbar">
                    <div class="itemlef"></div>
                    <div class="itemRight">
                        <div class="user">
                            <button type="button"
                            @click="setOpen(!isOpen)"
                            class="flex h-9 hover:border-green-900 transition  border items-center gap-2 px-4 justify-center rounded-full  bg-green-100 p-2 text-xs font-bold text-green-900 transition-all border-transparent"
                            >
                            <div class="info">
                                <span>Doumaa armand</span>
                            </div>
                            <i class="fi fi-rr-menu-burger"></i>
                            </button>
                            <ul class="dropdown transition-all duration-300 "
                                :class="isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-[0.8]'">
                                <li class="items" v-for="(item, index) in 5" :key="index">
                                    <NuxtLink to="">My account</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> -->
                <div class="container">
                    <slot />
                </div>
            </section>
    </main>
</template>

<style scoped lang="scss">
main{
    width: 100%;
    cursor: pointer;
    .logo{
        // display: flex;
        width: 130px;
        // margin-inline: auto;
        img{
            width: 100%;
        }
    }
    .navbar{
        // width: 100%;
        // z-index: 10;
        // height: 60px;
        // background-color: $white;
        // padding: 10px 20px;
        .user{
            display: flex;
            height: 2.25rem;
            border: 1px solid transparent;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            justify-content: center;
            border-radius: 9999px;
            // background-color: $primary_sm;
            // color: $primary_md;
            // color: $primary_md;
            font-size: 0.75rem;
            /* text-xs */
            font-weight: 700;
            /* font-bold */
            transition: all 0.2s ease-in-out;
            position: relative;
            .dropdown {
                position: absolute;
                top: 160%;
                right: 0;
                min-width: 180px;
                background-color: $white;
                box-shadow: $shadow-sm;
                border:1px solid $zinc-200;
                padding: 10px;
                border-radius: $rounded-md;
                // transform: scale(0.7);
                // visibility: hidden;
                
                // display: none;
                .items{
                    padding: 10px;
                    border-radius: $rounded-md;
                    color:$zinc-700 ;
                    &:hover{
                        background-color: $zinc-200;
                    }
                }
            }
            .info{
                display: flex;
                flex-direction: column;
                gap: 5px;
                span{
                    &:last-child{
                        // color:$zinc-500;
                    }
                }
            }
            .ico{
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                background-color: $zinc-200;
                border-radius: 50%;
            }
        }
    }
    .sidebar{
    width: 250px;
    height: calc(100vh - 60px);
    position: fixed;
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    background-color: $white;
    .header{
        height: 60px;
        padding: 10px;
        .logo{
            // display: flex;
            width: 130px;
            // margin-inline: auto;
            img{
                width: 100%;
            }
        }
    }
}
    .main-content{
        width: calc(100% - 250px);
        left: 250px;
        position: relative;
        min-height: 100vh;
        // background-color: $white;
        .container{
            width: 100%;
            padding: 1em;
           
        }
    }
}

</style>