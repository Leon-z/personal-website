import * as requestService from '../../utils/request';
import * as apiUrls from '../../api';

//获取文章列表
export function categoryGetArticles({params}) {
    return requestService.fetchWithToken(apiUrls.categoryByName, {
        params: {
            'name': params.name,
        }
    }).then((res) => {
        return res
    }).catch(function (err) {
        return null;
    });
}
