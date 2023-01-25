import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    post_title: String,
    post_message:String,
    posted_by:String,
    post_tags:[String],
    selectedFile:String,
    post_likes: {
        type:Number,
        default:0,
       

    },
    createdAt:{
        type: Date,
        default: new Date()
    }

})

const MessagePost = mongoose.model('MessagePost', postSchema)

export default MessagePost;