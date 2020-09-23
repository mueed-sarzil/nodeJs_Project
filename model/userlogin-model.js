var db = require('./db');


module.exports = {
	get: function(userId, callback){
		var sql = "select * from registration where id="+userId;
		db.getResults(sql, function(result){

			if(result.length >0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from registration";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from registration where email='"+user.email+"' and pass='"+user.password+"'";
		db.getResults(sql, function(result){

			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		})
	},
	insert: function(user, callback){
		var sql = "insert into admin values(null, '"+ user.pname+"','"+ user.uname+"', '"+ user.password+"')"
		db.execute(sql, function(success){
			callback(success);
		});
	},
	update: function(user, callback){
		var sql = "update admin set name='"+user.pname+"',username='"+user.uname+"', password='"+user.password+"'where id="+user.id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from admin where id="+user.id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}