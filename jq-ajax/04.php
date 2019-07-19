<?php 

// 定义一个数组
$datalis = array(
	array('title'=>'我是共产党的接班人','z'=>'jack'),	
	array('title'=>'没有共产党就没有新中国','z'=>'jackmeimei'),	
	array('title'=>'我是祖国的花朵，长大的才发现','z'=>'allen'),	
	array('title'=>'原来祖国的花朵，开一朵掐一朵','z'=>'allenbaba'),	
);

// 转化成 json 的格式再发送。
$data = json_encode($datalis);

echo $data;







