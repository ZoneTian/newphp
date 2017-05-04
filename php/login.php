<?php

$username = $_POST['username'];
$upassword = $_POST['upassword'];

$mysqli = new mysqli('localhost', 'root', '123456', 'meixi');
$result=$mysqli->query('select upassword from user where username ="'.$username.'"');

	$row=$result->fetch_array();

    if($row[0] === $upassword){
    	// var_dump($row[0] == $upassword);
    	// exit();
    	$ret = array('status'=>200, 'info' => '登录成功');
    }else{
    	$ret = array('status'=>510,'info' => '密码错误');
    }

echo json_encode($ret);