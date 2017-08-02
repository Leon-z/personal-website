import {createAction} from 'redux-actions';
import * as ArticleServices from './HomeServices';

export const types = {
	ARTICLE_GET_LIST: 'ARTICLE_GET_LIST',
    ARTICLE_GET_ITEM:'ARTICLE_GET_ITEM',
    ARTICLE_EDIT_ITEM:'ARTICLE_EDIT_ITEM',
    ARTICLE_DELETE_ITEM:'ARTICLE_DELETE_ITEM',
    ARTICLE_ADD_ITEM:'ARTICLE_ADD_ITEM',
};

//获取文章列表
export const articleGetList = createAction(types.ARTICLE_GET_LIST, ArticleServices.articleGetList, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});
//获取文章详情
export const articleGetItem = createAction(types.ARTICLE_GET_ITEM, ArticleServices.articleGetItem, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});
//文章编辑
export const articleEditItem = createAction(types.ARTICLE_EDIT_ITEM, ArticleServices.articleEditItem, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});

//文章新增
export const articleAddItem = createAction(types.ARTICLE_ADD_ITEM, ArticleServices.articleAddItem, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});

//文章删除
export const articleDeleteItem = createAction(types.ARTICLE_DELETE_ITEM, ArticleServices.articleDeleteItem, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});
