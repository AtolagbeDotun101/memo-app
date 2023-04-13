const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: string,
    message: string,
    creator: string,
    tags: { string },
    selectedFile: string,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const postMessage = mongoose.model('PostMessage', postSchema)

module.exports = postMessage;