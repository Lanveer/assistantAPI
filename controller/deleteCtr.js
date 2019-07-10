// controllers/users/UserController.js
const dbs = require('../config/query');

class listControler {
    // list
    async deleteList(ctx, next) {
        let data = ctx.request.body;
        let id = ctx.query.id;
        var sql = `update list set status = 1 where id=${id}`;
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
        if(result. affectedRows && result. affectedRows ===1){
            let res = {
                status:200,
                result:'success',
                msg:'删除成功!',
            };
            ctx.body = res;
        }else{
            let res = {
                status:100,
                result:'success',
                msg:'删除失败!',
            };
            ctx.body = res;
        }


    }
}

module.exports = new listControler();