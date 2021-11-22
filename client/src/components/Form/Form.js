import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { createPost } from '../../actions/posts'

const Form = () => {

  const [postData, setPostData] = useState({
    title: '',
    creator: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const classes = useStyles();

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost(postData))
  }

  const handleClear = () => {

 setPostData({
      title: '',
      creator: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }


  return (
    <h1>
      <Paper className={classes.paper}>
        <form autoComplete="false" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Creator a Memory</Typography>
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
