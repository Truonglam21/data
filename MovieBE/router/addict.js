const router=require('express-promise-router')();
const addict = require('../controller/Addict');
router.route('/')
.get(addict.getAddict)
.post(addict.PostAddict)
router.route('/:id')
.put(addict.updateAddict)
.get(addict.getAddictID)
.delete(addict.DeleteAddict)
module.exports = router;