import React, { useEffect, useState } from "react";
import { Typography, Paper, Box } from "@mui/material";
import parse from "html-react-parser";
import { PrivacyPolicyData } from "../../../../services";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  const [privacyData, setPrivacyData] = useState(null);

  const getPrivacyPolicyData = async () => {
    try {
      const response = await PrivacyPolicyData();
      const data = response.data.response[0].privacyPolicy;
      setPrivacyData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPrivacyPolicyData();
  }, []);

  return (
    <>
      <Helmet>
        <title> Admin | Privacy Policy</title>
      </Helmet>
      <Box>
        <Paper elevation={1} sx={{ padding: "34px", marginTop: "20px" }}>
          <Typography variant="body1" paragraph>
            {privacyData && parse(privacyData)}
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
