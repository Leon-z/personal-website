//mock一些数据
let obj = [{
    title:'博客加入阅读次数统计和访问人数统计啦',
    date:'2017-02-07',
    fileName:'博客加入阅读次数统计和访问人数统计啦',
    value:'浏览器 window.screenTop：浏览器左上角距离屏幕顶端的距离 window.screenLeft：浏览器左上角距离屏幕左边的距离 window.innerHeight：浏览器内部可用高度,包括横向滚动条的高度 window.innerWidth：浏览器内部可用宽度，包括纵向滚动条的宽度 ...'
}, {
    title:'利用Memoization减少函数运行次数',
    date:'2016-02-11',
    fileName:'memoization',
    value:'现在要说的可能会让你的代码运行时间缩短十几倍甚至是几十倍！车速太快，请系好安全带！ 什么是Memoization首先我们需要知道Memoization适用场景为递归函数，并且函数计算输出只与输入有关，既相同输入一定是相同输出。Memoization就是在这样的场景下诞生，将每个不同输入对应的输出 ...'
},{
    title:'博客转移到hexo啦',
    date:'2016-01-12 ',
    fileName:'first',
    value:'When you reach for the stars you may not quite get one,but you won’t come up with a handful of mud either.–李奥贝纳 作为一个睡一觉醒来发现又多了两个框架or工具的前端开发，不爱折腾怎么行。 ...'
},{
    title:'【转&补充】H5项目常见问题及注意事项',
    date:'2016-11-27 ',
    fileName:'H5项目常见问题及注意事项',
    value:'H5项目常见问题及注意事项Meta基础知识： H5页面窗口自动调整到设备宽度，并禁止用户缩放页面 1234567891011121314151617181920212223//一、HTML页面结构<meta name="viewport" content="width=device-width ...'
},{
    title:'记录一些项目中遇到的问题以及解决思路',
    date:'2016-11-02',
    fileName:'记录一些项目中遇到的问题以及解决思路',
    value:'记录一下项目中遇到的难点和解决思路和解决方案 聊天组件的唤醒方式： 起因：有一个全局的好友列表隐藏在网页右侧，点击发送信息/对应好友头像／顶部导航栏聊天按钮需要唤醒列表，目前聊天组件的显示隐藏由其内部的一个state控制。然后通过方法fn1去修改该值 问题： 把聊天组件放在顶层app组件，把唤 ...'
},{
    title:'sass学习',
    date:'2016-08-11',
    fileName:'sass学习',
    value:'学习一个新框架的理由有些时候只是因为产品需求变更，为了适应频繁的UI变化，原生的CSS编写效率已经不能满足需求了 安装 sass使用Ruby编写，需要先装ruby环境、其次安装ruby版本管理 rvm 目录 引入 被引入文件需要使用@import 指令，引入其他文件的文件称为宿主文件 @ ...'
},{
    title:'记录一些常用的获取浏览器，屏幕，节点宽高位置的方法[持续更新]',
    date:' 2016-04-07',
    fileName:'记录一些常用的获取浏览器，屏幕，节点宽高位置的方法-持续更新',
    value:'浏览器 window.screenTop：浏览器左上角距离屏幕顶端的距离 window.screenLeft：浏览器左上角距离屏幕左边的距离 window.innerHeight：浏览器内部可用高度,包括横向滚动条的高度 window.innerWidth：浏览器内部可用宽度，包括纵向滚动条的宽度 ...'
},{
    title:'多列布局总结',
    date:' 2016-01-07',
    fileName:'多列布局总结',
    value:'左右两列布局定宽+自适应 实现两列布局，其中左边定宽100px，右边自适应 方案1:float+margin 12345678/* 左边 左浮动，右边添加一个大于等于左边元素宽的左外边距 */.left{ float:left; width:100px;}.ri ...'
}];
export default obj;
