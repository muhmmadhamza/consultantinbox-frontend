import PropTypes from "prop-types";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";

// Define the FormConfirmation component
const FormConfirmation = (props) => {
  const { title, subheader, actions, open, onClose } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: "background.neutral",
        },
      }}
    >
      <DialogTitle>
        {title}
        {subheader}
      </DialogTitle>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

FormConfirmation.propTypes = {
  title: PropTypes.node.isRequired,
  subheader: PropTypes.node,
  open: PropTypes.bool,
  actions: PropTypes.node,
  onClose: PropTypes.func,
};

export default FormConfirmation; // Export the component
