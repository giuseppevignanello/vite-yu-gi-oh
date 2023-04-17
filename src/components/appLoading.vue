<script>
    import { store } from '../store';
    export default {
        name: "appLoading",

        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="loading d-flex justify-content-center mt-4">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>