<template>
    <button @click="newIncident()">
        Novo incidente
    </button>
</template>

<script lang="ts">
/* eslint-disable indent */
import { Component, Prop, Vue } from 'vue-property-decorator';
import IncidentFactory from '../models/IncidentFactory';

@Component
export default class MapToolbar extends Vue {
    @Prop() private incidentFactory!: IncidentFactory;

    newIncident() {
        this.incidentFactory.prepareNewIncidentReport();
    }
}
</script>
