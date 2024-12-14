import React, { useEffect, useState } from "react";
import { Typography, Paper, Box } from "@mui/material";
import parse from "html-react-parser";
import { TermsOfUseData } from "../../../../services";
import { Helmet } from "react-helmet-async";

export default function TermsOfUse() {
  const [termsOfUseData, setTermsOfUseData] = useState(null);

  const getTermsOfConditionData = async () => {
    try {
      const response = await TermsOfUseData();
      const data = response.data.response[0].termsOfUse;
      setTermsOfUseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTermsOfConditionData();
  }, []);

  return (
    <>
      <Helmet>
        <title> Admin | Terms of Use</title>
      </Helmet>
      <Box>
        <Paper elevation={1} sx={{ padding: "34px", marginTop: "20px" }}>
          <Typography variant="body1" paragraph>
            {termsOfUseData && parse(termsOfUseData)}
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
