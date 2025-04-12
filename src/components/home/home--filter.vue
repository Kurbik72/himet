<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { ref, watchEffect } from 'vue'

const date = ref()

const notesStore = useNotesStore()

watchEffect(() => {
  notesStore.setFilter({ date: date.value })

  console.log(notesStore.setFilter())
})
</script>

<template>
  <v-responsive
    class="mx-auto mt-4"
    max-width="344"
  >
    <v-text-field
      v-model="date"
      label="Search by date"
      type="date"
    >
    </v-text-field>
  </v-responsive>
</template>
