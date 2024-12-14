import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import {
  Paper,
  Stack,
  Tooltip,
  Avatar,
  IconButton,
  OutlinedInput,
  ClickAwayListener,
  Box,
} from "@mui/material";
// hooks
import useToggle from "../../../../hooks/useToggle";
import useDateRangePicker from "../../../../hooks/useDateRangePicker";
// components
import Iconify from "../../../../component/iconify";
//
import KanbanTaskDisplayTime from "./KanbanTaskDisplayTime";
import KanbanContactsDialog from "./KanbanContactsDialog";
import KanbanDatePickerDialog from "./KanbanDatePickerDialog";
import { useSelector } from "react-redux";
import useAssignmentState from "../../../../hooks/useAssignmentState";

import { API_BASE_URL } from "../../../../constant/apiEndPoints";
// ----------------------------------------------------------------------

KanbanTaskAdd.propTypes = {
  onAddTask: PropTypes.func,
  onCloseAddTask: PropTypes.func,
  columnId: PropTypes.string,
};

export default function KanbanTaskAdd({ onAddTask, onCloseAddTask, columnId }) {
  const { board, assignUser } = useSelector((state) => state.kanban);
  const cards = board.cards || {}; // Ensure columns is not undefined

  function generateNewOrderId(columnId) {
    const cardsInColumn = Object.values(cards).filter(
      (card) => card.column_id === columnId
    );

    const existingOrderIds = cardsInColumn.map((card) => card.order_id);

    // Remove null or undefined values from existingOrderIds
    const filteredOrderIds = existingOrderIds.filter(
      (orderId) => orderId !== null && orderId !== undefined
    );

    if (filteredOrderIds.length === 0) {
      // If there are no existing order_ids in this column, start from 1
      return 1;
    } else {
      // Otherwise, find the maximum order_id in this column and increment it by 1
      const maxOrderId = Math.max(...filteredOrderIds);
      return maxOrderId + 1;
    }
  }

  const [name, setName] = useState("");

  const {
    toggle: openContacts,
    onOpen: onOpenContacts,
    onClose: onCloseContacts,
  } = useToggle();

  const {
    startTime,
    endTime,
    onChangeStartTime,
    onChangeEndTime,
    //
    openPicker,
    onOpenPicker,
    onClosePicker,
    //
    isSameDays,
    isSameMonths,
  } = useDateRangePicker([null, null]);

  const { assignedUserId, setAssignedUser } = useAssignmentState(null);

  const handleKeyUpAddTask = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newOrderId = generateNewOrderId(columnId);

      if (name.trim() !== "") {
        onAddTask({
          title: name.trim(),
          start_date: startTime,
          end_date: endTime,
          order_id: newOrderId,
          assigned_to: assignedUserId,
        });
        onCloseAddTask();
      }
    }
  };

  const handleClickAddTask = () => {
    const newOrderId = generateNewOrderId(columnId);

    if (name) {
      onAddTask({
        title: name.trim(), // Use trimmed name to remove extra spaces
        start_date: startTime,
        end_date: endTime,
        order_id: newOrderId,
        assigned_to: assignedUserId,
      });
    }
    onCloseAddTask();
  };

  const user = assignUser.find((user) => user.id === assignedUserId);

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAddTask}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <OutlinedInput
            size="small"
            autoFocus= {true}
            placeholder="Task name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyUp={handleKeyUpAddTask}
            sx={{
              "& input": { p: 0 },
              "& fieldset": { borderColor: "transparent !important" },
            }}
          />

          <Stack direction="row" justifyContent="space-between">
            <Box />
            <Stack direction="row" spacing={1.5} alignItems="center">
              {assignedUserId ? (
                <Avatar
                  onClick={onOpenContacts}
                  alt={user?.name}
                  src={`${API_BASE_URL}/${user?.imageUrl}`}
                  sx={{ m: 0.5, width: 36, height: 36 }}
                />
              ) : (
                <Tooltip title="Assign this task" onClick={onOpenContacts}>
                  <IconButton size="small">
                    <Iconify icon={"eva:people-fill"} width={20} height={20} />
                  </IconButton>
                </Tooltip>
              )}

              <KanbanContactsDialog
                open={openContacts}
                onClose={onCloseContacts}
                setAssignedUser={setAssignedUser}
                assignedUserId={assignedUserId}
              />

              {startTime && endTime ? (
                <KanbanTaskDisplayTime
                  startTime={startTime}
                  endTime={endTime}
                  isSameDays={isSameDays}
                  isSameMonths={isSameMonths}
                  onOpenPicker={onOpenPicker}
                />
              ) : (
                <Tooltip title="Add due date">
                  <IconButton size="small" onClick={onOpenPicker}>
                    <Iconify
                      icon={"eva:calendar-fill"}
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Tooltip>
              )}

              <KanbanDatePickerDialog
                open={openPicker}
                startTime={startTime}
                endTime={endTime}
                onChangeStartTime={onChangeStartTime}
                onChangeEndTime={onChangeEndTime}
                onClose={onClosePicker}
              />
            </Stack>
          </Stack>
        </Paper>
      </ClickAwayListener>
    </>
  );
}
