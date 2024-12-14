import React from "react";
import { Box, Typography, Button } from "@mui/material";
import adminLogo from "../../../../assets/admin.png";
import { useNavigate } from "react-router-dom";

const LeftSection = (props) => {
  const { title, description } = props;
  const navigate = useNavigate();

  const profileDashboard = () => {
    navigate("/admin/user");
  };

  return (
    <Box
      sx={{
        background: "#3C4256",
        color: "white",
        borderRadius: "5px",
        padding: "16px 32px",
      }}
    >
      <Typography variant="h5" sx={{ padding: "16px 0px" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography>{description}</Typography>
          <Box sx={{ padding: "16px 0px" }}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#3C4256 !important",
                border: "2px solid white",
                color: "white !important",
                "&:hover": {
                  backgroundColor: "white !important",
                  color: "black !important",
                  border: "2px solid white",
                },
              }}
              onClick={profileDashboard}
            >
              View Users
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginBottom: "-17px" }}>
          <img src={adminLogo} alt="Admin Logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSection;
