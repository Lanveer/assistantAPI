// controllers/users/UserController.js
const dbs = require('../config/query');

class editControler {
    // list
    async editList(ctx, next) {
        let data = ctx.request.body;
        let name = data.name,
            pwd= data.pwd,
            user= data.user,
            tips=data.tips,
            description=data.description;
        let id = ctx.query.id;
        console.log('put data is:', data);
        console.log('query data is:', id);
        var sql = `update list set name= '${name}', user= '${user}',pwd = '${pwd}', tips = '${tips}', description ='${description} ' where id= ${id}`;
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
        console.log('result data is:', result);
        if(result. affectedRows && result. affectedRows ===1){
            let res = {
                status:200,
                result:'success',
                msg:'编辑成功!',
            };
            ctx.body = res;
        }else{
            let res = {
                status:100,
                result:'success',
                msg:'编辑失败!',
            };
            ctx.body = res;
        }


    }
}

module.exports = new editControler();