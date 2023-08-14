const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const productMiddleware = require('../middleware/productMiddleware')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)
router.post('/', productMiddleware.validate(), productController.createProduct)
router.put('/:id', productMiddleware.validate(), productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router