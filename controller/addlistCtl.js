// controllers/users/UserController.js

/*
* page  当前页数
* pagesize  每次返回的条数
* total 总条数
* */

const dbs = require('../config/query');
class addlistControler {
    // list
    async addList(ctx, next) {
        let add_data = ctx.request.body;
        let name = add_data.name,
            pwd= add_data.pwd,
            user= add_data.user,
            tips=add_data.tips,
            desciption=add_data.desciption;
        var sql = `insert into list (name,user,pwd,tips,description) values ('${name}', '${user}', ${pwd}, '${tips}', '${desciption}')`;
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
        if(result. affectedRows && result. affectedRows ===1) {
            let res = {
                status:200,
                result:'success',
                msg:'添加成功!',
            };
            ctx.body = res;
        }else{
            let res = {
                status:100,
                result:'success',
                msg:'添加失败!',
            };
            ctx.body = res;
        }



    }
}

module.exports = new addlistControler();