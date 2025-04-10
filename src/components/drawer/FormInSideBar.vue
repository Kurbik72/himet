<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { reactive } from 'vue'
const notesStore = useNotesStore()
const form = reactive({
  date: '',
  title: '',
  description: '',
})
const emit = defineEmits(['close'])

const createNote = () => {
  if (form.date && form.title) {
    notesStore.addNote({
      date: form.date,
      title: form.title,
      description: form.description,
    })
  }
  emit('close')
  form.date = ''
  form.title = ''
  form.description = ''
}
</script>

<template>
  <v-form @submit.prevent="createNote">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.date"
            label="Date"
            type="date"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.title"
            label="Title"
            type="text"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="form.description"
            label="Description"
            type="text"
            outlined
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            type="submit"
            color="primary"
            >Добавить</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
