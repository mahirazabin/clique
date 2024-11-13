import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Typography, Button, CardContent } from '@mui/material'; // Add missing imports
import moment from 'moment';
import {
  StyledCard,
  StyledCardMedia,
  Overlay,
  Overlay2,
  Details,
  StyledTitle,
  StyledCardActions,
} from './styles'; // Import styled components

const Post = ({ post }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={post.selectedFile} title={post.title} />
      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Overlay>
      <Overlay2>
        <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Overlay2>
      <Details>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Details>
      <CardContent>
        <StyledTitle variant="h5" gutterBottom>{post.message}</StyledTitle>
      </CardContent>
      <StyledCardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          <span style={{ marginLeft: '8px' }}>{post.likeCount}</span> 
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
