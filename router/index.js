const router = require('koa-router')();
// const listCtr = require('../controller/listCtl');
// const addlistCtr = require('../controller/addlistCtl');
// const listDetailControler = require('../controller/listDetailCtr');
// const editCtr = require('../controller/editCtr');
// const deleteCtr = require('../controller/deleteCtr');

// router.get('/api/list', listCtr.getList);
// router.post('/api/list', addlistCtr.addList);
// router.put('/api/list', editCtr.editList);
// router.delete('/api/list', deleteCtr.deleteList);
// router.get('/api/list-detail', listDetailControler.getDetail);

const login= require('../controller/login');
const search= require('../controller/search');
const list= require('../controller/listCtl');
const account_list= require('../controller/accountCtl');
const book_list= require('../controller/bookCtl');

/*
* login api
* user
* password
* */
router.post('/api/login', login.login.doLogin);


/*
* 搜索接口
* 接收一个标志来区分去查询哪张表
* 使用模糊查询
* */

router.post('/api/search', search.search.doSearch);


/*
* pwd system controller
* */
router.get('/api/list', list.getListData.getList);
router.post('/api/list', list.addListData.addList);
router.put('/api/list', list.editListData.editList);
router.delete('/api/list', list.deleteListData.deleteList);
router.get('/api/list-detail', list.detailListData.getDetail);

/*
* account system controller
* */

router.get('/api/accountlist', account_list.getListData.getCountList);
router.post('/api/accountlist', account_list.addListData.addCountList);
router.put('/api/accountlist', account_list.editListData.editCountList);
router.delete('/api/accountlist', account_list.deleteListData.deleteCountList);



/*
* book management system
*
* */

router.get('/api/book_list', book_list.getListData.getBooktList);



module.exports = router;
