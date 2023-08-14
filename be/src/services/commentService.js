const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel');

const getComments = asyncHandler(async (req) => {
    const filters = {};
    if (req.query.videoId) {
        filters.videoId = req.query.videoId;
    }
    
    const comments = await Comment.paginate({...filters}, {
        lean : true,
        page: req.query.page || 1,
        limit: req.query.limit || 10,
    });
    
    return comments;
})

const getCommentById = asyncHandler(async (req) => {
    const comment = await Comment.findById(req.params.id).lean();
    
    if (!comment) {
        throw new Error('Comment not found', 404);
    }
    
    return comment;
})

const createComment = asyncHandler(async (req) => {
    const comment = await Comment.create(req.body);
    
    return comment;
})

const updateComment = asyncHandler(async (req) => {
    getCommentById(req);
    
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    
    return comment;
})

const deleteComment = asyncHandler(async (req) => {
    getCommentById(req);
    
    const comment = await Comment.findByIdAndDelete(req.params.id);
    
    return comment;  
})

module.exports = {
    getComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
}
