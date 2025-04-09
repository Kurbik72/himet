<script setup lang="ts">
import FormInSideBar from '@/components/drawer/FormInSideBar.vue'

const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const handleClose = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <v-navigation-drawer
    :model-value="props.modelValue"
    temporary
    @update:model-value="emit('update:modelValue')"
  >
    <FormInSideBar
      :is-open="props.modelValue"
      @close="handleClose"
    />
  </v-navigation-drawer>
</template>
