 最近看到一段代码实现`'www.baidu.com'`=>`'com/baidu/wwww'`的转换，原代码非常麻烦。因为react经常要对数据进行操作拼接，所以顺手就把它实现出来了。代码如下:

 ```javascript
let str='www.baidu.com';
let result=str.split('.').reverse().join('/');//com/baidu/www
 ```
借此提醒自己，知识是要熟记，但更要灵活运用。不要字符串就只想到字符串方法。

贴一波之前学习字符串记的笔记，继续加油。
