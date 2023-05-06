import React from 'react'
import { Grid, CircularProgress } from "@mui/material";
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
    
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" sx={{justifyContent:{xs:"center",md:"start"}}} spacing={3}>
      {posts.map((post) => (
        <Grid
          sx={{ minWidth: "310px" }}
          key={post._id}
          item
          xs={12}
          sm={4}
          md={3}
        >
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts