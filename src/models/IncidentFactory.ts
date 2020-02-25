/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable indent */
import Incident from './Incident';

export default class IncidentFactory {
    private count = 0;

    private incidentsMap: Map<string, Incident> = new Map();

    reportingIncident = false;

    incidents: Incident[] = [];


    newIncident(name: string): Incident {
        const newIncident = new Incident((this.count).toString(), name);
        this.count += 1;
        this.incidentsMap.set(newIncident.id, newIncident);
        this.incidents = [...this.incidentsMap.values()];
        return newIncident;
    }

    deleteIncident(incident: Incident) {
        console.log(`Removendo incidente ${incident.id}`);
        this.incidentsMap.delete(incident.id);
        this.incidents = [...this.incidentsMap.values()];
    }

    prepareNewIncidentReport() {
        this.reportingIncident = true;
        console.log('Começando relato de incidente');
    }

    finishIncidentReport(name: string) {
        this.newIncident(name);
        this.reportingIncident = false;
    }
}
