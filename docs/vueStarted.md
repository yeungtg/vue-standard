## views 文件夹 命名
#### views 文件夹下面是由 以页面为单位的 vue 文件 或者 模块文件夹 组成的，放在 src 目录之下，与 components、assets 同级。
  
> <font size='3' color='#660000'>由名词组成如：`car order cart`</font>  
- <font size='3' color='#dd0000'>单词最少有一个 </font>  
- <font size='3' color='#dd0000'>尽量是名词 </font>  
- <font size='3' color='#dd0000'>全部小写，已中划线分割 </font>  
```json
good: "car-info order-detail cart"  ✅  
bad: "carInfo carpage"              ❎

good: "car"                         ✅  
bad: "greet"                        ❎

good: "car"                         ✅  
bad: "Car"                          ❎
```

## views vue文件 命名
#### views vue 文件代表着页面的名字，放在模块文件夹之下

> <font size='3' color='#660000'>尽量是名词</font>   
> <font size='3' color='#660000'>全部小写，开头的单词就是所属模块名字：`car-detail、car-edit、car-list`</font> 
1. <font size='3' color='#dd0000'>名字至少两个单词 </font>  
```json
good: "car-detail"                          ✅  
bad: "CarPage Car"                          ❎ 
```
2. <font size='3' color='#dd0000'>常用结尾单词有 </font> 
```json
good: "detail edit list info report"        ✅
``` 
3. <font size='3' color='#dd0000'>以 Item 结尾的代表着组件 </font> 
```json
good: "car-list-item car-info-item"         ✅  
```

## Vue方法 顺序

<ul style="background: #2c323b; color: #fff; list-style: none; padding: 10px; width: 97%; text-indent: 10px; border-radius: 5px;">
  <li>el</li>
  <li>name</li>
  <li>parent</li>
  <li>functional</li>
  <li>[delimiters, comments]</li>
  <li>[components, directives, filters]</li>
  <li>extends</li>
  <li>mixins</li>
  <li>inheritAttrs</li>
  <li>model</li>
  <li>[props, propsData]</li>
  <li>data</li>
  <li>computed</li>
  <li>watch</li>
  <li style="color: red">LIFECYCLE_HOOKS</li>
  <li>methods</li>
  <li>[template, render]</li>
  <li>renderError</li>
  <li>name</li>
  <li>minxs</li>
  <li>components</li>
</ul>

```
LIFECYCLE_HOOKS: [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'beforeDestroy',
  'destroyed'
]
注：只有LIFECYCLE_HOOKS 在保存的时候顺序自动变化
```

## Vue method自定义方法 命名
1. <font size='3' color='#dd0000'>驼峰命名</font> 
```json
good: "getListData jumpPage openCarInfoDialog"  ✅
bad: "get_list_data get-list-data getlistData"  ❎
```
2. <font size='3' color='#dd0000'>常用单词开头 `set get open close jump`</font> 
```json
good: "jumpPage openCarInfoDialog"              ✅
bad: "go nextPage show open login"              ❎
```
3. <font size='3' color='#dd0000'>Ajax方法以 `get post` 开头，以 `data` 结尾</font> 
```json
good: "getListData postFormData"                ✅
bad: "takeData confirmData getList postForm"    ❎
```
4. <font size='3' color='#dd0000'>事件方法以 `on handle` 其中一种开头, 整个项目只能用一个</font> 
```json
good: "onTypeChange onUsernameInput"            ✅

init refresh 单词除外
```

## Vue生命周期方法 注意点
- 不在 `mounted、created` 之类的方法写逻辑，取 `Ajax 数据`

## Vue组件 命名
> <font size='3' color='#660000'>始终是多个单词的，根组件 App 除外 `todo-item car-info-item`</font> 
1. <font size='3' color='#dd0000'>全部小写 已中划线分割</font>
  ```json
  good: "todo-item car-info-item"               ✅
  bad: "todo-Item todoItem Todo-item"           ❎
  ``` 
2. <font size='3' color='#dd0000'>名字至少两个单词</font> 
  ```json
  good: "todo-item car-info-item"               ✅
  bad: "todo car info"                          ❎
  ``` 

## 结构基础划分

```
 └── src
   ├── assets
   │  
   ├── components
   │   ├── side-bar
   │   │   ├── src
   │   │   │   ├── index.vue
   │   │   │   └── side-bar-item.vue
   │   │   └── index.js
   │   └── top-bar
   │       ├── src
   │       │   └── index.vue
   │       └── index.js
   │
   └── view
       ├── car                          
       │   ├── src
       │   │   ├── car-detail
       │   │   │   └── index.vue  
       │   │   └── car-edit
       │   │       └── index.vue 
       │   └── index.js
       └── payment-auth                          
           ├── src
           │   ├── payment-detail
           │   │   └── index.vue  
           │   └── payment-verify
           │       └── index.vue 
           └── index.js
```