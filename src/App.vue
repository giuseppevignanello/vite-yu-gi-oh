
<script>

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
     
  }
},
}

</script>


<template>
  <appHeader />
  <appMain/>
  
</template>

<style lang="scss" scoped></style>