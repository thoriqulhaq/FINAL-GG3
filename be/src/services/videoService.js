const asyncHandler = require('express-async-handler')
const Video = require('../models/videoModel');

const getVideos = asyncHandler(async (req) => {
    const videos = await Video.paginate({}, {
        lean : true,
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        sort: { createdAt: -1 },
    });
    
    return videos;
})

const getVideoById = asyncHandler(async (req) => {
    const video = await Video.findById(req.params.id).lean();
    
    if (!video) {
        throw new Error('Video not found', 404);
    }
    
    return video;
})

const createVideo = asyncHandler(async (req) => {
    const video = await Video.create(req.body);
    
    return video;
})

const updateVideo = asyncHandler(async (req) => {  
    getVideoById(req);
    
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    
    return video;
})

const deleteVideo = asyncHandler(async (req) => {
    getVideoById(req);
    
    const video = await Video.findByIdAndDelete(req.params.id);
    
    return video;
})


module.exports = {
    getVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
}