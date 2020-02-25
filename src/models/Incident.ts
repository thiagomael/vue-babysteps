export default class Incident {
   id: string;

   name: string;

   constructor(id: string, name: string) {
     this.id = id;
     this.name = name;
   }

   // eslint-disable-next-line class-methods-use-this
   sideEffect() {
     // eslint-disable-next-line no-console
     console.log(`Mandando requisição pro backend... ${this.id}`);
   }
}
