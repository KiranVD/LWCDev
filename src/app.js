import { LightningElement,track } from "lwc";
const URL = 'https://api.covidtracking.com/v1/states/current.json';
let initialValues = {
    total_deaths : 0,
    total_recovered : 0, 
    total_active : 0,
};

export default class App extends LightningElement {
    @track total = initialValues;
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
        this.total.total_deaths += data.deathConfirmed;
        this.total.total_recovered += data.recovered;
        this.total.total_active += data.positive;
      })
      console.log('@@@data'+this.total.total_deaths);
    }
}