import fetch from 'isomorphic-fetch';
import * as qs from './querystring';
import storageService from './storage';

const __DEV__ = process.env.NODE_ENV === 'development';
console.warn(__DEV__)
var token = storageService.get('access_token') || null;
function setToken(token) {
    token = token;
}
/**
 * 获取token
 * @method getToken
 * @return {callback}
 */
// function getToken(callback) {
//     let params = qs.stringify({
//         'client_id': 'airag',
//         'client_secret': 'airag',
//         'grant_type': 'password',
//         'username': 'defaultuser',
//         'password': 'defaultuser',
//     });
//     let url = apiUrls.token + "?" + params;
//     if (__DEV__) {
//         console.info(`get token url:`, url);
//     }
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//     })
//         .then(function (res) {
//             if (res.status >= 200 && res.status < 300) {
//
//                 res.json().then(function (json) {
//                     if (json && json.access_token) {
//                         setToken(json.access_token)
//                         storageService.set('access_token', json.access_token, {
// 							exp:json.expires_in
// 						});
//                         if (__DEV__) {
//                             console.info('token:',json.access_token)
//                         }
//                     } else {
//                         setToken(null);
//                         if (__DEV__) {
//                             console.info('token:null',res)
//                         }
//                     }
//                     return callback(json.access_token)
//                 });
//             } else {
//                 if (__DEV__) {
//                     console.info('token:null',res)
//                 }
//                 setToken(null);
//                 return callback(null);
//             }
//         }).catch(function (e) {
//         if (__DEV__) {
//             console.info('token:error',e)
//         }
//         setToken(null);
//         return callback(null)
//     });
// }
/**
 * [fetchWithToken description]
 * 加上token参数的fetch方法
 * @method fetchWithToken
 * @param  {String} url    路径
 * @param  {Object} options 参数对象
 * @param  {Object} options.params 请求参数
 * @param  {String} options.type 请求类型
 * @param  {String} options.timeout 请求超时，默认15000ms
 * @param  {Object} options.body 请求体
 * @return {Promise}
 */
export function fetchWithToken(url, options = {}) {
    let params = options.params || {},
        type = options.type || 'GET';

    //替换路径中的参数
    url = url.replace(/\{{3}(\w+)\}{3}/g, function (match, $1) {
        return params[$1] == null ? '' : params[$1];
    })
        .replace(/\{{2}(\w+)\}{2}/g, function (match, $1) {
            return encodeURIComponent(params[$1] == null ? '' : params[$1]);
        });
    return new Promise(function (resolve, reject) {
        //创建带上token的请求
        function createRequest() {

            let new_url = url;
            // params.access_token = access_token;
            // if (new_url.indexOf('?') > -1) {
            //     new_url += '&access_token=' + access_token;
            // } else {
            //     new_url += '?access_token=' + access_token;
            // }
            if (__DEV__) {
                console.info(`fetch type: `, type, ` url:`, new_url, `Params: `, params);
                console.info(`fetch Body: `, options.body)
            }
            let fetchOptions = {
                credentials: 'include',//cookie
                method: type,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            };
            if (type !== 'GET' && options.body) {
                fetchOptions.body = JSON.stringify(options.body)
            }
            fetch(new_url, fetchOptions)
                .then(function (res) {
                    if (res.status >= 200 && res.status < 300) {
                        res.json().then(function (json) {
                            return resolve(json);
                        }).catch(function () {
                            return resolve();
                        });
                    }
                })
                .catch(function (e) {

                    if (__DEV__) {
                        console.dir(e)
                    }
                    return reject(e);
                });


        }

        // if (!token) {
        //     getToken(createRequest);
        // } else {
        //     createRequest(token);
        // }
        createRequest(token);
    });
}
