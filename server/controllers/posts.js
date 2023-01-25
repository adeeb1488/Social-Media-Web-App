import MessagePost from '../models/postMessage.js'

export const getPosts = async (req,res)=>{
    try{
        //fetching all posts currently in the Database
        const allMessages = await MessagePost.find()
       
        res.status(200).json(allMessages)
    }
    catch(err)
    {
        res.status(404).json({message: err.message})
    }
    }

export const createPost = async(req,res)=>{
    //creating a post 
    const post_content = req.body
    const newPost = new MessagePost(post_content)
    try{
       await newPost.save()
        
       res.status(201).json(newPost)
    }
    catch(err){
        res.status(409).json({message:err.message})

    }
    }