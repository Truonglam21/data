const router=require('express-promise-router')();
const User = require('../controller/User');
router.route('/')
.get(User.getUser)
.post(User.PostUser)
router.route('/:id')
.put(User.updateUser)
.get(User.getUserID)
.delete(User.DeleteUser)
module.exports = router;