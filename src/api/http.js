import axios from "axios";
import Qs from 'qs';

axios.defaults.timeout = 60000;
axios.defaults.baseURL = 'proxyUrl';
axios.defaults.headers.post['Content-Type'] = 'application/json';


//封装axios的get请求
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
                console.log();
            });
    });
}

//封装axios的post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的post请求-序列化
export function postStringify(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
                method: 'post',
                url: url,
                data: Qs.stringify(data)
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的put请求
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios
            .put(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的put请求-序列化
export function putStringify(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: url,
            data: Qs.stringify(data)
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的delete请求
export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .delete(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

//封装axios的下载数据流转换成excel
export function DownLoadToExcel(url, data = {}, fileName) {
    fileName = fileName + ".xls";
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, {
                responseType: "blob"
            })
            .then(response => {
                const blob = new Blob([response.data], {
                    type: "application/vnd.ms-excel"
                });
                if ("download" in document.createElement("a")) {
                    // 非IE下载
                    const elink = document.createElement("a");
                    elink.download = fileName;
                    elink.style.display = "none";
                    elink.href = URL.createObjectURL(blob);
                    document.body.appendChild(elink);
                    elink.click();
                    URL.revokeObjectURL(elink.href);
                    document.body.removeChild(elink);
                } else {
                    // IE10+下载
                    navigator.msSaveBlob(blob, fileName);
                }
            })
            .catch(error => {
                console.log(error);
            });
    });
}
