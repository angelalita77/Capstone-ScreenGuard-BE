
// ============================================
// MODELS - /models/Video.js
// This will have the model for storying video 
// information and the users tied to thoese videos
// ============================================

import mongoose from 'mongoose';


const videoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    thumbnail: [{
        type: String,
        required: true,
    }],
    channel: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        default: ''
    },
    childId: {
        type: mongoose.Schema.TypesObjectId,
        ref: 'User',
        required: true //Which child this video is approved for
    },
    parentId: {
        type: mongoose.Schema.TypesObjectId,
        ref: 'User',
        required: true //which parent approved
    },
    views: {
    type: Number,
    default: 0
  },
  lastWatched: {
    type: Date,
    default: null
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
}, {
    timestamp: true
});

// create index
videoSchema.index({
    title: 1,
    childId: 1
});

//Export
export default mongoose.model("videos", videoSchema);



