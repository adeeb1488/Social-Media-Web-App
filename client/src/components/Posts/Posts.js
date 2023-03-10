import React from 'react'
import Post from './Post/Post.js'
import useStyles from './styles.js'
import { useSelector } from 'react-redux'
import {Grid, CircularProgress} from '@material-ui/core'
const Posts = ({currentID, setCurrentID}) => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()
  console.log("FORM POSTED!!!",posts)
  return (
!posts.length ?<CircularProgress />:(
  <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
    {
      posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post ={post} setCurrentID={setCurrentID} />
           </Grid>
      ))
    }
    
  </Grid>
)
    
  )
}

export default Posts