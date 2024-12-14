import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { API_BASE_URL } from "../constant/apiEndPoints";

const useSocket = () => {
  const [notifications, setNotifications] = useState([]);
  const { user = {} } = useSelector((state) => state.login);

  // Establish a Socket.IO connection
  const socket = io(API_BASE_URL, {
    query: {
      userId: user.id,
    },
  });

  // Handle connection and disconnection events
  useEffect(() => {
    // Handle connection event
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    // Handle disconnection event
    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Handle custom events from the server
  useEffect(() => {
    // Handle welcome message
    socket.on("welcome", (message) => {
      console.log("Received welcome message:", message);
    });

    // Handle notifications
    socket.on("notification", (data) => {
      console.log("Received data from server:", data);
      // Update the notifications state when a new notification is received
      setNotifications((prevNotifications) => [data, ...prevNotifications]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("welcome");
      socket.off("notification");
    };
  }, [socket]);

  return { notifications, setNotifications };
};

export default useSocket;
