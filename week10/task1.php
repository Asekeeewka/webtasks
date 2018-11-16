<?php
$usernames = ["billgates","johndoe","stevejobs"];
$username = "";
$password = "";
$confirmpw = "";

if(isset($_REQUEST["username"])){
	$username = $_REQUEST["username"];
	if($username===""){
		echo "<div class='error'>";
		echo "Username cannot be empty";
		echo "</div>";
		echo "<br>";
	}
}

if(isset($_REQUEST["password"]) and isset($_REQUEST["confirmpw"])){
	$password=$_REQUEST["password"];
	$confirmpw=$_REQUEST["confirmpw"];
	if($password==="" and $confirmpw===""){
		echo "<div class='error'>";
		echo "Password and Confirm password cannot be empty";
		echo "</div>";
		echo "<br>";
	}
}

if(in_array($username, $usernames)){
	echo "<div class='error'>";
	echo "Username " . $username . " is already taken";
	echo "</div>";
	echo "<br>";
}

if($password!=$confirmpw){
	echo "<div class='error'>";
	echo "Password and Confirm password are not equal to each other";
	echo "</div>";
	echo "<br>";
}



?>
<html>
<head><style>
.error{
	border:1px solid red;
	font-weight:bold;
	padding:5px;
	width:400px;
	margin:4px;
}
</style></head>
<body>
<form action="task1.php" method="post">

<label>Username:</label>
<input type="text" name="username"><br>

<label>Password:</label>
<input type="password" name="password"><br>

<label>Confirm Password:</label>
<input type="password" name="confirmpw"><br>

<input type="submit"/>
</form>
</body>
</html>