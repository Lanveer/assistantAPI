const router = require('koa-router')();
const listCtr = require('../controller/listCtl');
const addlistCtr = require('../controller/addlistCtl');
const listDetailControler = require('../controller/listDetailCtr');
const editCtr = require('../controller/editCtr');

router.get('/api/list', listCtr.getList);
router.post('/api/list', addlistCtr.addList);
router.get('/api/list-detail', listDetailControler.getDetail);
router.put('/api/list', editCtr.editList);
router.delete('/api/list', editCtr.editList);
module.exports = router;
