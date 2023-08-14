const { successResponse, errorResponse } = require('../utils/response');
const { validationResult } = require('express-validator');
const productService = require('../services/productService');


const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts(req);
        successResponse(res, 'All product successfully retrieved', products);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req);
        successResponse(res, `Product with id ${req.params.id} successfully retrieved`, product);
    } catch (error) {
        errorResponse(res, error.message, error.code);
    }
}

const createProduct = async (req, res) => {
    if (validationResult(req).isEmpty()) {
        try {
            const product = await productService.createProduct(req);
            successResponse(res, 'New product successfully added', product);
        } catch (error) {
            errorResponse(res, error.message);
        }
    } else {
        errorResponse(res, 'Validation failed', 422, validationResult(req).array());
    }
}

const updateProduct = async (req, res) => {
    if (validationResult(req).isEmpty()) {
        try {
            const product = await productService.updateProduct(req);
            successResponse(res, `Product with id ${req.params.id} successfully updated`, product);
        } catch (error) {
            errorResponse(res, error.message, error.code);
        }
    } else {
        errorResponse(res, 'Validation failed', 422, validationResult(req).array());
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req);
        successResponse(res, `Product with id ${req.params.id} successfully deleted`, product);
    } catch (error) {
        errorResponse(res, error.message, error.code);
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
