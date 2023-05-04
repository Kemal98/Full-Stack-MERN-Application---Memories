import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  // transition: theme.transitions.create("transform", {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img
              src={
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
            />
          </Avatar>
        }
        action={
          <div>
            <IconButton>
              <MoreVertIcon
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                onClick={() => {
                  setCurrentId(post._id);
                  handleClose();
                }}
              >
                <ListItemIcon sx={{ mr: "5px" }}>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Edit card</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(deletePost(post._id));
                  handleClose();
                }}
              >
                <ListItemIcon sx={{ mr: "5px" }}>
                  <HighlightOffIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Remove card</Typography>
              </MenuItem>
            </Menu>
          </div>
        }
        title={post.creator}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={post.selectedFile}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.title}
        </Typography>
      </CardContent>
      {/* // > // <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} */}
      <CardActions disableSpacing onClick={() => dispatch(likePost(post._id))}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ mr: "10px" }} />
        </IconButton>
        <Typography>Like {post.likeCount}</Typography>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ overflowY: "scroll", maxHeight: "10rem" }}>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>{post.message}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
