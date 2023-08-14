const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController')
const commentMiddleware = require('../middleware/commentMiddleware')

router.get('/', commentController.getComments)
router.get('/:id', commentController.getCommentById)
router.post('/', commentMiddleware.validate(), commentController.createComment)
router.put('/:id', commentMiddleware.validate(), commentController.updateComment)
router.delete('/:id', commentController.deleteComment)

module.exports = router