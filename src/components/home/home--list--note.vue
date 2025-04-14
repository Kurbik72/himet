<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { computed, onMounted } from 'vue'
import HomeListNoteItem from '@/components/home/home--list--note--item.vue'
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
  <div
    v-if="notesExist"
    class="NotesList"
  >
    <RouterLink
      v-for="note of filteredNotes"
      :key="note.id"
      style="text-decoration: none; color: inherit"
      class="w-50"
      :to="{ name: 'note', params: { id: note.id } }"
    >
      <HomeListNoteItem
        :id="note.id"
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
</template>

<style scoped></style>
