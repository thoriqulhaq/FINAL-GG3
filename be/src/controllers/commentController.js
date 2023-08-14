const { successResponse, errorResponse } = require('../utils/response');
const { validationResult } = require('express-validator');
const commentService = require('../services/commentService');

const getComments = async (req, res) => {
    try {
        const comments = await commentService.getComments(req);
        successResponse(res, 'All comment successfully retrieved', comments);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const getCommentById = async (req, res) => {
    try {
        const comment = await commentService.getCommentById(req);
        successResponse(res, `Comment with id ${req.params.id} successfully retrieved`, comment);
    } catch (error) {
        errorResponse(res, error.message, error.code);
    }
}

const createComment = async (req, res) => {
    if (validationResult(req).isEmpty()) {
        try {
            const comment = await commentService.createComment(req);
            successResponse(res, 'New comment successfully added', comment);
        } catch (error) {
            errorResponse(res, error.message);
        }
    } else {
        errorResponse(res, 'Validation failed', 422, validationResult(req).array());
    }
}

const updateComment = async (req, res) => {
    if (validationResult(req).isEmpty()) {
        try {
            const comment = await commentService.updateComment(req);
            successResponse(res, `Comment with id ${req.params.id} successfully updated`, comment);
        } catch (error) {
            errorResponse(res, error.message, error.code);
        }
    } else {
        errorResponse(res, 'Validation failed', 422, validationResult(req).array());
    }
}

const deleteComment = async (req, res) => {
    try {
        const comment = await commentService.deleteComment(req);
        successResponse(res, `Comment with id ${req.params.id} successfully deleted`, comment);
    } catch (error) {
        errorResponse(res, error.message, error.code);
    }
}

module.exports = {
    getComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
}