import axios from 'axios'
import qs from 'qs'
import Auth from '@/util/auth'
import Config from '@/config'

//默认配置
const BASE_URL = Config.baseUrl;
const token = Auth.hasToken() ? Auth.hasToken() : '';
//请求拦截
axios.interceptors.request.use(config => {
    //显示loading
    console.log("开始请求");
    //设置token
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['Accept'] = 'application/json';
    config.headers['token'] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
}, error => {
    return Promise.reject(error)
});

//获取拦截
axios.interceptors.response.use(response => {
    console.log("获取数据成功");
    return response
}, error => {
    return Promise.resolve(error.response)
});

//处理错误提示
function errorState(response) {
    //隐藏loading
    console.log(response);
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
    } else {
        //错误提示，message
    }

}

//处理正确提示
function successState(res) {
    //隐藏loading
    //统一判断后端返回的错误码
    if (res.data.errorCode === '000002') {
        //错误提示 message
    } else if (res.data.errorCode !== '000002') {
        //错误提示 message
    }
}


/**
 * 发起请求（废弃）
 * @param url
 * @param data
 * @param method
 * @returns {Promise<any>}
 */
function request(url, data, method = 'get') {

    let Public = {
        //公共参数
        'AppId': "cms"
    };

    let httpDefaultOpts = {
        //http默认配置
        method: method,
        baseURL: BASE_URL,
        url: url,
        timeout: 10000,
        params: Object.assign(Public, data),
        data: qs.stringify(Object.assign(Public, data)),
        headers:{}
    };


    if (method === 'get') {
        httpDefaultOpts.headers['Content-Type'] = "application/json; charset=UTF-8";
        delete httpDefaultOpts.data
    } else {
        httpDefaultOpts.headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8";
        delete httpDefaultOpts.params
    }

    return new Promise(function (resolve, reject) {
        axios(httpDefaultOpts).then(
            (res) => {
                //统一处理返回状态
                successState(res);
                resolve(res);
            }
        ).catch(
            (response) => {
                //同一处理错误结果
                errorState(response);
                reject(response);
            }
        )

    });
}



/**
 * 请求配置
 * @param url
 * @param data
 * @param method
 * @returns {{method: string, baseURL: string, url: *, timeout: number, params: *, data: (string|*), headers: *}}
 */
function config(url, data, method = 'get') {

    let Public = {
        //公共参数
        'AppId': "cms"
    };

    let httpDefaultOpts = {
        //http默认配置
        method: method,
        baseURL: BASE_URL,
        url: url,
        timeout: 10000,
        params: Object.assign(Public, data),
        data: qs.stringify(Object.assign(Public, data)),
        headers:{} //保存头请求
    };

    if (method === 'get') {
        httpDefaultOpts.headers['Content-Type'] ="application/json; charset=UTF-8";
        delete httpDefaultOpts.data
    } else {
        httpDefaultOpts.headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8";
        delete httpDefaultOpts.params
    }

    return httpDefaultOpts
}

export default {
    request,
    config
}
