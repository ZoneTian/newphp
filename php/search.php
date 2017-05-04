<?php


$username = $_POST['username'];

// echo $username;


$mysqli = new mysqli('localhost', 'root', '123456', 'meixi');
	if (mysqli_connect_errno()){
	//注意mysqli_connect_error()新特性
	die('Unable to connect!'). mysqli_connect_error();
	}
 $mysqli->query('select * from user where username="'.$username.'"');
		// echo $mysqli->error;
		// exit;
	 // var_dump($mysqli);
	 // exit;
	if( $mysqli->affected_rows>= 1) {
		$ret = array('status'=>200, 'info' => '用户名已存在');
	}else if( $mysqli->affected_rows>= 0){
		$ret = array('status'=>300, 'info' => '用户不存在');
	}
	else {
		// 
		$ret = array('status'=>510, 'info' => '添加失败');
	}

echo json_encode($ret);