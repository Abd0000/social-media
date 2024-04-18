import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const myPosts = [
  {
    letter: "A",
    color: "#FF0000",
    title: "Abdo",
    date: "September 14, 2016",
    imgLink:
      "https://images.pexels.com/photos/20937747/pexels-photo-20937747/free-photo-of-a-camera-and-a-glass-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    letter: "R",
    color: "#FF0000",
    title: "Rana",
    date: "September 13, 2012",
    imgLink:
      "https://images.pexels.com/photos/20687375/pexels-photo-20687375/free-photo-of-woman-wearing-white-sweater-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    letter: "M",
    color: "#FF0000",
    title: "Mohamed",
    date: "September 14, 2016",
    imgLink:
      "https://images.pexels.com/photos/16168169/pexels-photo-16168169/free-photo-of-woman-in-off-shouder-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    letter: "S",
    color: "#FF0000",
    title: "Sara",
    date: "September 14, 2016",
    imgLink:
      "https://images.pexels.com/photos/15045087/pexels-photo-15045087/free-photo-of-woman-in-hat-sitting-in-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Posts = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItem = () => {
    return (
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
      </Menu>
    );
  };

  return (
    <Box>
      {myPosts.map((post) => {
        return (
          <Card sx={{ maxWidth: 380, mx: "auto", my: "40px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: post.color }} aria-label="recipe">
                  {post.letter}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon onClick={handleClick} />
                  {menuItem()}
                </IconButton>
              }
              title={post.title}
              subheader={post.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={post.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite color="error" />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <div style={{flexGrow:'1'}}></div>
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Posts;
