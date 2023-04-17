
<script>
import axios from "axios"
export default {
  data () {
    

    return {
      API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    }
  },
   methods: {
    callAPI(url) {
      axios 
        .get(url)
        .then(response => {
          console.log(response.data);
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
</template>

<style lang="scss" scoped>

</style>