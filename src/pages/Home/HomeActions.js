import {createAction} from 'redux-actions';
import * as HomeServices from './HomeServices';

export const types = {
	HOME_GET_ARTICLES_LIST:"HOME_GET_ARTICLES_LIST"
};

//获取文章列表
export const homeGetArticlesList = createAction(types.HOME_GET_ARTICLES_LIST, HomeServices.homeGetArticlesList, ({resolved, rejected})=> {
    return {
        resolved,
        rejected
    }
});
