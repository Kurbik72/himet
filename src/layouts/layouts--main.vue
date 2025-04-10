<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import SideBar from '@/components/layout/sideBar.vue'
import HomeFilter from '@/components/home/home--filter.vue'
import { ref } from 'vue'
import HomeListNoteItem from '@/components/home/home--list--note--item.vue'
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
      <HomeListNoteItem />
    </v-main>
    <SideBar v-model="isActive" />
  </v-layout>
</template>
