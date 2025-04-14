<script setup lang="ts">
import type { Note } from '@/types/note.types'
import { mdiDelete } from '@mdi/js'

const props = defineProps<Note>()

const emit = defineEmits<{
  (e: 'delete', id: string): void
}>()

const deleteNote = () => {
  emit('delete', props.id)
}
</script>

<template>
  <v-sheet
    class="d-flex justify-space-between pa-2 bg-surface-variant"
    rounded
  >
    <div>
      <b class="mr-4">{{ props.date }}</b>
      {{ props.title }}
    </div>

    <div class="w-25 d-flex justify-end align-center">
      <v-expand-transition mode="out-in">
        <v-icon
          :icon="mdiDelete"
          size="20"
          @click="deleteNote"
        />
      </v-expand-transition>
    </div>
  </v-sheet>
</template>
