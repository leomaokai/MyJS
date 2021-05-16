# 数组

[后盾人](https://houdunren.gitee.io/note/)

# 声明数组

数组是多个变量值的集合，数组是 Array 对象的实例，可以像对象一样调用方法

## 创建数组

```javascript
// 使用对象方式创建数组
console.log(new Array(1, 'wang', 'kai')); 
// [1, "wang", "kai"]

// 使用字面量创建（推荐）
const array = ["kai","kai2","kai3"];

// 多维数组定义
const array = [
    ["kai1","kai2","kai3"],
    ["hello","world"]
]

// 数组是引用类型，可以使用const声明并修改值
const array=["kai1","kai2"];
array.push("kai3");

// 使用原型 length 获取数组元素数量
console.log(array.length)

// 数组可以设置任何值
let array = [1,2,3];
array[4]=4;
```

## Array.of

```javascript
let kai=Array.of(10);
console.log(kai); // [10]
kai=Array.of(11,12,13);
console.log(kai); // [11,12,13]
```

## 类型检测

```javascript
console.log(Array.isArray([1,2,3,4])); // true
console.log(Array.isArray(1)); // false
```

# 类型转换

## 字符串

```javascript
// 使用 .toString() 方法将数组转为字符串
console.log(([1,2,3]).toString()); // 1,2,3
// 使用 String 函数转为字符串
console.log(String([1,2,3])); // 1,2,3
// 使用 join 连接为字符串
console.log([1,2,3].join("-")); // 1-2-3
```

## Array.from

```javascript
// 使用 Array.from 可将类数组转为数组
let str="茂凯"；
console.log(Array.from(str)); // ["茂","凯"]

// 为对象设置length 属性后也可以转化为数组，下标为数值或数值字符串
let user={
    0:'kai',
    '1':20,
    length:2
};
console.log(Array.from(user)); // ["kai",20]

// DOM元素转换为数组后来使用数组函数，第二个参数类似于map 函数的方法，可对数组元素执行函数处理。
let btns = document.querySelectorAll('button');
console.log(btns); //包含length属性
Array.from(btns, (item) => {
    item.style.background = 'red';
});

// 展开语法 ...
let divs = document.querySelectorAll("div");
[...divs].map(function(div) {
    div.addEventListener("click", function() {
        this.classList.toggle("hide");
    });
});
```

# 展开语法

## 数组合并

```javascript
// 使用展开语法来合并数组相比 concat 要更简单，使用... 可将数组展开为多个值。
let a = [1,2,3];
let b = [4,...a];
console.log(b);	// [4,1,2,3]
```

## 函数参数

```javascript
// 使用展开语法可以代替 arguments 来接收任意数量的参数
function kai(...args){
    console.log(args);
}
kai(1,2,3,4,5,6,7); // [1,2,3,4,5,6,7]

// 也可以用于接收部分参数
function leo(site,...args){
    console.log(site,args);
}
leo("kai",1,2,3); // kai (3)[1,2,3]
```

## 节点转换

```javascript
// 对列表使用 filter 会报错
let btns = document.querySelectorAll('button');
btns.map((item) => {
    console.log(item); //TypeError: btns.filter is not a function
})

// 使用展开语法则正确
let divs = document.querySelectorAll("div");
[...divs].map(function(div) {
    div.addEventListener("click", function() {
        this.classList.toggle("hide");
    });
});

// 原型处理也可
let btns = document.querySelectorAll('button');
Array.prototype.map.call(btns, (item) => {
    item.style.background = 'red';
});
```

# 解构赋值

解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构

## 基本使用

```javascript
let [name,age] = ['kai',20];
console.log(name); // kai

function leo(){
    return ['kai',20];
}
let [name,age] = leo();
console.log(name); // kai

// 用一个变量来接收剩余参数
let [a,...b] = ['kai',1,2,3,4,5];
console.log(b); // [1,2,3,4,5]

// 字符串解构
const [...c] = "kai";
console.log(c); // (3) ["k", "a", "i"]

// 函数参数
function leo([a,b]){
    console.log(a,b);
}
leo(['kai1','kai2']);
```

# 管理元素

## 基本用法

```javascript
// 使用从0开始的索引来改变数组
let array = [1,2,3];
array[1] = 8;
console.log(array); // [1,8,3]
array[array.length] = 10;
console.log(array); // [1,8,3,10]
```

## 扩展语法

```javascript
// 使用展开语法批量添加元素
let array1 = [1,2,3];
let array2 = [4,5,6];
// push 压入元素，返回数组元素数量
array1.push(...array2);
console.log(array1); // [1,2,3,4,5,6]
// pop 从末尾弹出元素，返回弹出的元素值
console.log(array1.pop()); // 6
// shift 从数组前面取出一个元素
console.log(array1.shift()); // 1
// unshift 从数组前面添加元素,返回数组元素数量
console.log(array1.unshift(10));
// fill 填充数组元素
console.dir(Array(3).fill('kai')); // ["kai", "kai", "kai"]

// slice 从数组中截取部分元素组合成新的数组
// 并不改变原数组
let arr1 = [0, 1, 2, 3, 4, 5, 6];
console.log(arr1.slice(1, 3)); // [1,2]
let arr2 = [0, 1, 2, 3, 4, 5, 6];
console.log(arr2.slice()); // [0, 1, 2, 3, 4, 5, 6]

// splice 可以添加，删除，替换数组中的元素
// 会对原数组改变
// 返回值为删除的元素
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3)); // 返回删除的元素 [1, 2, 3] 
console.log(arr); // 删除数据后的原数组 [0, 4, 5, 6]
// 通过指定第三个参数来设置在删除位置添加的元素
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3, 'kai', 'leo')); // [1, 2, 3]
console.log(arr); // [0, "kai", "leo", 4, 5, 6]
// 向末尾添加元素
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(arr.length, 0, 'lai', 'leo')); //[]
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, "kai", "leo"]
// 向数组前添加元素
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(0, 0, 'kai', 'leo')); // []
console.log(arr); // ["kai", "leo", 0, 1, 2, 3, 4, 5, 6]
// 数组元素位置调整函数
function move(array, before, to) {
    if (before < 0 || to >= array.length) {
        console.error("指定位置错误");
        return;
    }
    const newArray = [...array];
    const elem = newArray.splice(before, 1);
    newArray.splice(to, 0, ...elem);
    return newArray;
}
const array = [1, 2, 3, 4];
console.table(move(array, 0, 3));

// 清空数组
// 将数组值修改为[]可以清空数组，如果有多个引用时数组在内存中存在被其他变量引用。
let users = [{ name: "kai" }, { name: "leo" }];
let kk = users;
users = [];
console.log(users); // []
console.log(kk); // (2)[{...},{...}]
// 将数组length设置为0也可以清空数组
users.length = 0;
// 使用splice方法删除所有数组元素
users.splice(0,users.length);
// 使用pop/shift删除所有元素，来清空数组
while (users.pop()) {}
```

## 合并拆分

```javascript
// 使用join连接成字符串
let arr = [1,2,3];
console.log(arr.join('-')); // 1-2-3
// split 方法用于将字符串分割成数组，类似join方法的反函数。
let str = "1,2,3";
console.log(str.split(",")); // ["1","2","3"]
// concat方法用于连接两个或多个数组，元素是值类型的是复制操作，如果是引用类型还是指向同一对象
// 使用 copyWithin 从数组中复制一部分到同数组中的另外位置。
array.copyWithin(target, start, end)
```

## 查找元素

```javascript
// 使用 indexOf (===)从前向后查找元素出现的位置，如果找不到返回 -1。
let arr = [7, 3, 2, 8, 2, 6];
console.log(arr.indexOf(2)); // 2 从前面查找2出现的位置
// 从第二个元素开始向后查找
console.log(arr.indexOf(2, 3)); // 4

// 使用 lastIndexOf 从后向前查找元素出现的位置，如果找不到返回 -1。
console.log(arr.lastIndexOf(2)); // 4 从后查找2出现的位置
// 从第五个元素向前查找
console.log(arr.lastIndexOf(2, 5));
// 从最后一个字符向前查找
console.log(arr.lastIndexOf(2, -2));

// 使用 includes 查找字符串返回值是布尔类型更方便判断
let arr = [7, 3, 2, 6];
console.log(arr.includes(6)); // true

// find 方法找到后会把值返回出来,如果找不到返回值为undefined
let arr = ["kai1", "kai2", "kai3"];
let find = arr.find(function(item) {
  return item == "kai2";
});
console.log(find); //kai2
// 使用includes等不能查找引用类型，因为它们的内存地址是不相等的
// find 可以方便的查找引用类型

// findIndex 与 find 的区别是返回索引值，参数也是 : 当前值，索引，操作数组。查找不到时返回 -1
```

## 数组排序

```javascript
// reverse 反转数组顺序
let arr = [1, 4, 2, 9];
console.log(arr.reverse()); // [9, 2, 4, 1]

// sort每次使用两个值进行比较 Array.sort((a,b)=>a-b
let arr = [1, 4, 2, 9];
console.log(arr.sort()); // [1, 2, 4, 9]
console.log(arr.sort(function (v1, v2) {
	return v2 - v1;
})); // [9, 4, 2, 1]
```

## 循环遍历

```javascript
// 根据数组长度结合for 循环来遍历数组
let array = [1,2,3,4,5];
for (let i = 0;i < array.length; i++){
    console.log(array[i]);
}

// forEach使函数作用在每个数组元素上，但是没有返回值。
let lessons = [
    {title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
    {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

lessons.forEach((item, index, array) => {
    item.title = item.title.substr(0, 5);
});
console.log(lessons);

// for/in 遍历时的 key 值为数组的索引
let lessons = [
    {title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
    {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const key in lessons) {
    console.log(`标题: ${lessons[key].title}`);
}

// for/of 与 for/in 不同的是 for/of 每次循环取其中的值而不是索引。
let lessons = [
    {title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
    {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const item of lessons) {
    console.log(`
标题: ${item.title}
栏目: ${item.category == "css" ? "前端" : "数据库"}
`);
}

// 使用数组的迭代对象遍历获取索引与值
const hd = ['kai', 'leo'];
const iterator = hd.entries();
console.log(iterator.next()); // value:{0:0,1:'kai'}
console.log(iterator.next()); // value:{0:1,1:'leo'}
```

## 迭代器方法

```javascript
// keys 通过迭代对象获取索引
const hd = ["kai", "leo"];
const keys = hd.keys();
console.log(keys.next());
console.log(keys.next());
// values 通过迭代对象获取值
const hd = ["kai", "leo"];
const values = hd.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
// entries 返回数组所有键值对
const arr = ["a", "b", "c", "kai"];
for (const [key, value] of arr.entries()) {
    console.log(key, value);
}
// 解构获取内容
const hd = ["kai", "leo"];
const iterator = hd.entries();
let {done,value: [k, v]} = iterator.next();
console.log(v)
```

## 扩展方法

```javascript
// every 用于递归的检测元素，要所有元素操作都要返回真结果才为真。
const user = [
    { name: "李四", js: 89 },
    { name: "马六", js: 55 },
    { name: "张三", js: 78 }
];
const resust = user.every(user => user.js >= 60);
console.log(resust);

// 使用 some 函数可以递归的检测元素，如果有一个返回true，表达式结果就是真。第一个参数为元素，第二个参数为索引，第三个参数为原数组。
let state = words.some(function (item, index, array) {
    return title.indexOf(item) >= 0;
});

// 使用 filter 可以过滤数据中元素
let lessons = [
    {title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
    {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];
let cssLessons = lessons.filter(function (item, index, array) {
    if (item.category.toLowerCase() == 'css') {
        return true;
    }
});
console.log(cssLessons);

// 使用 map 映射可以在数组的所有元素上应用函数，用于映射出新的值。
console.log(lessons.map(item => item.title));
lessons = lessons.map(function (item, index, array) {
    item.title = `[kai] ${item['title']}`;
    return item;
});

// 使用 reduce 与 reduceRight 函数可以迭代数组的所有元素
// reduce 从前开始 reduceRight 从后面开始
// 第一个参数是执行函数，第二个参数是初始值
// 统计元素出现的次数
function countArrayELem(array, elem) {
    return array.reduce((total, cur) => (total += cur == elem ? 1 : 0), 0);
}
let numbers = [1, 2, 3, 1, 5];
console.log(countArrayELem(numbers, 1)); //2
// 取数组中的最大值
function arrayMax(array) {
    return array.reduce(
        (max, elem) => (max > elem ? max : elem), array[0]
    );
}
console.log(arrayMax([1, 3, 2, 9]));
// 取价格最高的商品
let cart = [
    { name: "iphone", price: 12000 },
    { name: "imac", price: 25000 },
    { name: "ipad", price: 3600 }
];
function maxPrice(array) {
    return array.reduce(
        (goods, elem) => (goods.price > elem.price ? goods : elem),array[0]
    );
}
console.log(maxPrice(cart));
// 计算购物车中的商品总价
const total = cart.reduce(
    (total, goods) => total += goods.price, 0
);
console.log(total); //40600
// 获取价格超过1万的商品名称
function getNameByPrice(array, price) {
    return array.reduce((goods, elem) => {
        if (elem.price > price) {
            goods.push(elem);
        }
        return goods;
    }, []).map(elem => elem.name);
}
console.table(getNameByPrice(goods, 10000));
// 使用 reduce 实现数组去重
let arr = [1, 2, 6, 2, 1];
let filterArr = arr.reduce((pre, cur, index, array) => {
    if (pre.includes(cur) === false) {
        pre = [...pre, cur];
    }
    return pre;
}, [])
console.log(filterArr); // [1,2,6]
```

