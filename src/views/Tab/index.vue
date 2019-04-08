<script>
    import "./css/index.css";
    import axios from "../../axios";
    import Loading from "../../components/Loading";
    export default {
        components: {
            Loading,
        }
    }

</script>
<template>
    <div>
        <Loading />
        <div class="tab"></div>
        <div class="tab2"></div>
    </div>
</template>
<style scoped>
    .tab2 {
        height: 100px;
    }
</style>