import React, { useState, useEffect } from 'react';
//import components for more easier styling 
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//import the hooks from Redux
import { useDispatch } from 'react-redux';
//import actions
import { getPosts } from './actions/posts'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/icon .png';
import useStyles from './styles'

export default function App() {
    //set the state in parent component
  const [currentId, setCurrentId] = useState(null);
  //class of styles
  const classes = useStyles();
  //use the dispatch hook --redux
  const dispatch = useDispatch();
  //use the Effect hook to dispatch actions--react
  useEffect(() => {
    dispatch(getPosts());
    //after edit the post, the currentId will change to null--from clear function in Form
  }, [currentId, dispatch])

  return (
    <Container maxWidth='lg'>
        {/* insert styles with classes */}
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height='60' />
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        {/* pass the state to child as props */}
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* pass the state to child as props */}
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>

        </Grow>
    </Container>
  )
}

