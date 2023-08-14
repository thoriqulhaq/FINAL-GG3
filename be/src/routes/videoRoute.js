const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videoController')
const videoMiddleware = require('../middleware/videoMiddleware')

router.get('/', videoController.getVideos)
router.get('/:id', videoController.getVideoById)
router.post('/', videoMiddleware.validate(), videoController.createVideo)
router.put('/:id', videoMiddleware.validate(), videoController.updateVideo)
router.delete('/:id', videoController.deleteVideo)

module.exports = router