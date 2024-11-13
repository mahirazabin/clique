import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material';
import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 


// Styled components
const PostsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px', // Add spacing between the posts
});

const PostsTitle = styled('h1')({
  marginBottom: '20px',
});

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
          <Grid className= {classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                  <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} />
                  </Grid>
              ))}
          </Grid>
        )
    );
}

export default Posts;
