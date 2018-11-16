<?php
	$product_description = filter_input(INPUT_POST, 'product_description');
	$real_price = filter_input(INPUT_POST, 'real_price');
	$discount_percent = filter_input(INPUT_POST, 'discount_percent');
	$discount_amount = $discount_percent*100/$real_price;
	$real_price_f = $real_price-$discount_amount;
	$real_price_f = "$".number_format($real_price_f,2);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Product Discount Calculator</title>
</head>
<body>
	<main>
		<h1>Product Discount Calculator</h1>
		
		<label>Product Description</label>
		<span><?php echo $product_description; ?></span><br>

		<label>Real Price</label>
		<span><?php echo $real_price; ?></span><br>

		<label>Discount:</label>
		<span><?php echo $discount_percent . "%"; ?></span><br>
		<label>Discount Amount:</label>
		<span><?php echo $discount_amount . "$"; ?></span><br>
		<label>Final Price:</label>
		<span><?php echo $real_price_f ?></span><br>
	</main>
</body>
</html>