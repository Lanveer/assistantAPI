// controllers/users/UserController.js

/*
* page  当前页数
* pagesize  每次返回的条数
* total 总条数
* */

const dbs = require('../config/query');
class listControler {
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
            // console.log('all dsata is:', result);
            // console.log('res dsata os:', total);
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
class addlistControler {
    // list
    async addList(ctx, next) {
        let add_data = ctx.request.body;
        let name = add_data.name,
            pwd= add_data.pwd,
            user= add_data.user,
            tips=add_data.tips,
            desciption=add_data.desciption;
        let sql = `insert into list (name,user,pwd,tips,description) values ('${name}', '${user}', '${pwd}', '${tips}', '${desciption}')`;
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
class deleteControler {
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
let getListData = new listControler();
let addListData = new addlistControler();
let editListData = new editControler();
let deleteListData = new deleteControler();
let detailListData = new listDetailControler();
module.exports = {
    getListData,
    addListData,
    editListData,
    deleteListData,
    detailListData,
};

// module.exports = new listControler();