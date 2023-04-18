

<script>
import { store } from '../store'
import selectArchetype from "./selectArchetype.vue"
import appLoading from './appLoading.vue'
import resultBanner from './resultBanner.vue'
import cardItem from "./cardItem.vue"
export default {
    name: "cardList",
    components: {
        cardItem,
        resultBanner,
        appLoading, 
        selectArchetype
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        if (this.store.selectValue === "Select an Archetype") {
            this.store.callAPI(store.API_URL + `?num=40&offset=0`)
        }
    }, 
    computed: {
        changeArchetype() {
            const url = this.store.API_URL + `?archetype=${this.store.selectValue}`
            console.log(url);
            this.store.callAPI(url)
            this.store.callAPIArchetype(this.store.API_URL)
        }
} }
</script>

<template>
    <div id="card_list" class="container" v-if="!store.loading">
        <selectArchetype @changeSelect="changeArchetype" />
        <resultBanner />
        <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-between">
            <cardItem :card="card" v-for="card in store.cards" />
        </div>

    </div>
    <appLoading v-else />
</template>

<style lang="scss" scoped></style>