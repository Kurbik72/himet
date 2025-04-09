<script setup lang="ts">
import FormInSideBar from '../formInSideBar/FormInSideBar.vue'

const { modelValue = true } = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <v-navigation-drawer
    :model-value="modelValue"
    temporary
    @update:model-value="emit('update:modelValue')"
  >
    <FormInSideBar
      :is-open="modelValue"
      @close="emit('update:modelValue')"
    />
  </v-navigation-drawer>
</template>
