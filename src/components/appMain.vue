
<script>
import { store } from '../store'
export default {
    name: "appMain",
    data() {
        return {
            store  
        }
    },
  mounted() {
    store.callAPI(store.API_URL)
  }
 
}

</script>
<template>
    <main>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4">
                <div class="col" v-for="card in store.cards">
                    <img :src="card.card_images[0].image_url" alt="">
                    <h2>{{ card.name }}</h2>
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped></style>