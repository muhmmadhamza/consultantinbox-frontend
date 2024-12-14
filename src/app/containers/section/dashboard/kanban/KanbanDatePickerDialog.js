import PropTypes from "prop-types";
// @mui
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

// ----------------------------------------------------------------------

KanbanDatePickerDialog.propTypes = {
  open: PropTypes.bool,
  startTime: PropTypes.instanceOf(Date), 
  endTime: PropTypes.instanceOf(Date),
  onChangeEndTime: PropTypes.func,
  onChangeStartTime: PropTypes.func,
  onClose: PropTypes.func,
};

export default function KanbanDatePickerDialog({
  startTime,
  endTime,
  onChangeStartTime,
  onChangeEndTime,
  open,
  onClose,
}) 
{
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle>Choose due date</DialogTitle>

      <Stack spacing={2} sx={{ px: 3, mt: 3 }}>
        <DatePicker
          label="Start date"
          disablePast
          value={startTime}
          maxDate={endTime} 
          onChange={onChangeStartTime}
          textField={(props) => <TextField {...props} />} // Use textField slot
        />

        <DatePicker
          label="End date"
          value={endTime}
          minDate={startTime} 
          onChange={onChangeEndTime}
          textField={(props) => <TextField {...props} />} // Use textField slot
        />
      </Stack>

      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
