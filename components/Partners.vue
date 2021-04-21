<template>
  <b-container>
    <b-card title="Samarbejdspartnere" class="partners text-center">
      <b-row align-v="center" class="text-center">
        <b-col>
          <img src="/img/partners/baxi.jpg" alt="" />
        </b-col>
        <b-col>
          <img src="/img/partners/bosch.png" alt="" />
        </b-col>
        <b-col>
          <img src="/img/partners/milton-megatherm.png" alt="" />
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Partners',
})
</script>

<style lang="scss" scoped>
.partners {
  background-color: $primary-color-light;
}
</style>
