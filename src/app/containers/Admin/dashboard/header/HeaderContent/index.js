// material-ui
import { Box, IconButton, useMediaQuery, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import Badge from "@mui/material/Badge";

// project import
// import Search from "./Search";
import AccountPopover from "./AccountPopover";
import MobileSection from "./MobileSection";
import NotificationsPopover from "../../../../section/dashboard/header/HeaderContent/NotificationsPopover";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {/* {!matchesXs && <Search />} */}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}

      <Box sx={{ flexGrow: 1 }} />
      <Stack
        direction="row"
        alignItems="center"
        spacing={{
          xs: 0.5,
          sm: 1,
        }}
      >
        {/*  <IconButton size="large" aria-label="ToggleMode">
          <DarkModeIcon />
      </IconButton> */}

        <NotificationsPopover />

        {/* <IconButton size="large" aria-label="show 0 new mails">
          <Badge badgeContent={0} color="error">
            <MailIcon />
          </Badge>
        </IconButton> */}

        {!matchesXs && <AccountPopover />}
        {matchesXs && <MobileSection />}
      </Stack>
    </>
  );
};

export default HeaderContent;
