import {createAction} from 'redux-actions';
import * as CategoryServices from './CategoryServices';

export const types = {
	CATEGORY_GET_ARTICLES:"CATEGORY_GET_ARTICLES"
};

//获取文章列表
export const categoryGetArticles = createAction(types.CATEGORY_GET_ARTICLES, CategoryServices.categoryGetArticles, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});
