import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import { createPost } from '../../actions/posts'

import useStyles from './Form.styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    })
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
    }

    const clear = () => {}

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}}`} onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">
                    Create a memory
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth onChange={(e) => setPostData({ ...postData, creator: e.target.value })} value={postData.creator} />
                <TextField name="title" variant="outlined" label="Title" fullWidth onChange={(e) => setPostData({ ...postData, title: e.target.value })} value={postData.title} />
                <TextField name="message" variant="outlined" label="Message" fullWidth onChange={(e) => setPostData({ ...postData, message: e.target.value })} value={postData.message} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth onChange={(e) => setPostData({ ...postData, tags: e.target.value })} value={postData.tags} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form
