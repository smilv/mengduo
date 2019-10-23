import Mock from "mockjs";

//指定被拦截的 Ajax 请求的响应时间
Mock.setup({
    timeout: "10-1000"
});
