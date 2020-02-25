<template>
    <ul>
        <li v-for="incident in incidents"
            v-bind:key="incident.id">
            {{ incident.name }}
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Incident from '@/models/Incident';

@Component
export default class IncidentList extends Vue {
    @Prop() incidents!: Array<Incident>;
}
</script>
