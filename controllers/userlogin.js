var express = require('express');
//var userModel = require.main.require('./model/user-model');
var userloginModel = require.main.require('./model/userlogin-model');
var router = express.Router();

//ROUTES
router.get('/', function(req, res){
	res.render('home/userlogin');
});

router.post('/', function(req, res){
			
		var user = {
			email: req.body.email,
			password: req.body.password
		};

		userloginModel.validate(user, function(result){
			if(result != ""){
				req.session.un = req.body.email;
				req.session.un = result.firstname;
				req.session.uid = result.id;

				res.redirect('/user');
			}
			else{
				res.redirect('/userlogin');
			}		
		});
		//console.log(results);
});

module.exports = router;






