

<script>
import { store } from '../store'
import appLoading from './appLoading.vue'
import resultBanner from './resultBanner.vue'
import cardItem from "./cardItem.vue"
export default {
    name: "cardList",
    components: {
        cardItem,
        resultBanner, 
        appLoading
    },
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
    <div id="card_list" class="container" v-if="!store.loading" >
        <resultBanner />
        <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <cardItem :card="card" v-for="card in store.cards" /> 
        </div>
       
    </div>
    <appLoading v-else />
    
</template>

<style lang="scss" scoped></style>