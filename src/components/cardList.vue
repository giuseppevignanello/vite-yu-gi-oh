

<script>
import { store } from '../store'
import cardItem from "./cardItem.vue"
export default {
    name: "cardList",
    components: {
        cardItem
    },
    data () {
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
    <div id="card_list" class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <cardItem :card="card" v-for="card in store.cards" />
            </div>
        </div>
</template>

<style lang="scss" scoped>

</style>