import {createAction} from 'redux-actions';
import * as ArticleServices from './ArticleServices';

export const types = {
	ARTICLE_GET_DETAIL:"ARTICLE_GET_DETAIL"
};

//获取文章列表
export const articleGetDetail = createAction(types.ARTICLE_GET_DETAIL, ArticleServices.articleGetDetail, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});
