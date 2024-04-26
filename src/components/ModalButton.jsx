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
import UploadUseWidget from "./UploadUseWidget";
import {
  EmojiEmotionsRounded,
  Person2Rounded,
  PhotoAlbumRounded,
  VideoCallRounded,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useForm } from "react-hook-form";

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

const getRandomColor = () => {
  // Generate a random hexadecimal color code
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getRandomName = () => {
  const names = [
    "John",
    "Jane",
    "Michael",
    "Emily",
    "William",
    "Sophia",
    "James",
    "Olivia",
    "Daniel",
    "Ava",
  ]; // Add more names as needed
  let name = names[Math.floor(Math.random() * names.length)];
  let firstLetter = name[0].toUpperCase();

  return { name, firstLetter };
};

const ModalButton = ({ handlePostUpdate }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()
  const handleUploadSuccess = (imageUrl) => {
    // Set the value of imgLink field using setValue
    setValue("imgLink", imageUrl);
  };

  const onSubmit = ({ content, imgLink }) => {
    const { name, firstLetter } = getRandomName();
    const data = {
      imgLink:
        imgLink ||
        "https://img.freepik.com/vetores-premium/new-post-neon-signs-estilo-de-texto_118419-1349.jpg?w=740",
      content: content,
      letter: firstLetter,
      title: name,
      date: getCurrentDate(),
      color: getRandomColor(),
    };
    fetch("http://localhost:3500/mydata", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      reset();
      handlePostUpdate();
      handleClose();
    });
    console.log(data);
  };

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
        <Box sx={style} onSubmit={handleSubmit(onSubmit)} component={"form"}>
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
            {...register("content", {
              required: { value: true, message: "content is required" },
            })}
            error={Boolean(errors.content)}
            helperText={errors.content?.message.toString()}
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
            <UploadUseWidget handleUploadSuccess={handleUploadSuccess} />
          </ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalButton;
