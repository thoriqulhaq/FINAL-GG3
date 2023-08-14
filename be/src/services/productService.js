const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel');

const getProducts = asyncHandler(async (req) => {
    const filters = {};
    if (req.query.videoId) {
        filters.videoId = req.query.videoId;
    }
    
    const products = await Product.paginate({...filters}, {
        lean : true,
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        sort: { createdAt: -1 },
    });
    
    return products;
})

const getProductById = asyncHandler(async (req) => {
    const product = await Product.findById(req.params.id).lean();
    
    if (!product) {
        throw new Error('Product not found', 404);
    }
    
    return product;
})

const createProduct = asyncHandler(async (req) => {
    const product = await Product.create(req.body);
    
    return product;
})

const updateProduct = asyncHandler(async (req) => {
    getProductById(req);
    
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    
    return product;
})

const deleteProduct = asyncHandler(async (req) => {
    getProductById(req);
    
    const product = await Product.findByIdAndDelete(req.params.id);
    
    return product;
    
})


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}