<template>
  <footer>
    Pers Gasservice
    <span style="margin: 0.3em 0">&bullet;</span>
    CVR {{ cvr }}
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',

  data() {
    return {
      cvr: this.$store.state.cvr,
    }
  },
})
</script>

<style scoped>
footer {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: center;
  background-color: #0a4130;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
}
</style>
