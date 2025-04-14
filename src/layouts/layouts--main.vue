<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import SideBar from '@/components/layout/sideBar.vue'
import HomeFilter from '@/components/home/home--filter.vue'
import { computed, onMounted, ref } from 'vue'
import HomeListNoteItem from '@/components/home/home--list--note--item.vue'
import { useNotesStore } from '@/stores/notes'
const isActive = ref(false)
const showSideBar = () => {
  isActive.value = !isActive.value
}
onMounted(() => {
  notesStore.loadFromLocalStorage()
})
const notesStore = useNotesStore()
const filteredNotes = computed(() => notesStore.getFilteredNotes())
const notesExist = computed(() => notesStore.notes.length !== 0)
const deleteNote = (id: string) => {
  notesStore.deleteNote(id)
}
</script>

<template>
  <v-layout>
    <Header @change="showSideBar" />
    <v-main
      ><HomeFilter />
      <div
        v-if="notesExist"
        class="NotesList"
      >
        <RouterLink :to="{}">
          <HomeListNoteItem
            v-for="note of filteredNotes"
            :id="note.id"
            :key="note.id"
            class="w-50"
            :date="note.date"
            :title="note.title"
            :description="note.description"
            @delete="deleteNote"
          />
        </RouterLink>
      </div>
      <div
        v-else
        class="notificationAboutCreateNote"
      >
        <span>Create some notes now!</span>
      </div>
    </v-main>
    <SideBar v-model="isActive" />
  </v-layout>
</template>

<style scoped>
.NotesList {
  animation-timing-function: ease-in-out;
  animation-name: noteEmergence;
  animation-duration: 0.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.notificationAboutCreateNote {
  display: flex;
  align-items: center;
  justify-content: center;
  animation-timing-function: ease-in-out;
  animation-name: noteEmergence;
  animation-duration: 0.5s;
}
</style>
