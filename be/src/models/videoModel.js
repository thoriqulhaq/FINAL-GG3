const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    thumbnail: {
        type: String,
        required: [true, 'thumbnail is required']
    },
    embeddedUrl: {
        type: String,
        required: [true, 'embeddedUrl is required']
    },
}, {
    timestamps: true
})

videoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Video', videoSchema)