<?php

// 连接数据库

$mysqli = new mysqli('localhost', 'root', '123456', 'meixi');

// $mysqli->query('set names utf8');

$ret = $mysqli->query('select * from odds');

$data = array();
//从结果集中取得一行作为关联数组。
while($row = $ret->fetch_assoc()) {
	array_push($data, $row);
}

echo json_encode($data);