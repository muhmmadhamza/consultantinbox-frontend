// utils
import createAvatar from "../utils/createAvatar";
//
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../constant/apiEndPoints";

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user = {} } = useSelector((state) => state.login);

  return (
    <Avatar
      src={`${API_BASE_URL}/${user?.imageUrl}`}
      alt={user?.name}
      color={
        `${API_BASE_URL}/${user?.imageUrl}`
          ? "default"
          : createAvatar(user?.name).color
      }
      {...other}
    >
      {createAvatar(user?.name).name}
    </Avatar>
  );
}
