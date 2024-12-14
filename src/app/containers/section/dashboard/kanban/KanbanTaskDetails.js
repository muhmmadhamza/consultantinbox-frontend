import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import moment from "moment";
// @mui
import { styled } from "@mui/material/styles";

import {
  Box,
  Stack,
  Radio,
  Drawer,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  RadioGroup,
  OutlinedInput,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
// hooks
import useToggle from "../../../../hooks/useToggle";
import useDateRangePicker from "../../../../hooks/useDateRangePicker";
// components
import Label from "../../../../component/label";
import Iconify from "../../../../component/iconify";
import Scrollbar from "../../../../component/scrollbar";
import { IconButtonAnimate } from "../../../../component/animate";
//
import KanbanTaskDisplayTime from "./KanbanTaskDisplayTime";
import KanbanTaskCommentList from "./KanbanTaskCommentList";
import KanbanTaskAttachments from "./KanbanTaskAttachments";
import KanbanTaskCommentInput from "./KanbanTaskCommentInput";
import KanbanContactsDialog from "./KanbanContactsDialog";
import KanbanDatePickerDialog from "./KanbanDatePickerDialog";
import KanbanTaskDetailsToolbar from "./KanbanTaskDetailsToolbar";

import KanbanDetailsDialog from "./KanbanDetailsDialog";
import useAssignmentState from "../../../../hooks/useAssignmentState";

import show_Toast from "../../../../helpers/toast.helper";
import { API_BASE_URL } from "../../../../constant/apiEndPoints";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../store/slices/kanban";
import { UpdateTask, UpdateTaskStatus } from "../../../../services";
import httpRequest from "../../../../axios/index";
import { DatePicker } from "@mui/x-date-pickers";
import { Padding } from "@mui/icons-material";
// ----------------------------------------------------------------------

const PRIORITIZES = [
  { value: 1, label: "Low" },
  { value: 2, label: "Medium" },
  { value: 3, label: "Hight" },
];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  width: 140,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

KanbanTaskDetails.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  card: PropTypes.object,
  values: PropTypes.object,
  onDeleteTask: PropTypes.func,
  editedCommentid: PropTypes.string,
  setEditedCommentid: PropTypes.func,
};

export default function KanbanTaskDetails({
  card,
  isOpen,
  onClose,
  onDeleteTask,
  values,
  editedCommentid,
  setEditedCommentid,
}) {
  const { assignUser, comments } = useSelector((state) => state.kanban);
  const dispatch = useDispatch();
  const {
    toggle: openContacts,
    onOpen: onOpenContacts,
    onClose: onCloseContacts,
  } = useToggle();

  const {
    toggle: openDetails,
    onOpen: onOpenDetails,
    onClose: onCloseDetails,
  } = useToggle();

  const [task, setTask] = useState({});

  const [taskCompleted, setTaskCompleted] = useState(!!card.status);

  const [isRepeated, setIsRepeated] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const [files, setFiles] = useState([]);

  const startdate = values?.task?.start_date
    ? moment(values?.task?.start_date).format("MM/DD/YYYY")
    : null;
  const enddate = values?.task?.end_date
    ? moment(values?.task?.end_date).format("MM/DD/YYYY")
    : null;

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
    setStartTime,
    setEndTime,
  } = useDateRangePicker([startdate, enddate]);

  const handleToggleChange = () => {
    setIsRepeated(!isRepeated);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const UserData = values?.task?.assigned_to;

  const { assignedUserId, setAssignedUser, setAssignedUserId } =
    useAssignmentState(UserData);

  useEffect(() => {
    setTask({
      description: values?.task?.description || "",
      priority: values?.task?.priority || 0,
      title: values?.task?.title || "",
    });

    setTaskCompleted(!!card.status);
    setAssignedUserId(UserData);

    setIsRepeated(values?.task?.is_repeated);
    if (
      values?.task?.time_duration &&
      values?.task?.time_duration.length &&
      values?.task?.time_duration
    ) {
      setSelectedDate(new Date(values?.task?.time_duration));
    } else {
      setSelectedDate(null); // Set to null when startdate is empty or falsy
    }

    if (startdate && startdate.length && startdate) {
      setStartTime(new Date(startdate));
    } else {
      setStartTime(null); // Set to null when startdate is empty or falsy
    }

    if (enddate && enddate.length && enddate) {
      setEndTime(new Date(enddate));
    } else {
      setEndTime(null); // Set to null when enddate is empty or falsy
    }
  }, [values]);

  const handleFieldChange = (fieldName, value) => {
    setTask({
      ...task,
      [fieldName]: value,
    });
  };

  const handleUpdateTask = async () => {
    const formData = new FormData();
    function appendIfNotNull(data, key, value) {
      if (value !== null) {
        data.append(key, value);
      }
    }

    const formattedDuration =
      isRepeated && selectedDate
        ? moment(selectedDate).format("YYYY-MM-DD HH:mm:ss.SSSZ")
        : null;

    const isRepeatedValue = isRepeated && selectedDate ? true : false;

    appendIfNotNull(formData, "id", card.id);
    appendIfNotNull(formData, "order_id", card.order_id);
    appendIfNotNull(formData, "title", task.title);
    appendIfNotNull(formData, "start_date", startTime);
    appendIfNotNull(formData, "end_date", endTime);
    appendIfNotNull(formData, "assigned_to", assignedUserId);
    appendIfNotNull(formData, "description", task.description);
    appendIfNotNull(formData, "priority", task.priority);
    appendIfNotNull(formData, "status", taskCompleted);
    appendIfNotNull(formData, "is_repeated", isRepeatedValue);
    appendIfNotNull(formData, "time_duration", formattedDuration);

    const binaryFiles = files.filter((file) => file instanceof File);

    // Append the binary files to formData
    for (let i = 0; i < binaryFiles.length; i++) {
      appendIfNotNull(formData, "task_files", binaryFiles[i]);
    }

    try {
      const response = await UpdateTask(formData);

      if (response?.data?.status === "success") {
        if (taskCompleted) {
          try {
            const response = await UpdateTaskStatus({
              id: card.id,
              status: taskCompleted,
            });
            if (response?.data?.status === "success") {
            }
          } catch (error) {
            show_Toast({
              status: false,
              message: error?.response?.data?.message || "Something went wrong",
            });
          }
        }
        dispatch(
          updateTask({
            id: card.id,
            order_id: card.order_id,
            title: task.title,
            start_date: startTime,
            end_date: endTime,
            assigned_to: assignedUserId,
            description: task.description,
            priority: task.priority,
            status: taskCompleted,
            task_files: files,
            is_repeated: isRepeatedValue,
            time_duration: formattedDuration,
          })
        );
        onClose();
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

  const user = assignUser.find((user) => user.id === assignedUserId);

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      anchor="right"
      PaperProps={{ sx: { width: { xs: 1, sm: 480 } } }}
      sx={{ zIndex: "1300 !important" }}
    >
      <KanbanTaskDetailsToolbar
        card={card}
        onDelete={onDeleteTask}
        onClose={onClose}
        handleUpdateTask={handleUpdateTask}
        taskCompleted={taskCompleted}
        setTaskCompleted={setTaskCompleted}
      />

      <Divider />

      <Scrollbar>
        <Stack spacing={3} sx={{ px: 2.5, py: 3 }}>
          <OutlinedInput
            fullWidth
            multiline
            size="small"
            placeholder="Task name"
            value={task.title}
            onChange={(e) => handleFieldChange("title", e.target.value)}
            sx={{
              typography: "subtitle2",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          />
          <Stack direction="row">
            <LabelStyle sx={{ mt: 1.5 }}>Assignee</LabelStyle>
            <Stack direction="row" flexWrap="wrap" alignItems="center">
              {assignedUserId ? (
                <>
                  <Avatar
                    onClick={onOpenDetails}
                    alt={user?.name}
                    src={`${API_BASE_URL}/${user?.imageUrl}`}
                    sx={{ m: 0.5, width: 36, height: 36 }}
                  />
                  <Tooltip title="Add assignee">
                    <IconButtonAnimate
                      onClick={onOpenContacts}
                      sx={{
                        p: 1,
                        ml: 0.5,
                        border: (theme) =>
                          `dashed 1px ${theme.palette.divider}`,
                      }}
                    >
                      <Iconify icon={"eva:plus-fill"} width={20} height={20} />
                    </IconButtonAnimate>
                  </Tooltip>
                </>
              ) : (
                <Tooltip title="Add assignee">
                  <IconButtonAnimate
                    onClick={onOpenContacts}
                    sx={{
                      p: 1,
                      ml: 0.5,
                      border: (theme) => `dashed 1px ${theme.palette.divider}`,
                    }}
                  >
                    <Iconify icon={"eva:plus-fill"} width={20} height={20} />
                  </IconButtonAnimate>
                </Tooltip>
              )}

              <KanbanDetailsDialog
                open={openDetails}
                onClose={onCloseDetails}
                values={user}
              />

              <KanbanContactsDialog
                open={openContacts}
                onClose={onCloseContacts}
                setAssignedUser={setAssignedUser}
                assignedUserId={assignedUserId}
              />
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center">
            <LabelStyle> Due date</LabelStyle>
            <>
              {startTime && endTime ? (
                <KanbanTaskDisplayTime
                  startTime={startTime}
                  endTime={endTime}
                  isSameDays={isSameDays}
                  isSameMonths={isSameMonths}
                  onOpenPicker={onOpenPicker}
                  sx={{ typography: "body2" }}
                />
              ) : (
                <Tooltip title="Add due date">
                  <IconButtonAnimate
                    onClick={onOpenPicker}
                    sx={{
                      p: 1,
                      ml: 0.5,
                      border: (theme) => `dashed 1px ${theme.palette.divider}`,
                    }}
                  >
                    <Iconify icon={"eva:plus-fill"} width={20} height={20} />
                  </IconButtonAnimate>
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
            </>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ height: "34px" }}>
            <LabelStyle>Repeat</LabelStyle>

            <>
              <FormControlLabel
                control={
                  <Switch
                    checked={isRepeated}
                    onChange={handleToggleChange}
                    color="primary"
                  />
                }
              />
              {isRepeated && (
                <DatePicker
                  label="Repeat date"
                  slotProps={{ textField: { size: "small" } }}
                  minDate={endTime}
                  value={selectedDate}
                  onChange={handleDateChange}
                  textField={(props) => <TextField {...props} />}
                />
              )}
            </>
          </Stack>

          <Stack direction="row" alignItems="center">
            <LabelStyle>Prioritize</LabelStyle>
            <RadioGroup
              row
              value={task.priority}
              onChange={(e) =>
                handleFieldChange("priority", parseInt(e.target.value))
              }
            >
              {PRIORITIZES.map((option) => (
                <Box
                  key={option.value}
                  sx={{ position: "relative", mr: 1, lineHeight: 0 }}
                >
                  <Label
                    variant={
                      option.value === task.priority ? "filled" : "ghost"
                    }
                    color={
                      (option.value === 1 && "info") ||
                      (option.value === 2 && "warning") ||
                      "error"
                    }
                    startIcon={
                      option.value === task.priority ? (
                        <Iconify icon="eva:checkmark-fill" />
                      ) : null
                    }
                  >
                    {option.label}
                  </Label>

                  <FormControlLabel
                    value={option.value}
                    control={<Radio sx={{ display: "none" }} />}
                    label={null}
                    sx={{
                      m: 0,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      position: "absolute",
                    }}
                  />
                </Box>
              ))}
            </RadioGroup>
          </Stack>

          <Stack direction="row">
            <LabelStyle sx={{ mt: 2 }}>Description</LabelStyle>
            <OutlinedInput
              fullWidth
              multiline
              size="small"
              placeholder="description"
              value={task.description}
              onChange={(e) => handleFieldChange("description", e.target.value)}
              sx={{ typography: "body2" }}
            />
          </Stack>

          <Stack direction="row">
            <LabelStyle sx={{ mt: 2 }}>Attachments</LabelStyle>
            <Stack direction="row" flexWrap="wrap">
              <KanbanTaskAttachments
                setFiles={setFiles}
                files={files}
                values={values}
              />
            </Stack>
          </Stack>
        </Stack>

        {comments
          .filter((comment) => comment.task_id === card.id)
          .map((comment, index) => (
            <KanbanTaskCommentList
              key={comment.id}
              comments={comment}
              editedCommentid={editedCommentid}
              setEditedCommentid={setEditedCommentid}
            />
          ))}
      </Scrollbar>

      <Divider />

      <KanbanTaskCommentInput
        card={card}
        setEditedCommentid={setEditedCommentid}
      />
    </Drawer>
  );
}
