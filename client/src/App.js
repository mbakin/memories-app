import React, { useEffect } from "react";
import { Container, AppBar , Typography, Grid, Grow } from "@material-ui/core";
import { useDispatch} from "react-redux";

import {getPosts} from "./actions/posts";

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from "./assets/memories.png";
import useStyles from './styles'

const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center" color="inherit">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} md={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;