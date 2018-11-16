<?php
	$investment_amount = filter_input(INPUT_POST, 'investment_amount');
	$interest_rate = filter_input(INPUT_POST, 'interest_rate');
	$number_of_years = filter_input(INPUT_POST, 'number_of_years');
	$future_value = filter_input(INPUT_POST, 'investment_amount');
	for ($i = 0; $i < $number_of_years; $i++) {
		$percent = $interest_rate*$future_value/100;
  		$future_value=$future_value+$percent;
	}
	$future_val = $future_value;
	$future_val = "$".number_format($future_val,2);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Interest Rate Calc</title>
</head>
<body>
	<main>
		<h1>Interest Rate Calc</h1>
		
		<label>Investment Amount</label>
		<span><?php echo $investment_amount; ?></span><br>

		<label>Yearly Interest Rate</label>
		<span><?php echo $interest_rate; ?></span><br>

		<label>Number Of Years:</label>
		<span><?php echo $number_of_years; ?></span><br>
		<label>Future Value:</label>
		<span><?php echo $future_val . "$"; ?></span><br>
	</main>
</body>
</html>