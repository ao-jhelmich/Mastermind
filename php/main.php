<?php
include"info.php";

	var_dump($_GET);


	/*
	if ($_SERVER["REQUEST_METHOD"] == "GET"):
		
		// Prepare data for insertion
		$name = $db->escape_string($_GET["name"]);
		$time = $db->escape_string($_GET["time"]);
		$gameLength = $db->escape_string($_GET["gameLength"]);
		$codeLength = $db->escape_string($_GET["codeLength"]);
		
		// Prepare query and execute
		$sql = "INSERT INTO mastermind (name, `time`, gameLength, codeLength) VALUES ('$name', '$time', '$gameLength', '$codeLength')";
		$result = $db->query($query);
	
    // Tell the browser to go back to the index page.
    header("Location: index.php");
   
   exit();
   endif;


