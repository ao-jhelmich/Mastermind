<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Mastermind</title>
	<link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/style2.css">
</head>
<body>
	<button id="playButton">options</button>
	
	<div class="wrapper" id="wrapper">
			<div id = "timer">
			<h1></h1>
			</div>
			<div id="userBar">
			</div>
			<div id="playField">			
			</div>
	</div>
	<script src="<?php echo Config::get('URL'); ?>js/main.js"></script>
	<script src="<?php echo Config::get('URL'); ?>js/stopwatch.js"></script>
</body>
</html>