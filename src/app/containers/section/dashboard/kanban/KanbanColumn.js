import PropTypes from "prop-types";
import { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
// @mui
import { Paper, Stack, Button } from "@mui/material";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  deleteColumn,
  updateColumn,
  addTask,
  deleteTask,
} from "../../../../store/slices/kanban";
// components
import Iconify from "../../../../component/iconify";

import KanbanAddTask from "./KanbanTaskAdd";
import KanbanTaskCard from "./KanbanTaskCard";
import KanbanColumnToolBar from "./KanbanColumnToolBar";

import show_Toast from "../../../../helpers/toast.helper";
import httpRequest from "../../../../axios/index";
import { CreateTask, UpdateColumns } from "../../../../services";
import PermissionButton from "../../../../helpers/PermissionButton";
// ----------------------------------------------------------------------

KanbanColumn.propTypes = {
  column: PropTypes.object,
  index: PropTypes.number,
  project_id: PropTypes.string,
};

export default function KanbanColumn({ column, index, project_id }) {
  const dispatch = useDispatch();

  const { board } = useSelector((state) => state.kanban);

  const [open, setOpen] = useState(false);

  const { name, cardIds, id } = column;

  const handleOpenAddTask = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseAddTask = () => {
    setOpen(false);
  };

  const handleDeleteTask = async (cardId) => {
    try {
      const response = await httpRequest.delete(`/api/tasks/delete/${cardId}`);
      if (response?.data?.status === "success") {
        dispatch(deleteTask({ cardId, columnId: id }));
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

  const handleUpdateColumn = async (newName) => {
    try {
      if (newName !== name) {
        const response = await UpdateColumns({ id, name: newName });
        if (response?.data?.status === "success") {
          dispatch(updateColumn({ ...column, name: newName }));
        }
        show_Toast({
          status: true,
          message: response?.data?.message || "Success",
        });
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleDeleteColumn = async () => {
    try {
      const response = await httpRequest.delete(`/api/columns/delete/${id}`);
      if (response?.data?.status === "success") {
        dispatch(deleteColumn(id));
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

  const handleAddTask = async (task) => {
    try {
      const response = await CreateTask({
        column_id: id,
        project_id: project_id,
        ...task,
      });

      if (response?.data?.status === "success") {
        dispatch(addTask(response.data.response));
        handleCloseAddTask();
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
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          variant="outlined"
          sx={{ padding: "14px 8px", bgcolor: "#f1f2f4 !important" }}
        >
          <Stack spacing={2} {...provided.dragHandleProps}>
            <KanbanColumnToolBar
              columnName={name}
              onDelete={handleDeleteColumn}
              onUpdate={handleUpdateColumn}
            />
            <PermissionButton modulePermissionName="view" moduleName="tasks">
              <Droppable droppableId={id} type="task">
                {(provided) => (
                  <Stack
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    spacing={1}
                    width={280}
                  >
                    {cardIds.map((cardId, index) => (
                      <KanbanTaskCard
                        key={cardId}
                        onDeleteTask={handleDeleteTask}
                        card={board?.cards[cardId]}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </Stack>
                )}
              </Droppable>

              <Stack spacing={1}>
                {open && (
                  <KanbanAddTask
                    onAddTask={handleAddTask}
                    onCloseAddTask={handleCloseAddTask}
                    columnId={id}
                  />
                )}

                <PermissionButton modulePermissionName="add" moduleName="tasks">
                  <Button
                    fullWidth
                    size="large"
                    color="inherit"
                    startIcon={
                      <Iconify icon={"eva:plus-fill"} width={20} height={20} />
                    }
                    onClick={handleOpenAddTask}
                    sx={{ fontSize: 14 }}
                  >
                    Add Task
                  </Button>
                </PermissionButton>
              </Stack>
            </PermissionButton>
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}
