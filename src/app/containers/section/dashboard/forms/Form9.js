import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Container,
  FormLabel,
  Checkbox,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const Form9 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;

  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "ODORIZATION CHECK REPORT ODOR CONCENTRATION TEST",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1696925316943-0",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "MASTER METER SNIFF TEST REPORT",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label:
        "Master meter operators may comply with the requirements of §192.625 by obtaining an annual written confirmation from their gas supplier that the gas is appropriately odorized in accordance with the regulation. The master meter operator must also conduct sniff tests at the extremities of the system to confirm a gas odor",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Location:",
      className: "form-control",
      name: "text-1696925716551-0",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696925726046-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Odor Strenght:",
      inline: true,
      name: "radio-group-1696925721692-0",
      access: false,
      other: false,
      values: [
        {
          label: "Not Detectable",
          value: "option-1",
          selected: false,
        },
        {
          label: "Barely Detectable",
          value: "option-2",
          selected: false,
        },
        {
          label: "Readily Detectable",
          value: "option-3",
          selected: false,
        },
        {
          label: "Strong",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Test Conducted by:",
      className: "form-control",
      name: "text-1696925735550-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Witnessed by:",
      className: "form-control",
      name: "text-1696925737046-0",
      access: false,
      subtype: "text",
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696925758607-0",
      access: false,
      style: "default",
    },
    {
      type: "header",
      subtype: "h4",
      label:
        "*If the odor is not detectable or barely detectable you should notify your gas supplier immediately!",
      access: false,
    },
  ]);

  const [selectedLoadings, setSelectedLoadings] = useState({
    detectable: false,
    barely: false,
    readily: false,
    strong: false,
  });

  const handleLoadingChange = (value) => {
    setSelectedLoadings((prevLoadings) => ({
      ...prevLoadings,
      [value]: !prevLoadings[value],
    }));
  };

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "Odorization Check Report – Odor Concentration",
      // project_id: id,
      jsonData: jsonData,
      form_no: 9,
    };
    navigate("/dashboard/formbuilder", { state: data });
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{ display: "flex", gap: "1rem", justifyContent: "space-between" }}
      >
        <Button
          component={RouterLink}
          to="/dashboard/forms"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{
            backgroundColor: "#3C4256 !important",
            color: "white !important",
            "&:hover": {
              backgroundColor: "white !important",
              color: "black !important",
              border: "1px solid #3C4256",
            },
          }}
        >
          Go Back
        </Button>
        <Button
          onClick={handleNavigate}
          variant="outlined"
          sx={{
            backgroundColor: "#3C4256 !important",
            color: "white !important",
            "&:hover": {
              backgroundColor: "white !important",
              color: "black !important",
              border: "1px solid #3C4256",
            },
          }}
        >
          Edit and Save as New Template
        </Button>
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        ODORIZATION CHECK REPORT ODOR CONCENTRATION TEST
      </Typography>

      <FormControl>
        <Grid container mt={1}>
          <FormLabel component="legend">Operator</FormLabel>
          <TextField
            fullWidth
            name="operator"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Box>
          <Typography variant="h5" align="left" gutterBottom mt={2}>
            MASTER METER SNIFF TEST REPORT
          </Typography>
        </Box>
        <Box>
          <Typography variant="h10" align="left" gutterBottom mt={2}>
            Master meter operators may comply with the requirements of §192.625
            by obtaining an annual written confirmation from their gas supplier
            that the gas is appropriately odorized in accordance with the
            regulation. The master meter operator must also conduct sniff tests
            at the extremities of the system to confirm a gas odor
          </Typography>
        </Box>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">Location:</FormLabel>
              <TextField
                fullWidth
                name="location"
                placeholder="name"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">Date:</FormLabel>
              <TextField
                fullWidth
                name="date"
                type="date"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>

          <Grid container ml={2} mt={2}>
            <Grid item xs={12}>
              <FormLabel component="legend">Odor Strength:</FormLabel>
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.detectable}
                    onChange={() => handleLoadingChange("detectable")}
                  />
                }
                label=" Not Detectable*"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.barely}
                    onChange={() => handleLoadingChange("barely")}
                  />
                }
                label="Barely Detectable*"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.readily}
                    onChange={() => handleLoadingChange("readily")}
                  />
                }
                label="Readily Detectable"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.strong}
                    onChange={() => handleLoadingChange("strong")}
                  />
                }
                label="Strong"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Test conducted by:</FormLabel>
            <TextField
              fullWidth
              name="conducted"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Witnessed by:</FormLabel>
            <TextField
              fullWidth
              name="witnessed"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Box maxWidth="lg" style={{ width: "100%", marginTop: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
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
          >
            Submit Form
          </Button>
        </Box>
        <Typography variant="h6" align="center" gutterBottom mt={2}>
          *If the odor is not detectable or barely detectable you should notify
          your gas supplier immediately!
        </Typography>
      </FormControl>
    </Container>
  );
};

export default Form9;
