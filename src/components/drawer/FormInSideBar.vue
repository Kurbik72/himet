<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { useGetValidation } from '@/composables/useGetValidation'
import { validationRules } from '@/components/services'
import { NotificationService } from '@/components/services'
const notesStore = useNotesStore()
const form = reactive({
  date: '',
  title: '',
  description: '',
})

const rules = {
  date: [validationRules.required, validationRules.dateInFuture],
  title: [validationRules.required, validationRules.minLength(5)],
  description: [validationRules.required],
}

const v$ = useVuelidate(rules, form)
const getValidation = useGetValidation(v$)
const emit = defineEmits(['close'])

const createNote = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) {
    NotificationService.warning('Please fill out all fields')
    return
  }

  notesStore.addNote({
    date: form.date,
    title: form.title,
    description: form.description,
  })
  form.date = ''
  form.title = ''
  form.description = ''
  v$.value.$reset()
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
            :error-messages="getValidation('date')"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.title"
            label="Title"
            type="text"
            :error-messages="getValidation('title')"
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
            :error-messages="getValidation('description')"
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

<style>
.error {
  color: red;
}
</style>
