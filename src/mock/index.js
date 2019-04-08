import Mock from "mockjs";

//指定被拦截的 Ajax 请求的响应时间
Mock.setup({
    timeout: "10-1000"
});

Mock.mock(/user\/info/, {
    code: 200,
    data: {
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "list|1-10": [
            {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                "id|+1": 1
            }
        ]
    },
    message: "操作成功",
    systemDate: new Date().getTime()
});
