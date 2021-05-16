# DOM

[后盾人](https://houdunren.gitee.io/note/)

# 基础知识

操作文档HTML的JS处理方式为DOM 即Document Object Model 文档对象模型。如果对HTML很了解使用DOM并不复杂。

浏览器在加载页面是会生成DOM对象，以供我们使用JS控制页面元素。

## 操作时机

需要保证浏览器已经渲染了内容才可以读取的节点对象

```html
<script>
    // 无法读取到节点对象
    const node = document.getElementById('kai')
    console.log(node) //null
</script>
<h1 id="kai">leomaokai.com</h1>
```

```html
<script>
    // 将脚本通过事件放在页面渲染完执行
    window.onload = () => {
        const node = document.getElementById('kai')
        console.log(node)
    }
</script>
<h1 id="kai">leomaokai.com</h1>
```

```html
<script>
    // 使用定时器将脚本设置为异步执行
    setTimeout(() => {
        const node = document.getElementById('kai')
        console.log(node)
    })
</script>
<h1 id="kai">leomaokai.com</h1>
```

```html
<script>
    // 也可以放在文档加载后的事件处理函数中
    window.onload = function () {
        let hd = document.getElementById('kai')
        console.log(kai)
    }
</script>
<div id="kai">leomaokai.com</div>
```

```html
<script>
	// 或将脚本设置在外部文件并使用defer属性加载，defer即会等到DOM解析后迟延执行
</script>
<script defer="defer" src="3.js"></script>
<div id="kai"></div>
```

## 节点对象

JS中的内容称为DOM节点对象（node)，即然是对象就包括操作NODE的属性和方法

- 包括12种类型的节点对象
- 常用了节点为document、标签元素节点、文本节点、注释节点
- 节点均继承自Node类型，所以拥有相同的属性或方法
- document是DOM操作的起始节点

# DOCUMENT

document是window对象的属性，是由HTMLDocument类实现的实例。

```javascript
// 获取文档标题
console.log(document.title);
// 设置文档标签
document.title = 'cumt.com.cn';
// 获取当前url
console.log(document.URL)
// 获取域名
document.domain;
// 获取来源地址
console.log(document.referrer)
```

# 选取节点

## getElementById

使用ID选择是非常方便的选择具有ID值的节点元素，但注意ID应该是唯一的

只能通过document对象使用

```html
<!-- 只能通过document对象上使用 -->
<div id="k1">hello,world</div>
<script>
    const k1 = document.getElementById("k1");
    console.dir(k1);
</script>
<!-- 下面自定义函数来支持批量按ID选择元素 -->
<div id="k2">leomaokai.com</div>
<div id="k3"></div>
<script>
    function getByElementIds(ids) {
        return ids.map((id) => document.getElementById(id))
    }
    let nodes = getByElementIds(['k2', 'k3']);
    console.dir(nodes);
    // 拥有ID的元素可做为WINDOW的属性进行访问
    console.log(k1.innerHTML);
</script>
```

## getElementByName

使用getElementByName获取设置了name属性的元素，虽然在DIV等元素上同样有效，但一般用来对表单元素进行操作时使用。

- 返回NodeList节点列表对象
- NodeList顺序为元素在文档中的顺序

```html
<input type="text" name="username">
<script>
    const username = document.getElementsByName('username');
    console.dir(username);
</script>
```

## getElementsByTagName

使用getElementsByTagName用于按标签名获取元素

- 返回HTMLCollection节点列表对象
- 是不区分大小的获取

```html
<div name="k1">baidu.com</div>
<div id="app"></div>
<script>
    const divs = document.getElementsByTagName('div');
    console.dir(divs);
    
    // 使用通配符获取所有元素
    const nodes1 = document.getElementsByTagName('*');
    // 获取id为k的所有后代元素
    const nodes2 = document.getElementsByTagName('*').namedItem('k').getElementsByTagName('*')
</script>
```

## getElementsByClassName

getElementsByClassName用于按class样式属性值获取元素集合

- 设置多个值时顺序无关，指包含这些class属性的元素

```html
<div class="c1 c2 c3">baidu.com</div>
<div class="c1">cumt.com</div>
<script>
    const nodes = document.getElementsByClassName('c1')
    console.log(nodes.length) //2

    //查找包含class属性包括 hdcms 与 houdunren 的元素
    const tags = document.getElementsByClassName('c1 c2')
    console.log(tags.length) //1
```

# 节点属性

## nodeType

nodeType指以数值返回节点类型

| nodeType | 说明         |
| -------- | ------------ |
| 1        | 元素节点     |
| 2        | 属性节点     |
| 3        | 文本节点     |
| 8        | 注释节点     |
| 9        | document对象 |

## nodeName

| nodeType | nodeName      |
| -------- | ------------- |
| 1        | 元素名称如DIV |
| 2        | 属性名称      |
| 3        | #text         |
| 8        | #comment      |

##  tagName

nodeName可以获取不限于元素的节点名，tagName仅能用于获取标签元素节点名称

## nodeValue

| nodeType | nodeValue |
| -------- | --------- |
| 1        | null      |
| 2        | 属性值    |
| 3        | 文本内容  |
| 8        | 注释内容  |

# 节点集合

Nodelist与HTMLCollection都是包含多个节点标签的集合，大部分功能也是相同的。

- getElementsBy...等方法返回的是HTMLCollection
- querySelectorAll 返回的是 NodeList
- NodeList节点列表是动态的，即内容添加后会动态获取

## length

Nodelist与HTMLCollection包含length属性，记录了节点元素的数量

```javascript
const nodes = document.getElementsByTagName('div')
for (let i = 0; i < nodes.length; i++) {
    console.log(nodes[i])
}
```

## 转换数组

```javascript
// 使用call调用原型方法
let elements = document.getElementsByTagName('h1')
console.log(elements)
let arr = Array.prototype.slice.call(elements, 0)
console.log(arr)
arr.map((item) => {
    item.style.color = 'red'
})

// 使用Array.from转换
let elements = document.getElementsByTagName('h1')
console.log(elements)
console.log(Array.from(elements))

// 使用点语法转换节点为数组
let elements = document.getElementsByTagName('h1')
console.log(elements)
[...elements].map((item) => {
    item.addEventListener('click', function () {
        this.style.textTransform = 'uppercase'
    })
})
```

## item

```javascript
// Nodelist与HTMLCollection提供了item()方法来根据索引获取元素
const nodes = document.getElementsByTagName('div')
console.dir(nodes.item(0))

// 使用数组索引获取更方便
const nodes = document.getElementsByTagName('div')
console.dir(nodes[0])
```

## namedItem

```javascript
// HTMLCollection具有namedItem方法可以按name或id属性来获取元素
const nodes = document.getElementsByTagName('div')
console.dir(nodes.namedItem('name'))
console.dir(nodes.namedItem('id'))

// 也可以使用数组或属性方式获取
const nodes = document.getElementsByTagName('div')
console.dir(nodes['name']);
console.dir(nodes.id)

// 数字索引时使用item方法，字符串索引时使用namedItem方法
let items = document.getElementsByTagName('h1')
console.log(items[0])
console.log(items['name'])
```

## 常用元素

系统针对特定标签提供了快速选择的方式

| 方法                     | 说明                   |
| ------------------------ | ---------------------- |
| document.documentElement | 文档节点即html标签节点 |
| document.body            | body标签节点           |
| document.head            | head标签节点           |
| document.links           | 超链接集合             |
| document.anchors         | 所有锚点集合           |
| document.forms           | form表单集合           |
| document.images          | 图片集合               |

# 节点关系

节点是父子级嵌套与前后兄弟关系，使用DOM提供的API可以获取这种关系的元素。

- 文本和注释也是节点，所以也在匹配结果中

## 基础知识

节点是根据HTML内容产生的，所以也存在父子、兄弟、祖先、后代等节点关系，下例中的代码就会产生这种多重关系

- h1与ul是兄弟关系
- span与li是父子关系
- ul与span是后代关系
- span与ul是祖先关系

```html
<h1>kai</h1>
<ul>
  <li>
    <span>leo</span>
    <strong>cumt</strong>
  </li>
</ul>
```

| 节点属性        | 说明             |
| --------------- | ---------------- |
| childNodes      | 获取所有子节点   |
| parentNode      | 获取父节点       |
| firstChild      | 子节点中第一个   |
| lastChild       | 子节点中最后一个 |
| nextSibling     | 下一个兄弟节点   |
| previousSibling | 上一个兄弟节点   |

## 元素关系

使用childNodes等获取的节点包括文本与注释，但这不是我们常用的，系统也提供了只操作元素的关系 方法。

| 节点属性               | 说明                                             |
| ---------------------- | ------------------------------------------------ |
| parentElement          | 获取父元素                                       |
| children               | 获取所有子元素                                   |
| childElementCount      | 子标签元素的数量                                 |
| firstElementChild      | 第一个子标签                                     |
| lastElementChild       | 最后一个子标签                                   |
| previousElementSibling | 上一个兄弟标签                                   |
| nextElementSibling     | 下一个兄弟标签                                   |
| contains               | 返回布尔值，判断传入的节点是否为该节点的后代节点 |

```html
<div id="app">
    <div id="c1">子元素1</div>
    <div id="c2">子元素2</div>
    <div id="c3">子元素3</div>
</div>
<script>
    const app = document.querySelector('#app');
    console.log(app.children); // 所有子元素
    console.log(app.firstElementChild); // 子元素1
    console.log(app.lastElementChild); // 子元素2
    const c2 = document.querySelector('#c2');
    console.log(c2.parentElement); // 父元素
    console.log(c2.previousElementSibling); // 子元素1
    console.log(c2.nextElementSibling); // 子元素3
</script>
```

# 遍历节点

```javascript
// length  
const nodes = document.getElementsByTagName('div')
for (let i = 0; i < nodes.length; i++) {
    console.log(nodes[i])
}
// forEach
const nodes = document.querySelectorAll('div')
nodes.forEach((node, key) => {
    console.log(node)
})
// map
// 节点集合对象原型中不存在map方法，但可以借用Array的原型map方法实现遍历
const nodes = document.querySelectorAll('div')
Array.prototype.map.call(nodes, (node, index) => {
    console.log(node, index)
})
// Array.from
// Array.from用于将类数组转为组件，并提供第二个迭代函数。所以可以借用Array.from实现遍历
const nodes = document.getElementsByTagName('div')
Array.from(nodes, (node, index) => {
    console.log(node, index)
})
// forOf
const nodes = document.getElementsByTagName('div')
for (const item of nodes) {
    console.log(item)
}
```

# 样式选择器

在CSS中可以通过样式选择器修饰元素样式，在DOM操作中也可以使用这种方式查找元素。

## querySelectorAll

使用querySelectorAll根据CSS选择器获取Nodelist节点列表

- 获取的NodeList节点列表是静态的，添加或删除元素后不变

```javascript
// 获取所有div元素
const nodes = app.querySelectorAll('div');
// 获取id为app中class包含值的子元素
const nodes = document.querySelectorAll('#app .son');
// 根据元素属性值获取元素集合
  const nodes = document.querySelectorAll(`#app .kai[username='leo']`);
```

## querySelector

querySelector使用CSS选择器获取一个元素，下面是根据属性获取单个元素

```javascript
const node = app.querySelector(`#app .kai[username='leo']`);
```

##  matches

用于检测元素是否是指定的样式选择器匹配，下面过滤掉所有name属性的LI元素

```html
<div id="app">
    <li>maokai</li>
    <li>kai</li>
    <li name="leo">leo.com</li>
</div>
<script>
    const app = document.getElementById('app')
    const nodes = [...app.querySelectorAll('li')].filter((node) => {
        return !node.matches(`[name]`)
    })
    console.log(nodes)
</script>
```

## closest

查找最近的符合选择器的祖先元素（包括自身），下例查找父级拥有 `.comment`类的元素

```html
<div class="comment">
    <ul class="comment">
        <li>baidu.com</li>
    </ul>
</div>

<script>
    const li = document.getElementsByTagName('li')[0]
    const node = li.closest(`.comment`)
    console.log(node)
</script>
```

# 动态与静态

通过 getElementsByTagname 等getElementsBy... 函数获取的Nodelist与HTMLCollection集合是动态的，即有元素添加或移动操作将实时反映最新状态。

- 使用getElement...返回的都是动态的集合
- 使用querySelectorAll返回的是静态集合

# 标准属性

元素的标准属性具有相对应的DOM对象属性

- 操作属性区分大小写
- 多个单词属性命名规则为第一个单词小写，其他单词大写
- 属性值是多类型并不全是字符串，也可能是对象等
- 事件处理程序属性值为函数
- style属性为CSSStyleDeclaration对象
- DOM对象不同生成的属性也不同

## 操作属性

```javascript
// 元素的标准属性可以直接进行操作，下面是直接设置元素的className
const app = document.querySelector(`#app`);
app.className = 'k1 k2';
// 下面设置图像元素的标准属性
let img = document.images[0];
img.src = 'https://hhxx.jpg';
img.alt = 'kai';
// 使用hidden隐藏元素
const app = document.querySelector('#app')
app.addEventListener('click', function () {
    this.hidden = true;
});
```

# 元素特征

对于标准的属性可以使用DOM属性的方式进行操作，但对于标签的非标准的定制属性则不可以。但JS提供了方法来控制标准或非标准的属性

可以理解为元素的属性分两个地方保存，DOM属性中记录标准属性，特征中记录标准和定制属性

- 使用特征操作时属性名称不区分大小写
- 特征值都为字符串类型

| 方法            | 说明     |
| --------------- | -------- |
| getAttribute    | 获取属性 |
| setAttribute    | 设置属性 |
| removeAttribute | 删除属性 |
| hasAttribute    | 属性检测 |

```javascript
// 特征是可迭代对象，下面使用for...of来进行遍历操作
const app = document.querySelector('#app')
for (const { name, value } of app.attributes) {
    console.log(name, value)
}

// 属性值都为字符串，所以数值类型需要进行转换
let input = document.getElementsByName('age').item(0)
let value = input.getAttribute('value') * 1 + 100
input.setAttribute('value', value)

// 使用removeAttribute删除元素的class属性，并通过hasAttribute进行检测删除结果
let hdcms = document.querySelector('.app')
hdcms.removeAttribute('class')
console.log(hdcms.hasAttribute('class')) // false
```

## attributes

```html
<!-- 元素提供了attributes 属性可以只读的获取元素的属性 -->
<div class="k1" data-content="kai">baidu.com</div>
<script>
    let hdcms = document.querySelector('.k1')
    console.dir(hdcms.attributes['class'].nodeValue) // k1
    console.dir(hdcms.attributes['data-content'].nodeValue)//kai
</script>
```

# 创建节点

创建节点的就是构建出DOM对象，然后根据需要添加到其他节点中

## createTextNode

创建文本对象并添加到元素中

```javascript
let app = document.querySelector('#app')
let text = document.createTextNode('hello')
app.append(text)
```

## createElement

使用createElement方法可以标签节点对象，创建span标签新节点并添加到div#app

```javascript
let app = document.querySelector('#app')
let span = document.createElement('span')
span.innerHTML = 'hello'
app.append(span)
```

使用PROMISE结合节点操作来加载外部JAVASCRIPT文件

```javascript
function js(file) {
    return new Promise((resolve, reject) => {
        let js = document.createElement('script')
        js.type = 'text/javascript'
        js.src = file
        js.onload = resolve
        js.onerror = reject
        document.head.appendChild(js)
    })
}

js('11.js')
    .then(() => console.log('加载成功'))
    .catch((error) => console.log(`${error.target.src} 加载失败`))
```

使用同样的逻辑来实现加载CSS文件

```javascript
function css(file) {
    return new Promise((resolve, reject) => {
        let css = document.createElement('link')
        css.rel = 'stylesheet'
        css.href = file
        css.onload = resolve
        css.onerror = reject
        document.head.appendChild(css)
    })
}
css('1.css').then(() => {
    console.log('加载成功')
})
```

## cloneNode&importNode

使用cloneNode和document.importNode用于复制节点对象操作

- cloneNode是节点方法
- cloneNode 参数为true时递归复制子节点即深拷贝
- importNode是documet对象方法

```javascript
// 复制div#app节点并添加到body元素中
let app = document.querySelector('#app')
let newApp = app.cloneNode(true)
document.body.appendChild(newApp)
```

# 节点内容

## innerHTML

inneHTML用于向标签中添加html内容，同时触发浏览器的解析器重绘DOM。

- innerHTML中只解析HTML标签语法，所以其中的 script 不会做为JS处理

**重绘节点**

使用innertHTML操作会重绘元素，下面在点击第二次就没有效果了

- 因为对#app内容进行了重绘，即删除原内容然后设置新内容
- 重绘后产生的button对象没有事件
- 重绘后又产生了新img对象，所以在控制台中可看到新图片在加载

```html
<div id="app">
    <button>leomaokai.com</button>
    <img src="1.jpg" alt="" />
</div>
<script>
    const app = document.querySelector('#app')
    app.querySelector('button').addEventListener('click', function () {
        alert(this.innerHTML)
        this.parentElement.innerHTML += '<hr/>hello'
    })
</script>
```

## outerHTML

outerHTML与innerHTML的区别是包含父标签

- outerHTML不会删除原来的旧元素
- 只是用新内容替换替换旧内容，旧内容（元素）依然存在

## textContent与innerText

textContent与innerText是访问或添加文本内容到元素中

## outerText

与innerText差别是会影响所操作的标签

## insertAdjacentText

将文本插入到元素指定位置，不会对文本中的标签进行解析，包括以下位置

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

```
app.insertAdjacentText('beforebegin', 'hello');
```

# 节点管理

节点元素的管理，包括添加、删除、替换等操作

## 推荐方法

| 方法        | 说明                       |
| ----------- | -------------------------- |
| append      | 节点尾部添加新节点或字符串 |
| prepend     | 节点开始添加新节点或字符串 |
| before      | 节点前面添加新节点或字符串 |
| after       | 节点后面添加新节点或字符串 |
| replaceWith | 将节点替换为新节点或字符串 |

```javascript
const app = document.querySelector('#app');
let h1 = document.createElement('h1');
// 添加内容
h1.append('kai');
// 同时添加多个内容
app.append('hello', h1);
// 替换标签
app.replaceWith(h1);
// 将h2移到h1之前
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
h1.before(h2);
// 删除节点
app.remove();
```

## insertAdjacentHTML

将html文本插入到元素指定位置，浏览器会对文本进行标签解析，包括以下位置

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

```javascript
let app = document.querySelector('#app');
let span = document.createElement('span');
// 在div#app前添加HTML文本
app.insertAdjacentHTML('beforebegin', '<h1>hello</h1>')
```

## insertAdjacentElement

insertAdjacentElement() 方法将指定元素插入到元素的指定位置，包括以下位置

- 第一个参数是位置
- 第二个参数为新元素节点

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

```javascript
let app = document.querySelector('#app');
let span = document.createElement('span');
span.innerHTML = 'hello';
// 在div#app 前插入span标签
app.insertAdjacentElement('beforebegin', span);
```

## DocumentFragment

当对节点进行添加、删除等操作时，都会引起页面回流来重新渲染页面,即重新渲染颜色，尺寸，大小、位置等等。所以会带来对性能的影响。

**解决以上问题可以使用以下几种方式**

1. 可以将DOM写成html字符串，然后使用innerHTML添加到页面中，但这种操作会比较麻烦，且不方便使用节点操作的相关方法。
2. 使用createDocumentFragment来管理节点时，此时节点都在内存中，而不是DOM树中。对节点的操作不会引发页面回流,带来比较好的性能体验。

**DocumentFragment特点**

- createDocumentFragment父节点为null
- 继承自node所以可以使用NODE的属性和方法
- createDocumentFragment创建的是文档碎片，节点类型nodeType为11。因为不在DOM树中所以只能通过JS进行操作
- 添加createDocumentFragment添加到DOM后,就不可以再操作createDocumentFragment元素了,这与DOM操作是不同的
- 将文档DOM添加到createDocumentFragment时,会移除文档中的DOM元素
- createDocumentFragment创建的节点添加到其他节点上时，会将子节点一并添加
- createDocumentFragment是虚拟节点对象，不直接操作DOM所以性能更好
- 在排序/移动等大量DOM操作时建议使用createDocumentFragment

# 表单控制

## 表单查询

JS为表单的操作提供了单独的集合控制

- 使用`document.forms`获取表单集合
- 使用`form`的`name`属性获取指定`form`元素
- 根据表单项的`name`属性使用`form.elements.title`获取表单项，
- 也可以直接写成`form.name`形式，不需要`form.elements.title`
- 针对`radio/checkbox`获取的表单项是一个集合

```html
<form action="" name="kai">
    <input type="text" name="title" />
</form>
<script>
    const form = document.forms.kai;
    console.log(form.elements.title);
</script>
```

# 样式管理

通过DOM修改样式可以通过更改元素的class属性或通过style对象设置行样式来完成。

- 建议使用class控制样式，将任务交给CSS处理，更简单高效

## 批量设置

```javascript
// 使用JS的className可以批量设置样式
let app = document.getElementById('app');
app.className = 'className';
// 也可以通过特征的方式来更改
app.setAttribute('class', 'className');
```

## classList

如果对类单独进行控制使用 classList属性操作

| 方法                    | 说明     |
| ----------------------- | -------- |
| node.classList.add      | 添加类名 |
| node.classList.remove   | 删除类名 |
| node.classList.toggle   | 切换类名 |
| node.classList.contains | 类名检测 |

## 设置行样式

使用style对象可以对样式属性单独设置，使用cssText可以批量设置行样式

**样式属性设置**

```javascript
// 使用节点的style对象来设置行样式
// 多个单词的属性使用驼峰命名
let app = document.getElementById('app');
app.style.backgroundColor = 'red';
app.style.color = 'yellow';
```

**批量设置行样式**

使用 cssText属性可以批量设置行样式，属性名和写CSS一样不需要考虑驼峰命名

```javascript
let app = document.getElementById('app');
app.style.cssText = `background-color:red;color:yellow`;
```

也可以通过setAttribute改变style特征来批量设置样式

```javascript
let app = document.getElementById('app');
app.setAttribute('style', `background-color:red;color:yellow;`);
```

## 获取样式

**style**

```javascript
// 可以使用DOM对象的style属性读取行样式
// style对象不能获取行样式外定义的样式
let app = document.getElementById('app');
console.log(app.style.backgroundColor);
console.log(app.style.margin);
console.log(app.style.marginTop);
console.log(app.style.color);
```

**getComputedStyle**

使用`window.getComputedStyle`可获取所有应用在元素上的样式属性

- 函数第一个参数为元素
- 第二个参数为伪类
- 这是计算后的样式属性，所以取得的单位和定义时的可能会有不同

```html
<style>
    div {
        font-size: 35px;
        color: yellow;
    }
</style>
<div id="app" style="background-color: red; margin: 20px;">hello</div>
<script>
    let app = document.getElementById('app');
    let fontSize = window.getComputedStyle(app).fontSize;
    console.log(fontSize.slice(0, -2));
    console.log(parseInt(fontSize)); // font-size: 35
</script>
```

