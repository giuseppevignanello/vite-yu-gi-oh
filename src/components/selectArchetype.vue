
<script>
import { store } from '../store'
export default {
    name: "selectArchetype",
    data() {
        

        return {
            store
        }
    }
}
</script>

<template>
    <div class="select_archetype container">
            <select class="form-select w-25" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
</template>


<style lang="scss" scoped>

</style>