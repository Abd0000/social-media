import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadUseWidget = ({ handleUploadSuccess }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    // @ts-ignore
    cloudinaryRef.current = window.cloudinary;
    // @ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dutzecy9w",
        uploadPreset: "csu4bfan",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          // Handle successful upload
          const imageUrl = result.info.secure_url;
          handleUploadSuccess(imageUrl);
        } else {
          console.error("Error uploading image:", error);
        }
      }
    );
  }, [handleUploadSuccess]);

  const handleOpenWidget = () => {
    if (widgetRef.current) {
      // @ts-ignore
      widgetRef.current.open();
    }
  };

  return (
    <Button
      onClick={handleOpenWidget}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<AddAPhotoOutlinedIcon />}
    >
      <VisuallyHiddenInput />
    </Button>
  );
};

export default UploadUseWidget;
