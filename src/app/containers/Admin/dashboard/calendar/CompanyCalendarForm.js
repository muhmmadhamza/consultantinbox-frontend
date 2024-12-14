import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getEvents } from "../../../../store/slices/calendar";
// @mui
import { Box, Stack, Button, TextField, DialogActions } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useSelector, useDispatch } from "react-redux";
import show_Toast from "../../../../helpers/toast.helper";
import {
  ComplianceTaskUpdate,
  CreateComplianceTask,
} from "../../../../services";
// redux

// components

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

CompanyCalendarForm.propTypes = {
  event: PropTypes.object,
  onCancel: PropTypes.func,
};

export default function CompanyCalendarForm({ event, onCancel }) {
  const { companyId = null } = useSelector((state) => state.login);

  const startDate = event?.start ? new Date(event?.start) : null;
  const endDate = event?.end ? new Date(event?.end) : null;

  const eventObjectEmpty = Object.keys(event).length === 0;

  const [task, setTask] = useState([]);
  const dispatch = useDispatch();

  const onSave = async () => {
    try {
      const payload = {
        ...task,
        company_id: companyId,
      };
      const response = await CreateComplianceTask(payload);
      if (response?.data?.status === "success") {
        onCancel();
        dispatch(getEvents(companyId));
        show_Toast({
          status: true,
          message: response?.data?.message,
        });
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  // Update Compliance Task
  const onUpdate = async () => {
    try {
      const payload = {
        ...task,
        company_id: companyId,
        id: event.id,
      };
      const response = await ComplianceTaskUpdate(payload);
      if (response?.data?.status === "success") {
        onCancel();
        dispatch(getEvents(companyId));
        show_Toast({
          status: true,
          message: response?.data?.message,
        });
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  useEffect(() => {
    // Update task state when event changes
    setTask({
      title: event.title || "",
      description: event.description || "",
      start_date: startDate,
      end_date: endDate,
    });
  }, [event]);

  const handleChangeStartTime = (newValue) => {
    const pktDate = new Date(newValue);
    const utcTime = new Date(pktDate.getTime() + 5 * 60 * 60 * 1000);
    setTask((prevTask) => ({
      ...prevTask,
      start_date: utcTime,
    }));
  };

  const handleChangeEndTime = (newValue) => {
    const pktDate = new Date(newValue);
    const utcTime = new Date(pktDate.getTime() + 5 * 60 * 60 * 1000);
    setTask((prevTask) => ({
      ...prevTask,
      end_date: utcTime,
    }));
  };

  return (
    <Box
      sx={{
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          width: 1,
        },
      }}
    >
      <form>
        <Stack spacing={3} sx={{ p: 3 }}>
          <TextField
            name="title"
            label="Title"
            type="title"
            id="title"
            fullWidth
            disabled={true}
            value={task.title}
            onChange={(e) =>
              setTask((prevTask) => ({
                ...prevTask,
                title: e.target.value,
              }))
            }
          />
          <TextField
            name="description"
            label="Description"
            type="description"
            id="description"
            fullWidth
            multiline
            disabled={true}
            rows={4}
            value={task.description}
            onChange={(e) =>
              setTask((prevTask) => ({
                ...prevTask,
                description: e.target.value,
              }))
            }
          />

          <DatePicker
            label="Start date"
            value={task.start_date}
            // minDate={endDate ? new Date() : new Date()}
            textField={(props) => <TextField {...props} />} // Use textField slot
            onChange={handleChangeStartTime}
            disabled={true}
          />

          <DatePicker
            label="End date"
            value={task.end_date}
            // minDate={startDate ? new Date() : (task.start_date || new Date())}
            textField={(props) => <TextField {...props} />} // Use textField slot
            onChange={handleChangeEndTime}
            disabled={true}
          />
        </Stack>

        <DialogActions>
          <Box sx={{ flexGrow: 1 }} />
          {/* {eventObjectEmpty ? (
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => onSave()}
              sx={{
                backgroundColor: "#3C4256 !important",
                color: "white !important",
                marginRight: ".5rem",
                "&:hover": {
                  backgroundColor: "white !important",
                  color: "black !important",
                  outline: "2px solid #3C4256",
                  outlineOffset: "-2px",
                },
              }}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => onUpdate()}
              sx={{
                backgroundColor: "#3C4256 !important",
                color: "white !important",
                marginRight: ".5rem",
                "&:hover": {
                  backgroundColor: "white !important",
                  color: "black !important",
                  outline: "2px solid #3C4256",
                  outlineOffset: "-2px",
                },
              }}
            >
              Update
            </Button>
          )} */}
          <Button
            variant="outlined"
            color="inherit"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Box>
  );
}
