/**
 * 封装fetch
 * 更快,更简单的请求数据
 * 实现增删改查
 * @version 1.0.0
 * @author  米斯特陈
 * @license MIT
 *
 **/

class EasyHttp {
    // get 获取
    get(url) {
        // 现在拿,因为没有数据会返回undefinde,使用Promise构造函数
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    // 请求成功调用resolve方法,把data传回去
                    resolve(data);
                })
                .catch((error) => {
                    // 请求失败调用reject方法,把error传回去
                    reject(error);
                })
        })
    }


    // post 传输
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    return {
                        method: "POST", // 请求格式
                        headers: {
                            // 设置请求头
                            'Content-type': 'application/json'
                        },
                        // 把数据以字符串的形式返回
                        body: JSON.stringify(data)
                    }
                })
                .then((data) => {
                    // 请求成功调用resolve方法,把data传回去
                    resolve(data);
                })
                .catch((error) => {
                    // 请求失败调用reject方法,把error传回去
                    reject(error);
                })
        })
    }


    // put 更新
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    return {
                        method: "PUT", // 请求格式
                        headers: {
                            // 设置请求头
                            'Content-type': 'application/json'
                        },
                        // 把数据以字符串的形式返回
                        body: JSON.stringify(data)
                    }
                })
                .then((data) => {
                    // 请求成功调用resolve方法,把data传回去
                    resolve(data);
                })
                .catch((error) => {
                    // 请求失败调用reject方法,把error传回去
                    reject(error);
                })
        })
    }


    // delete 删除
    delete(url) {
        // 现在拿,因为没有数据会返回undefinde,使用Promise构造函数
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    // 设置请求头
                    'Content-type': 'application/json'
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // 请求成功调用resolve方法,把data传回去
                resolve('数据删除成功');
            })
            .catch((error) => {
                // 请求失败调用reject方法,把error传回去
                reject(error);
            })
        })
    }
}