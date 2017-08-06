import * as requestService from '../../utils/request';
import * as apiUrls from '../../api';

//获取文章列表
export function articleGetDetail({params}) {
    return requestService.fetchWithToken(apiUrls.article, {
        params: {
            'id': params.id,
        }
    }).then((res) => {
        return res
    }).catch(function (err) {
        return null;
    });
}
