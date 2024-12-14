import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AddLocationIcon from "@mui/icons-material/AddLocation";
// @mui
import {
  Stack,
  MenuItem,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
// hooks
import useToggle from "../../../../hooks/useToggle";
// components
import Iconify from "../../../../component/iconify";
import MenuPopover from "../../../../component/MenuPopover";
//
import KanbanConfirmDialog from "../kanban/KanbanConfirmDialog";
import show_Toast from "../../../../helpers/toast.helper";
import httpRequest from "../../../../axios/index";
import { StyledNavItemIcon } from "../../../../component/nav-section/styles";
import SvgColor from "../../../../component/svg-color";
import UpdateForm from "./UpdateForm";
import React from "react";
import PermissionButton from "../../../../helpers/PermissionButton";

// ----------------------------------------------------------------------
ProjectsIcons.propTypes = {
  id: PropTypes.number,
  ProjectData: PropTypes.func,
};

export default function ProjectsIcons({ id, ProjectData, projectform }) {
  const renameRef = useRef(null);

  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  const {
    toggle: openContacts,
    onOpen: onOpenContacts,
    onClose: onCloseContacts,
  } = useToggle();

  const [open, setOpen] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (open) {
      if (renameRef.current) {
        renameRef.current.focus();
      }
    }
  }, [open]);
  const icon = (name) => (
    <SvgColor
      src={`/assets/icons/navbar/${name}.svg`}
      sx={{ width: 1, height: 1 }}
    />
  );

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleDeleteProject = async () => {
    try {
      const response = await httpRequest.delete(`/api/projects/delete/${id}`);
      if (response?.data?.status === "success") {
        onCloseConfirm();
        ProjectData();
      }
      show_Toast({
        status: true,
        message: response?.data?.message || "Success",
      });
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleNavigateForm = (formdata) => {
    navigate("/dashboard/edit-formbuilder", { state: formdata });
    localStorage.setItem("editproject_id", projectform?.id);
  };
  const handleNavigateMap = (id) => {
    navigate("/dashboard/map", { state: id });
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <IconButton
          size="small"
          onClick={handleOpen}
          color={open ? "inherit" : "default"}
        >
          <Iconify icon={"eva:more-vertical-fill"} />
        </IconButton>
      </Stack>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          width: "auto",
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <MenuItem onClick={onOpenContacts}>
          <StyledNavItemIcon> {icon("ic_mail")} </StyledNavItemIcon>
          Edit form
        </MenuItem>
        
      <MenuItem onClick={()=>handleNavigateMap(id)}>
        <Stack direction={"row"} gap={1} sx={{ ml: "7px" }}>
         <AddLocationIcon/>
          <Typography>Map</Typography>
        </Stack>
      </MenuItem>

        <PermissionButton modulePermissionName="edit" moduleName="projects">
          <MenuItem component={RouterLink} to={`/dashboard/editproject/${id}`}>
            <Stack direction={"row"} gap={1} sx={{ ml: "7px" }}>
              <Iconify
                icon={"eva:edit-fill"}
                sx={{ width: 20, height: 20, flexShrink: 0 }}
              />
              <Typography>Edit</Typography>
            </Stack>
          </MenuItem>
        </PermissionButton>

        <PermissionButton modulePermissionName="delete" moduleName="projects">
          <MenuItem onClick={onOpenConfirm} sx={{ color: "error.main" }}>
            <Stack direction={"row"} gap={1} sx={{ ml: "7px" }}>
              <Iconify
                icon={"eva:trash-2-outline"}
                sx={{ width: 20, height: 20, flexShrink: 0 }}
              />
              <Typography>Delete</Typography>
            </Stack>
          </MenuItem>
        </PermissionButton>
      </MenuPopover>

      <KanbanConfirmDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        title={
          <Typography gutterBottom>
            Are you sure you want to delete <strong>Project</strong>?
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <strong>NOTE:</strong> All tasks related to this category will also
            be deleted.
          </Typography>
        }
        actions={
          <>
            <Button variant="outlined" color="inherit" onClick={onCloseConfirm}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteProject}
            >
              Delete
            </Button>
          </>
        }
      />

      <UpdateForm
        open={openContacts}
        onClose={onCloseContacts}
        title={
          <>
            <Stack>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  textAlign: "center",
                }}
              >
                {projectform.title}
              </Typography>
              {projectform?.Forms?.map((form, index) => (
                <React.Fragment key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      AlignItems: "center",
                      gap: ".3rem",
                    }}
                  >
                    <Box
                      sx={{
                        cursor: "pointer",
                        padding: "8px 8px 8px 12px",
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 1px 1px #091e4240,0 0 1px #091e424f",
                        margin: "4px 2px 4px 0",
                      }}
                    >
                      <Typography variant="body2">{form?.name}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignSelf: "center",
                        gap: ".3rem",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          color: "black !important",
                          border: "1px solid black !important",
                          "&:hover": {
                            backgroundColor: "#3C4256 !important",
                            color: "white !important",
                            border: "1px solid #3C4256 !important",
                          },
                        }}
                        onClick={() => handleNavigateForm(form)}
                      >
                        Edit
                      </Button>
                      {/* <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#3C4256 !important",
                          color: "white !important",
                          "&:hover": {
                            backgroundColor: "white !important",
                            color: "black !important",
                            border: "1px solid #3C4256",
                          },
                        }}
                        onClick={() => handleNavigatekanban(form?.id)}
                      >
                        kanban
                      </Button> */}
                    </Box>
                  </Box>
                </React.Fragment>
              ))}
            </Stack>
          </>
        }
        actions={
          <>
            <Button
              variant="outlined"
              sx={{
                color: "black !important",
                border: "1px solid black !important",
              }}
              onClick={onCloseContacts}
            >
              Cancel
            </Button>
          </>
        }
      />
    </>
  );
}
