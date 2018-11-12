## 缩进与换行

> <font size='3' color='#660000'>使用 2个空格做为一个缩进层级，不允许使用 4个空格</font>
```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>
```

## class 命名
- <font size='3' color='#dd0000'>class 必须单词全字母小写，单词间以 - 分隔</font> 
- <font size='3' color='#dd0000'>使用`BEM`命名规则</font> 
```html
<div class="cp-dialog__wrapper">
  <div
    class="cp-dialog"
    <div class="cp-dialog__header">
      <span class="cp-dialog__title"></span>
      <button class="cp-dialog__headerbtn"
        <i class="cp-dialog__close cp-icon cp-icon-close"></i>
      </button>
    </div>
    <div class="cp-dialog__body"></div>
    <div class="cp-dialog__footer"></div>
  </div>
</div>
```
- <font size='3' color='#dd0000'>class 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名</font>
```html
<!-- good --><div class="cp-sidebar"></div>      ✅
<!-- bad --><div class="cp-left"></div>          ❎
```
