import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import IconsFile from "./ProjectsIcons";
import Iconify from "../../../../component/iconify";
import { useNavigate } from "react-router-dom";

import FormConfirmation from "./FormConfirmation";
import { AssignListData } from "../../../../services";
import show_Toast from "../../../../helpers/toast.helper";
import useToggle from "../../../../hooks/useToggle";
import PermissionButton from "../../../../helpers/PermissionButton";

const MainCard = styled(Card)(({ theme }) => ({
  width: "32%",
  height: "235px",
  [theme.breakpoints.down("lg")]: {
    width: "49%",
    height: "230px",
  },
  [theme.breakpoints.down("md")]: {
    width: "49%", // Change width to 50% when screen width is >= 1200px
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Change width to 100% when screen width is < 750px
    height: "225px",
  },
}));

ProjectsCard.propTypes = {
  companyId: PropTypes.number,
  projects: PropTypes.object,
  ProjectData: PropTypes.func,
};

export default function ProjectsCard({ projects, ProjectData ,companyId }) {
  const [managers, setManagers] = React.useState([]);

  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();

  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleNavigate = (formdata) => {
    navigate("/dashboard/formbuilder", { state: formdata });
    localStorage.setItem("project_id", projects?.id);
  };
 
  const handleNavigatekanban = (formid) => {
    navigate(`/dashboard/kanban/${projects?.id}/${formid}`);
  };

  const fetchManagerData = async () => {
    try {
      const response = await AssignListData(companyId);
      if (response?.data?.status === "success") {
        setManagers(response?.data?.response);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  React.useEffect(() => {
    fetchManagerData();
  }, []);

  return (
    <>
      <MainCard>
        <CardHeader
          action={
            <IconsFile
              id={projects?.id}
              ProjectData={ProjectData}
              projectform={projects}
            />
          }
          title={
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography variant="h5">
                {projects?.title.length > 19
                  ? `${projects?.title.slice(0, 19)}...`
                  : projects?.title}
              </Typography>
              <Box sx={{ marginLeft: "10px" }}>
                <Tooltip title="Manage Project" onClick={onOpenConfirm}>
                  <IconButton size="large">
                    <Iconify
                      icon={"ic:baseline-arrow-circle-right"}
                      width={32}
                      height={32}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          }
          subheader={
            <>
              <Typography variant="subtitle1">
                {managers.map(
                  (manager) =>
                    manager.id === projects?.manager_id && manager.name
                )}
              </Typography>
              <Typography>{formatDate(projects?.createdAt)} </Typography>
            </>
          }
        />
        <CardContent sx={{ height: "70px" }}>
          <Typography variant="body2" color="text.secondary">
            {projects?.description.length > 100
              ? `${projects?.description.slice(0, 100)}...`
              : projects?.description}
          </Typography>
        </CardContent>
      </MainCard>

      <FormConfirmation
        open={openConfirm}
        onClose={onCloseConfirm}
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
                {projects.title}
              </Typography>
              {projects?.Forms?.map((form, index) => (
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
                        onClick={() => handleNavigate(form)}
                      >
                        Edit
                      </Button>
                      <PermissionButton
                        modulePermissionName="view"
                        moduleName="kanban"
                      >
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#3C4256 !important",
                            color: "white !important",
                            "&:hover": {
                              backgroundColor: "white !important",
                              color: "black !important",
                              outline: "2px solid #3C4256",
                              outlineOffset: "-2px",
                            },
                          }}
                          onClick={() => handleNavigatekanban(form?.id)}
                        >
                          kanban
                        </Button>
                      </PermissionButton>
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
              onClick={onCloseConfirm}
            >
              Cancel
            </Button>
          </>
        }
      />
    </>
  );
}
