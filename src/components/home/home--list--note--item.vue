<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { onMounted,computed,watchEffect } from 'vue'
import { mdiDelete } from '@mdi/js'

const notesStore = useNotesStore()
onMounted(() => {
  notesStore.loadFromLocalStorage()
})
const notesExist = computed(() => notesStore.notes.length !== 0) 


const deleteNote = (id: string) => {
  notesStore.deleteNote(id)
}
const filteredNotes = computed(() => notesStore.getFilteredNotes())
</script>

<template>
  <div v-if="notesExist" class="item">
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
  </div >
  <div v-else class="notificationAboutCreateNote">
    <span>Create some notes now!</span>
  </div>
</template>

<style scoped>
.item {
  animation-timing-function: ease-in-out;
  animation-name: noteEmergence;
  animation-duration: 0.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
@keyframes noteEmergence{
  0%{
    scale: 1 2;
    translate:0 -100px;
    opacity: 20%;
  }
  50%{
    scale: 1 1.5;
    opacity: 45%;
  }
  100%{
    opacity: 100%;
    translate: 0px 0px;
    scale: 1 1;
  }
}
.notificationAboutCreateNote{
  display: flex;
  align-items: center;
  justify-content: center;
  animation-timing-function: ease-in-out;
  animation-name: noteEmergence;
  animation-duration: 0.5s;
}


</style>
