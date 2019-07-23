// controllers/users/searchController.js

/*
* flag  查询哪张表
* name  模糊查询的参数
* res   返回值
* */

const fs = require('fs');
const formidable = require('koa-formidable'); // 图片处理
const bodyParser = require('koa-bodyparser');
const path = require('path'); // 图片路径
let mkdirs = (dirname, callback)=> {
    fs.exists(dirname, function(exists) {
        if (exists) {
            callback();
        } else {
            mkdirs(path.dirname(dirname), function() {
                fs.mkdir(dirname, callback);
            });
        }
    });
};



const dbs = require('../config/query');
class uploadControler {
    async doUpload(ctx, next) {
        let form = formidable.parse(ctx.request);
        let flag = ctx.query.flag;
        let id = ctx.query.id;
        form.encoding = 'utf-8';
        form.keepExtensions = true; //保留后缀
        mkdirs('upload/', (err)=>{
        });
        let imgPlay = new Promise((resolve, reject) => {
            form((opt, {fields, files})=> {
                let articleId = fields.articleId;
                let filename = files.file.name;
                let avatarName = Date.now() + '_' + filename;
                let readStream = fs.createReadStream(files.file.path);
                let uploadDir = 'upload/';
                let writeStream = fs.createWriteStream(uploadDir + avatarName);
                readStream.pipe(writeStream);
                // fs.rename(files.file.path, uploadDir + avatarName); //window报错了重命名
                resolve({
                    url: '/' + uploadDir + avatarName
                })
            })
        });
        let imageData = await imgPlay;
        console.log('imageData is:', imageData);
        try {
            var sql = `update book_list set cover='${imageData.url}' where id=${id}`;
            console.log('upload sql is:', sql)
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
let upload = new uploadControler();
module.exports = {
    upload,
};