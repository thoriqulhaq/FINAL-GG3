const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const commentSchema = mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'videoId is required']
    },
    username: {
        type: String,
        required: [true, 'username is required']
    },
    message: {
        type: String,
        required: [true, 'message is required']
    },
}, {
    timestamps: true
})

commentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Comment', commentSchema)