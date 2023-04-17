
<script>
import { store } from '../store';
export default {
    name: "resultBanner",
    data() {

        return {
            store
        }
    }
}
</script>

<template>
    <div id="result_banner" class="d-flex align-items-center">
        <h4 class="text-white ms-4"> Found <span>39 </span>cards</h4>
    </div>
</template>

<style lang="scss" scoped></style>