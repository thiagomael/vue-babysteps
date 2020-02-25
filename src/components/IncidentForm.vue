<template>
    <div>
        <input type="text"
               v-model="name"
               placeholder="O que aconteceu?">
        <button @click.prevent="submit()">Criar</button>
    </div>
</template>

<script lang="ts">
/* eslint-disable indent */
import { Component, Prop, Vue } from 'vue-property-decorator';
import IncidentFactory from '../models/IncidentFactory';

@Component
export default class IncidentForm extends Vue {
    @Prop() incidentFactory!: IncidentFactory;

    name = '';

    submit() {
        this.incidentFactory.finishIncidentReport(this.name);
    }
}
</script>
