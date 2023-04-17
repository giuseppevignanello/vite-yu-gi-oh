import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({
  loading: true, 
  API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien", 
  card: null,
  callAPI(url) {
    axios 
      .get(url)
      .then(response => {
        this.cards = response.data
        console.log(this.cards);
  
      })
      .catch(error => {
                  console.log(err);
                  console.error(error.message);
              })

  }
})