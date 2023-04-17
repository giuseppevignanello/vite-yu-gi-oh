
<script>
import { store } from "./store"
import appHeader from "./components/appHeader.vue"
import appMain from "./components/appMain.vue"
export default {
  name:"App",
  components: {
    appHeader,
    appMain
  },
  data() {
    return {
     store
  }
},
}

</script>


<template>
  <appHeader />
  <appMain/>
  
</template>

<style lang="scss" scoped></style>