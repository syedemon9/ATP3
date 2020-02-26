var db = require('./db');

module.exports= {
	getById : function(id, callback){
		var sql = "select * from employee where id=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from employee";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM employee where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUname: function(username, callback){
		var sql = "select * from employee where username=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		console.log(user.Ename+user.Cname+ user.ContactNo+user.username+user.password+user.Utid+user.jid);
		var sql = "insert into employee values(?,?,?,?,?,?,?)";
		db.execute(sql, [ user.Ename, user.Cname, user.ContactNo,user.username, user.password, user.Utid,user.jid], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update : function(user, callback){
		var sql = "update employee set Ename=?,Cname=?,ContactNo=?, username=?, password=?, Utid=?,jid=? where Eid=?";
		db.execute(sql, [user.Ename, user.Cname, user.ContactNo,user.username, user.password, user.Utid,user.jid, user.Eid], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from employee where Eid=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}