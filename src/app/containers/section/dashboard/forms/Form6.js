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
  FormControlLabel,
  FormLabel,
  FormControl,
  Radio,
} from "@mui/material";

const Form6 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;

  const navigate = useNavigate();

  const [selectedLoadings, setSelectedLoadings] = useState({
    typeOfLoadings: "",
  });

  const handleTypeOfLoadingsChange = (value, name) => {
    setSelectedLoadings((prevLoadings) => ({
      ...prevLoadings,
      [name]: value,
    }));
  };

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "RELIEF VALVE INSPECTION REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator:",
      className: "form-control",
      name: "text-1696865217827-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location",
      className: "form-control",
      name: "text-1696865566766",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "RELIEF VALVE INSPECTION REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Make",
      className: "form-control",
      name: "text-1696865566094",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Type",
      className: "form-control",
      name: "text-1696865565262",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Size",
      className: "form-control",
      name: "text-1696865564766",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Orifice Size",
      className: "form-control",
      name: "text-1696865559078",
      access: false,
      subtype: "number",
    },
    {
      type: "radio-group",
      required: false,
      label: "Type of Loadings:",
      inline: true,
      name: "radio-group-1696865881509-0",
      access: false,
      other: false,
      values: [
        {
          label: "Spring",
          value: "option-1",
          selected: false,
        },
        {
          label: "Pilot",
          value: "option-2",
          selected: false,
        },
        {
          label: "Other",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Pressure Setting: ",
      className: "form-control",
      name: "text-1696865934102",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Connecting Pipe Size",
      className: "form-control",
      name: "text-1696865954238",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Vent Stack Size",
      className: "form-control",
      name: "text-1696865953702",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Capacity:",
      className: "form-control",
      name: "number-1696865952878",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Coating Condition:",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Relief Valve:",
      className: "form-control",
      name: "text-1696866217302",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Recording Gauge:",
      className: "form-control",
      name: "text-1696866233759",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Support Piping:",
      className: "form-control",
      name: "text-1696866233118",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "General Area:",
      className: "form-control",
      name: "text-1696866232590",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Repairs Required: ",
      className: "form-control",
      name: "text-1696866230254",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Repairs Made:",
      className: "form-control",
      name: "text-1696866229718",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Remarks:",
      className: "form-control",
      name: "text-1696866232038",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Inspector:",
      className: "form-control",
      name: "text-1696866231430",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Signature:",
      className: "form-control",
      name: "text-1696866230806",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696866409287-0",
      access: false,
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696866422943-0",
      access: false,
      style: "default",
    },
  ]);

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "RELIEF VALVE INSPECTION REPORT",
      // project_id: id,
      jsonData: jsonData,
      form_no: 6,
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
        RELIEF VALVE INSPECTION REPORT
      </Typography>
      <FormControl>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Operator</FormLabel>
            <TextField
              fullWidth
              name="operator"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Location</FormLabel>
            <TextField
              fullWidth
              name="location"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" align="center" gutterBottom mt={3}>
          RELIEF VALVE INSPECTION REPORT
        </Typography>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Make</FormLabel>
            <TextField fullWidth name="make" variant="outlined" size="small" />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Type</FormLabel>
            <TextField
              fullWidth
              name="types"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend"> Size</FormLabel>
            <TextField
              fullWidth
              name="size"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Orifice Size</FormLabel>
            <TextField
              fullWidth
              name="orifice"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Type of Loadings:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.typeOfLoadings === "Spring"}
                  onChange={() =>
                    handleTypeOfLoadingsChange("Spring", "typeOfLoadings")
                  }
                  value="Spring"
                  name="typeOfLoadings"
                />
              }
              label="Spring"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.typeOfLoadings === "Pilot"}
                  onChange={() =>
                    handleTypeOfLoadingsChange("Pilot", "typeOfLoadings")
                  }
                  value="Pilot"
                  name="typeOfLoadings"
                />
              }
              label="Pilot"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.typeOfLoadings === "Other"}
                  onChange={() =>
                    handleTypeOfLoadingsChange("Other", "typeOfLoadings")
                  }
                  value="Other"
                  name="typeOfLoadings"
                />
              }
              label="Other"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Pressure Setting:</FormLabel>
              <TextField
                fullWidth
                name="pressure"
                type="text"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Connecting Pipe Size</FormLabel>
              <TextField
                fullWidth
                name="connecting"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Vent Stack Size</FormLabel>
              <TextField
                fullWidth
                name="vent"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid mt={2}>
          <FormLabel component="legend">Capacity:</FormLabel>
          <TextField
            fullWidth
            name="capacity"
            type="number"
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Coating Condition:</FormLabel>
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Relief Valve:</FormLabel>
            <TextField
              fullWidth
              name="relief"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Recording Gauge:</FormLabel>
            <TextField
              fullWidth
              name="recording"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">Support Piping:</FormLabel>
            <TextField
              fullWidth
              name="support"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={3}>
            <FormLabel component="legend">General Area:</FormLabel>
            <TextField
              fullWidth
              name="general"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Repairs Required:</FormLabel>
              <TextField
                fullWidth
                name="repairs"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Repairs Made:</FormLabel>
              <TextField
                fullWidth
                name="made"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Remarks:</FormLabel>
              <TextField
                fullWidth
                name="remarks"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Inspector:</FormLabel>
              <TextField
                fullWidth
                name="inspector"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Signature</FormLabel>
              <TextField
                fullWidth
                name="signature"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Date</FormLabel>
              <TextField
                fullWidth
                name="date"
                type="date"
                variant="outlined"
                size="small"
              />
            </Box>
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

export default Form6;
