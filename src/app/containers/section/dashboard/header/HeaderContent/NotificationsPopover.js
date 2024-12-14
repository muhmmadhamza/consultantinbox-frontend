import PropTypes from "prop-types";
import { noCase } from "change-case";
import { useEffect, useState } from "react";
// @mui
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  IconButton,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
// utils
import { fToNow } from "../../../../../utils/formatTime";
// _mock_
// import { _notifications } from "../../../../../_mock";
// components
import Iconify from "../../../../../component/iconify";
import Scrollbar from "../../../../../component/scrollbar";
import MenuPopover from "../../../../../component/MenuPopover";
import { IconButtonAnimate } from "../../../../../component/animate";
import useSocket from "../../../../../hooks/useSocket";
import show_Toast from "../../../../../helpers/toast.helper";
import httpRequest from "../../../../../axios/index";
import { API_BASE_URL } from "../../../../../constant/apiEndPoints";
import useToggle from "../../../../../hooks/useToggle";
import NotificationConfirmDialog from "./NotificationConfirmDialog";
import { NotificationList } from "../../../../../services";

// ----------------------------------------------------------------------

NotificationsPopover.propTypes = {
  // The useSocket hook provides these props
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.instanceOf(Date),
      id: PropTypes.string,
      isUnRead: PropTypes.bool,
      title: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string,
      avatar: PropTypes.any,
      User: PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string,
      }),
    })
  ).isRequired,
  setNotifications: PropTypes.func.isRequired,
};

export default function NotificationsPopover() {
  const { notifications, setNotifications } = useSocket();

  const totalUnRead = notifications.filter(
    (item) => item.isRead === false
  ).length;

  const fetchNotificationData = async () => {
    try {
      const response = await NotificationList();
      const data = response?.data?.response;
      setNotifications(data);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };
  useEffect(() => {
    fetchNotificationData();
  }, []);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = async () => {
    try {
      await httpRequest.put(`/api/notifications/update`);
      setNotifications(
        notifications.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <>
      <IconButtonAnimate
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="eva:bell-fill" width={20} height={20} />
        </Badge>
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 360, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {totalUnRead} unread notifications
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" width={20} height={20} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Scrollbar sx={{ height: notifications.length > 0 ? 240 : "auto" }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                New
              </ListSubheader>
            }
          >
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                fetchNotificationData={fetchNotificationData}
              />
            ))}
          </List>
        </Scrollbar>
      </MenuPopover>
    </>
  );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};

function NotificationItem({ notification, fetchNotificationData }) {
  const { message } = renderContent(notification) || {};
  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  const handleNotificationDelete = async (id) => {
    try {
      const response = await httpRequest.delete(
        `/api/notifications/delete/${id}`
      );

      fetchNotificationData();
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <>
      <ListItemButton
        sx={{
          py: 1.5,
          px: 2.5,
          mt: "1px",
          ...(!notification.isRead && {
            bgcolor: "action.selected",
          }),
        }}
      >
        <ListItemAvatar>
          <Avatar
            src={`${API_BASE_URL}/${notification?.User?.imageUrl}`}
            sx={{ bgcolor: "background.neutral" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={message}
          secondary={
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: "flex",
                alignItems: "center",
                color: "text.disabled",
              }}
            >
              <Iconify
                onClick={onOpenConfirm}
                icon={"eva:trash-2-outline"}
                sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }}
              />

              <Iconify
                icon="eva:clock-outline"
                sx={{ mr: 0.5, width: 16, height: 16 }}
              />
              {/* {fToNow(notification?.updatedAt.toString())} */}
              {fToNow(notification?.createdAt.toString())}
            </Typography>
          }
        />
      </ListItemButton>
      <NotificationConfirmDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        title={
          <Typography gutterBottom>
            Are you sure you want to delete this notification?
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
              onClick={() => handleNotificationDelete(notification.id)}
            >
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------
function renderContent(notification) {
  const maxLength = 70;

  const truncatedMessage =
    notification?.message.length > maxLength
      ? `${notification?.message.slice(0, maxLength)}...`
      : notification?.message;

  const message = (
    <Typography variant="subtitle2">
      {notification?.User?.name}
      <Typography
        component="span"
        variant="body2"
        sx={{
          color: "text.secondary",
        }}
      >
        &nbsp; {noCase(truncatedMessage)}
      </Typography>
    </Typography>
  );
  return {
    message,
  };
}
