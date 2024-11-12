import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material';

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
        <PostsContainer>
            <PostsTitle>POSTS</PostsTitle>
            {/* Add logic to display posts */}
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </PostsContainer>
    );
}

export default Posts;
