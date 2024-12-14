import { combineReducers } from "@reduxjs/toolkit";
import login from "./login";
import kanban from "./kanban";
import roles from "./roles";
import form from "./formbuilder";
import calendar from "./calendar";

export default combineReducers({
  login,
  kanban,
  roles,
  form,
  calendar,
});
