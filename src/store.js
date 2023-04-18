import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({
  selectValue: "",
  loading: true, 
  API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php", 
  cards: null,
  archetypes: [],
  callAPI(url) {
    axios 
      .get(url)
      .then(response => {
        this.cards = response.data.data
        this.loading = false;
  
      })
      .catch(error => {
                  console.log(error);
                  console.error(error.message);
              })
              

  }, 
  callAPIArchetype(url) {
    axios 
      .get(url)
      .then(response => {
        response.data.data.forEach(element => {
          if(!this.archetypes.includes(element.archetype)){
            this.archetypes.push(element.archetype)
          }
        });
        
     
      })
      .catch(error => {
                  console.log(error);
                  console.error(error.message);
              })
              

  }
})