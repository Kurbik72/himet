<script lang="ts" setup>
import { useNotesStore } from '@/stores/notes'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const noteStore = useNotesStore()
const route = useRoute()
onMounted(() => {
  noteStore.loadFromLocalStorage()
})
const note = computed(() => {
  return noteStore.notes.find((currNote) => currNote.id === route.params.id)
})
</script>

<template>
  <v-card
    v-if="note"
    class="w-50"
  >
    <v-card-title>
      <span>{{ note.date }}</span>
    </v-card-title>
    <v-card-text> {{ note.title }} </v-card-text>
    <v-card-text> {{ note.description }} </v-card-text>
    <v-card-actions>
      <v-spacer />
      <RouterLink to="/">
        <v-btn color="primary"> Закрыть </v-btn>
      </RouterLink>
    </v-card-actions>
  </v-card>
</template>
