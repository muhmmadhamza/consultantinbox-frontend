import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
  drawerOpen: false,
  permissions: [],
  companyId: null,
  hasPermission: false,
};

const loginReducer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state.user, ...action.payload })
      );
      state.user = { ...state.user, ...action.payload };
      state.companyId = action.payload.company_id;
      state.hasPermission = state.user.role_id === 1 ? false : true;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoginStateEmpty: (state, action) => {
      localStorage.clear();
      state.user = {};
      state.permissions = [];
      state.isAuthenticated = false;
      state.drawerOpen = false;
      state.companyId = null;
      state.hasPermission = false;

    },
    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },
    setPermissions: (state, action) => {
      state.permissions = [...state.permissions, ...action.payload];
    },
    setCompanyId: (state, action) => {
      state.companyId = action.payload;
    },
    setHasPermission: (state, action) => {
      const { hasPermission } = action.payload;
      state.hasPermission = hasPermission;
    },    
  },
});
export const {
  user,
  setUser,
  setIsAuthenticated,
  setLoginStateEmpty,
  openDrawer,
  setPermissions,
  setCompanyId,
  setHasPermission,
} = loginReducer.actions;
export default loginReducer.reducer;
