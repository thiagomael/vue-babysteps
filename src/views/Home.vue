<template>
  <div class="home">
    <map-toolbar :incident-factory="incidentFactory"></map-toolbar>
    <incident-form v-if="isReporting"
                   :incident-factory="incidentFactory"></incident-form>
    <incident-list :incident-factory="incidentFactory"></incident-list>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import MapToolbar from '@/components/MapToolbar.vue';
import IncidentList from '@/components/IncidentList.vue';
import IncidentForm from '@/components/IncidentForm.vue';

import IncidentFactory from '../models/IncidentFactory';

@Component({
  components: {
    MapToolbar,
    IncidentList,
    IncidentForm,
  },
})
export default class Home extends Vue {
  @Prop() incidentFactory!: IncidentFactory;

  theIncidentFactory = this.incidentFactory;

  get isReporting(): boolean {
    return this.theIncidentFactory.reportingIncident;
  }

  // eslint-disable-next-line class-methods-use-this
  newIncident() {
    this.incidentFactory.newIncident('ximbas');
  }
}
</script>
