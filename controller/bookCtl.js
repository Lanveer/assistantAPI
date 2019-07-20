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
    async getBooktList(ctx, next) {
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
            var sql = `select * from book_list where status = 0 order by id  limit ${start ||0}, ${end ||20} `;
            console.log('sql is:',sql);
            var sql_count = `select count(*) as total from book_list where status = 0`;
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
                temp.author= item.author;
                temp.content= item.content;
                temp.book_status= item.book_status;
                temp.publish= item.publish;
                temp.create_time= moment(item.create_time).format('YYYY-MM-DD HH:mm:ss');
                temp.category= item.category;
                temp.cover= item.cover;
                temp.origin= item.origin;
                temp.price= item.price;
                temp.recorder= item.recorder;
                temp.status= item.status;
                temp.tips= item.tips;
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
    async addBookList(ctx, next) {
        let add_data = ctx.request.body;
        let name = add_data.name,
            author= add_data.author,
            content= add_data.content,
            book_status=add_data.book_status,
            publish=add_data.publish,
            create_time=add_data.create_time,
            category=add_data.category,
            cover=add_data.cover,
            origin=add_data.origin,
            price=add_data.price,
            recorder=add_data.recorder,
            status=add_data.status,
            tips=add_data.tips;
        let  sql = `insert into book_list (name, author, content, book_status, publish, create_time, category, cover, origin, price, recorder, tips, status) values ('${name}', '${author}', '${content}', '${book_status}', '${publish}', '${create_time}','${category}','${cover}','${origin}', '${price}', '${recorder}', '${tips}','${status}')`;
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
                result:'error',
                msg:'添加失败!',
            };
            ctx.body = res;
        }



    }
}
class editControler {
    // list
    async editBookList(ctx, next) {
        let add_data = ctx.request.body;
        let name = add_data.name,
            author= add_data.author,
            content= add_data.content,
            book_status=add_data.book_status,
            publish=add_data.publish,
            create_time=add_data.create_time,
            category=add_data.category,
            cover=add_data.cover,
            origin=add_data.origin,
            price=add_data.price,
            recorder=add_data.recorder,
            status=add_data.status,
            tips=add_data.tips;
        let id = ctx.query.id;
        let sql = `update book_list set name= '${name}', author= '${author}',content = '${content}', book_status = '${book_status}', publish ='${publish}', create_time ='${create_time}', category ='${category}', cover='${cover}' ,origin='${origin}', price ='${price}',recorder='${recorder}', status='${status}',tips='${tips}' where id= ${id}`;
      console.log('edit sql is:',sql)
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
    async deleteBookList(ctx, next) {
        let data = ctx.request.body;
        let id = ctx.query.id;
        var sql = `update book_list set status = 1 where id=${id}`;
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

let getListData = new listControler();
let addListData = new addlistControler();
let editListData = new editControler();
let deleteListData = new deleteControler();

module.exports = {
    getListData,
    addListData,
    editListData,
    deleteListData,
};