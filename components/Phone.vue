<template>
  <span class="phone" aria-label="telefon nummer">
    <font-awesome-icon icon="phone" />
    {{ phone }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Phone',
  data() {
    return {
      phone: this.$store.state.phone,
    }
  },
})
</script>

<style lang="scss" scoped>
.phone {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
}
</style>
