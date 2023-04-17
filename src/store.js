import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({
  loading: true, 
  API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien", 
  cards: null,
  callAPI(url) {
    axios 
      .get(url)
      .then(response => {
        this.cards = response.data.data
        console.log(this.cards);
        this.loading = false; 
  
      })
      .catch(error => {
                  console.log(err);
                  console.error(error.message);
              })
              

  }
})