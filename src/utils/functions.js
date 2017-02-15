/**
 * Created by bizpies on 2017/2/11.
 */
/**
 * 获取字符串格式的markdown文件，
 * 读取---  --- 内的标记，并用该标记生成对象并返回
 * 缺陷：标记一定要在markdown文件开头
 * @param {string} md 转成字符串的markdown文件
 * @return {object} 读取markdown生成的标识文件
 */
//中断任务，目前先放一个装饰文件装饰着= =
function getDataFromMd(md) {
    let data = md.slice(3, md.indexOf('---', 3));
    let obj = {
        title: {
            index: data.indexOf('title')
        },
        date: {
            index: data.indexOf('date')
        },
        tags: {
            index: data.indexOf('tags')
        }
    };
    let titleValue = data.substring(obj.title.index + 6, obj.date.index);
    let dateValue = data.substring(obj.date.index + 5, obj.tags.index);
    let tagsValue = data.substring(obj.tags.index + 5).trim().split('\n').map((value) => value.trim().replace('- ', ''));
    document.write(data);
<<<<<<< HEAD

=======
>>>>>>> f6e1be9e15bf714dc38d2faf82fdd79ce3b78d56
}
//目前使用的日期格式如 ：February 9, 2017
function formatTime(data) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let date = new Date(data);
    return `${month[date.getMonth()]} ${date.getDate()},  ${date.getFullYear()}`
}
//格式化URL  目前示例http://leon-z.me/blog/2017/02/07/博客加入阅读次数统计和访问人数统计啦/
function formatURL(fileName, time) {
    let date=new Date(time);
    let urlTime=`${date.getFullYear()}/${saveNum(date.getMonth()+1)}/${saveNum(date.getDate())}`;
    return `http://leon-z.me/blog/${urlTime}/${fileName}/`
}
//保证每个数是2个数字，少于10的加个0
function saveNum(num) {
    return num<10?'0'+num:num
}
export { getDataFromMd, formatTime, formatURL };
