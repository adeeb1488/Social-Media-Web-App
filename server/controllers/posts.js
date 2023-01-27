import mongoose from 'mongoose'
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

export const updatePost = async(req,res) =>{
    const{ id: _id } = req.params;
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send("The ID does not exist.")
        
    }
    const updatedPost = await MessagePost.findByIdAndUpdate(_id, {...post,_id}, {new:true})

    res.json(updatedPost)
}

export const deletePost = async(req,res) =>{
    const { id } = req.params;
    console.log("DELETE!!!")
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send("The ID does not exist.")
        
    }
    await MessagePost.findByIdAndRemove(id)
    res.json({message:"Post deleted successfully"})
}