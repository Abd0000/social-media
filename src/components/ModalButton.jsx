import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import {
  CalendarMonthOutlined,
  EmojiEmotionsRounded,
  Person2Rounded,
  PhotoAlbumRounded,
  VideoCallRounded,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const ModalButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Tooltip
        title="Add Post"
        sx={{ position: "fixed", left: "16px", bottom: "20px" }}
      >
        <Fab onClick={handleOpen} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        sx={{
          xs: { width: "95" },
        }}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} component={"form"}>
          <Typography
            textAlign={"center"}
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            create a post
          </Typography>

          <Stack mt={1} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{ width: "50px", height: "50px" }}
              src=".\images\PhotoRoom-20231020_155127.png"
            >
              A
            </Avatar>
            <Typography ml={2} variant="body1" color="inherit">
              Abdo
            </Typography>
          </Stack>

          <TextField
            fullWidth
            margin="normal"
            id="contained-multiline-static"
            variant="standard"
            multiline
            rows={3}
            placeholder="What's on your mind?"
          />

          <Stack spacing={1} direction={"row"}>
            <EmojiEmotionsRounded />
            <PhotoAlbumRounded />
            <VideoCallRounded />
            <Person2Rounded />
          </Stack>

          <ButtonGroup fullWidth sx={{ mt: 2 }} variant="contained">
            <Button sx={{ flexGrow: "1" }} type="submit">
              Post
            </Button>

            <IconButton>
              <CalendarMonthOutlined />
            </IconButton>
          </ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalButton;
