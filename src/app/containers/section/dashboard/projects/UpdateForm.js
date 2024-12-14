import PropTypes from "prop-types";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";

// Define the FormConfirmation component
const UpdateForm = ({ title, subheader, actions, open, onClose }) => {
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        {subheader}
      </DialogTitle>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

UpdateForm.propTypes = {
  title: PropTypes.node.isRequired,
  subheader: PropTypes.node,
  open: PropTypes.bool,
  actions: PropTypes.node,
  onClose: PropTypes.func,
};

export default UpdateForm; // Export the component
