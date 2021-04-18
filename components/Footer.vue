<template>
  <footer>
    <span style="margin-right: 0.3em">CVR {{ cvr }}</span>
    &bull;
    <span style="margin-left: 0.3em">{{ address }}</span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      cvr: this.$store.state.cvr,
      address: this.$store.state.address,
    }
  },
})
</script>

<style scoped>
footer {
  text-align: center;
  background-color: #0a4130;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
}
</style>
