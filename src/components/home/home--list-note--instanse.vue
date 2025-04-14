<script lang="ts" setup>
import { useNotesStore } from '@/stores/notes'

const noteStore = useNotesStore()
</script>

<template>
  <v-card
    v-for="note of noteStore.notes"
    :key="note.id"
    class="w-50"
  >
    <v-card-title>
      <span>{{ note.date }}</span>
    </v-card-title>
    <v-card-text> {{ note.title }} </v-card-text>
    <v-card-text> {{ note.description }} </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary"> Закрыть </v-btn>
    </v-card-actions>
  </v-card>
</template>
