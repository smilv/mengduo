import Vue from "vue";

/**  
 * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、24小时(h)、分(m)、秒(s)、周(E)、季度(q)
    可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg: * dateFormat("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423      
 * dateFormat("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04      
 * dateFormat("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04      
 * dateFormat("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18      
 */
Vue.filter("dateFormat", (value, fmt) => {
    let date = new Date(value);
    let o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
    };
    let week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[date.getDay() + ""]
        );
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
});

/**
 * 时间戳转换为当前时间多久之前
 * @param value  时间戳
 */
Vue.filter("releaseTime", value => {
    let dateTime = new Date(value);
    let year = dateTime.getFullYear();
    let month = dateTime.getMonth() + 1;
    let day = dateTime.getDate();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    //当前时间
    let now = new Date().getTime() / 1000;
    let milliseconds = 0;
    let timeSpanStr;
    //计算时间差
    milliseconds = now - value / 1000;

    //一分钟以内
    if (milliseconds <= 60) {
        timeSpanStr = "刚刚";
    }
    //大于一分钟小于一小时
    else if (60 < milliseconds && milliseconds <= 60 * 60) {
        timeSpanStr = Math.ceil(milliseconds / 60) + "分钟前";
    }
    //大于一小时小于等于一天
    else if (60 * 60 < milliseconds && milliseconds <= 60 * 60 * 24) {
        timeSpanStr = Math.ceil(milliseconds / (60 * 60)) + "小时前";
    }
    //大于一天小于等于一年
    else if (60 * 60 * 24 < milliseconds && milliseconds <= 60 * 60 * 24 * 30 * 12) {
        timeSpanStr = month + "月" + day + "日 ";
    }
    //超过一年显示
    else {
        timeSpanStr = year + "年" + month + "月" + day + "日 ";
    }
    return timeSpanStr;
});
