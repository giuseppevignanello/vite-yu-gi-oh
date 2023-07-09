
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
        <select id="archetyoeSelector" class="form-select w-25" v-model="this.store.selectValue" @change="$emit('changeSelect')">
            <option v-for="archetype in this.store.archetypes" :value="archetype">{{ archetype }}</option>
        </select>
    </div>
</template>


<style lang="scss" scoped></style>