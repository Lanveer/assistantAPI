// controllers/users/UserController.js
const dbs = require('../config/query');

class listDetailControler {
    // list
    async getDetail(ctx, next) {
        var sql = 'select * from list_detail where id = 1';
        console.log('ctx data is:',ctx);
        let query = ()=>{
            return new Promise((resolve,reject)=>{
                dbs.query(sql,(err,data) => {
                    if(err){
                        resolve({
                            message:err.message
                        })
                    }
                    resolve(data);
                })
            })
        };
        let result = await query();
        let res = {
            status:200,
            message:'success',
            data:result
        };
        ctx.body = res;
    }
}

module.exports = new listDetailControler();