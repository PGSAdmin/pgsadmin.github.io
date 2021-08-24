<template>
  <footer>
    Pers Gasservice ApS
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

<style lang="scss" scoped>
footer {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: center;
  background-color: $primary-color;
  color: $primary-color-text;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
