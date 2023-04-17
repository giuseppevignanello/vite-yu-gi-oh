
<script>
import axios from "axios"
export default {
  data () {
    

    return {
      API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien", 
      cards: null, 

    }
  },
   methods: {
    callAPI(url) {
      axios 
        .get(url)
        .then(response => {
          this.cards = response.data.data
          console.log(this.cards);
    
        })
        .catch(error => {
                    console.log(err);
                    console.error(error.message);
                })

    }
   }, 
   mounted() {
    this.callAPI(this.API_URL)
   }
}

</script>


<template>
  <div>
    <h1>YugiOh
    </h1>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4">
      <div class="col" v-for="card in cards">
        <img :src="card.card_images[0].image_url" alt="">
        <h2>{{card.name}}</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>