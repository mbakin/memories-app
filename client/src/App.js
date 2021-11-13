import React from "react";
import { Container, AppBar , Typography, Grid, Grow } from "@material-ui/core";
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from "./assets/memories.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center" color="inherit">Memories</Typography>
        <img src={memories} alt="memories" height="600"/>
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