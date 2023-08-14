const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'videoId is required']
    },
    name: {
        type: String,
        required: [true, 'name is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    link: {
        type: String,
        required: [true, 'link is required']
    },
}, {
    timestamps: true
})

productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Product', productSchema)