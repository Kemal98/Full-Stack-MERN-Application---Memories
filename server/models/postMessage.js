import mongoose from "mongoose";

const postShema = mongoose.Schema({
    title:String,
    details:String,
    creator:String,
    check:Boolean,
    tags:[String],
    selectedFile:String,
    likeCount: {
        type:Number,
        default:0
    },
    createdAd: {
        type:Date,
        default:new Date()
    }
})


const PostMessage = mongoose.model('PostMessage', postShema)

export default PostMessage