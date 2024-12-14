import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link as RouterLink } from "react-router-dom";
import {
  Stack,
  Popover,
  MenuItem,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import Iconify from "../../../../component/iconify";
import KanbanConfirmDialog from "../../../../containers/section/dashboard/kanban/KanbanConfirmDialog";
import useToggle from "../../../../hooks/useToggle";
import show_Toast from "../../../../helpers/toast.helper";
import httpRequest from "../../../../axios/index";

UserDashboardIcons.propTypes = {
  id: PropTypes.number,
  users: PropTypes.func,
};
export default function UserDashboardIcons({ id, users }) {
  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  const [open, setOpen] = useState(null);
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await httpRequest.delete(`/api/users/delete/${id}`);
      if (response?.data?.status === "success") {
        onCloseConfirm();
        users();
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
    <>
      <Stack
        direction="row"
        spacing={2}
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
          <Iconify icon={"eva:more-vertical-fill"} />
        </IconButton>

        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              p: 1,
              width: 140,
              "& .MuiMenuItem-root": {
                px: 1,
                typography: "body2",
                borderRadius: 0.75,
              },
            },
          }}
        >
          <MenuItem component={RouterLink} to={`/admin/viewuser/${id}`}>
            <Iconify icon={"eva:eye-fill"} sx={{ mr: 2 }} />
            View
          </MenuItem>

          <MenuItem component={RouterLink} to={`/admin/edituser/${id}`}>
            <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
            Edit
          </MenuItem>

          <MenuItem onClick={onOpenConfirm} sx={{ color: "error.main" }}>
            <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </Popover>
      </Stack>
      <KanbanConfirmDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        title={
          <Typography gutterBottom>
            Are you sure you want to delete <strong>User</strong>?
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <strong>NOTE:</strong> All tasks related to this category will also
            be deleted.
          </Typography>
        }
        actions={
          <>
            <Button variant="outlined" color="inherit" onClick={onCloseConfirm}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteUser}
            >
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
