// controllers/users/UserController.js

/*
* page  当前页数
* pagesize  每次返回的条数
* total 总条数
* */

let moment = require('moment');
const dbs = require('../config/query');
class listControler {
    // list
    async getCountList(ctx, next) {
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
            var sql = `select * from account_list where status = 0 order by id  limit ${start ||0}, ${end ||20} `;
            console.log('sql is:',sql);
            var sql_count = `select count(*) as total from account_list where status = 0`;
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
            // loop &&　deal single data
            let arr=[];
            result.forEach((item, idx)=>{
                let  temp={};
                temp.idx=idx+1;
                temp.id= item.id;
                temp.name= item.name;
                temp.num= item.num;
                temp.category= item.category;
                temp.payMethods= item.payMethods;
                temp.consumptionPlace= item.consumptionPlace;
                temp.consumptionDate= moment(item.consumptionDate).format('YYYY-MM-DD HH:mm:ss');
                temp.createTime= moment(item.createTime).format('YYYY-MM-DD HH:mm:ss');
                temp.consumer= item.consumer;
                temp.tips= item.tips;
                temp.status= item.status;
                arr.push(temp);
            });
            let res = {
                status:200,
                result:'success',
                data:arr,
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
    async addCountList(ctx, next) {
        let add_data = ctx.request.body;
        let name = add_data.name,
            category= add_data.category,
            num= add_data.num,
            payMethods=add_data.payMethods,
            consumptionPlace=add_data.consumptionPlace,
            consumptionDate=add_data.consumptionDate,
            consumer=add_data.consumer,
            createTime=add_data.createTime,
            tips=add_data.tips;
        let  sql = `insert into account_list (name,category,num,payMethods,consumptionPlace,consumptionDate,consumer,createTime,tips) values ('${name}', '${category}', ${num}, '${payMethods}', '${consumptionPlace}', '${consumptionDate}','${consumer}','${createTime}','${tips}')`;
        console.log('insert sql is:', sql);
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
    async editCountList(ctx, next) {
        let data = ctx.request.body;
        let name = data.name,
            num= data.num,
            category= data.category,
            payMethods=data.payMethods,
            consumptionPlace=data.consumptionPlace,
            consumer=data.consumer,
            tips=data.tips,
            consumptionDate=data.consumptionDate,
            createTime=data.createTime;
        let id = ctx.query.id;
        let sql = `update account_list set name= '${name}', num= '${num}',category = '${category}', payMethods = '${payMethods}', consumptionPlace ='${consumptionPlace}', consumer ='${consumer}', tips ='${tips}', createTime='${createTime}' ,consumptionDate='${consumptionDate}' where id= ${id}`;
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
    async deleteCountList(ctx, next) {
        let data = ctx.request.body;
        let id = ctx.query.id;
        var sql = `update account_list set status = 1 where id=${id}`;
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
// class listDetailControler {
//     // list
//     async getDetail(ctx, next) {
//         var sql = 'select * from list_detail where id = 1';
//         console.log('ctx data is:',ctx);
//         let query = ()=>{
//             return new Promise((resolve,reject)=>{
//                 dbs.query(sql,(err,data) => {
//                     if(err){
//                         resolve({
//                             message:err.message
//                         })
//                     }
//                     resolve(data);
//                 })
//             })
//         };
//         let result = await query();
//         let res = {
//             status:200,
//             message:'success',
//             data:result
//         };
//         ctx.body = res;
//     }
// }
let getListData = new listControler();
let addListData = new addlistControler();
let editListData = new editControler();
let deleteListData = new deleteControler();
// let detailListData = new listDetailControler();
module.exports = {
    getListData,
    addListData,
    editListData,
    deleteListData,
    // detailListData,
};