
##### 字符串拼接方法 concat()
```javascript
let oldStr='abc';
let newStr=oldStr.concat('aaa','ccc');
console.log(oldStr);//abc
console.log(newStr)//abcaaaccc
```
`concat`方法拼接字符串，通过例子验证其三个特点
* 生成新字符串
* 对原字符串无影响
* 可传入多个参数
```
如果想改变原字符串进行拼接 直接使用'+'操作符即可
```
