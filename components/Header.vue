<template>
  <b-container fluid class="header">
    <b-row align-v="center" class="text-center">
      <b-col><Logo class="logo" /></b-col>
      <b-col><Tagline /></b-col>
      <b-col><Phone /></b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header',
})
</script>

<style scoped>
.header {
  background-color: #0a4130;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
}
.logo {
  max-height: 5em;
}
</style>
