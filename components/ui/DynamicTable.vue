<template>
  <div class=" w-full overflow-x-auto rounded-lg overflow-y-auto max-h-[800px] border bg-white border-gray-200 sticky top[68px]">
    <table class="border-collapse min-w-max w-full ">
      <!-- En-tête dynamique -->
      <thead class="border-b bg-white border-gray-200 borde-b  text-black font-black uppercase text-[11px]  bg-sidebar sticky z-10 top-0 ">
        <tr>
          <th v-for="(column, index) in columns" :key="index" 
          class="font-black text-left p-4" 
          
          :class="[
            index === 0 ? 'sticky left-0  w-[150px] z-[5]' : '',
            // index === 1 ? 'sticky left-[150px] w-[150px]' : '',
            // index === 2 ? 'sticky left-[300px] w-[150px]' : ''
          ]"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>

      <!-- Corps du tableau -->
      <tbody>
        <tr
          v-for="(item, rowIndex) in data"
          :key="rowIndex"
          class="text-zinc-500 font-[100] border border-zinc-100 cursor-pointer hover:bg-zinc-50"
          @click="handleRowClick(item, rowIndex)"
        >
          <td v-for="(column, colIndex) in columns" :key="colIndex" class="p-2" 
            :class="[
                'p-2 whitespace-nowrap bg-white', // base
                colIndex === 0 ? 'sticky left-0 z-[5]  w-[150px]' : '',
                // colIndex === 1 ? 'sticky left-[150px] z-[5] w-[150px]' : '',
                // colIndex === 2 ? 'sticky left-[300px] z-[5] w-[150px]' : ''
              ]"
          >
            {{ item[column.key] || "N/A" }}
          </td>
        </tr>
      </tbody>
    </table>
    
    <div class="w-full">
      <p v-if="data.length === 0" class="text-center text-[12px] text-zinc-400 p-4">
        Aucune donnée disponible
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

// Définir les types pour les props
interface Column {
  label: string  // Étiquette de la colonne
  key: string    // Clé de la donnée à afficher dans cette colonne
}

interface TableProps {
  columns: Column[] // Liste des colonnes
  data: Record<string, any>[] // Liste des données du tableau
  rowClick?: (item: Record<string, any>, index: number) => void // Fonction optionnelle pour le clic sur les lignes
}

// Props pour le composant
const props = defineProps<TableProps>()
const emit = defineEmits(['rowClick'])

// Gérer le clic sur une ligne et émettre l'événement
function handleRowClick(item: Record<string, any>, index: number) {
  if (props.rowClick) {
    props.rowClick(item, index) // Si une fonction `rowClick` est passée en prop, on l'appelle
  } else {
    emit('rowClick', item, index) // Sinon, on émet l'événement 'rowClick'
  }
}
</script>

<style scoped>
.table {
  /* width: 100%; */
}
table {
  width: 100%;
  border-collapse: collapse;
  /* table-layout: fixed; */

}
thead th {
  text-align: left;
}
tbody tr td {
  padding: 12px 12px;
  font-size: 11px;
  text-align: left;
  word-wrap: break-word; 
overflow-wrap: break-word;
}
</style>
