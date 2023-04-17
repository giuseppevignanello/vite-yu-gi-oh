

<script>
import { store } from '../store';
export default {
    name: "cardItem",
    props: {
        card : "object"
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col">
       
        <img :src="card.card_images[0].image_url" alt="">
        <h2>{{card.name}}</h2>
       
    </div>
</template>

<style lang="scss" scoped></style>