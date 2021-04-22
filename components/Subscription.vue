<template>
  <b-card :title="name" :sub-title="priceDescription" class="subscription">
    <slot />
  </b-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  name: 'Subscription',

  props: {
    name: {
      type: String,
      required: true,
    } as PropOptions<String>,
    price: {
      type: String,
      required: true,
    } as PropOptions<String>,
  },

  computed: {
    priceDescription(): string {
      return `Pris: ${this.price} kr. inkl. Moms`
    },
  },
})
</script>

<style lang="scss" scoped>
.subscription {
  background-color: $primary-color-light;
}
</style>
