import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText, ListSubheader, Divider } from "@mui/material";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import SvgColor from "../svg-color";
import { useSelector } from "react-redux";
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);
// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ ...other }) {
  const { hasPermission = false } = useSelector((state) => state.login);

  return (
    <>
      <Box {...other} sx={{ marginTop: "16px" }}>
        <List disablePadding sx={{ p: 1 }}>
          <StyledNavItem
            component={RouterLink}
            to="/dashboard/chatbotUi"
            sx={{
              "&.active": {
                color: "#3C4256",
                bgcolor: "#ffffff",
                fontWeight: "fontWeightBold",
              },
            }}
          >
            <StyledNavItemIcon> {icon("ic_chat")} </StyledNavItemIcon>

            <ListItemText disableTypography primary="chatbot" />
          </StyledNavItem>
        </List>
      </Box>
      {/* <Box {...other}>
        <List disablePadding sx={{ p: 1 }}>
          <StyledNavItem
            component={RouterLink}
            to="/dashboard/adminstate"
            sx={{
              "&.active": {
                color: "#3C4256",
                bgcolor: "#ffffff",
                fontWeight: "fontWeightBold",
              },
            }}
          >
            <StyledNavItemIcon> {icon("house")} </StyledNavItemIcon>
            <ListItemText disableTypography primary="dashboard" />
          </StyledNavItem>
        </List>
      </Box> */}
      {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <ListSubheader
              sx={{
                padding: "0px !important",
                backgroundColor: "transparent",
                color: "#ffffff",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Divider
                sx={{
                  borderColor: "#ffffff",
                  opacity: "inherit",
                  width: "10%",
                  marginRight: "5px",
                }}
              />
              Statistics
            </ListSubheader>
            <StyledNavItem
              component={RouterLink}
              to="/dashboard/projects"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("ic_blog")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="projects" />
            </StyledNavItem>
          </List>
        </Box>
      )}

      {/*  // <Box {...other}>
      //   <List disablePadding sx={{ p: 1 }}>
      //     <StyledNavItem
      //       component={RouterLink}
      //       to="/dashboard/kanban"
      //       sx={{
      //         "&.active": {
      //           color: "#3C4256",
      //           bgcolor: "#ffffff",
      //           fontWeight: "fontWeightBold",
      //         },
      //       }}
      //     >
      //       <StyledNavItemIcon> {icon("ic_kanban")} </StyledNavItemIcon>

      //       <ListItemText disableTypography primary="kanban" />
      //     </StyledNavItem>
      //   </List>
          // </Box> */}
      {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/dashboard/formbuilder"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("form")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="form builder" />
            </StyledNavItem>
          </List>
        </Box>
      )}
      {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/dashboard/forms"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("form")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="Template forms" />
            </StyledNavItem>
          </List>
        </Box>
      )}
      {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/dashboard/projects-Forms"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("ic_mail")} </StyledNavItemIcon>
              <ListItemText disableTypography primary="Custom Projects Forms" />
            </StyledNavItem>
          </List>
        </Box>
      )}
    {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/dashboard/custom-template-Form"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("ic_mail")} </StyledNavItemIcon>
              <ListItemText disableTypography primary="Custom Template Forms" />
            </StyledNavItem>
          </List>
        </Box>
      )}





      {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <ListSubheader
              sx={{
                padding: "0px !important",
                backgroundColor: "transparent",
                color: "#ffffff",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Divider
                sx={{
                  borderColor: "#ffffff",
                  opacity: "inherit",
                  width: "10%",
                  marginRight: "5px",
                }}
              />
              Plugins
            </ListSubheader>
            <StyledNavItem
              component={RouterLink}
              to="/dashboard/schedulingPage"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("ic_calendar")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="Scheduling" />
            </StyledNavItem>
          </List>
        </Box>
      )}
      {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/dashboard/map"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("map")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="Map" />
            </StyledNavItem>
          </List>
        </Box>
      )}

      {/* <Box {...other}>
        <List disablePadding sx={{ p: 1 }}>
          <ListSubheader
            sx={{
              padding: "0px !important",
              backgroundColor: "transparent",
              color: "#ffffff",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Divider
              sx={{
                borderColor: "#ffffff",
                opacity: "inherit",
                width: "10%",
                marginRight: "5px",
              }}
            />
            Charts
          </ListSubheader>
          <StyledNavItem
            component={RouterLink}
            to=""
            // sx={{
            //   "&.active": {
            //     color: "#3C4256",
            //     bgcolor: "#ffffff",
            //     fontWeight: "fontWeightBold",
            //   },
            // }}
          >
            <StyledNavItemIcon> {icon("chart")} </StyledNavItemIcon>

            <ListItemText disableTypography primary="all charts" />
          </StyledNavItem>
        </List>
      </Box> */}

      {/* <Box {...other}>
        <List disablePadding sx={{ p: 1 }}>
          <StyledNavItem
            component={RouterLink}
            to=""
            // sx={{
            //   "&.active": {
            //     color: "#3C4256",
            //     bgcolor: "#ffffff",
            //     fontWeight: "fontWeightBold",
            //   },
            // }}
          >
            <StyledNavItemIcon> {icon("pie-chart")} </StyledNavItemIcon>

            <ListItemText disableTypography primary="apex charts" />
          </StyledNavItem>
        </List>
      </Box>

      <Box {...other}>
        <List disablePadding sx={{ p: 1 }}>
          <StyledNavItem
            component={RouterLink}
            to=""
            // sx={{
            //   "&.active": {
            //     color: "#3C4256",
            //     bgcolor: "#ffffff",
            //     fontWeight: "fontWeightBold",
            //   },
            // }}
          >
            <StyledNavItemIcon> {icon("ic_analytics")} </StyledNavItemIcon>

            <ListItemText disableTypography primary="chart sparkines" />
          </StyledNavItem>
        </List>
      </Box> */}
    </>
  );
}

// ----------------------------------------------------------------------
