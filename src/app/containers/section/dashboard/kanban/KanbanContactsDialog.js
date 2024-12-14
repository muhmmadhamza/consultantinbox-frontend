import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// @mui
import {
  Stack,
  Avatar,
  Dialog,
  TextField,
  Typography,
  ListItemText,
  ListItemAvatar,
  InputAdornment,
  List,
  ListItem,
  Grid,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";
// components
import Iconify from "../../../../component/iconify";
import Scrollbar from "../../../../component/scrollbar";
import { AssignListTaskData } from "../../../../services/index";
import show_Toast from "../../../../helpers/toast.helper";
import { API_BASE_URL } from "../../../../constant/apiEndPoints";
import { assignUserList } from "../../../../store/slices/kanban";

// ----------------------------------------------------------------------

const ITEM_HEIGHT = 64;

// ----------------------------------------------------------------------

KanbanContactsDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  setAssignedUser: PropTypes.func,
  assignedUserId: PropTypes.number,
};

export default function KanbanContactsDialog({
  open,
  onClose,
  setAssignedUser,
  assignedUserId,
}) {
  const { assignUser } = useSelector((state) => state.kanban);
  const { companyId = null } = useSelector((state) => state.login);

  const [filterName, setFilterName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAssignTaskData();
  }, []);

  const fetchAssignTaskData = async () => {
    try {
      const response = await AssignListTaskData(companyId);
      if (response?.data?.status === "success") {
        dispatch(assignUserList(response?.data?.response));
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };
  const handleSearchQuery = (event) => {
    setFilterName(event.target.value);
  };

  const dataFiltered = applySortFilter({
    listData: assignUser,
    filterName,
  });

  const handleAssignUser = async (contact) => {
    try {
      setAssignedUser(contact.id);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <Stack spacing={2} sx={{ p: 2.5, pb: 1 }}>
        <Typography variant="h6">
          Contacts
          <Typography component="span">({assignUser.length})</Typography>
        </Typography>

        <TextField
          fullWidth
          value={filterName}
          onChange={handleSearchQuery}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon={"eva:search-fill"}
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Scrollbar
        sx={{
          height: ITEM_HEIGHT * 6,
          p: 1,
          "& .MuiMenuItem-root": {
            px: 1.5,
            height: ITEM_HEIGHT,
            borderRadius: 0.75,
          },
        }}
      >
        <Grid item xs={12} md={6}>
          {dataFiltered.map((contact) => (
            <List key={contact.id}>
              <ListItem>
                <ListItemAvatar sx={{ position: "relative" }}>
                  <Avatar
                    alt={contact.name}
                    src={`${API_BASE_URL}/${contact.imageUrl}`}
                  />
                </ListItemAvatar>

                <ListItemText
                  primaryTypographyProps={{
                    typography: "subtitle2",
                    mb: 0.25,
                  }}
                  secondaryTypographyProps={{ typography: "caption" }}
                  primary={contact.name}
                  secondary={contact.email}
                />
              </ListItem>
              <ListItemSecondaryAction>
                <Button
                  fullWidth
                  size="small"
                  color={contact.id === assignedUserId ? "success" : "inherit"}
                  // disabled={contact.id === assignedUserId}
                  startIcon={
                    contact.id === assignedUserId ? (
                      <Iconify
                        icon={"eva:checkmark-circle-fill"}
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Iconify icon={"eva:plus-fill"} width={20} height={20} />
                    )
                  }
                  onClick={() => handleAssignUser(contact)}
                >
                  {contact.id === assignedUserId ? "Assigned" : "Assign"}
                </Button>
              </ListItemSecondaryAction>
            </List>
          ))}
        </Grid>
      </Scrollbar>
    </Dialog>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({ listData, filterName }) {
  if (filterName) {
    listData = listData.filter(
      (item) =>
        item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return listData;
}
