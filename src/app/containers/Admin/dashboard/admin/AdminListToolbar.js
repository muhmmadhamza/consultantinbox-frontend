import PropTypes from "prop-types";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
// component
import Iconify from "../../../../component/iconify";
import KanbanConfirmDialog from "../../../section/dashboard/kanban/KanbanConfirmDialog";
import useToggle from "../../../../hooks/useToggle";
import show_Toast from "../../../../helpers/toast.helper";
import { DeleteMutipleUsersData } from "../../../../services";

// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": {
    width: 320,
    boxShadow: theme.customShadows.z8,
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

// ----------------------------------------------------------------------

AdminListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  users: PropTypes.func,
  numSelectedId: PropTypes.arrayOf(PropTypes.number),
  setSelected: PropTypes.func,
  setPage: PropTypes.func,
};

export default function AdminListToolbar({
  numSelected,
  filterName,
  onFilterName,
  numSelectedId,
  users,
  setSelected,
  setPage,
}) {
  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  const handleMultipleDeleteUser = async () => {
    try {
      const response = await DeleteMutipleUsersData({
        userIds: numSelectedId,
      });
      if (response?.data?.status === "success") {
        onCloseConfirm();
        setSelected([]);
        setPage(1);
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
      <StyledRoot
        sx={{
          ...(numSelected > 0 && {
            color: "primary.main",
            bgcolor: "primary.lighter",
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography component="div" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <StyledSearch
            value={filterName}
            onChange={onFilterName}
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={onOpenConfirm}>
              <Iconify icon="eva:trash-2-fill" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <Iconify icon="ic:round-filter-list" />
            </IconButton>
          </Tooltip>
        )}
      </StyledRoot>
      <KanbanConfirmDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        title={
          <Typography gutterBottom>
            Are you sure you want to delete
            <strong> all selected Company Admins</strong>?
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <strong>NOTE:</strong> All tasks related to these{" "}
            <strong> Admins </strong> will also be deleted.
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
              onClick={handleMultipleDeleteUser}
            >
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
