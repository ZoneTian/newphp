<?php


$username = $_POST['username'];
$password = $_POST['upassword'];

// echo $username;


$mysqli = new mysqli('localhost', 'root', '123456', 'meixi');
	$mysqli->query('insert into user(username, upassword) values("'.$username.'", "'.$password.'")');
	if( $mysqli->affected_rows > 0) {
		$ret = array('status'=>200, 'info' => '添加成功');
	} else {
		// echo $mysqli->error;
		// exit;
		$ret = array('status'=>510, 'info' => '添加失败');
	}

echo json_encode($ret);