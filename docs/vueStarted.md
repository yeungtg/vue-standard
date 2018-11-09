## views 文件夹 命名
#### views 文件夹下面是由 以页面为单位的 vue 文件 或者 模块文件夹 组成的，放在 src 目录之下，与 components、assets 同级。
  
> <font size='3' color='#660000'>由名词组成如：`car order cart`</font>  
- <font size='3' color='#dd0000'>单词只能有一个 </font>  
- <font size='3' color='#dd0000'>尽量是名词 </font>  
- <font size='3' color='#dd0000'>以小写开头 </font>  
```json
good: "car order cart"  ✅  
bad: "carInfo carpage"  ❎

good: "car"             ✅  
bad: "greet"            ❎

good: "car"             ✅  
bad: "Car"              ❎
```

## views vue文件 命名
#### views vue 文件代表着页面的名字，放在模块文件夹之下

> <font size='3' color='#660000'>尽量是名词</font>   
> <font size='3' color='#660000'>大写开头，开头的单词就是所属模块名字：`CarDetail、CarEdit、CarList`</font> 
1. <font size='3' color='#dd0000'>名字至少两个单词 </font>  
```json
good: "CarDetail"                         ✅  
bad: "CarPage Car"                        ❎ 
```
2. <font size='3' color='#dd0000'>常用结尾单词有 </font> 
```json
good: "Detail Edit List Info Report"      ✅
``` 
3. <font size='3' color='#dd0000'>以 Item 结尾的代表着组件 </font> 
```json
good: "CarListItem CarInfoItem"           ✅  
```

## Vue方法 顺序

<ul style="background: #2c323b; color: #fff; list-style: none; padding: 10px; width: 97%; text-indent: 10px; border-radius: 5px;">
  <li>components</li>
  <li style="color: #7ec699">props</li>
  <li style="color: #7ec699">data</li>
  <li style="color: #7ec699">created</li>
  <li style="color: #7ec699">mounted</li>
  <li>activited</li>
  <li>update</li>
  <li>beforeRouteUpdate</li>
  <li style="color: #7ec699">metods</li>
  <li>filter</li>
  <li style="color: #7ec699">computed</li>
  <li style="color: #7ec699">watch</li>
</ul>

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
4. <font size='3' color='#dd0000'>事件方法以 `on` 开头</font> 
```json
good: "onTypeChange onUsernameInput"            ✅

init refresh 单词除外
```

## Vue生命周期方法 注意点
- 不在 `mounted、created` 之类的方法写逻辑，取 `Ajax 数据`

## Vue组件 命名
> <font size='3' color='#660000'>始终是多个单词的，根组件 App 除外 `TodoItem CarInfoItem`</font> 
1. <font size='3' color='#dd0000'>首字母大写 驼峰命名</font>
  ```json
  good: "TodoItem CarInfoItem"                ✅
  bad: "todo-item todoItem todo-item"         ❎
  ``` 
2. <font size='3' color='#dd0000'>名字至少两个单词</font> 
  ```json
  good: "TodoItem CarInfoItem"                ✅
  bad: "todo car info"                        ❎
  ``` 

## 结构基础划分

```
 └── src
   ├── assets
   │  
   ├── components
   │   ├── SideBar
   │   │   ├── src
   │   │   │   ├── SideBarIndex.vue
   │   │   │   └── SideBarItem.vue
   │   │   └── index.js
   │   └── TopBar
   │       ├── src
   │       │   └── TopBarIndex.vue
   │       └── index.js
   │
   └── view       
       ├── car                          
       │   ├── src
       │   │   ├── CarDetail
       │   │   │   └── index.vue  
       │   │   └── CarEdit
       │   │       └── index.vue 
       │   └── index.js
       └── order                          
           ├── src
           │   ├── OrderDetail
           │   │   └── index.vue  
           │   └── OrderEdit
           │       └── index.vue 
           └── index.js
       
```