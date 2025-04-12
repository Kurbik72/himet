<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { onMounted,computed } from 'vue'
import { mdiDelete } from '@mdi/js'

const notesStore = useNotesStore()
onMounted(() => {
  notesStore.loadFromLocalStorage()
})

const deleteNote = (id: string) => {
  notesStore.deleteNote(id)
}
const filteredNotes = computed(() => notesStore.getFilteredNotes())
</script>

<template>
  <div class="item">
    <v-sheet
      v-for="note of filteredNotes"
      :key="note.id"
      class="d-flex justify-space-between pa-2 bg-surface-variant w-50"
      rounded
    >
      <div>
        <b class="mr-4">{{ note.date }}</b>
        {{ note.title }}
      </div>

      <div class="w-25 d-flex justify-end align-center">
        <v-expand-transition mode="out-in">
          <v-icon
            :icon="mdiDelete"
            size="20"
            @click="deleteNote(note.id)"
          />
        </v-expand-transition>
      </div>
    </v-sheet>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>
