import * as React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";

import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Iconify from "../../../../component/iconify";

const MainCard = styled(Card)(({ theme }) => ({
  width: "32%",
  height: "235px",
  padding: "45px",
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

ProjectAddCard.propTypes = {
  handleCreateProject: PropTypes.func,
};
export default function ProjectAddCard({ handleCreateProject }) {
  const theme = useTheme();

  return (
    <MainCard>
      <CardHeader
        title={
          <Typography
            variant="h5"
            sx={{ alignItems: "center", textAlign: "center" }}
          >
            Add New Project
          </Typography>
        }
      />
      <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
        <Tooltip title="Add New Project" onClick={handleCreateProject}>
          <IconButton size="large">
            <Iconify icon={"ic:baseline-add-circle"} width={52} height={52} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </MainCard>
  );
}
