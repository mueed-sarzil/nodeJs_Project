var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

//ROUTES
router.get('/', function(req, res){
	res.render('home/login');
});

router.post('/', function(req, res){
			
		var user = {
			uname: req.body.uname,
			password: req.body.password
		};

		userModel.validate(user, function(result){
			if(result != ""){
				req.session.un = req.body.uname;
				req.session.uid = result.id;

				res.redirect('/admin');
			}
			else{
				res.redirect('/login');
			}		
		});
		//console.log(results);
});

module.exports = router;






