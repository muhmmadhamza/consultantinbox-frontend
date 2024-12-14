// @mui
import { Stack, Paper, Button, OutlinedInput, IconButton } from "@mui/material";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addComment } from "../../../../store/slices/kanban";
// components
import MyAvatar from "../../../../component/MyAvatar";

import { CreateComment } from "../../../../services";
import show_Toast from "../../../../helpers/toast.helper";
import { useState } from "react";
// ----------------------------------------------------------------------

KanbanTaskCommentInput.propTypes = {
  card: PropTypes.object,
};

export default function KanbanTaskCommentInput({ card, setEditedCommentid }) {
  const [comment, setComment] = useState(""); // Local state to hold the comment text
  const dispatch = useDispatch();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (!comment) {
      show_Toast({
        status: false,
        message: "Comment is required",
      });
      return;
    }
    try {
      const response = await CreateComment({
        comment_val: comment.trim(),
        task_id: card.id,
      });
      if (response?.data?.status === "success") {
        dispatch(addComment(response?.data.response));
        setEditedCommentid(null);
        // Clear the comment input field
        setComment("");
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
    <Stack direction="row" spacing={2} sx={{ py: 3, px: 2.5 }}>
      <MyAvatar />

      <Paper variant="outlined" sx={{ p: 1, flexGrow: 1 }}>
        <OutlinedInput
          fullWidth
          multiline
          placeholder="Type a message"
          sx={{ "& fieldset": { display: "none" } }}
          value={comment}
          onChange={handleCommentChange}
        />

        <Stack direction="row" justifyContent="end" alignItems="center">
          <Button
            size="small"
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#3C4256 !important",

              color: "white !important",
              "&:hover": {
                backgroundColor: "white !important",
                color: "black !important",
                outline: "2px solid #3C4256",
                outlineOffset: "-2px",
              },
            }}
            onClick={handleCommentSubmit}
          >
            Comment
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
