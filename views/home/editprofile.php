<html>
	<head>
	</head>
	<body>
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
	<table align="center" width="300" >
		<tr>
			<td>
				<fieldset >
					<legend>Edit Profile</legend>
					<table>
						<tr>
						<td>
					<table>
					
					<tr>
					<td>
					<label>Name:</label>
					</td>
					<td><input type="text" value="bob" name="name">
					</td></tr>
					</table><hr/>
					<table>
						<tr>
					<td>
					<label>Email:</label>
					</td>
					<td><input type="text" value="bob@gmail.com" name="name">
					</td></tr>
					</table><hr/>
					<table>
					
					<tr>
					<td>
					<label>Gender:</label>
					</td>
					<td><input type="radio" name="gender">Male
					</td><td><input type="radio" name="gender">Female
					</td>
					<td><input type="radio" name="gender">Other
					</td>
					</tr>
					</table><hr/>
					<table>
						<tr>
					<td>
					<label>Date of birth:</label>
					</td>
					<td><td><input type="date" name="date">
					</td>
					</td></tr>
					</table><hr/>
					<button >submit</button>
					</td>
					
					</tr>
					</table>
				</fieldset>
				
			</td>
		</tr>	
	</table>
	</form>
	</body>
</html>