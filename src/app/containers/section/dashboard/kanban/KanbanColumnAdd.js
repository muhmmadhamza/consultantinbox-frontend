import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
// @mui
import { OutlinedInput, Paper, Button, ClickAwayListener } from "@mui/material";
// redux
import { useDispatch } from "react-redux";
import { createColumn } from "../../../../store/slices/kanban";
// components
import Iconify from "../../../../component/iconify";

import show_Toast from "../../../../helpers/toast.helper";

import { useSelector } from "react-redux";
import { CreateColumns } from "../../../../services";
import PermissionButton from "../../../../helpers/PermissionButton";
// ----------------------------------------------------------------------
KanbanColumnAdd.propTypes = {
  id: PropTypes.string,
};
export default function KanbanColumnAdd({ id, type }) {
  const { board } = useSelector((state) => state.kanban);
  const columns = board.columns || {}; // Ensure columns is not undefined

  function generateNewOrderId() {
    const existingOrderIds = Object.values(columns).map(
      (column) => column.order_id
    );

    // Remove null or undefined values from existingOrderIds
    const filteredOrderIds = existingOrderIds.filter(
      (orderId) => orderId !== null && orderId !== undefined
    );

    if (filteredOrderIds.length === 0) {
      // If there are no existing order_ids, start from 1
      return 1;
    } else {
      // Otherwise, find the maximum order_id and increment it by 1
      const maxOrderId = Math.max(...filteredOrderIds);
      return maxOrderId + 1;
    }
  }

  const status = 1;
  const nameRef = useRef(null);

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleCreateColumn = async () => {
    const newOrderId = generateNewOrderId();
    try {
      if (name) {
        const response = await CreateColumns({
          name,
          project_id: id,
          status,
          order_id: newOrderId,
          form_id: type,
        });

        if (response?.data?.status === "success") {
          dispatch(createColumn(response.data.response));
          setName("");
        }
        show_Toast({
          status: true,
          message: response?.data?.message || "Success",
        });
      }
      handleClose();
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleCreateColumn();
    }
  };

  return (
    <PermissionButton modulePermissionName="add" moduleName="kanban">
      <Paper sx={{ minWidth: 280, width: 280 }}>
        {!open && (
          <Button
            fullWidth
            size="large"
            color="inherit"
            variant="outlined"
            startIcon={
              <Iconify icon={"eva:plus-fill"} width={20} height={20} />
            }
            onClick={handleOpen}
          >
            Add section
          </Button>
        )}

        {open && (
          <ClickAwayListener onClickAway={handleCreateColumn}>
            <OutlinedInput
              fullWidth
              placeholder="New section"
              inputRef={nameRef}
              value={name}
              onChange={handleChangeName}
              onKeyUp={handleKeyUp}
              sx={{ typography: "h6" }}
            />
          </ClickAwayListener>
        )}
      </Paper>
    </PermissionButton>
  );
}
