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

const list= require('../controller/listCtl');


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





module.exports = router;
