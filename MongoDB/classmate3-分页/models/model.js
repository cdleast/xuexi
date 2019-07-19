// 引入 mongodb 模块
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;


// 数据库地址
var url = 'mongodb://127.0.0.1:27017/classmate';


// 暴露模块
module.exports = function(collection) {
    // 查询数据
    this.find = function(callback) {
        // 1、去数据库查询用户集合 users
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                callback('连接数据库失败');
            } else {
                // 查询数据库
                db.collection(collection).find().toArray(function(error, data) {
                    // 判断是否查询成功
                    if (error) {
                        callback('查询数据库失败');
                    } else {
                        callback(null, data);
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    }


    // 插入数据
    this.insert = function(data, callback) {
        // 把用户提交过来的数据储存到数据库
        // 1、连接数据库
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                callback('连接数据库失败');
            } else {
                // 插入数据库
                db.collection(collection).insert(data, function(error) {
                    if (error) {
                        callback('数据插入失败');
                    } else {
                        callback(null);
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    }


    // 根据 id 查询一条数据进行编辑
    this.findOne = function(_id, callback) {
        // 拼接find()的查询条件
        var where = { _id: mongo.ObjectId(_id) };

        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                callback('连接数据库失败');
            } else {
                // 查询数据库
                db.collection(collection).find(where).toArray(function(error, data) {
                    // 判断是否查询成功
                    if (error) {
                        callback('查询数据库失败');
                    } else {
                        callback(null, data[0]);
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    }


    // 修改数据
    this.update = function(_id, data, callback) {
        // 拼接 update() 的修改条件
        var where = { _id: mongo.ObjectId(_id) };

        // 1、连接数据库
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                callback('连接数据库失败');
            } else {
                // 修改数据
                db.collection(collection).update(where, data, function(error) {
                    // 判断修改的结果
                    if (error) {
                        callback('修改数据失败');
                    } else {
                        callback(null);
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    }


    // 删除数据
    this.remove = function(_id, callback) {
        // 拼接 remove() 的删除条件
        var where = { _id: mongo.ObjectId(_id) };

        // 1、连接数据库
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                callback('连接数据库失败');
            } else {
                // 删除数据
                db.collection(collection).remove(where, function(error) {
                    // 判断删除数据的结果
                    if (error) {
                        callback('删除数据失败');
                    } else {
                        callback(null);
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    }


    // 分页查询数据
    this.pageFind = function(pageSize, offset, callback) {
        // 1、连接数据库
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                callback('连接数据库失败');
            } else {
                // 查询数据
                db.collection(collection).find().limit(pageSize).skip(offset).toArray(function(error, data) {
                    if (error) {
                        callback('查询数据失败');
                    } else {
                        callback(null, data);
                    }
                });

                // 关闭数据库
                db.close();
            }
        });
    }


    // 统计集合里信息的数量
    this.getCount = function(callback) {
        // 1、连接数据库
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                callback('连接数据库失败');
            } else {
                // 查询数据
                db.collection(collection).find().count(function(error, total) {
                    if (error) {
                        callback('统计集合里信息的数量失败');
                    } else {
                        callback(null, total);
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    }






}