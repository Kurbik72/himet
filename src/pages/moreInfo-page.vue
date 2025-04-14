<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import HomeInfo from '@/components/home/home--list-note--moreInfo.vue'
import SideBar from '@/components/layout/sideBar.vue'
import { ref } from 'vue'

const isActive = ref(false)
const showSideBar = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <v-app>
    <Header @change="showSideBar" />
    <v-main>
      <div class="d-flex justify-center pa-4">
        <HomeInfo />
      </div>
    </v-main>
    <SideBar v-model="isActive" />
  </v-app>
</template>
