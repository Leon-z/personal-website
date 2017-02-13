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
    let data=md.slice(3,md.indexOf('---',3));
    let obj={
        title:{
            index:data.indexOf('title')
        },
        date:{
            index:data.indexOf('date')
        },
        tags:{
            index:data.indexOf('tags')
        }
    };
    let titleValue=data.substring(obj.title.index+6,obj.date.index);
    let dateValue=data.substring(obj.date.index+5,obj.tags.index);
    let tagsValue=data.substring(obj.tags.index+5).trim().split('\n').map((value)=>value.trim().replace('- ',''));
    document.write(data);
    console.log(obj);
    console.log(titleValue);
    console.log(new Date(dateValue));
    console.log(tagsValue);

}
export {getDataFromMd};
