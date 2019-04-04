<script>
    import "../utils/tools.js";
    export default {
        data() {
            return {
                videoData: "123",
                videoSize: "", //视频尺寸 1竖屏/2横屏
                greetShow: false, //是否显示赞/取消赞的图片
                animationLike: "", //点赞动画的class
                prevent: false,//防止视频点赞
            };
        },
        mounted() {
            this.videoSize = this.mathRand()
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
            {{this.videoSize}}
        </div>
    </div>
</template>
<style scoped>
    .main {
        min-height: 100%;
        padding-bottom: 370px;
        box-sizing: border-box;
    }
    .withme-content {
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        padding: 0 30px 30px;
    }
</style>