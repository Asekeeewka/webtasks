<a href="task92.php?category=sport">Sport news</a> | <a href="task92.php?category=politics">Politic news</a><br/><br/>
<a href="task92.php?category=sport&format=json">Sport news (JSON)</a> | <a href="task92.php?category=politics&format=json">Politic news (JSON)</a><br/><br/>

<?php
$news = ["sport"=>["C. Ronaldo has scored three goals in last five matches","Golovkin has won match for title"],"politics"=>["Trump has cancelled his visit to North Corea, because of sanction","N. Nazarbayev has approved new version of alphabet"]];
$category = "sport";
$format = "";

if(isset($_GET["format"])){
	$format = $_GET["format"];
}
if(isset($_GET["category"])){
	$category = $_GET["category"];
}

if($format == "json"){
	echo json_encode($news[$category]);
}

else{
	echo $news[$category][0]. "</br>". $news[$category][1];
}
/* This code hasn't been copied from anyone. 
   isset solution is taken from: https://www.youtube.com/watch?v=Qq8ZTMfs18k
   Writing this because I've seen similar code to mine*/
?>

