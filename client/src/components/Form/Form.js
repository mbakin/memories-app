import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'


const Form = ({ currentId, setCurrentId}) => {

  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const post = useSelector((state) => currentId ? state.posts.find((p) => p.id === currentId) : null);
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(currentId) { 
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }

  }

  const handleClear = () => {
    
  }


  return (
    <h1>
      <Paper className={classes.paper}>
        <form autoComplete="false" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
          <TextField name="creator" label="Creator" variant="outlined" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="title" label="Title" variant="outlined" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" label="Message" variant="outlined" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={ ({base64}) => setPostData({ ...postData, selectedFile: base64 }) } />
          </div>
          <Button variant="contained" size="large" color="primary" type="submit" className={classes.buttonSubmit} fullWidth>Submit</Button>
          <Button variant="contained" size="small" color="secondary" type="submit" onClick={handleClear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </h1>
  )
}

export default Form
