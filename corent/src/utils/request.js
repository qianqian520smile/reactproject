
import Cookie from 'js-cookie';
// import {createBrowserHistory} from 'history';
// let history = createBrowserHistory();
//接口登陆
const queryString = (data) => {
    return Object.entries(data).map(item => `${item[0]}=${item[1]}`).join('&')
}

const request = (url, method, data) => {
    let params = queryString(data);
    url = method === 'GET' ? `${url}${params ? '?' + params : ''}` : url;
    let initOption = {
        method,
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
           ,
           'authorization':Cookie.get('token')
        }
    }
    let options = method === 'GET' ? initOption : { ...initOption, body: params }
    return fetch(url, options).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject(response);
        }
    })
}

export default {
    get(url, data = {}) { //key=value&key=value
        return request(url, 'GET', data);
    },
    post(url, data) {
        return request(url, 'POST', data);
    }
}