
> 实现两列布局，其中左边定宽100px，右边自适应

- 方案1:[float+margi](http://note.youdao.com/)n

```css
/* 左边 左浮动，右边添加一个大于等于左边元素宽的左外边距 */
.left{
    float:left;
    width:100px;
}
.right{
    margin-left:120px;
}
```
```
不足：IE6下会有3像素bug，右边盒子有3像素边距。
另外如果自适应的盒子内有元素设置了`clear:both`清除了浮动，那么`右边盒子会在上边多出一段等于左边盒子高度的内边距`
```
- 方案2:float+overflow

```css
/* float+overflow触发BFC模式BFC里面内容和外部元素是隔离的 */
.left{
    float:left;
    width:100px;
}
.right{
    overflow:hidden;
}
```
