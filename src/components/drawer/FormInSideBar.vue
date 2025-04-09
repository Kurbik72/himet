<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  date: '',
  title: '',
  description: '',
})
const emit = defineEmits(['close'])
const createNote = (e: Event) => {
  e.preventDefault()
  localStorage.setItem('notes', JSON.stringify(form))
  emit('close')
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
