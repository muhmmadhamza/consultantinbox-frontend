import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
// @mui
import {
  Stack,
  OutlinedInput,
  MenuItem,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
// hooks
import useToggle from "../../../../hooks/useToggle";
import { useSelector } from "react-redux";
// components
import Iconify from "../../../../component/iconify";
import MenuPopover from "../../../../component/MenuPopover";
//
import KanbanConfirmDialog from "./KanbanConfirmDialog";
import PermissionButton from "../../../../helpers/PermissionButton";
import { hasPermissions } from "../../../../helpers/permissions.helper";
// ----------------------------------------------------------------------

KanbanColumnToolBar.propTypes = {
  columnName: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};
export default function KanbanColumnToolBar({
  columnName,
  onDelete,
  onUpdate,
}) {
  const renameRef = useRef(null);

  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  const { permissions = [] } = useSelector((state) => state.login);

  const [value, setValue] = useState(columnName);

  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open) {
      if (renameRef.current) {
        renameRef.current.focus();
      }
    }
  }, [open]);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleClickRename = () => {
    handleClose();
  };

  const handleChangeColumnName = (event) => {
    setValue(event.target.value);
  };

  const handleUpdateColumn = (event) => {
    if (event.key === "Enter" && renameRef.current) {
      renameRef.current.blur();
      onUpdate(value);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        {permissions?.length &&
        !hasPermissions(permissions, "edit", "kanban") ? (
          <OutlinedInput
            size="small"
            readOnly
            placeholder="Section name"
            value={value}
            onChange={handleChangeColumnName}
            onKeyUp={handleUpdateColumn}
            inputRef={renameRef}
            sx={{
              overflow: "hidden",
              overflowWrap: "break-word",
              height: "28px",
              width: "100%",
              typography: "subtitle2",
              fontWeight: "fontWeightBold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          />
        ) : (
          <OutlinedInput
            size="small"
            placeholder="Section name"
            value={value}
            onChange={handleChangeColumnName}
            onKeyUp={handleUpdateColumn}
            inputRef={renameRef}
            sx={{
              overflow: "hidden",
              overflowWrap: "break-word",
              height: "28px",
              width: "100%",
              typography: "subtitle2",
              fontWeight: "fontWeightBold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          />
        )}

        <IconButton
          size="small"
          onClick={handleOpen}
          color={open ? "inherit" : "default"}
        >
          <Iconify icon={"eva:more-vertical-fill"} width={20} height={20} />
        </IconButton>
      </Stack>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          width: "auto",
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <PermissionButton modulePermissionName="delete" moduleName="kanban">
          <MenuItem onClick={onOpenConfirm} sx={{ color: "error.main" }}>
            <Iconify
              icon={"eva:trash-2-outline"}
              sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }}
            />
            Delete section
          </MenuItem>
        </PermissionButton>
        <PermissionButton modulePermissionName="edit" moduleName="kanban">
          <MenuItem onClick={handleClickRename}>
            <Iconify
              icon={"eva:edit-fill"}
              sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }}
            />
            Rename section
          </MenuItem>
        </PermissionButton>
      </MenuPopover>

      <KanbanConfirmDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        title={
          <Typography gutterBottom>
            Are you sure you want to delete column <strong>{columnName}</strong>
            ?
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
            <Button variant="contained" color="error" onClick={onDelete}>
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
