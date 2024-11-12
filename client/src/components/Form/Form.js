import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Root, Paper, Form, FileInput, ButtonSubmit } from './styles'; // Import styled components
import FileBase from 'react-file-base64'; // Import FileBase properly

const FormComponent = () => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });

  const handleSubmit = () => {
    // Form submission logic
  };

  const clear = () => {
    // Clear form logic
  };

  return (
    <Root>
      <Paper>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Post your Progress!</Typography>
          <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" 
            fullWidth 
            value={postData.creator} 
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
          />
          <TextField 
            name="title" 
            variant="outlined" 
            label="Title" 
            fullWidth 
            value={postData.title} 
            onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
          />
          <TextField 
            name="message" 
            variant="outlined" 
            label="Message" 
            fullWidth 
            value={postData.message} 
            onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
          />
          <TextField 
            name="tags" 
            variant="outlined" 
            label="Tags" 
            fullWidth 
            value={postData.tags} 
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })} 
          />
          <FileInput>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
          </FileInput>
          <ButtonSubmit>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              type="submit" 
              fullWidth
            >
              Submit
            </Button>
          </ButtonSubmit>
          <Button 
            variant="contained" 
            color="secondary" 
            size="small" 
            onClick={clear} 
            fullWidth
          >
            Clear
          </Button>
        </Form>
      </Paper>
    </Root>
  );
};

export default FormComponent;
