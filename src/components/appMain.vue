
<script>
import selectArchetype from "./selectArchetype.vue"
import cardList from "./cardList.vue"
import { store } from '../store'
export default {
    name: "appMain",
    components: {
        cardList,
        selectArchetype
    },
    data() {
        return {
            store
        }
    }, computed: {
        changeArchetype() {
            const url = this.store.API_URL + `?archetype=${this.store.selectValue}`
            console.log(url);
            this.store.callAPI(url)
        }
    }
   

}

</script>
<template>
    <main id="app_main">
        <selectArchetype @changeSelect="changeArchetype" />
        <cardList />
    </main>
</template>


<style lang="scss" scoped></style>