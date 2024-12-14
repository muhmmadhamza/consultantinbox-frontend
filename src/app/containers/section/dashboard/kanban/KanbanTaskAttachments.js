import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, IconButton, Button, Typography } from "@mui/material";
// components
import Image from "../../../../component/Image";
import Iconify from "../../../../component/iconify";
import { varFade } from "../../../../component/animate";
import show_Toast from "../../../../helpers/toast.helper";
import React from "react";
import { API_BASE_URL } from "../../../../constant/apiEndPoints";
import httpRequest from "../../../../axios/index";
import KanbanConfirmDialog from "./KanbanConfirmDialog";
import useToggle from "../../../../hooks/useToggle";
import PermissionButton from "../../../../helpers/PermissionButton";

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme }) => ({
  width: 64,
  height: 64,
  fontSize: 24,
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  border: `dashed 1px ${theme.palette.divider}`,
  "&:hover": { opacity: 0.72 },
}));

// ----------------------------------------------------------------------

KanbanTaskAttachments.propTypes = {
  setFiles: PropTypes.func, // Assuming setFiles is a function
  files: PropTypes.array,
  values: PropTypes.object,
};

export default function KanbanTaskAttachments({ setFiles, files, values }) {
  const handleRemove = async (file) => {
    try {
      // Check if the file has an 'id'
      if (file && file.id) {
        // Make a DELETE request to the API to delete the file by its ID
        const response = await httpRequest.delete(
          `/api/file/delete/${file.id}`
        );
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }

    // Filter out the removed file from the state
    const filteredItems = files.filter((_file) => _file !== file);

    if (typeof file === "string") {
      console.log("REMOVE file typeof === string");
    }

    setFiles(filteredItems);
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      try {
        const file = acceptedFiles[0];

        const maxSize = 24 * 1024 * 1024; // 24MB
        const allowedExtensions = [".jpg", ".jpeg", ".png"];

        if (!file) {
          throw new Error("No image selected.");
        }

        if (file.size > maxSize) {
          throw new Error("Image size Must Be Lesser than 24 MB");
        }

        const fileExtension = file.name.toLowerCase();

        if (
          !allowedExtensions.some((extension) =>
            fileExtension.endsWith(extension)
          )
        ) {
          throw new Error(
            "Invalid file extension. Allowed extensions are .jpg, .jpeg, and .png."
          );
        }

        if (file) {
          const newFiles = acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          );

          setFiles([...files, ...newFiles]);
        }
      } catch (error) {
        show_Toast({
          status: false,
          message: error?.message || "Something went wrong",
        });
      }
    },
    [files]
  );
  React.useEffect(() => {
    setFiles(values?.task?.Files || []);
  }, [values]);

  return (
    <>
      {files.map((file, index) => {
        return (
          <UploadFilePreview
            key={index}
            file={file}
            onRemove={() => handleRemove(file)}
          />
        );
      })}
      <PermissionButton modulePermissionName="edit" moduleName="tasks">
        <UploadFile onDrop={handleDrop} />
      </PermissionButton>
    </>
  );
}

// ----------------------------------------------------------------------

UploadFilePreview.propTypes = {
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onRemove: PropTypes.func,
};

function UploadFilePreview({ file, onRemove }) {
  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  return (
    <Box
      {...varFade().inRight}
      sx={{
        p: 0,
        m: 0.5,
        width: 64,
        height: 64,
        borderRadius: 1.25,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {file?.preview ? (
        <Image
          alt="preview"
          src={file?.preview}
          sx={{
            height: 1,
            position: "absolute",
            border: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        />
      ) : (
        <Image
          alt="preview"
          src={`${API_BASE_URL}/${file?.file_name}`}
          sx={{
            height: 1,
            position: "absolute",
            border: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        />
      )}
      <PermissionButton modulePermissionName="delete" moduleName="tasks">
        <Box sx={{ top: 6, right: 6, position: "absolute" }}>
          <IconButton
            onClick={onOpenConfirm}
            size="small"
            sx={{
              p: "2px",
              color: "common.white",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
              },
            }}
          >
            <Iconify icon={"eva:close-fill"} />
          </IconButton>
          <KanbanConfirmDialog
            open={openConfirm}
            onClose={onCloseConfirm}
            title={
              <Typography>
                Deleting a Attachment is forever. There is no undo.
              </Typography>
            }
            actions={
              <>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={onCloseConfirm}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="error" onClick={onRemove}>
                  Delete
                </Button>
              </>
            }
          />
        </Box>
      </PermissionButton>
    </Box>
  );
}

// ----------------------------------------------------------------------

function UploadFile({ ...other }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...other,
  });

  return (
    <DropZoneStyle
      {...getRootProps()}
      sx={{
        ...(isDragActive && { opacity: 0.72 }),
      }}
    >
      <input {...getInputProps()} />

      <Iconify icon="eva:plus-fill" sx={{ color: "text.disabled" }} />
    </DropZoneStyle>
  );
}
