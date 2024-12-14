import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { Grid, Stack, Typography } from "@mui/material";
// sections
import ProjectsCard from "./ProjectsCard";
import { Helmet } from "react-helmet-async";
import { ProjectsData } from "../../../../services/index";
import show_Toast from "../../../../helpers/toast.helper";
import ProjectAddCard from "./ProjectAddCard";
import PermissionButton from "../../../../helpers/PermissionButton";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

export default function Projects() {
  const { companyId = null } = useSelector((state) => state.login);

  const [projects, setProjects] = useState([]);


  const fetchProjectData = async () => {
    try {
      const response = await ProjectsData(companyId);
      const data = response?.data?.response;
      setProjects(data);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  
  useEffect(() => {
    fetchProjectData();
  }, []);

  const navigate = useNavigate();

  const handleCreateProject = () => {
    navigate("/dashboard/createprojects");
  };
  return (
    <>
      <Helmet>
        <title> Dashboard | Project</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: "30px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            sx={{
              height: "calc(100% - 32px)",
              overflowY: "hidden",
              flexFlow: "row wrap",
            }}
          >
            {projects?.map((project) => (
              <ProjectsCard
                key={project.id}
                companyId={companyId}
                projects={project}
                ProjectData={fetchProjectData}
              />
            ))}
            <PermissionButton modulePermissionName="add" moduleName="projects">
              <ProjectAddCard handleCreateProject={handleCreateProject} />
            </PermissionButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
