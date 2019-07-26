<script>
    import Vue from "vue";
    import axios from "../../axios";
    import tools from "../../utils/tools.js";
    import { Button } from "mint-ui";
    Vue.component(Button.name, Button);
    export default {
        data() {
            return {
                size: 123
            };
        },
        mounted() {
            axios.egPost({ data: 1 }, { id: 1 }).then(response => {
                console.log(response);
            });
            tools.toast("333");
        }
    };
</script>
<template>
    <div class="wrapper">
        <div class="main">
            <div class="withme-content">{{this.size}}</div>
            {{this.apiPath}}
        </div>
        <mt-button type="primary">primary</mt-button>
    </div>
</template>
<style scoped>
    .main {
        height: 100px;
        padding-bottom: 370px;
        box-sizing: border-box;
    }
    .withme-content {
        display: flex;
        justify-content: space-between;
        padding: 0 30px 30px;
    }
</style>