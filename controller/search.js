// controllers/users/searchController.js

/*
* flag  查询哪张表
* name  模糊查询的参数
* res   返回值
* */

const dbs = require('../config/query');
class searchControler {
    async doSearch(ctx, next) {
        let searchData = ctx.request.body;
        let flag = ctx.query.flag;
        let name = searchData.name;
        try {
            var sql = `select * from ${flag} where name like '%${name}%'`;
            let query = ()=>{
                return new Promise((resolve,reject)=>{
                    dbs.query(sql,(err,data) => {
                        if(err){
                            resolve({
                                message:err.message
                            })
                        }
                        resolve(data);
                    });
                })
            };
            let result = await query();
            let res = {
                status:200,
                result:'success',
                data:result,
                total:result && result.length
            };
            ctx.body = res;
        }
        catch (e) {
            console.log('err is:', e)
        }
    }
}
let search = new searchControler();
module.exports = {
    search,
};