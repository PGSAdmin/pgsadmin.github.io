<template>
  <b-container class="app-container">
    <b-row>
      <b-col>
        <Intro style="padding-left: 0; padding-right: 0" />
      </b-col>
    </b-row>
    <b-row id="abonnement">
      <b-col class="d-flex align-items-stretch">
        <subscription name="A-abonnement" price="1.600,00">
          <p>
            Hovedeftersyn hvert 2. år af gasbrænder med tilhørende automatik,
            rensning, kontrol og justering.
          </p>
          <p>Reservedele debiteres til dagspriser.</p>
          <p>
            Brænder pakningen skal som hovedregel altid skiftes ved
            serviceeftersyn.
          </p>
          <p>Abonnementet omfatter desuden rensning af kedlen.</p>
        </subscription>
      </b-col>
      <b-col class="d-flex align-items-stretch">
        <subscription name="B-abonnement" price="2.325,00">
          <p>
            Hovedeftersyn af gasbrænder og rensning af kedlen, som ved
            A-abonnement.
          </p>
          <p>
            Afhjælpning af driftsforstyrrelser indenfor den normale arbejdstid.
            Dog i perioden 1. oktober til 30. april alle ugens dage fra kl. 8.00
            – 20.00.
          </p>
          <p>
            Ved tilkald udenfor de anførte tidspunkter debiteres arbejdsløn til
            dagspriser.
          </p>
        </subscription>
      </b-col>
    </b-row>
    <b-row style="padding-top: 2em">
      <Partners />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.app-container {
  margin: 5em auto;
}

.title {
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #0a4130;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
