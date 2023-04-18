
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
            <select class="form-select w-25" aria-label="Default select example" v-model="store.selectValue" @click="$emit('changeSelect')">
                <option selected>Select an Option</option>
                <option value="Alien">Alien</option>
                <option value="Noble Knight">Noble Knight</option>
                <option value="A.I.">A.I.</option>
            </select>
        </div>
</template>


<style lang="scss" scoped>

</style>