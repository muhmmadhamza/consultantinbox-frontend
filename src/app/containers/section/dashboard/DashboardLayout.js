import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Box } from "@mui/material";
// @mui
import { styled } from "@mui/material/styles";
//
import Header from "./header";
import Nav from "./nav";

// types
import { openDrawer } from "../../../store/slices/login";
import Footer from "./Footer";
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 8,
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 8,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 8,
    paddingBottom: theme.spacing(14),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout(props) {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("lg"));
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state) => state.login);

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);
  return (
    <Box>
      <StyledRoot sx={{ display: "flex", width: "100%" }}>
        <Header open={open} handleDrawerToggle={handleDrawerToggle} />

        <Nav open={open} handleDrawerToggle={handleDrawerToggle} />
        <Main>
          {props.children}
          <Outlet />
        </Main>
      </StyledRoot>
      <Footer open={open} />
    </Box>
  );
}
