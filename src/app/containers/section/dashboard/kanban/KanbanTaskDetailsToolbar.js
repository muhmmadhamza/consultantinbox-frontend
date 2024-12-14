import PropTypes from "prop-types";
// @mui
import { Stack, Button, Tooltip, Typography } from "@mui/material";

// hooks
import useToggle from "../../../../hooks/useToggle";
import useResponsive from "../../../../hooks/useResponsive";
// components
import Iconify from "../../../../component/iconify";
import { IconButtonAnimate } from "../../../../component/animate";
//
import KanbanConfirmDialog from "./KanbanConfirmDialog";
import { useSelector } from "react-redux";
import PermissionButton from "../../../../helpers/PermissionButton";
// ----------------------------------------------------------------------

KanbanTaskDetailsToolbar.propTypes = {
  card: PropTypes.object,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  handleUpdateTask: PropTypes.func,
};

export default function KanbanTaskDetailsToolbar({
  card,
  onClose,
  onDelete,
  handleUpdateTask,
  taskCompleted,
  setTaskCompleted,
}) {
  const { user = {} } = useSelector((state) => state.login);

  const isDesktop = useResponsive("up", "sm");

  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  const handleCompleted = () => {
    setTaskCompleted(!taskCompleted);
  };

  return (
    <Stack p={2.5} direction="row" alignItems="center">
      {!isDesktop && (
        <>
          <Tooltip title="Back">
            <IconButtonAnimate onClick={onClose} sx={{ mr: 1 }}>
              <Iconify icon="eva:arrow-ios-back-fill" width={20} height={20} />
            </IconButtonAnimate>
          </Tooltip>
        </>
      )}

      {user.role_id === 2 && (
        <Button
          size="small"
          variant="outlined"
          disabled={card.status}
          color={taskCompleted ? "primary" : "inherit"}
          startIcon={
            taskCompleted && (
              <Iconify icon="eva:checkmark-fill" width={16} height={16} />
            )
          }
          onClick={handleCompleted}
        >
          {taskCompleted ? "Completed" : "Mark as complete"}
        </Button>
      )}

      <Stack direction="row" spacing={1} justifyContent="flex-end" flexGrow={1}>
        <PermissionButton modulePermissionName="edit" moduleName="tasks">
          <Button
            size="small"
            type="submit"
            variant="contained"
            disabled={card.status}
            sx={{
              backgroundColor: "#3C4256 !important",

              color: "white !important",
              "&:hover": {
                backgroundColor: "white !important",
                color: "black !important",
                outline: "2px solid #3C4256",
                outlineOffset: "-2px",
              },
            }}
            onClick={handleUpdateTask}
          >
            Update Task
          </Button>
        </PermissionButton>
        <PermissionButton modulePermissionName="delete" moduleName="tasks">
          <Tooltip title="Delete task">
            <IconButtonAnimate onClick={onOpenConfirm} size="small">
              <Iconify icon="eva:trash-2-outline" width={20} height={20} />
            </IconButtonAnimate>
          </Tooltip>
        </PermissionButton>

        <KanbanConfirmDialog
          open={openConfirm}
          onClose={onCloseConfirm}
          title={
            <Typography>
              Are you sure you want to delete task <strong>{card.name}</strong>?
            </Typography>
          }
          actions={
            <>
              <Button
                variant="outlined"
                color="inherit"
                onClick={onCloseConfirm}
              >
                Cancel
              </Button>
              <Button variant="contained" color="error" onClick={onDelete}>
                Delete
              </Button>
            </>
          }
        />
      </Stack>
    </Stack>
  );
}
