<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import SideBar from '@/components/layout/sideBar.vue'
import HomeFilter from '@/components/home/home--filter.vue'
import { ref } from 'vue'
import HomeListNotes from '@/components/home/home--list--note.vue'

const isActive = ref(false)
const showSideBar = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <v-layout>
    <Header @change="showSideBar" />
    <v-main
      ><HomeFilter />
      <HomeListNotes />
    </v-main>
    <SideBar v-model="isActive" />
  </v-layout>
</template>

<style scoped>
.NotesList {
  animation-timing-function: ease-in-out;
  animation-name: noteEmergence;
  animation-duration: 0.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.notificationAboutCreateNote {
  display: flex;
  align-items: center;
  justify-content: center;
  animation-timing-function: ease-in-out;
  animation-name: noteEmergence;
  animation-duration: 0.5s;
}
</style>
