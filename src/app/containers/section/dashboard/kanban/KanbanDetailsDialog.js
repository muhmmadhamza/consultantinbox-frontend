import PropTypes from "prop-types";

import {
  Stack,
  Dialog,
  TextField,
  Typography,
  Button,
  DialogActions,
  Box,
} from "@mui/material";
import Scrollbar from "../../../../component/scrollbar";

const ITEM_HEIGHT = 64;

KanbanDetailsDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  values: PropTypes.object,
};

export default function KanbanDetailsDialog({ open, onClose, values }) {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={onClose}
      sx={{ maxHeight: "60%" }}
    >
      <Stack spacing={0.5} sx={{ p: 2.5, pt: 1, pb: 1 }}>
        <Typography variant="h6">Assign Info</Typography>

        <TextField
          fullWidth
          value={values?.name}
          placeholder="Title"
          disabled
        />
      </Stack>
      <Stack spacing={0.5} sx={{ p: 2.5, pt: 1, pb: 1 }}>
        <TextField
          fullWidth
          value={values?.email}
          placeholder="Email"
          disabled
        />
      </Stack>
      <Stack spacing={0.5} sx={{ p: 2.5, pt: 1, pb: 1 }}>
        <TextField
          fullWidth
          value={values?.phone}
          placeholder="Phone"
          disabled
        />
      </Stack>

      <DialogActions sx={{ pr: 2.5 }}>
        <Box sx={{ flexGrow: 1 }} />

        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>

      <Scrollbar
        sx={{
          height: ITEM_HEIGHT * 6,
          "& .MuiMenuItem-root": {
            px: 1.5,
            height: ITEM_HEIGHT,
            borderRadius: 0.75,
          },
        }}
      ></Scrollbar>
    </Dialog>
  );
}
