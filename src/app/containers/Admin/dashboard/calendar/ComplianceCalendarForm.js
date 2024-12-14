import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// @mui
import {
  Stack,
  Dialog,
  TextField,
  Button,
  Box,
  DialogActions,
  DialogTitle,
  FormControlLabel,
  Switch,
  Typography,
  MenuItem,
} from "@mui/material";
// components
import show_Toast from "../../../../helpers/toast.helper";

// ----------------------------------------------------------------------
import { getEvents } from "../../../../store/slices/calendar";
import { DatePicker } from "@mui/x-date-pickers";
import { ComplianceTaskList, ComplianceTaskUpdate } from "../../../../services";
// ----------------------------------------------------------------------

ComplianceCalendarForm.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default function ComplianceCalendarForm({ open, onClose }) {
  const { companyId = null } = useSelector((state) => state.login);


  const [isRepeated, setIsRepeated] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [complianceTask, setComplianceTask] = useState([]);
  const dispatch = useDispatch();

  const startDate = selectedEvent?.repeat_date ? new Date(selectedEvent?.repeat_date) : null;

  const onSave = async () => {
    if (!selectedEvent.repeat_date) {
      show_Toast({
        status: false,
        message: "Please select a repeat date.",
      });
      return; 
    }
    if (!selectedEvent?.title && !selectedEvent?.description) {
      show_Toast({
        status: false,
        message: "Please Select ComplianceTask From Options.",
      });
      return;
    }
    
    try {
      const payload = {
        ...selectedEvent,
        company_id: companyId,
      };
      const response = await ComplianceTaskUpdate(payload);
      if (response?.data?.status === "success") {
        onClose();
        setIsRepeated(false);
        setSelectedEvent(null);
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
  const complianceTaskList = async () => {
    try {
      const response = await ComplianceTaskList(companyId);
      if (response?.data?.status === "success") {
        setComplianceTask(response?.data?.response);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  useEffect(() => {
    complianceTaskList();
  }, []);

  const handleToggleChange = () => {
    setIsRepeated(!isRepeated);
  };

  // Function to handle event selection
  const handleEventSelect = (event) => {
    const selectedEventData = complianceTask?.find(
      (item) => item.id === event.target.value
    );
    setSelectedEvent(selectedEventData);
    setIsRepeated(true);
  };

  const handleClose = () => {
    setSelectedEvent(null);
    setIsRepeated(false);
    onClose();
  };

  const handleChangeStartTime = (newValue) => {
    const pktDate = new Date(newValue);
    const utcTime = new Date(pktDate.getTime() + 5 * 60 * 60 * 1000);
    setSelectedEvent((prevTask) => ({
      ...prevTask,
      repeat_date: utcTime,
    }));
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
      <DialogTitle>Compliance Task</DialogTitle>
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
              id="compliance"
              name="compliance"
              select
              label="ComplianceTask List"
              type="compliance"
              fullWidth
              autoWidth
              onChange={handleEventSelect}
            >
              {complianceTask?.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              name="title"
              label="Title"
              type="title"
              id="title"
              fullWidth
              value={selectedEvent ? selectedEvent.title : ""}
              disabled={true}
            />
            <TextField
              name="description"
              label="Description"
              type="description"
              id="description"
              fullWidth
              multiline
              rows={4}
              disabled={true}
              value={selectedEvent ? selectedEvent.description : ""}
            />
            <Stack direction="row" alignItems="center" sx={{ height: "34px" }}>
              <Typography variant="body2" sx={{ marginRight: "12px" }}>
                Repeat
              </Typography>
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
                    label="Repeat Task Date"
                    slotProps={{ textField: { size: "small" } }}
                    minDate={
                      startDate ? new Date() : new Date()
                    }
                    value={startDate}
                    onChange={handleChangeStartTime}
                    textField={(props) => <TextField {...props} />}
                  />
                )}
              </>
            </Stack>
          </Stack>

          <DialogActions>
            <Box sx={{ flexGrow: 1 }} />
            {selectedEvent && (
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
            )}
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleClose}
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
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
}

// ----------------------------------------------------------------------
