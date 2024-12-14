import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "@mui/material";

const FooterContent = () => {
  return (
    <Box
      sx={{
        padding: "22px",
        height: "67.87px",
        width: "100%",
        backgroundColor: "#FFFFFF",
        color: "#424242",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row", // Default direction
        "@media (max-width: 900px)": {
          flexDirection: "column", // Change to column on screens less than 900px
          marginBottom: "20px",
        },
        "@media (max-width: 500px)": {
          flexDirection: "column", // Change to column on screens less than 900px
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <CopyrightIcon />
        <Typography
          sx={{
            "@media (max-width: 500px)": {
              fontSize: "9px",
            },
          }}
        >
          Copyright {new Date().getFullYear()} COMPLYCORE All rights reserved
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "inherit !important",
          "@media (max-width: 500px)": {
            fontSize: "9px",
          },
        }}
      >
        Designed and Developed by&nbsp;
        <Link
          href="https://leadconcept.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "inherit !important" }}
        >
          LEADconcept
        </Link>
      </Typography>
    </Box>
  );
};

export default FooterContent;
