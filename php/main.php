<?php
include"info.php";

	if ($_SERVER["REQUEST_METHOD"] == "GET"):
		
		// Prepare data for insertion
		$name = $db->escape_string($_GET["name"]);
		$time = $db->escape_string($_GET["time"]);
		$gameLength = $db->escape_string($_GET["gameLength"]);
		$userChoices = $db->escape_string($_GET["userChoices"]);
		
		// Prepare query and execute
		$query = "INSERT INTO scores (name, time, gameLength, userChoices) VALUES ('$name', '$time', '$gameLength', '$userChoices')";
		$result = $db->query($query);

		var_dump($query);
	
    // Tell the browser to go back to the index page.
    //header("Location: index.php");
   
   exit();
   endif;


