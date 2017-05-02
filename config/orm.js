var connection = require('./connection');

var orm = {

   
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers;', function(err, burger) {
	      if (err) throw err;
	        callback(burger);
	        });
	    
	    },
    
    devourTool: function(burgerid, callback) {	
        connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?', [1, burgerid], function(err, result) {
            if (err) throw err;
            callback();
        });
    },
    
    newBurger: function(newBurger, callback) {
        connection.query('INSERT INTO burgers SET ?' , {burger_name : newBurger}, function(err, result) {
        if (err) throw err;
        callback();
        });
    }

};

module.exports = orm;