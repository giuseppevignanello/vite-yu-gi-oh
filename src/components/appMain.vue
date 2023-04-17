
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
        <cardList/>
    </main>
</template>


<style lang="scss" scoped></style>