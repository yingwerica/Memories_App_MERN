import React from 'react'
               //the loading spinner
import { Grid, CircularProgress } from '@material-ui/core';
//import the hook
import { useSelector } from 'react-redux';

import Post from './Post/Post'

import useStyles from './styles'

export default function Posts({ setCurrentId }) {
  const posts = useSelector((store) => store.posts)
  const classes = useStyles();
  console.log(posts);
  return (
    !posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
                                {/* pass the props one step deeper */}
              <Post post={post} setCurrentId={setCurrentId}/>
            </Grid>
          ))}

        </Grid>
    )
    
  )
}
