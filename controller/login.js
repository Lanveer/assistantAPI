// controllers/users/UserController.js

/*
* page  当前页数
* pagesize  每次返回的条数
* total 总条数
* */

const dbs = require('../config/query');
class loginControler {
    async doLogin(ctx, next) {
        let loginData = ctx.request.body;
        let user = loginData.user;
        let password = loginData.password;
        try {
            var sql = `select user,password from user where user = '${user}' and password= '${password}'`;
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
            let msg='';
            let code =0;
            let currentUser ='';
            if(result && result.length !==0){
                console.log('user is:', result[0].user)
                msg= '登录成功';
                code =200;
                currentUser=result[0].user
            }else{
                msg= '没有这个用户或者密码错误';
                code= 300
            }
            let res = {
                status:code,
                result:msg,
                data:currentUser
            };
            ctx.body = res;
        }
        catch (e) {
            console.log('err is:', e)
        }
    }
}
let login = new loginControler();
module.exports = {
    login,
};