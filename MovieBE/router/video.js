const router=require('express-promise-router')();
const Video=require('../controller/video')
const upload=require('../controller/upload');
const loadimage=require('../loadimage');
router.route('/')
.get(Video.getVideo)
.post(Video.addVideo)
router.route('/:id')
.delete(Video.deleteVideo)
.put(Video.updateVideo)
.get(Video.getVideoID)
router.route('/upload')
.post(loadimage,Video.uploadFile)
module.exports=router