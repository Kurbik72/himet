<script setup lang="ts">
import type { Note } from '@/types/note.types'
import { mdiDelete } from '@mdi/js'
import { ref } from 'vue'

const props = defineProps<Note>()

const emit = defineEmits<{
  (e: 'delete', id: string): void
}>()

const deleteNote = () => {
  emit('delete', props.id)
}

const isActiveCursor = ref(false)
const handleMouseOver = () => {
  isActiveCursor.value = true
}
const handleMouseLeave = () => {
  isActiveCursor.value = false
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

    <div
      class="w-25 d-flex justify-end align-center"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <v-expand-transition mode="out-in">
        <v-icon
          v-show="isActiveCursor"
          :icon="mdiDelete"
          size="20"
          @click.stop.prevent="deleteNote"
        />
      </v-expand-transition>
    </div>
  </v-sheet>
</template>
