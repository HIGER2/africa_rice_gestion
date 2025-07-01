<template>
  <div class="table w-full">
    <table class="w-full border-collapse">
      <!-- En-tête dynamique -->
      <thead class="border-b border-zinc-100 uppercase text-[10px]">
        <tr>
          <th v-for="(column, index) in columns" :key="index" class="p-2 text-left">
            {{ column.label }}
          </th>
        </tr>
      </thead>

      <!-- Corps du tableau -->
      <tbody>
        <tr
          v-for="(item, rowIndex) in data"
          :key="rowIndex"
          class="text-zinc-500 font-[100] border-b border-zinc-100 cursor-pointer hover:bg-zinc-50"
          @click="handleRowClick(item, rowIndex)"
        >
          <td v-for="(column, colIndex) in columns" :key="colIndex" class="p-2" >
            {{ item[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-full">
      <p v-if="data.length === 0" class="text-center text-zinc-400 p-4">
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
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
table-layout: fixed; /* Colonne largeur égale */

}
thead th {
  padding: 20px 10px;
  text-align: left;
}
tbody tr td {
  padding: 15px 15px;
  font-size: 12px;
  text-align: left;
  word-wrap: break-word; 
overflow-wrap: break-word;
}
</style>
