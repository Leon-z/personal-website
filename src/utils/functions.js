/**
 * Created by bizpies on 2017/2/11.
 */
/**
 * 获取字符串格式的markdown文件，
 * 读取---  --- 内的标记，并用该标记生成对象并返回
 * @param {string} md 转成字符串的markdown文件
 * @return {object} 读取markdown生成的标识文件
 */

function getDataFromMd(md) {
    let text='cssat sleep sat';
    let pattern =/at/g;
    let match=text.search(pattern);
    console.log(match)

}
export {getDataFromMd};
