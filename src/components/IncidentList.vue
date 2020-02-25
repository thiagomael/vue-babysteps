<template>
    <ul>
        <li v-for="incident of incidents"
            v-bind:key="incident.id">
            {{ incident.id }}: {{ incident.name }}
            <button @click="incident.sideEffect()">Mandar requisição</button>
            <button @click="deleteIncident(incident)">Remover</button>
        </li>
    </ul>
</template>

<script lang="ts">
/* eslint-disable indent */
import { Component, Prop, Vue } from 'vue-property-decorator';
import Incident from '@/models/Incident';
import IncidentFactory from '../models/IncidentFactory';

@Component
export default class IncidentList extends Vue {
    @Prop() incidentFactory!: IncidentFactory;

    theIncidentFactory = this.incidentFactory;

    get incidents() {
        return this.theIncidentFactory.incidents;
    }

    deleteIncident(incident: Incident) {
        this.theIncidentFactory.deleteIncident(incident);
    }
}
</script>
