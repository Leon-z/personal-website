import * as requestService from '../../utils/request';
import * as apiUrls from '../../api';

//获取文章列表
export function homeGetArticlesList({params}) {
    return requestService.fetchWithToken(apiUrls.articlesList, {
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
