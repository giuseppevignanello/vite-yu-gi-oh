
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
    },


}

</script>
<template>
    
    <main id="app_main">
        <selectArchetype/>    
        <cardList />
    </main>
</template>


<style lang="scss" scoped></style>