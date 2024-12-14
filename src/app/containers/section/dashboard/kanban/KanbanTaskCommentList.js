import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// @mui
import {
  Stack,
  Avatar,
  Typography,
  Link,
  Box,
  Button,
  OutlinedInput,
  Paper,
} from "@mui/material";
// utils
import { fToNow } from "../../../../utils/formatTime";
// components

import { API_BASE_URL } from "../../../../constant/apiEndPoints";
import KanbanConfirmDialog from "./KanbanConfirmDialog";
import useToggle from "../../../../hooks/useToggle";

import show_Toast from "../../../../helpers/toast.helper";
import httpRequest from "../../../../axios/index";
import { deleteComment, updateComment } from "../../../../store/slices/kanban";
import { useState } from "react";
import { UpdateComment } from "../../../../services";
import { useSelector } from "react-redux";
// ----------------------------------------------------------------------

KanbanTaskCommentList.propTypes = {
  comments: PropTypes.object,
  editedCommentid: PropTypes.string,
  setEditedCommentid: PropTypes.func,
};

export default function KanbanTaskCommentList({
  comments,
  editedCommentid,
  setEditedCommentid,
}) {
  const { user = {} } = useSelector((state) => state.login);
  const [editedComment, setEditedComment] = useState(comments.comment_val);
  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();
  const dispatch = useDispatch();

  const handleCommentChange = (event) => {
    setEditedComment(event.target.value);
  };

  const handleEditComment = async (id) => {
    if (editedCommentid === id) {
      // If the clicked comment is already being edited, close the editing state
      setEditedCommentid(null);
    } else {
      try {
        const response = await httpRequest.get(
          `/api/comments/edit/${comments.id}`
        );

        if (response?.data?.status === "success") {
          setEditedComment(response.data.response.comment_val);
          setEditedCommentid(id); // Set the editing state to the clicked comment id
        }
      } catch (error) {
        show_Toast({
          status: false,
          message: error?.response?.data?.message || "Something went wrong",
        });
      }
    }
  };

  const handleDeleteComments = async () => {
    try {
      const response = await httpRequest.delete(
        `/api/comments/delete/${comments.id}`
      );
      if (response?.data?.status === "success") {
        dispatch(deleteComment(comments.id));
        onCloseConfirm();
      }
      show_Toast({
        status: true,
        message: response?.data?.message || "Success",
      });
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleUpdateSubmit = async () => {
    if (!editedComment) {
      show_Toast({
        status: false,
        message: "Comment is required",
      });
      return;
    }
    try {
      const response = await UpdateComment({
        comment_val: editedComment.trim(),
        id: comments.id,
      });
      if (response?.data?.status === "success") {
        dispatch(updateComment(response?.data.response));
        // Clear the comment input field
        setEditedCommentid(null);
      }
      show_Toast({
        status: true,
        message: response?.data?.message || "Success",
      });
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };
  return (
    <>
      <Stack spacing={3} sx={{ py: 3, px: 2.5, bgcolor: "background.neutral" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt={comments?.User?.name}
            src={`${API_BASE_URL}/${comments?.User?.imageUrl}`}
            sx={{ width: 32, height: 32 }}
          />
          <div>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="subtitle2">
                {comments?.User?.name}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {fToNow(comments?.createdAt)}
              </Typography>
            </Stack>
            <Box
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                padding: "8px 8px 8px 12px",
                minWidth: "24.5rem",
                width: 1,
                position: "relative",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 1px 1px #091e4240,0 0 1px #091e424f",
                maxWidth: "100%",
                margin: "4px 2px 4px 0",
              }}
            >
              {editedCommentid && editedCommentid === comments.id ? (
                <>
                  <OutlinedInput
                    fullWidth
                    multiline
                    placeholder="Type a message"
                    sx={{ "& fieldset": { display: "none" } }}
                    value={editedComment}
                    onChange={handleCommentChange}
                  />

                  <Stack
                    direction="row"
                    justifyContent="end"
                    alignItems="center"
                  >
                    <Button
                      size="small"
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#3C4256 !important",
                        margin: "0px 3px",
                        fontSize: "10px",
                        color: "white !important",
                        "&:hover": {
                          backgroundColor: "white !important",
                          color: "black !important",
                          outline: "1px solid #3C4256",
                          outlineOffset: "-1px",
                        },
                      }}
                      onClick={handleUpdateSubmit}
                    >
                      Save
                    </Button>
                    <Button
                      size="small"
                      type="submit"
                      variant="contained"
                      sx={{
                        fontSize: "10px",
                        color: "#3C4256 !important",
                        backgroundColor: "transparent",
                        outline: "1px solid #3C4256",
                        outlineOffset: "-1px",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                      onClick={() => handleEditComment(comments.id)}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </>
              ) : (
                <Typography variant="body2">{comments?.comment_val}</Typography>
              )}
            </Box>
            {comments?.User?.id === user?.id && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  AlignItems: "center",
                  marginTop: "8px",
                  marginLeft: "5px",
                }}
              >
                {editedCommentid === comments.id ? null : (
                  <>
                    <Link
                      component="button"
                      variant="body2"
                      color="#44546f"
                      sx={{
                        marginRight: "8px",
                        fontSize: "12px",
                        "&:hover": {
                          color: "inherit",
                        },
                      }}
                      onClick={() => handleEditComment(comments.id)}
                    >
                      Edit
                    </Link>
                    <Link
                      component="button"
                      variant="body2"
                      color="#44546f"
                      sx={{
                        fontSize: "12px",
                        "&:hover": {
                          color: "inherit",
                        },
                      }}
                      onClick={onOpenConfirm}
                    >
                      Delete
                    </Link>

                    <KanbanConfirmDialog
                      open={openConfirm}
                      onClose={onCloseConfirm}
                      title={
                        <Typography>
                          Deleting a comment is forever. There is no undo.
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
                          <Button
                            variant="contained"
                            color="error"
                            onClick={handleDeleteComments}
                          >
                            Delete
                          </Button>
                        </>
                      }
                    />
                  </>
                )}
              </Box>
            )}
          </div>
        </Stack>
      </Stack>
    </>
  );
}
