import { useState } from "react";
import { setLoginStateEmpty } from "../../../../../store/slices/login";
import { useDispatch, useSelector } from "react-redux";
import { actions as kanbanActions } from "../../../../../store/slices/kanban";

// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";
// mocks_
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../../../constant/apiEndPoints";
import { setRoles } from "../../../../../store/slices/roles";
import { LogoutUser } from "../../../../../services";
import show_Toast from "../../../../../helpers/toast.helper";

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { user = {} } = useSelector(
    (state) => state.login
  );
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const logout = async () => {
    try {
      const { data } = await LogoutUser();
      if (data.status === "success") {
        dispatch(setLoginStateEmpty());
        dispatch(kanbanActions.resetKanbanState());
        dispatch(setRoles([]));
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.message || "Something went wrong",
      });
    }
  };
  const maindashboard = () => {
    navigate("/dashboard");
  };
  const profileDashboard = () => {
    navigate("/dashboard/viewprofile");
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={`${API_BASE_URL}/${user?.imageUrl}`} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem onClick={profileDashboard} sx={{ m: 1 }}>
            Profile
          </MenuItem>

          <MenuItem onClick={maindashboard} sx={{ m: 1 }}>
            Dashboard
          </MenuItem>

        <MenuItem onClick={logout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
