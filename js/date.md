# 日期

[后盾人](https://houdunren.gitee.io/note/)

# 声明日期

```javascript
// 获取当前日期时间
let now = new Date();
console.log(now);
console.log(typeof date); //object
console.log(now * 1); //获取时间戳
//直接使用函数获取当前时间
console.log(Date());
console.log(typeof Date()); //string
//获取当前时间戳单位毫秒
console.log(Date.now());

// 计算脚本执行时间
const start = Date.now();
for (let i = 0; i < 2000000; i++) {}
const end = Date.now();
console.log(end - start);

// 使用控制台测试
console.time("testFor");
for (let i = 0; i < 20000000; i++) {}
console.timeEnd("testFor");

// 根据指定的日期与时间定义日期对象
let now = new Date('2028-02-22 03:25:02');
console.log(now);
now = new Date(2028, 4, 5, 1, 22, 16);
console.log(now);

// 使用展示运算符处理
let info = [2020, 2, 20, 10, 15, 32];
let date = new Date(...info);
console.dir(date);
```

# 类型转换

```javascript
// 将日期转为数值类型就是转为时间戳单位是毫秒
let kai = new Date("2021-3-22 10:33:12");
console.log(kai * 1);
console.log(Number(kai));
console.log(kai.valueOf())
console.log(date.getTime());

// 有时后台提供的日期为时间戳格式，下面是将时间戳转换为标准日期的方法
const param = [1990, 2, 22, 13, 22, 19];
const date = new Date(...param);
const timestamp = date.getTime();
console.log(timestamp);
console.log(new Date(timestamp));
```

# 对象方法

```javascript
// 格式化输出日期
let time = new Date();
console.log(
    `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
);

// 封装函数用于复用
function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
    const config = {
        YYYY: date.getFullYear(),
        MM: date.getMonth() + 1,
        DD: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds()
    };
    for (const key in config) {
        format = format.replace(key, config[key]);
    }
    return format;
}
console.log(dateFormat(new Date(), "YYYY年MM月DD日"));
```

# moment.js

Moment.js是一个轻量级的JavaScript时间库，它方便了日常开发中对时间的操作，提高了开发效率。

```
<script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
```

```javascript
// 获取当前时间
console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
// 设置时间
console.log(moment("2021-03-18 09:22:15").format("YYYY-MM-DD HH:mm:ss"));
// 十天后的日期
console.log(moment().add(10, "days").format("YYYY-MM-DD hh:mm:ss"));
```

