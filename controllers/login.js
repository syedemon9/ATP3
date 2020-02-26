var express = require('express');

var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	var user ={
		username: req.body.uname,
		password: req.body.password,
		utid:req.body.utid
	};

	userModel.validate(user, function(status){
	 	if(status){
			res.cookie('username', req.body.uname);
			if(req.body.utid==1)
			{
				res.redirect('/admin');
			}
			else{
				res.redirect('/employee');
			}
			
		}else{
			res.send('invalid username/password');
		}
	});
});

module.exports = router;