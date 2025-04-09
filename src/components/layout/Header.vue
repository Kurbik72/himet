<script setup lang="ts">
const emit = defineEmits<{
  (event: 'change'): void
}>()
import { mdiPlus } from '@mdi/js'
</script>

<template>
  <v-app-bar>
    <v-toolbar-title>Note</v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon
        :icon="mdiPlus"
        @click="emit('change')"
      />
    </v-btn>
  </v-app-bar>
</template>
