import http from '@/util/ajax'
import axios from 'axios'


/**
 * 用户登陆
 * @param {ac:账户,sc:密码} data 
 */
function login(data) {
    return new Promise(function (resolve, reject) {
        axios(http.config('token/app', data, 'post')).then(
            (res) => {
                resolve(res);
            }
        ).catch(
            (response) => {
                reject(response);
            }
        )
    });
}

export default {
    login
}
