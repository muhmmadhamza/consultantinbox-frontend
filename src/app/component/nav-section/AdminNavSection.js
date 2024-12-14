import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText, ListSubheader, Divider } from "@mui/material";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import SvgColor from "../svg-color";
import { useSelector } from "react-redux";
import PermissionButton from "../../helpers/PermissionButton";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);
// ----------------------------------------------------------------------

AdminNavSection.propTypes = {
  data: PropTypes.array,
};

export default function AdminNavSection({ ...other }) {
  const { hasPermission = false } = useSelector(
    (state) => state.login
  );

  return (
    <>
      {hasPermission && (
        <Box {...other} sx={{ marginTop: "16px" }}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/admin/adminstate"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("house")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="Dashboard" />
            </StyledNavItem>
          </List>
        </Box>
      )}

        <PermissionButton modulePermissionName="view" moduleName="adminlist">
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
                Company Admin
              </ListSubheader>
              <StyledNavItem
                component={RouterLink}
                to="/admin/adminlist"
                sx={{
                  "&.active": {
                    color: "#3C4256",
                    bgcolor: "#ffffff",
                    fontWeight: "fontWeightBold",
                  },
                }}
              >
                <StyledNavItemIcon> {icon("company")} </StyledNavItemIcon>

                <ListItemText disableTypography primary="Company Admin list" />
              </StyledNavItem>
            </List>
          </Box>
        </PermissionButton>

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
              Users
            </ListSubheader>
            <StyledNavItem
              component={RouterLink}
              to="/admin/user"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("users")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="All Users" />
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
             Company Compliance
            </ListSubheader>
            <StyledNavItem
              component={RouterLink}
              to="/admin/compliancetask"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("ic_mail")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="Compliance Task" />
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
              Roles & Permissions
            </ListSubheader>
            <StyledNavItem
              component={RouterLink}
              to="/admin/roles"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon> {icon("ic_menu_item")} </StyledNavItemIcon>

              <ListItemText disableTypography primary="roles" />
            </StyledNavItem>
          </List>
        </Box>
      )}

{hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/admin/permissions"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon>
                {icon("professional-skills-icon")}
              </StyledNavItemIcon>

              <ListItemText disableTypography primary="permissions" />
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
              Terms & Conditions
            </ListSubheader>
            <StyledNavItem
              component={RouterLink}
              to="/admin/terms-use"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon>{icon("terms-condition")}</StyledNavItemIcon>

              <ListItemText disableTypography primary="Terms of Use" />
            </StyledNavItem>
          </List>
        </Box>
      )}
      {hasPermission && (
        <Box {...other}>
          <List disablePadding sx={{ p: 1 }}>
            <StyledNavItem
              component={RouterLink}
              to="/admin/privacy-policy"
              sx={{
                "&.active": {
                  color: "#3C4256",
                  bgcolor: "#ffffff",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <StyledNavItemIcon>{icon("privacy-icon")}</StyledNavItemIcon>
              <ListItemText disableTypography primary="Privacy Policy" />
            </StyledNavItem>
          </List>
        </Box>
      )}
    </>
  );
}

// ----------------------------------------------------------------------
