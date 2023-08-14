const { successResponse, errorResponse } = require('../utils/response');
const { validationResult } = require('express-validator');
const videoService = require('../services/videoService');

const getVideos = async (req, res) => {
    try {
        const videos = await videoService.getVideos(req);
        successResponse(res, 'All video successfully retrieved', videos);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

const getVideoById = async (req, res) => {
    try {
        const video = await videoService.getVideoById(req);
        successResponse(res, `Video with id ${req.params.id} successfully retrieved`, video);
    } catch (error) {
        errorResponse(res, error.message, error.code);
    }
}

const createVideo = async (req, res) => {
    if (validationResult(req).isEmpty()) {
        try {
            const video = await videoService.createVideo(req);
            successResponse(res, 'New video successfully added', video);
        } catch (error) {
            errorResponse(res, error.message);
        }
    } else {
        errorResponse(res, 'Validation failed', 422, validationResult(req).array());
    }
}

const updateVideo = async (req, res) => {
    if (validationResult(req).isEmpty()) {
        try {
            const video = await videoService.updateVideo(req);
            successResponse(res, `Video with id ${req.params.id} successfully updated`, video);
        } catch (error) {
            errorResponse(res, error.message, error.code);
        }
    } else {
        errorResponse(res, 'Validation failed', 422, validationResult(req).array());
    }
}

const deleteVideo = async (req, res) => {
    try {
        const video = await videoService.deleteVideo(req);
        successResponse(res, `Video with id ${req.params.id} successfully deleted`, video);
    } catch (error) {
        errorResponse(res, error.message, error.code);
    }
}

module.exports = {
    getVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
}