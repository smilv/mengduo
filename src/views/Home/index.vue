<script>
    import Vue from "vue";
    import axios from "../../axios";
    import tools from "../../utils/tools.js";
    import { Button } from "mint-ui";
    Vue.component(Button.name, Button);
    export default {
        data() {
            return {
                videoData: 123,
                videoSize: 233, //视频尺寸 1竖屏/2横屏
                greetShow: false, //是否显示赞/取消赞的图片
                animationLike: "", //点赞动画的class
                prevent: false //防止视频点赞
            };
        },
        mounted() {
            this.videoSize = this.mathRand();
            axios.egGet("", { id: 1 }).then(response => {
                console.log(response);
            });
            tools.toast("333");
        },
        methods: {
            mathRand() {
                let Num = "";
                for (let i = 0; i < 5; i++) {
                    Num += Math.floor(Math.random() * 10);
                }
                return Num;
            }
        }
    };
</script>
<template>
    <div class="wrapper">
        <div class="main">
            <div class="withme-content">{{this.videoData}}</div>
            {{this.videoData | formatDecimal}}
            {{this.skuPath}}
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