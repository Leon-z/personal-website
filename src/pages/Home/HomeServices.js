import * as requestService from '../../utils/request';
import * as apiUrls from '../../api';

//获取文章列表
export function articleGetList({params}) {
    return requestService.fetchWithToken(apiUrls.articleGetList, {
        params: {
            'page_number': params.page_number,
            'page_size': params.page_size,
        }
    }).then((res) => {
        return res
    }).catch(function (err) {
        return null;
    });
}

//获取单个文章详细内容
export function articleGetItem({params}) {
    return requestService.fetchWithToken(apiUrls.articleGetItem, {
        params: {
            _id: params._id,
        }
    }).then((res) => {
        return res
    }).catch(function (err) {
        return null;
    });
}

//文章修改
export function articleEditItem({params}) {
    return requestService.fetchWithToken(apiUrls.articleGetItem, {
        params:{
            _id: params._id,
        },
        type:'put',
        body: {
            categories: params.categories,
            title: params.title,
            banner: params.banner,
            description: params.description,
            content: params.content,
        }
    }).then((res) => {
        return res
    }).catch(function (err) {
        return null;
    });
}
//新增文章详细内容
export function articleAddItem({params}) {
    return requestService.fetchWithToken(apiUrls.articleAddItem, {
        type:'post',
        body: {
            categories: params.categories,
            title: params.title,
            banner: params.banner,
            description: params.description,
            content: params.content,
        }
    }).then((res) => {
        return res
    }).catch(function (err) {
        return null;
    });
}

//文章删除
export function articleDeleteItem({params}) {
    return requestService.fetchWithToken(apiUrls.articleGetItem, {
        params:{
            _id: params._id,
        },
        type:'delete',
    }).then((res) => {
        return res
    }).catch(function (err) {
        return null;
    });
}
