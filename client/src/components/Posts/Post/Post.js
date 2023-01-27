import React from 'react'
import useStyles from './styles.js'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import {useDispatch} from 'react-redux'
import { deletePost } from '../../../actions/posts.js';
const Post = ({post, setCurrentID}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.post_title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.posted_by}</Typography>
        <Typography variant = 'body2'>{moment(post.createdAt).from()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color:'white'}} size='small' 
        onClick={()=>{
          setCurrentID(post._id)
        }}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{post.post_tags.map((tag) =>`#${tag}`)}</Typography>
      </div>
      <Typography className = {classes.title} variant='h5' gutterBottom>{post.post_title}</Typography>
      <CardContent>
      <Typography  variant='h5' gutterBottom>{post.post_message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>{}}>
          <ThumbUpAltIcon fontSize='small' />
          Like
          {post.post_likes}
        </Button>
        <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize='small' />
          Delete
         
        </Button>
      </CardActions>
      
    </Card>
  )
}

export default Post