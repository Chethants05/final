const contactUsTemplate = (firstname, lastname) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Thank you for Contacting Us</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<a href=""><img class="logo"
					src="https://i.postimg.cc/LXYYsd2t/bright-future.png" alt="BrightPath Logo"></a>
			<div class="message">Thank you for contacing us</div>
			<div class="body">
				<p>Dear ${firstname} ${lastname}</p>
				<p>Thank you for contacting us, we'll get back to you shortly. Your patience is deeply appreciated.</p>
			</div>
	</body>
	
	</html>`;
};
module.exports = contactUsTemplate;