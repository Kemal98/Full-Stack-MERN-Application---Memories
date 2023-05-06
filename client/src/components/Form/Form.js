import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const Form = ({ currentId, setCurrentId, open }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    details:"",
    check: false,
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      details: "",
      tags: "",
      selectedFile: "",
    });
  };
  const [displayFileBase, setDisplayFileBase] = useState(false);

  const handleAddPhotoClick = () => {
    setDisplayFileBase(true);
  };

  const handleFileBaseDone = ({ base64 }) => {
    setPostData({ ...postData, selectedFile: base64 });
    setDisplayFileBase(false);
  };
  return (
    <Paper sx={{ padding: "10px" }}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {open ? (
            <>
              <Typography variant="h6" fontFamily="Montserrat">
                {currentId ? "Editing" : "Creating"} memory{" "}
              </Typography>
              <TextField
                name="creator"
                variant="outlined"
                label="Creator"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "20px",
                  },
                }}
                fullWidth
                value={postData.creator}
                onChange={(e) =>
                  setPostData({ ...postData, creator: e.target.value })
                }
              />
              <TextField
                name="title"
                variant="outlined"
                label="Title"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "20px",
                  },
                }}
                fullWidth
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />{" "}
              <TextField
                name="details"
                variant="outlined"
                label="Details location"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "20px",
                  },
                }}
                fullWidth
                multiline
                rows={4}
                value={postData.details}
                onChange={(e) =>
                  setPostData({ ...postData, details: e.target.value })
                }
              />
              <div>
                {!displayFileBase && (
                  <Button
                    variant="outlined"
                    size="large"
                    type="submit"
                    fullWidth
                    onClick={handleAddPhotoClick}
                    endIcon={<AddAPhotoIcon />}
                  >
                    Add Photo
                  </Button>
                )}
                {displayFileBase && (
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={handleFileBaseDone}
                  />
                )}
              </div>
            </>
          ) : (
            <Box sx={{ my: "5rem" }}>
              <Typography
                fontFamily="Montserrat"
                sx={{
                  transform: "rotate(90deg)",
                  my: "5rem",
                }}
                variant="h6"
              >
                Create your memory bank
              </Typography>
            </Box>
          )}

          {open ? (
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Button
                variant="outlined"
                color="primary"
                size="large"
                type="submit"
                disabled={
                  !postData.creator || !postData.title || !postData.details
                }
                fullWidth
              >
                Add Memories
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => clear()}
                fullWidth
                disabled={
                  !postData.creator || !postData.title || !postData.details
                }
              >
                Clear
              </Button>
            </Stack>
          ) : (
            <>
              <AddIcon sx={{ mt: "4px" }} />
              <ClearIcon />
            </>
          )}
        </Stack>
      </form>
    </Paper>
  );
};

export default Form;
