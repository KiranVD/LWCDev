import { LightningElement } from "lwc";
const URL = 'https://api.covidtracking.com/v1/states/current.json';

export default class App extends LightningElement {
    connectedCallback(){
      this.fetchData();
    }

    async fetchData(){
       let response = await fetch(URL);
       let data = await response.json();
       
       this.formatData(data);
    }

    formatData(result){
      result.forEach(data=>{
        console.log('@@@data'+JSON.stringify(data.state));
      })
    }
}