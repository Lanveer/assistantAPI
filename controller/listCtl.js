// controllers/users/UserController.js

/*
* page  当前页数
* pagesize  每次返回的条数
* total 总条数
* */

const dbs = require('../config/query');
class listControler {ｅ
    // list
    async getList(ctx, next) {
        let ctx_query = ctx.query;
        // 分页
        let page= ctx_query.page || 0;
        let pagesize= ctx_query.pagesize || 20;
        if(page<=0) {
            page=1;
        }else{
            console.log('page is:', page);
             var start = parseInt((page-1)*pagesize) || 0;
             var end = parseInt(pagesize) || 20;
        }
        try {
            var sql = `select * from list where status = 0 limit ${start ||0}, ${end ||20}`;
            console.log('sql is:',sql);
            var sql_count = `select count(*) as total from list where status = 0`;
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
            let query_count = ()=>{
                return new Promise((resolve,reject)=>{
                    dbs.query(sql_count,(err,data) => {
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
            let total = await query_count();
            console.log('all dsata is:', result);
            console.log('res dsata os:', total);
            let res = {
                status:200,
                result:'success',
                data:result,
                total:total[0].total
            };
            ctx.body = res;
        }
        catch (e) {
            console.log('err is:', e)
        }


    }
}

module.exports = new listControler();