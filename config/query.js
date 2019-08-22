let mysql = require('mysql');
let config = require('./db');

module.exports = {
    query: function (sql, params, callbacks) {
        var connection = mysql.createConnection(config);
        connection.connect(function (err) {
            if(err) {
                // console.log('err is:', err);
                throw new Error('connect fail for:',err.stack);
            }
            connection.query(sql, params, function (err, results,fields) {
                if(err) {
                    throw new Error('query err for:', err);
                }
                callbacks && callbacks(results,fields);
                connection.end(function (err) {
                    if(err){
                        throw new Error('close data base error for:', err)
                    }
                })
            })
        })
    }
};