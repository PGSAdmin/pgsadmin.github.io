<template>
  <b-container fluid class="header">
    <b-row align-v="center" class="text-center">
      <b-col md="4" sm="12"><Logo class="logo" /></b-col>
      <b-col md="4" sm="12"><Tagline /></b-col>
      <b-col md="4" sm="12"><Phone /></b-col>
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
  box-shadow: 0 2px #0000004f;
}
.logo {
  max-height: 5em;
}
</style>
