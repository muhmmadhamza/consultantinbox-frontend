import PropTypes from "prop-types";
import { useState } from "react";

import { Draggable } from "react-beautiful-dnd";
// @mui
import { Paper, Typography, Box } from "@mui/material";
// components

import KanbanTaskDetails from "./KanbanTaskDetails";
import httpRequest from "../../../../axios/index";
import show_Toast from "../../../../helpers/toast.helper";
import { commentList } from "../../../../store/slices/kanban";
import { useDispatch } from "react-redux";

// ----------------------------------------------------------------------

KanbanTaskCard.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onDeleteTask: PropTypes.func,
};

export default function KanbanTaskCard({ card, onDeleteTask, index }) {
  const dispatch = useDispatch();
  const [editedCommentid, setEditedCommentid] = useState(null);

  const { title, id, status, priority } = card;

  const [openDetails, setOpenDetails] = useState(false);

  const [values, setValues] = useState({});

  const handleOpenDetails = () => {
    setOpenDetails(true);
    fetchCreateTaskData();
    fetchCommentList();
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const fetchCreateTaskData = async () => {
    try {
      const response = await httpRequest.get(`/api/tasks/edit/${id}`);
      const data = response?.data?.response;
      if (response?.data?.status === "success") {
        setValues(data);
        setEditedCommentid(null);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const fetchCommentList = async () => {
    try {
      const response = await httpRequest.get(`/api/comments/list/${id}`);
      if (response?.data?.status === "success") {
        dispatch(commentList(response?.data.response));
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Paper
            sx={{
              width: 1,
              color: `${priority ? "white" : "black"}`,
              backgroundColor: status
                ? "#68e35b"
                : `${
                    priority === 1
                      ? "#4791c9"
                      : priority === 2
                      ? "#e3c104"
                      : priority === 3
                      ? "#e0492b"
                      : "#FFFFFF"
                  }`,
              position: "relative",
              boxShadow: (theme) => theme.customShadows.z1,
              "&:hover": {
                boxShadow: (theme) => theme.customShadows.z16,
              },
            }}
          >
            <Box
              onClick={handleOpenDetails}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                padding: "8px 8px 8px 12px",
              }}
            >
              <Typography variant="body2">{title}</Typography>
            </Box>
          </Paper>

          <KanbanTaskDetails
            card={card}
            values={values}
            isOpen={openDetails}
            onClose={handleCloseDetails}
            onDeleteTask={() => onDeleteTask(card.id)}
            setEditedCommentid={setEditedCommentid}
            editedCommentid={editedCommentid}
          />
        </div>
      )}
    </Draggable>
  );
}
