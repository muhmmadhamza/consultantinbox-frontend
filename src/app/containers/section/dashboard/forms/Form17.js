import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";

import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Paper,
  FormControl,
} from "@mui/material";

const Form17 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h1",
      label: "GAS DISTRIBUTION INSPECTION AND LEAKAGE REPAIR",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1698222426166-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Adress",
      className: "form-control",
      name: "text-1698222439902-0",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Grade of Leak Case:",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698222483517-0",
      access: false,
      other: false,
      values: [
        {
          label: "Grade I",
          value: "option-1",
          selected: false,
        },
        {
          label: "Grade II",
          value: "",
          selected: false,
        },
        {
          label: "Grade III",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "textarea",
      required: false,
      label: "SKETCH SHOWING LEAKS LOCATED:",
      className: "form-control",
      name: "textarea-1698222638646-0",
      access: false,
      subtype: "textarea",
      rows: 4,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Please provide a sketch or description of the area.",
      access: false,
    },
    {
      type: "header",
      subtype: "h3",
      label: "Meter Set",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Meter No",
      className: "form-control",
      name: "number-1698223140564-0",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "(if inspected)",
      access: false,
    },
    {
      type: "header",
      subtype: "h3",
      label: "Leak Data",
      access: false,
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Detected By",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698223391056-0",
      access: false,
      other: false,
      values: [
        {
          label: "FI Unit",
          value: "option-1",
          selected: false,
        },
        {
          label: "IR/Laser",
          value: "",
          selected: false,
        },
        {
          label: "Visual/Vegetation",
          value: "",
          selected: false,
        },
        {
          label: "CGI",
          value: "",
          selected: false,
        },
        {
          label: "Odor",
          value: "",
          selected: false,
        },
        {
          label: "Bar Hole",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Collecting",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698223599805-0",
      access: false,
      other: false,
      values: [
        {
          label: "In Building",
          value: "option-1",
          selected: false,
        },
        {
          label: "Near Building",
          value: "",
          selected: false,
        },
        {
          label: "In Manhole",
          value: "",
          selected: false,
        },
        {
          label: "In Soil",
          value: "",
          selected: false,
        },
        {
          label: "Other",
          value: "",
          selected: false,
        },
        {
          label: "In Air",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Probable Source",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698223793261-0",
      access: false,
      other: false,
      values: [
        {
          label: "Mainline",
          value: "option-1",
          selected: false,
        },
        {
          label: "Service Line",
          value: "",
          selected: false,
        },
        {
          label: "Service Tap",
          value: "",
          selected: false,
        },
        {
          label: "Valve",
          value: "",
          selected: false,
        },
        {
          label: "Meter Set",
          value: "",
          selected: false,
        },
        {
          label: "Tee",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "C.G.I. Test",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698223875029-0",
      access: false,
      other: false,
      values: [
        {
          label: "Gas Percent (%)",
          value: "option-1",
          selected: false,
        },
        {
          label: "L.E.L.",
          value: "",
          selected: false,
        },
        {
          label: "P.P.M",
          value: "",
          selected: false,
        },
        {
          label: "Negative",
          value: "",
          selected: false,
        },
        {
          label: "",
          value: "",
          selected: false,
        },
        {
          label: "",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Surface",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698223956412-0",
      access: false,
      other: false,
      values: [
        {
          label: "Lawn",
          value: "option-1",
          selected: false,
        },
        {
          label: "Soil",
          value: "",
          selected: false,
        },
        {
          label: "Paved",
          value: "",
          selected: false,
        },
        {
          label: "Other",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Leak Cause",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698225403795-0",
      access: false,
      other: false,
      values: [
        {
          label: "Corrosion, External",
          value: "option-1",
          selected: false,
        },
        {
          label: "Corrosion, Atmosphere",
          value: "",
          selected: false,
        },
        {
          label: "Corrosion, Internal",
          value: "",
          selected: false,
        },
        {
          label: "Excavation",
          value: "",
          selected: false,
        },
        {
          label: "Other Outside Force",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Leak Cause",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698225743884-0",
      access: false,
      other: false,
      values: [
        {
          label: "Natural Forces",
          value: "option-1",
          selected: false,
        },
        {
          label: "Material, Weld or Joint Failure",
          value: "",
          selected: false,
        },
        {
          label: "Equipment Malfunction",
          value: "",
          selected: false,
        },
        {
          label: "Inappropriate Operations",
          value: "",
          selected: false,
        },
        {
          label: "Other",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "header",
      subtype: "h3",
      label: "Component",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Pipe",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Valve",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Fitting",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Drip",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Drip Connection",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Regulator",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Other",
      access: false,
    },
    {
      type: "header",
      subtype: "h2",
      label: "Explanation",
      access: false,
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698226269458-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698226272930-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698226277594-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698226280123-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698226282810-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698226285874-0",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Part of System",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698226410907-0",
      access: false,
      other: false,
      values: [
        {
          label: "Main",
          value: "option-1",
          selected: false,
        },
        {
          label: "Service",
          value: "",
          selected: false,
        },
        {
          label: "Meter Set",
          value: "",
          selected: false,
        },
        {
          label: "Customer Piping",
          value: "",
          selected: false,
        },
        {
          label: "Other",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "header",
      subtype: "h2",
      label: "Pipe Type",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Steel",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Cast Iron",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Plastic",
      access: false,
    },
    {
      type: "header",
      subtype: "h5",
      label: "Other",
      access: false,
    },
    {
      type: "header",
      subtype: "h2",
      label: "Size",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "header",
      subtype: "h2",
      label: "Year Installed",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698321840056-0",
      access: false,
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Pipe Condition",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698226850390-0",
      access: false,
      other: false,
      values: [
        {
          label: "Good",
          value: "option-1",
          selected: false,
        },
        {
          label: "Fair",
          value: "",
          selected: false,
        },
        {
          label: "Poor",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Coating Condition",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698226889747-0",
      access: false,
      other: false,
      values: [
        {
          label: "Good",
          value: "option-1",
          selected: false,
        },
        {
          label: "Fair",
          value: "",
          selected: false,
        },
        {
          label: "Poor",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "date",
      required: false,
      label: "Date Repaired",
      className: "form-control",
      name: "date-1698226942939-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "Date Rechecked",
      className: "form-control",
      name: "date-1698226945059-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Remarks",
      className: "form-control",
      name: "text-1698226978347-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Inspection/Repair performed by:",
      className: "form-control",
      name: "text-1698226982114-0",
      access: false,
      subtype: "text",
    },
    {
      type: "button",
      label: "Submit Form",
      subtype: "button",
      className: "btn-default btn",
      name: "button-1698226984235-0",
      access: false,
      style: "default",
    },
  ]);

  const [selectedLoadings, setSelectedLoadings] = useState({
    gradeI: false,
    gradeII: false,
    gradeIII: false,
    smooth: false,
    pitted: false,
    depthOfPits: false,
    coatingSmooth: false,
    coatingPitted: false,
    coatingDepthOfPits: false,
    unit: false,
    man: false,
    laser: false,
    visual: false,
  });

  const handleLoadingChange = (loadingType) => {
    setSelectedLoadings((prevSelectedLoadings) => ({
      ...prevSelectedLoadings,
      [loadingType]: !prevSelectedLoadings[loadingType],
    }));
  };

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "GAS DISTRIBUTION INSPECTION AND LEAKAGE REPAIR",
      // project_id: id,
      jsonData: jsonData,
      form_no: 17,
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

      <Typography variant="h6" align="center" gutterBottom>
        GAS DISTRIBUTION INSPECTION AND LEAKAGE REPAIR
      </Typography>

      <FormControl>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">OPERATOR:</FormLabel>
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
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">Adress</FormLabel>
              <TextField
                fullWidth
                name="adress"
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
        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Grade of Leak Case:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.gradeI}
                  onChange={() => handleLoadingChange("gradeI")}
                />
              }
              label="Grade I"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.gradeII}
                  onChange={() => handleLoadingChange("gradeII")}
                />
              }
              label="Grade II"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.gradeIII}
                  onChange={() => handleLoadingChange("gradeIII")}
                />
              }
              label="Grade III"
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <FormLabel component="legend">
            SKETCH SHOWING LEAKS LOCATED:
          </FormLabel>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography>Sketch Section:</Typography>
            <Paper elevation={0}>
              <TextField fullWidth variant="outlined" multiline rows={3} />
              <Typography variant="body2" color="textSecondary">
                Please provide a sketch or description of the area.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6">METER SET</Typography>
            <FormLabel component="legend">Meter No</FormLabel>

            <TextField
              fullWidth
              name="way"
              type="number"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
            <p>(if inspected)</p>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mt: "20px" }}
        >
          LEAK DATA
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" align="left">
              Detected By
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.unit}
                    onChange={() => handleLoadingChange("unit")}
                  />
                }
                label="FI Unit"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.Laser}
                    onChange={() => handleLoadingChange("laser")}
                  />
                }
                label="IR/Laser"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Vegetation")}
                  />
                }
                label="Visual/Vegetation"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("CGI")}
                  />
                }
                label="CGI"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Odor")}
                  />
                }
                label="Odor"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Hole")}
                  />
                }
                label="Bar Hole"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" align="left">
              Collecting
            </Typography>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Building")}
                  />
                }
                label="In Building"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Building")}
                  />
                }
                label="Near Building"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.man}
                    onChange={() => handleLoadingChange("man")}
                  />
                }
                label="In Manhole"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Soil")}
                  />
                }
                label="In Soil"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Other")}
                  />
                }
                label="Other"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Air")}
                  />
                }
                label="In Air"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" align="left">
              Probable Source
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Mainline")}
                  />
                }
                label="Mainline"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("IR/Laser")}
                  />
                }
                label="Service Line"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Tap")}
                  />
                }
                label="Service Tap"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Valve")}
                  />
                }
                label="Valve"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Set")}
                  />
                }
                label="Meter Set"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Tee")}
                  />
                }
                label="Tee"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" align="left">
              C.G.I. Test
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("IR/Laser")}
                  />
                }
                label="Gas Percent (%)"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("IR/Laser")}
                  />
                }
                label="L.E.L."
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("P.P.M")}
                  />
                }
                label="P.P.M"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Negative")}
                  />
                }
                label="Negative"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("gradeI")}
                  />
                }
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("gradeI")}
                  />
                }
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: "30px" }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="left">
              Surface
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Lawn")}
                  />
                }
                label="Lawn"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("IR/Laser")}
                  />
                }
                label="Soil"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Paved")}
                  />
                }
                label="Paved"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Other")}
                  />
                }
                label="Other"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="left">
              Leak Cause
            </Typography>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("External")}
                  />
                }
                label="Corrosion, External"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Atmosphere")}
                  />
                }
                label="Corrosion, Atmosphere"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Internal")}
                  />
                }
                label="Corrosion, Internal"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Excavation")}
                  />
                }
                label="Excavation"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Force")}
                  />
                }
                label="Other Outside Force"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="left">
              Leak Cause
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Forces")}
                  />
                }
                label="Natural Forces"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("IR/Laser")}
                  />
                }
                label="Material, Weld or Joint Failure"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Malfunction")}
                  />
                }
                label="Equipment Malfunction"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Operations")}
                  />
                }
                label="Inappropriate Operations"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Other")}
                  />
                }
                label="Other"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: "30px" }}>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="left">
              Component
            </Typography>

            <Box marginTop={1.2}>
              <Typography>Pipe</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Valve</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Fitting</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Drip</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Drip Connection</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Regulator</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Other</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="left">
              Explanation
            </Typography>

            <Box mt={1.5}>
              <TextField
                fullWidth
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="left">
              Part of System
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("Main")}
                  />
                }
                label="Main"
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.loose}
                    onChange={() => handleLoadingChange("IR/Laser")}
                  />
                }
                label="Service"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.visual}
                    onChange={() => handleLoadingChange("visual")}
                  />
                }
                label="Meter Set"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.piping}
                    onChange={() => handleLoadingChange("piping")}
                  />
                }
                label="Customer Piping"
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.Other}
                    onChange={() => handleLoadingChange("Other")}
                  />
                }
                label="Other"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="left">
              Pipe Type
            </Typography>

            <Box marginTop={1.2}>
              <Typography>Steel</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Cast Iron</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Plastic</Typography>
            </Box>

            <Box marginTop={1.2}>
              <Typography>Other</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="left">
              Size
            </Typography>

            <Box mt={1}>
              <TextField
                fullWidth
                type="number"
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                type="number"
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                type="number"
                name="way"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="left">
              Year Installed
            </Typography>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>

            <Box mt={1}>
              <TextField
                fullWidth
                name="way"
                type="number"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "30px",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">External Pipe Condition:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.smooth}
                  onChange={() => handleLoadingChange("smooth")}
                />
              }
              label="Good"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.pitted}
                  onChange={() => handleLoadingChange("pitted")}
                />
              }
              label="Fair"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.depthOfPits}
                  onChange={() => handleLoadingChange("depthOfPits")}
                />
              }
              label="Poor"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Coating Condition:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.coatingSmooth}
                  onChange={() => handleLoadingChange("coatingSmooth")}
                />
              }
              label="Good"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.coatingPitted}
                  onChange={() => handleLoadingChange("coatingPitted")}
                />
              }
              label="Fair"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.coatingDepthOfPits}
                  onChange={() => handleLoadingChange("coatingDepthOfPits")}
                />
              }
              label="Poor"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">Date Repaired:</FormLabel>
            <TextField
              fullWidth
              type="date"
              name="way"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Date Rechecked:</FormLabel>
            <TextField
              fullWidth
              name="measures"
              type="date"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">Remarks:</FormLabel>
            <TextField
              fullWidth
              name="way"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Inspection/Repair performed by:
            </FormLabel>
            <TextField
              fullWidth
              name="way"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
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

export default Form17;
