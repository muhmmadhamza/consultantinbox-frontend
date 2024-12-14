import PropTypes from "prop-types";
import { useMemo } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery, Divider } from "@mui/material";

// project import
import MiniDrawerStyled from "./MiniDrawerStyled";
import Logo from "../../../../component/logo";
import Scrollbar from "../../../../component/scrollbar";
//
import NavSection from "../../../../component/nav-section";
const drawerWidth = 260;

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //
const renderContent = (
  <Scrollbar
    sx={{
      height: 1,
      backgroundColor: "#3C4256 !important",
      "& .simplebar-content": {
        height: 1,
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    <Box
      sx={{
        px: 2.5,
        py: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
    </Box>

    <Divider sx={{ borderColor: "#ffffff", opacity: "inherit" }} />

    <NavSection />

    <Box sx={{ flexGrow: 1 }} />
  </Scrollbar>
);

const Nav = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  // responsive drawer container
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
      aria-label="mailbox folders"
    >
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={open}>
          {renderContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: "none",
              boxShadow: "inherit",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

Nav.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default Nav;
