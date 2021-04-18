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

<style scoped>
.phone {
  color: whitesmoke;
}
</style>
