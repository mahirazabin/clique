import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { styled, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Styled component for the grid container
const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: theme.spacing(2),
}));

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <GridContainer container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </GridContainer>
    )
  );
};

export default Posts;
