<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>
<template>
    <div class="loading">
        <img class="loading-rotate" src="../../assets/img/wap_loading.gif">
    </div>
</template>
<style scoped>
    .loading {
        position: fixed;
        text-align: center;
        top: 50%;
        left: 0;
        right: 0;
        margin-top: -70px;
    }

    .loading img {
        width: 143px;
    }
</style>