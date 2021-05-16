# 字符串

[后盾人](https://houdunren.gitee.io/note/)

# 声明定义

```javascript
// 使用对象形式创建字符串
let kai = new String('kai');
// 获取字符串长度
console.log(kai.length);
// 获取字符串
console.log(kai.toString());
// 字符串使用单、双引号包裹，单、双引号使用结果没有区别。

// 有些字符有双层含义，需要使用 \ 转义符号进行含义转换。
let content = 'kai \'leo\' ';
console.log(content);
// \t制表符 \n换行 \\斜杠符号 \'单引号 \"双引号
```

# 模板字面量

```javascript
// 模板字面量, `...` 符号包裹的字符串可以写入引入变量与表达式
let url = 'kai.com';
console.log(`我的网址${url}`); // 我的网址是kai.com
function show(title){
    return `leo`;
}
console.log(`${show()}`);

// 模板字面量支持嵌套使用
let lessons = [
    {title: '媒体查询响应式布局'},{title: 'FLEX 弹性盒模型'},{title: 'GRID 栅格系统'}
];
function template() {
    return `<ul>
${lessons.map((item)=>`
<li>${item.title}</li>
`).join('')}
</ul>`;
}
document.body.innerHTML = template();

// 标签模板
// 标签模板是提取出普通字符串与变量，交由标签函数处理
let str1 = 'hello';
let str2 = 'world';
tag `你好${str1}世界${str2}`;
function tag(strings, ...values) {
    console.log(strings); //["你好","世界"]
    console.log(values); // ["hello", "world"]
}
```

# 属性方法

## 获取长度

```javascript
// 使用length属性可以获取字符串长度
console.log("hello,world".length);
```

## 大小写转换

```javascript
// 将字符转换成大写格式
console.log('hello'.toUpperCase()); // HELLO
// 转字符为小写格式
console.log('HELLO'.toLowerCase()); // hello
```

## 移除空白

```javascript
// 使用trim删除字符串左右的空白字符
let str = '   hello,world  ';
console.log(str.length);
console.log(str.trim().length);
// 使用trimLeft删除左边空白，使用trimRight删除右边空白
```

## 获取单字符

```javascript
// 根据从0开始的位置获取字符
console.log('hello'.charAt(3));
// 使用数字索引获取字符串
console.log('world'[3])
```

## 截取字符串

```javascript
// 使用 slice、substr、substring 函数都可以截取字符串。

let kai = 'leomaokai.com';
console.log(kai.slice(3)); // maokai.com
console.log(kai.substr(3)); // maokai.com
console.log(kai.substring(3)); // maokai.com

console.log(kai.slice(3, 6)); // mao
console.log(kai.substring(3, 6)); // mao
console.log(kai.substring(3, 0)); // leo
console.log(kai.substr(3, 6)); // maokai

console.log(kai.slice(3, -1)); // maokai.co 
console.log(kai.slice(-2)); // om 从末尾开始取
console.log(kai.substring(3, -9)); // leo 负数转为0
console.log(kai.substr(-3, 2));  // co 从后面第三个开始取两个
```

## 查找字符串

```javascript
// 从开始获取字符串位置，检测不到时返回 -1
console.log('leomaokai.com'.indexOf('o')); // 2
console.log('leomaokai.com'.indexOf('o', 3)); // 5 从第3个字符向后搜索

console.log('leomaokai.com'.lastIndexOf('o')); // 11
console.log('leomaokai.com'.lastIndexOf('o', 7)); // 5 从第7个字符向前搜索

// search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索
let str = "leomaokai.com";
console.log(str.search("com")); // 10
console.log(str.search(/\.com/i)); // 9

// includes 字符串中是否包含指定的值，第二个参数指查找开始位置
console.log('leomaokai.com'.includes('o')); // true
console.log('leomaokai.com'.includes('h', 11)); // false

// startsWith 是否是指定位置开始，第二个参数为查找的开始位置
console.log('leomaokai.com'.startsWith('h')); // false
console.log('leomaokai.com'.startsWith('o', 2)); //true

// endsWith 是否是指定位置结束，第二个参数为查找的结束位置
console.log('houdunren.com'.endsWith('com')); //true
console.log('houdunren.com'.endsWith('o', 2)); //true

// 查找关键字
const words = ["java", "c++"];
const title = "我爱java与c++";
const status = words.some(word => {
    return title.includes(word);
});
console.log(status); // true
```

## 替换字符串

```javascript
// replace 方法用于字符串的替换操作
let name = "leomaokai.com";
web = name.replace("com", "cn");
console.log(web); // leomaokai.cn

// 默认只替换一次，如果全局替换需要使用正则
let str = "2023/02/12";
console.log(str.replace(/\//g, "-")); // 2023-02-12
```

## 重复生成

```javascript
function star(num = 3) {
    return '*'.repeat(num);
}
console.log(star()); // ***

let phone = "98765432101";
console.log(phone.slice(0, -3) + "*".repeat(3)); // 98765432***
```

## 类型转换

```javascript
// 分隔字母
let name = "maokai";
console.log(name.split("")); // ["m", "a", "o", "k", "a", "i"]

// 将字符串转换为数组
console.log("1,2,3".split(",")); // [1,2,3]

// 隐式类型转换会根据类型自动转换类型
let kai = 99 + '';
console.log(typeof kai); // string

// 使用 String 构造函数可以显示转换字符串类型
let kai = 99;
console.log(typeof String(kai)); // string

// js中大部分类型都是对象，可以使用类方法 toString转化为字符串
let kai = 99;
console.log(typeof hd.toString()); //string

let kaiUser = ['maokai', 'leomaokai'];
console.log(typeof arr.toString()); //string
```





