import React,{useState} from 'react'
import  {TextField, Button, Typography, Paper} from '@material-ui/core'
import useStyles from './styles.js'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import { createPost } from '../../actions/posts.js'

const Form = () => {
  const [postData, setPostData] = useState({
   posted_by:'', post_title:'',post_message:'',post_tags:'',selectedFile:''
  })
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleSubmit =(e) =>{
    e.preventDefault()
    dispatch(createPost(postData))
  }
  const clear =() =>{

  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    <Typography variant='h6'>Creating a Post</Typography>
    <TextField name='creator' variant='outlined' label = "Creator" fullWidth value={postData.posted_by} onChange={(e) =>setPostData({...postData,posted_by:e.target.value})}/>
    <TextField name='title' variant='outlined' label = "Title" fullWidth value={postData.post_title} onChange={(e) =>setPostData({...postData,post_title:e.target.value})}/>
    <TextField name='message' variant='outlined' label = "Message" fullWidth value={postData.post_message} onChange={(e) =>setPostData({...postData,post_message:e.target.value})}/>
    <TextField name='tags' variant='outlined' label = "Tags" fullWidth value={postData.post_tags} onChange={(e) =>setPostData({...postData,post_tags:e.target.value})}/>
    <div className={classes.fileInput}>
    <FileBase
    type="file"
    multiple = {false}
    onDone ={(base64)=> setPostData({...postData,selectedFile:base64})}
    />
    </div>
    <Button className={classes.buttonSubmit} variant='contained' color="primary" size="large" type="submit" fullWidth >Submit</Button>
    <Button variant='contained' color="secondary" size="small" onClick ={clear}fullWidth >Clear</Button>
    </form>
    </Paper>
  )
}

export default Form
