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
  FormControl,
} from "@mui/material";

const Form8 = () => {
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
      name: "text-1696870123754-0",
      access: false,
      subtype: "text",
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "See Chapter IV, Odor Test Procedure.",
      access: false,
    },
    {
      type: "header",
      subtype: "h4",
      label: "ODOR CONCENTRATION METER TEST REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Location:",
      className: "form-control",
      name: "text-1696870133778-0",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696870138562-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Test conducted by:",
      placeholder: "signature",
      className: "form-control",
      name: "text-1696870145466-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Instrument Manufacturer:",
      placeholder: "signature",
      className: "form-control",
      name: "text-1696870146073-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Serial Number:",
      className: "form-control",
      name: "number:-1696870147073-0",
      access: false,
      subtype: "number",
    },
    {
      type: "date",
      required: false,
      label: "Date of last calibration:",
      className: "form-control",
      name: "date-1696870149210-0",
      access: false,
    },
    {
      type: "header",
      subtype: "h4",
      label: "ODOR CONCENTRATION METER TEST REPORT",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Threshold Detection Level",
      placeholder: "% gas-in-air",
      className: "form-control",
      name: "number-1696870571818-0",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Readily Detectable Level",
      placeholder: "% gas-in-air",
      className: "form-control",
      name: "number-1696870573034-0",
      access: false,
      subtype: "number",
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696870583714-0",
      access: false,
      style: "default",
    },
  ]);

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "Odorization Check Report – Odor Concentration Test",
      // project_id: id,
      jsonData: jsonData,
      form_no: 8,
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
          <Typography variant="h9" align="left" gutterBottom mt={2}>
            See Chapter IV, Odor Test Procedure.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" align="left" gutterBottom mt={2}>
            ODOR CONCENTRATION METER TEST REPORT.
          </Typography>
        </Box>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Test conducted by:</FormLabel>
              <TextField
                fullWidth
                name="conducted"
                placeholder="signature"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Instrument Manufacturer:</FormLabel>
              <TextField
                fullWidth
                name="manufacturer"
                placeholder="signature"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Serial Number:</FormLabel>
              <TextField fullWidth type="number" name="serial:" size="small" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">
                Date of last calibration:
              </FormLabel>
              <TextField
                fullWidth
                name="calibration"
                type="date"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Box>
          <Typography variant="h6" align="center" gutterBottom mt={2}>
            ODOR CONCENTRATION METER TEST REPORT.
          </Typography>
        </Box>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Threshold Detection Level</FormLabel>
            <TextField
              fullWidth
              name="detection"
              type="number"
              placeholder=" % gas-in-air"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Readily Detectable Level</FormLabel>
            <TextField
              fullWidth
              name="detectable"
              type="number"
              placeholder=" % gas-in-air"
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
      </FormControl>
    </Container>
  );
};

export default Form8;
