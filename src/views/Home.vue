<template>
  <div class="home">
    <button @click="newIncident()">Novo incidente (gambi)</button>
    <incident-list v-bind:incidents="incidents"></incident-list>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import MapToolbar from '@/components/MapTools.vue';
import IncidentList from '@/components/IncidentList.vue';

import Incident from '@/models/Incident';

const theIncidents: Array<Incident> = [];
let theIncidentCount = 0;

@Component({
  components: {
    MapToolbar,
    IncidentList,
  },
})
export default class Home extends Vue {
  incidents: Array<Incident> = theIncidents;

  // eslint-disable-next-line class-methods-use-this
  newIncident() {
    theIncidents.push(new Incident(theIncidentCount.toString(), `ximbas ${theIncidentCount}`));
    theIncidentCount += 1;
  }

  // eslint-disable-next-line class-methods-use-this
  created() {
    // eslint-disable-next-line no-console
    console.log('Created!', this.incidents);
  }

  // eslint-disable-next-line class-methods-use-this
  mounted() {
    // eslint-disable-next-line no-console
    console.log('Mounted!', this.incidents);
  }
}
</script>
