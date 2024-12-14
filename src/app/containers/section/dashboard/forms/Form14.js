import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
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

const Form14 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h1",
      label: "CORROSION CONTROL - RECTIFIER INSPECTION",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1697721274874-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location",
      className: "form-control",
      name: "text-1697721287537-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Rectifier Manufacturer",
      className: "form-control",
      name: "text-1697722084679-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Rectifier Serial Number",
      className: "form-control",
      name: "text-1697722021528-0",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date",
      className: "form-control",
      name: "date-1697721509504-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "",
      className: "form-control",
      name: "date-1697721507769-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Supply Voltage",
      className: "form-control",
      name: "number-1697722161079-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "",
      className: "form-control",
      name: "number-1697722112356-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Output Volts",
      className: "form-control",
      name: "number-1697722218759-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "",
      className: "form-control",
      name: "number-1697722223124-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Output Amps",
      className: "form-control",
      name: "number-1697722243591-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "",
      className: "form-control",
      name: "number-1697722218976-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Rectifier Condition",
      className: "form-control",
      name: "text-1697722264871-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697722218763-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Inspected By",
      className: "form-control",
      name: "text-1697721631208-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697721617474-0",
      access: false,
      subtype: "text",
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1697803775181-0",
      access: false,
      style: "default",
    },
  ]);

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "CORROSION CONTROL – RECTIFIER INSPECTION",
      // project_id: id,
      jsonData: jsonData,
      form_no: 14,
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
        CORROSION CONTROL – RECTIFIER INSPECTION
      </Typography>

      <FormControl>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Operator</FormLabel>
            <TextField
              fullWidth
              name="operator"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Location</FormLabel>
            <TextField
              fullWidth
              name="location"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">RECTIFIER MANUFACTURER:</FormLabel>
            <TextField
              fullWidth
              name="manufacture"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">RECTIFIER SERIAL NUMBER:</FormLabel>
            <TextField
              fullWidth
              name="number"
              type="number"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">Date</FormLabel>
            <Box>
              <TextField
                fullWidth
                type="date"
                name="date"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                type="date"
                name="date1"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Supply Voltage</FormLabel>
            <Box>
              <TextField
                fullWidth
                type="number"
                name="voltage"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                type="number"
                name="voltage1"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Output Volts</FormLabel>
            <Box>
              <TextField
                fullWidth
                type="number"
                name="volts"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>

            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                type="number"
                name="volts1"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Output Amps</FormLabel>
            <Box>
              <TextField
                fullWidth
                type="number"
                name="amps"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>

            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                name="amps1"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Rectifier Condition</FormLabel>
            <Box>
              <TextField
                fullWidth
                name="condition"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>

            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                name="condition1"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Inspected By</FormLabel>
            <Box>
              <TextField
                fullWidth
                name="inspectedby"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>

            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                name="inspectedby1"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box maxWidth="lg" style={{ width: "100%", marginTop: "30px" }}>
          <Button
            type="submit"
            variant="contained"
            //disabled={isSubmitting}
            fullWidth
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
            Submit Form
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Form14;
