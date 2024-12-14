import PropTypes from "prop-types";

// @mui
import { Box, Stack, Button, TextField, DialogActions } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
// redux

// components

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

CalendarForm.propTypes = {
  event: PropTypes.object,
  onCancel: PropTypes.func,
};

export default function CalendarForm({ event, onCancel }) {
  const startDate = event?.start ? new Date(event?.start) : null;
  const endDate = event?.end ? new Date(event?.end) : null;

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
            name="assigned_to"
            label="Assigned To"
            type="assigned_to"
            id="assigned_to"
            fullWidth
            value={event.User?.name}
            disabled={true}
          />
          <TextField
            name="title"
            label="Title"
            type="title"
            id="title"
            fullWidth
            value={event.title}
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
            value={event.description}
            disabled={true}
          />

          <DatePicker
            label="Start date"
            value={startDate || undefined}
            textField={(props) => <TextField {...props} />} // Use textField slot
            disabled={true}
          />

          <DatePicker
            label="End date"
            value={endDate || undefined}
            textField={(props) => <TextField {...props} />} // Use textField slot
            disabled={true}
          />
        </Stack>

        <DialogActions>
          <Box sx={{ flexGrow: 1 }} />

          <Button variant="outlined" color="inherit" onClick={onCancel}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Box>
  );
}
