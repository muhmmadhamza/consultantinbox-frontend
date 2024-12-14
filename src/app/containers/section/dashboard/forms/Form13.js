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

const Form13 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "VALVE INSPECTION REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1697802906889-0",
      access: false,
      subtype: "text",
    },

    ////////////////////////////////////////===== Row1 =====//////////////////////////////////////
    {
      type: "text",
      required: false,
      label: "Valve Number",
      className: "form-control",
      name: "text-1697802989192-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803467625",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803466673",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803465528",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location (Form 8)",
      className: "form-control",
      name: "text-1697803076873",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803507296",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803506632",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803505080",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Date Inspected",
      className: "form-control",
      name: "text-1697803097038",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Inspected By",
      className: "form-control",
      name: "text-1697803118149",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803616847",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803617703",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803618495",
      access: false,
      subtype: "text",
    },

    ////////////////////////////////////////===== Row2 =====//////////////////////////////////////
    {
      type: "text",
      required: false,
      label: "Valve Number",
      className: "form-control",
      name: "text-1697802989192-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803467625",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803466673",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803465528",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location (Form 8)",
      className: "form-control",
      name: "text-1697803076873",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803507296",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803506632",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803505080",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Date Inspected",
      className: "form-control",
      name: "text-1697803097038",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Inspected By",
      className: "form-control",
      name: "text-1697803118149",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803616847",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803617703",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803618495",
      access: false,
      subtype: "text",
    },

    ////////////////////////////////////////===== Row3 =====//////////////////////////////////////
    {
      type: "text",
      required: false,
      label: "Valve Number",
      className: "form-control",
      name: "text-1697802989192-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803467625",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803466673",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803465528",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location (Form 8)",
      className: "form-control",
      name: "text-1697803076873",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803507296",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803506632",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803505080",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Date Inspected",
      className: "form-control",
      name: "text-1697803097038",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Inspected By",
      className: "form-control",
      name: "text-1697803118149",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803616847",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803617703",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803618495",
      access: false,
      subtype: "text",
    },

    ////////////////////////////////////////===== Row4 =====//////////////////////////////////////
    {
      type: "text",
      required: false,
      label: "Valve Number",
      className: "form-control",
      name: "text-1697802989192-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803467625",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803466673",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803465528",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location (Form 8)",
      className: "form-control",
      name: "text-1697803076873",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803507296",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803506632",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803505080",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Date Inspected",
      className: "form-control",
      name: "text-1697803097038",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      className: "form-control",
      name: "date-1698315344096-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Inspected By",
      className: "form-control",
      name: "text-1697803118149",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803616847",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803617703",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "",
      className: "form-control",
      name: "text-1697803618495",
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
  const [formData, setFormData] = useState({
    operator: "",
    number: "",
    location: "",
    inspected: "",
    inspectedby: "",
  });

  const [values, setValue] = useState();
  const handlevalue = (e) => {
    setValue(e.target.value);
  };

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "VALVE INSPECTION REPORT",
      // project_id: id,
      jsonData: jsonData,
      form_no: 13,
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
        VALVE INSPECTION REPORT
      </Typography>

      <FormControl>
        <Grid container mt={1}>
          <FormLabel component="legend">Operator</FormLabel>
          <TextField
            onChange={handlevalue}
            type="text"
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
        <Typography variant="h4" align="center" gutterBottom>
          ********
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">Valve Number</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="number"
                name="number"
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
                onChange={handlevalue}
                type="number"
                name="number1"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                type="number"
                name="number1"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                type="number"
                name="number3"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Location (Form 8)</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                fullWidth
                type="text"
                name="location1"
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
                onChange={handlevalue}
                fullWidth
                type="text"
                name="location3"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location2"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Date Inspected</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected1"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected2"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected3"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Inspected By</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
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
                onChange={handlevalue}
                type="text"
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

            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspectedby2"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspectedby3"
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

        <Typography variant="h4" align="center" gutterBottom>
          ********
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">Valve Number</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
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
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Location (Form 8)</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Date Inspected</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Inspected By</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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

        <Typography variant="h4" align="center" gutterBottom>
          ********
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">Valve Number</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
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
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Location (Form 8)</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Date Inspected</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Inspected By</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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

        <Typography variant="h4" align="center" gutterBottom>
          ********
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">Valve Number</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
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
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "5px" }}>
              <TextField
                onChange={handlevalue}
                fullWidth
                type="number"
                name="number"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Location (Form 8)</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="location"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Date Inspected</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="date"
                fullWidth
                name="inspected"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Inspected By</FormLabel>
            <Box>
              <TextField
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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
                onChange={handlevalue}
                type="text"
                fullWidth
                name="inspected"
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

export default Form13;
