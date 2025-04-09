<script setup lang="ts"></script>

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Date"
            type="date"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Title"
            type="text"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            label="Description"
            type="text"
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
