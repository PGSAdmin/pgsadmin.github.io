<template>
  <b-card :title="name" :sub-title="priceDescription" class="subscription">
    <slot />
    <p>
      Se
      <a
        href="/Betingelser-for-serviceabonnement.pdf"
        target="_blank"
        title="Åben abonnementsbetingelser i en ny fane"
        >abonnementsbetingelser</a
      >.
    </p>
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
      required: false,
      default: '',
    } as PropOptions<String>,
  },

  computed: {
    priceDescription(): string {
      if (this.price) return `Pris pr. år: ${this.price} kr. inkl. Moms`
      else return ''
    },
  },
})
</script>

<style lang="scss" scoped>
.subscription {
  background-color: $primary-color-light;
}
</style>
