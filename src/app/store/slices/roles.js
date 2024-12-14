import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  permissionRoles: [],
};

const rolesSlice = createSlice({
  name: "roles",
  initialState: initialState,
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setPermissionRoles: (state, action) => {
      state.permissionRoles = action.payload;
    },
  },
});
export const { setRoles, setPermissionRoles} = rolesSlice.actions;
export default rolesSlice.reducer;
