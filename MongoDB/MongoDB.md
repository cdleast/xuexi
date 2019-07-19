MongoDB
=========
是 NoSQL 的行列

	C++语言编写，基于分布式文件存储的开源数据库系统
BSON:类JSON对象（Binary JSON，二进制形式的存储格式）
{"username":"jack","age":20,"sex":"男"}	由"键值对"组成


安装：mongodb
	版本 3.2.9
	默认端口 27017

	1.安装 mongodb-win32-i386-3.2.9-signed.msi

	2.注意：dbpath 这是数据仓库的位置，提前手动建立这样的一个文件夹(c:/data/db)

	3.打开 cmd 面板，进入到mongodb的bin目录（C:\Program Files\MongoDB\Server\3.2\bin），

		****
		执行mongod --dbpath "c:/data/db" --storageEngine=mmapv1


		mongod --dbpath ~/Users/CDLDJ/data/db --storageEngine=mmapv1


		mongod --dbpath "/data/db" --storageEngine=mmapv1
	


	4.重新打开一个cmd命令窗口，必须进入到mongodb的bin目录，（如果不想每次都切换到 mongodb 的bin目录里 需要配置环境变量  C:\Program Files\MongoDB\Server\3.2\bin ）执行mongo
	环境变量
	


下次运行的时候
==============
	1.执行mongod
	2.再打开一个新cmd，执行mongo

	2、以修复模式启动
	mongod --repair
	mongod --dbpath "c:/data"
	mongod --auth -dbpath /data --repair

	3、如果进入不了mongodb 数据库系统 到 仓库的根目录 mongod.lock删除
	4、查看使用某端口的进程	lsof -i:27017
	5、sudo kill -9 PID（本机PID是396）
	
库的操作
========
	查看所有库			show dbs
	创建并进入数据库	    use test
	查看集合				db collections
	删除数据库			db.dropDatabase()


集合的操作
==========
	查看集合帮助		db.user.help();
	查看集合			show collections
	集合重命名		db.user.renameCollection("goods")
	查看表空间大小		db.user.dataSize();
	查看集合总数据量	db.user.count();
	查看集合所在数据库	db.user.getDB();
	删除集合			db.user.drop();
	集合复制    		db.user.copyTo("user1");


************
* 增删改查 *
************
db.user.insert({"username":"jack"})
db.user.remove({"username":"jack"})
db.user.update({"username":"jack"},{"username":"lisi"})
db.user.find(条件)


数据的操作	
==========
	**************
	* 1.添加数据 *
	**************
	db.user.insert({"username":"jack","age":18,"sex":"nan"})


	**************
	* 2.查询数据 *
	**************

	db.user.find(查询条件)


	db.user.find({"key":value })    			
	----------------------------
	查找key=value的数据

	查找大于值的元素
	db.user.find({"key":{$gt:value}})    		
	---------------------------------
	key > value

	查找小于值的元素
	db.user.find({"key":{$lt:value}})    		
	---------------------------------
	key < value


	**************
	* 2.修改数据 *
	**************

	db.user.update( 更新条件, 更新内容,   可选参数  )
	multi: 	是否允许修改满足条件的多个记录，  false （默认） 只更新一条记录； true 更新多条满足条件的记录
	db.user.update( criteria, objNew,  upsert, multi )
	db.user.update({"username":"jack",{"username":"jack0","age":18,"sex":"nam"}})

	$inc:对一个数字字段field增加value     
	---------------------------------
	{$inc:{"count":1}}
	db.user.update({"username":"jack"},{$inc:{"age":10}})	年龄增加10岁


	$set:设置key为value     
	--------------------
	{$set:{"key":"value"}}
	db.user.update({"useranme":"jack"},{$set:{"username":"abc","age":18}})

	

	$unset:删除属性         
	---------------
	{$unset:{"key":"value"}} 
	db.user.update({"username":"jack"},{$unset:{"age":1}},{multi:true})


	$push:推入一个键值对     
	--------------------
	{$push:{"key":"value"}}     
	db.user.update({"username":"jack"},{$push:{"likes":6}})
	key必须是数组类型的，可以通过此方法推入一个新值，值可以重复


	$pushAll:一次可以追加多个值到一个数组字段内     
	-------------------------------------------
	{$push:{"key",["value1","value2"]}}     值可以重复
	db.user.update({"username":"jack"},{$pushAll:{"likes":[7,8,9]}})


	$addToSet:增加一个值到数组内，（而且只有当这个值不在数组内才增加)     
	--------------------------------------------------------------
	{$addToSet:{"key":{$each:["value1","value2"]}}}
	db.user.update({"username":"jack"},{$addToSet:{"likes":{$each:["acb","xxoo"]}}})


	$pop:删除数组内的一个值     
	------------------------
	{$pop:{"key":1}}
	db.user.update({"username":"jack"},{$pop:{"likes":-1}}) 从likes数组的开头删除
	db.user.update({"username":"jack"},{$pop:{"likes":1}}) 从likes数组的末尾删除


	$pull:从数组内删除一个等于value的值     
	-----------------------------------
	{$pull:{"key":"value"}}删除等于value的值
	db.user.update({"username":"jack"},{$pull:{"likes":"abc"}})


	$pullAll:删除数组中多个值
	-------------------------
	db.user.update({"username":"jack"},{$pullAll:{"likes":[7,8,9]}})


	可选参数：{upsert,multi}
		upsert:如果不存在该数据，是否选择插入该数据，默认false不插入，true为插入数据
		multi:默认false，只更新第一条符合要求的条件，true为修改所有的条件
	例：
		db.user.update({"username":"jack"},{$set:{"username":"abc"}},{multi:true})


	db.user.save( x )
	------------------------
	x就是要更新的对象，只能是单条记录。
	db.user.save(document,可选参数) 有_id是更新，没有_id是插入



	**************
	* 3.查询数据 *
	**************

	db.user.find(查询条件)


	db.user.find({"key":value })    			
	----------------------------
	查找key=value的数据

	查找大于值的元素
	db.user.find({"key":{$gt:value}})    		
	---------------------------------
	key > value

	查找小于值的元素
	db.user.find({"key":{$lt:value}})    		
	---------------------------------
	key < value


	db.user.find({"key":{$gte:value}})    		
	---------------------------------
	key >= value


	db.user.find({"key":{$lte:value}})    		
	---------------------------------
	key <= value


	db.user.find({"key":{$gt:val1,$lt:val2}})   
	---------------------------------
	val1 < key < val2


	db.user.find({"key":{$ne:value}})    		
	---------------------------------
	key <> value


	db.user.find({"key":{$mod :[ 10 , 1 ]}})    
	---------------------------------
	取模运算，条件相当于key % 10 == 1 即key除以10余数为1的


	db.user.find({"key":{$nin:[ 1, 2, 3 ]}})    
	---------------------------------
	不属于，条件相当于key的值不属于[ 1, 2, 3 ]中任何一个


	db.user.find({"key":{$in:[ 1, 2, 3 ]}})    	
	---------------------------------
	属于，条件相当于key等于[ 1, 2, 3 ]中任何一个


	db.user.find({"key":{$size:1}})    
	--------------------------------
	$size 数量、尺寸，条件相当于key的值的数量是1（key必须是数组，一个值的情况不能算是数量为1的数组）


	db.user.find({"key":{$exists :true|false}})    
	---------------------------------------------
	$exists 字段存在，true返回存在字段key的数据，false返回不存在字度key的数据


	db.user.find({"key":/^val.*val$/i })    
	-------------------------------------
	正则，类似like；“i”忽略大小写，“m”支持多行


	db.user.find({$or:[{a :1}, {b :2} ] })    
	---------------------------------------
	$or或  符合条件a=1的或者符合条件b=2的数据都会查询出来


	db.user.find({"key":value,$or:[{a:1},{b:2}]})    
	---------------------------------------------
	符合条件key=value ，同时符合其他两个条件中任意一个的数据


	db.user.find({"key.subkey":value})    
	----------------------------------
	内嵌对象中的值匹配，注意："key.subkey"必须加引号


	db.user.find({"key":{$not :/^val.*val$/i}})    
	-------------------------------------------
	这是一个与其他查询条件组合使用的操作符，不会单独使用。上述查询条件得到的结果集加上$not之后就能获得相反的集合。



	db.user.find().sort({ "key1" :-1 ,"key2" :1 })    
	----------------------------------------------
	排序 这里的1代表升序，-1代表降序
	


	db.collection_name.find().limit(10).skip(10)
	--------------------------------------------
	分页：limit 查询多少条    skip 从第几个开始查

	

	********
	* 索引 *
	********
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	。
	索引也不是越多越好，也有两面性，根据需求来。索引会影响插入数据的效率。


	给username和description创建索引（1升序-1倒叙）
    db.user.ensureIndex({"username":1,"description":-1})

	设置username为唯一索引
    ----------------------
    db.user.ensureIndex({"username":1},{unique:true})

    删除所有索引
    ------------
    db.user.dropIndexes()

    删除指定索引
    ------------
    db.user.dropIndex({"username":1})
    

    ********
	* 聚合 *
	********

	$sum:求和
	----------
	db.user_name.aggregate([{$group:{_id:"$字段",统计结果保存键值(自定):{$sum:1}}}])：


	$sum 统计男生女生各有多少人
	----------------------------
	db.user.aggregate([{$group:{_id:"$sex",sum:{$sum:1}}}])：

	---- $sum: 1  相当于单位。


	$avg:计算平均值
	---------------
	db.user.aggregate([{$group:{_id:"$sex",avg:{$avg:"$age"}}}])


	$min:获取集合中所有文档对应值的最小值
	-------------------------------------
	db.user.aggregate([{$group:{_id:"$sex",min:{$min:"$age"}}}])


	$max:获取集合中所有文档对应值的最大值
	-------------------------------------
	db.user.aggregate([{$group:{_id:"$sex",max:{$max:"$age"}}}])


	************
	* 增删改查 *
	************
	db.user.find(条件)
	db.user.insert({"username":"jack"})
	db.user.update({"username":"jack"},{"username":"lisi"})
	db.user.remove({"username":"jack"})




