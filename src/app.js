import { LightningElement } from "lwc";
const URL = 'https://api.covidtracking.com/v1/states/current.json';
let initialValues = {
    total_deaths : 0,
    total_confirmed : 0,
    total_active : 0,
};

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