<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { computed, onMounted } from 'vue'
import HomeListNoteItem from '@/components/home/home--list--note--item.vue'

const notesStore = useNotesStore()

onMounted(() => {
  notesStore.loadFromLocalStorage()
})

const filteredNotes = computed(() => notesStore.getFilteredNotes())
const notesExist = computed(() => notesStore.notes.length > 0)
const isFilterActive = computed(() => !!notesStore.currentFilter.date)
const hasNoFilteredNotes = computed(() => isFilterActive.value && filteredNotes.value.length === 0)
const deleteNote = (id: string) => {
  notesStore.deleteNote(id)
}
</script>

<template>
  <div class="notes-container">
    <div
      v-if="notesExist"
      class="text"
    >
      <div
        v-if="hasNoFilteredNotes"
        class="no-notes"
      >
        <span>There are no notes on this date</span>
      </div>

      <!-- Список заметок -->
      <div
        v-else
        class="notes-list"
      >
        <RouterLink
          v-for="note in filteredNotes"
          :key="note.id"
          style="text-decoration: none; color: inherit"
          :to="{ name: 'note', params: { id: note.id } }"
          class="note-link"
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
    </div>

    <!-- Если нет заметок вообще -->
    <div
      v-else
      class="empty-state"
    >
      <span>Create your first note!</span>
    </div>
  </div>
</template>
<style scoped>
.text {
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
}
.notes-list {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>
