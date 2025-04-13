<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
const notesStore = useNotesStore()
const form = reactive({
  date: '',
  title: '',
  description: '',
})

const rules = {
  date: { required },
  title: { required, minLength: minLength(5) },
  description: { required },
}
const v$ = useVuelidate(rules, form)
const emit = defineEmits(['close'])

const createNote = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return

  notesStore.addNote({
    date: form.date,
    title: form.title,
    description: form.description,
  })
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
          />
          <div v-if="v$.date.$error">
            <span
              v-for="error in v$.date.$errors"
              :key="error.$uid"
              class="error"
            >
              {{ error.$message }}
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.title"
            label="Title"
            type="text"
          />
          <div v-if="v$.title.$error">
            <span
              v-for="error in v$.date.$errors"
              :key="error.$uid"
              class="error"
            >
              {{ error.$message }}
            </span>
          </div>
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
          <div v-if="v$.description.$error">
            <span
              v-for="error in v$.description.$errors"
              :key="error.$uid"
              class="error"
            >
              заполните описание
            </span>
          </div>
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
