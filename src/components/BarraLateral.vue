<template>
    <header class="is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-center is-align-content-center">
        <h1 class="is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-center is-align-content-center">
            <img src="../assets/vue.svg" alt="" width="100"><br>
        </h1>
        <p class="title is-3 has-text-white">To do List</p>
    </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BarraLateral'
})

</script>

<style scoped>
header {
    background: #43919B;
    width: 100%;
    height: 100vh;
}
@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

</style>