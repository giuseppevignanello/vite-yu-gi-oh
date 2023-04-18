

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
    <div id="card_item" class="col rounded">
        <img :src="card.card_images[0].image_url" alt="">
        <h4 class="text-white text-center">{{card.name}}</h4>
        <div class="mt-3 text-center"> {{card.archetype}}</div>
    </div>
</template>

<style lang="scss" scoped></style>