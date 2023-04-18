
<script>
import cardList from "./cardList.vue"
import { store } from '../store'
export default {
    name: "appMain",
    components: {
        cardList
    },
    data() {
        return {
            store
        }
    },


}

</script>
<template>
    <main id="app_main">
        <div class="select_archetype container position-relative">
            <select class="form-select w-25" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <cardList />
    </main>
</template>


<style lang="scss" scoped></style>