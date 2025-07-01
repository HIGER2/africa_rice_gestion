

<script setup lang="ts">

// const menuItems = ref([
//   {
//     label: 'Recrutement',
//     link: 'account/home',
//     children: [
//       {
//         label: 'Évaluation',
//         link: 'account/setting/evaluation',
//       },
//       {
//         label: 'Contrat',
//         link: 'account/setting/contract',
//       },
//     ],
//   },
//   {
//     label: 'Gestion du personnel',
//     link: 'resources/home',
//     children: [
//       {
//         label: 'Documents',
//         link: 'resources/docs',
//       },
//       {
//         label: 'Rapports',
//         link: 'resources/reports',
//       },
//     ],
//   },
// {
//     label: 'Contrat & administration',
//     link: 'resources/home',
//     children: [
//       {
//         label: 'Documents',
//         link: 'resources/docs',
//       },
//       {
//         label: 'Rapports',
//         link: 'resources/reports',
//       },
//     ],
//   },
// ])

const menuItems = [
  {
    label: 'Recrutement',
    icon:"uil uil-newspaper",
    children: [
      { label: 'Gestion  dossier', link: '#' ,icon:"uil uil-create-dashboard" },
      { label: 'Panélistes', link: '#' ,icon:"uil uil-create-dashboard" },
      { label: 'Rapport', link: '#',icon:"uil uil-create-dashboard"  },
      // { label: 'Programmation entretiens', link: '/recrutement/doodle' },
      // { label: 'Formulaire de notation', link: '/recrutement/formulaire' },
      // { label: 'Rapport de synthèse', link: '/recrutement/rapport' },
      // { label: 'Tableau de bord', link: '/recrutement/dashboard' },
    ]
  },
  // {
  //   label: 'Suivi des actions',
  //   children: [
  //     { label: 'Attribution des acteurs', link: '/suivi/attribution' },
  //     { label: 'Workflow recrutement', link: '/suivi/workflow' },
  //     { label: 'Notifications & rappels', link: '/suivi/notifications' },
  //   ]
  // },
  // {
  //   label: 'Candidatures',
  //   children: [
  //     { label: 'Full List', link: '/candidatures/full' },
  //     { label: 'Long List', link: '/candidatures/long' },
  //     { label: 'Short List', link: '/candidatures/short' },
  //     { label: 'Notation panélistes', link: '/candidatures/notation' },
  //     { label: 'Classement final', link: '/candidatures/classement' },
  //   ]
  // },
  {
    label: 'Gestion du personnel',
    icon:"uil uil-book-reader",
    children: [
      { label: 'Gestion collaborateur', link: '#' },
      // { label: 'Modifier infos par domaine', link: '/personnel/modifier' },
      // { label: 'Historique et synthèse', link: '/personnel/synthese' },
      { label: 'Rapport', link: '#' ,icon:"uil uil-create-dashboard" },
      // { label: 'Rapports statistiques', link: '/personnel/rapports' },
    ]
  },
  {
    label: 'Contrat & Administration',
    icon:"uil uil-file-contract",
    children: [
      { label: 'Gestions contrats', link: '#' , icon:"uil uil-create-dashboard" },
      { label: 'Générer un courrier', link: '#' },
      { label: 'Référencement automatique', link: '#' ,icon:"uil uil-create-dashboard" },
      // { label: 'Envoyer courrier (PDF)', link: '/admin-courriers/envoi' },
      // { label: 'Historique des envois', link: '/admin-courriers/historique' },
    ]
  },
  {
    label: 'Performmance',
    icon:"uil uil-tachometer-fast-alt",
    children: [
      // { label: 'Gestions o', link: '/admin-courriers/modeles' },
      // { label: 'Générer un courrier', link: '/admin-courriers/generer' },
      { label: 'Rapports', link: '/account/rapport' , icon: 'uil uil-chart'},
      // { label: 'Envoyer courrier (PDF)', link: '/admin-courriers/envoi' },
      // { label: 'Historique des envois', link: '/admin-courriers/historique' },
    ]
  }
]

const openIndex = ref<number | null>(menuItems.map(()=>true))

console.log(openIndex);

const toggle = (index: number) => {
  openIndex.value[index] = !openIndex.value[index];
}
</script>


<template>
   <aside class="w-full bg-white  p-2 ">
    <div v-for="(item, index) in menuItems" :key="index" class="w-full">
      <button
        @click="toggle(index)"
        class="w-full flex cursor-pointer items-center text-[11px] text-black font-bold  justify-between px-2 py-2 text-sm hover:bg-gray-100 rounded-md"
      >
        <div class="flex items-center gap-1">
          <i :class="item.icon" class="text-[17px] text-gray-600 "></i>
          <span class="uppercase ">{{ item.label }}</span>
        </div>
        <span>{{ openIndex[index] ? '−' : '+' }}</span>
      </button>
      <ul v-show=" openIndex[index]" class="mt-1  space-y-1 transition-all ml-3">
        <li
          v-for="(child, i) in item.children"
          :key="i"
        >
          <NuxtLink
            :to="child.link"
            class="flex gap-1 text-[13px]  text-gray-600  text-sm hover:text-black hover:font-medium transition px-2 py-1 rounded hover:bg-gray-100"
          >
           <i :class="child.icon"></i>
           <span> {{ child.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>