<template>
  <b-container>
    <b-row>
      <b-col>
        <b-jumbotron class="intro-box">
          <template #header> Service af dit gasfyr fra 1.600 kr. </template>
          <template #lead>
            Ring på <a :href="phoneLink">{{ phone }}</a> &bullet; Vi kører
            lokalt i Nordsjælland &bullet; Priserne gælder
            <strong>kun</strong> i Nordsjælland
          </template>
          <b-row>
            <b-col md="6">
              <b-card-img
                src="/img/boilers/bosch_double_white.jpg"
                alt="En Bosch double kedel"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text>
                  <p>
                    Velkommen og tak for at du besøger Pers Gasservice online.
                  </p>

                  <p>Jeg hedder Per og har Pers Gasservice.</p>
                  <p>
                    Jeg kom i lære midt i de glade 80'er, og de sidste mange år
                    har gaskedler været mit fokuspunkt.
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-card-body>
                <b-card-text>
                  <p>
                    Er uheldet ude, står vi klar til at efterse og reparere dit
                    gasfyr med kort varsel.
                  </p>
                  <p>Engangseftersyn: 1.925,00 kr. inkl. Moms</p>
                  <p>
                    Spar endnu mere med et <a href="#abonnement">abonnement</a>.
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
            <b-col md="6">
              <b-card-img
                src="/img/boilers/whbk-snitbillede.jpg"
                alt="Et snitbillede af en WHBK kedel"
                class="rounded-0"
              ></b-card-img>
            </b-col>
          </b-row>
        </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Intro',

  data() {
    return {
      phone: this.$store.state.phone,
    }
  },

  computed: {
    phoneLink(): string {
      return `tel:${this.phone.split(' ').join('-')}`
    },
  },
})
</script>

<style lang="scss" scoped>
.intro-box {
  justify-content: start;
  background-color: $primary-color-light;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.intro-divider {
  border-top-color: #0a4130;
}
</style>
