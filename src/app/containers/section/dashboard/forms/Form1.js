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
  FormControl,
} from "@mui/material";

const Form1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "REPORT OF MAIN AND SERVICE LINE INSPECTION",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "OPERATOR:",
      className: "form-control",
      name: "text-1696845438008-0",
      access: false,
      subtype: "text",
    },
    {
      type: "paragraph",
      subtype: "p",
      label:
        "This form is to be completed each time a transmission or distribution main or service line is uncovered for inspection or any other reason, such as making service connections, main extensions, replacements, etc.",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "Date",
      className: "form-control",
      name: "date-1696845455389-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Location",
      className: "form-control",
      name: "text-1696845466784-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Name of Inspector: ",
      className: "form-control",
      name: "text-1696845470184-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Designation of Line:",
      className: "form-control",
      name: "text-1696845474360-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Main",
      className: "form-control",
      name: "text-1696845476376-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Services:",
      className: "form-control",
      name: "text-1696845484560-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Line Size:",
      className: "form-control",
      name: "number-1696845488768-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Inches",
      className: "form-control",
      name: "number-1696845492408-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Maximum Operating Pressure:",
      className: "form-control",
      name: "number-1696845497192-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Pipe Material: ",
      className: "form-control",
      name: "text-1696845502896-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Pipe to Soil Potential: ",
      className: "form-control",
      name: "text-1696845513000-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Coating: Type:",
      className: "form-control",
      name: "text-1696845985167",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Coating Condition:",
      toggle: false,
      inline: true,
      name: "checkbox-group-1696846112114-0",
      access: false,
      other: false,
      values: [
        {
          label: "Good",
          value: "option-1",
          selected: false,
        },
        {
          label: "Poor",
          value: "option-2",
          selected: false,
        },
        {
          label: "Uncoated",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "External Pipe Condition:",
      toggle: false,
      inline: true,
      name: "checkbox-group-1696846283371",
      access: false,
      other: false,
      values: [
        {
          label: "Smooth",
          value: "option-1",
          selected: false,
        },
        {
          label: "Pitted",
          value: "option-2",
          selected: false,
        },
        {
          label: "Depth of Pits",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Internal Pipe Condition:",
      toggle: false,
      inline: true,
      name: "checkbox-group-1696846693137",
      access: false,
      other: false,
      values: [
        {
          label: "Smooth",
          value: "option-1",
          selected: false,
        },
        {
          label: "Pitted",
          value: "option-2",
          selected: false,
        },
        {
          label: "Depth of Pits",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Other Structure in the Area Endangering Pipeline:",
      className: "form-control",
      name: "text-1696846443471-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Condition of Right-of-Way:",
      className: "form-control",
      name: "text-1696846450640-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Corrective Measures Taken if Needed:",
      className: "form-control",
      name: "text-1696846455208-0",
      access: false,
      subtype: "text",
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Anodes Installed:",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "How Many?",
      className: "form-control",
      name: "number-1696846477104-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Size",
      className: "form-control",
      name: "number-1696846479872-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Location",
      className: "form-control",
      name: "text-1696846482584-0",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Soil:",
      toggle: false,
      inline: true,
      name: "checkbox-group-1696846351056",
      access: false,
      other: false,
      values: [
        {
          label: "Sand",
          value: "option-1",
          selected: false,
        },
        {
          label: "Cclay",
          value: "option-2",
          selected: false,
        },
        {
          label: "Loam",
          value: "option-3",
          selected: false,
        },
        {
          label: "Cinders",
          value: "option-4",
          selected: false,
        },
        {
          label: "Refuse",
          value: "option-5",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Packing:",
      toggle: false,
      inline: true,
      name: "checkbox-group-1696846818840",
      access: false,
      other: false,
      values: [
        {
          label: "Loose",
          value: "option-1",
          selected: false,
        },
        {
          label: "Medium",
          value: "option-2",
          selected: false,
        },
        {
          label: "Hard",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Moisture Content:",
      toggle: false,
      inline: true,
      name: "checkbox-group-1696846855695",
      access: false,
      other: false,
      values: [
        {
          label: "Dry",
          value: "option-1",
          selected: false,
        },
        {
          label: "Damp",
          value: "option-2",
          selected: false,
        },
        {
          label: "Wet",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "button",
      label: "Submit Form",
      subtype: "button",
      className: "btn-default btn",
      name: "button-1696846915072-0",
      access: false,
      style: "default",
    },
    {
      type: "header",
      subtype: "h4",
      label:
        "*Cross through this section if the pipe is not open to allow internal inspection",
      access: false,
    },
  ]);

  const [selectedLoadings, setSelectedLoadings] = useState({
    good: false,
    poor: false,
    uncoated: false,
    smooth: false,
    pitted: false,
    depthOfPits: false,
    smoth: false,
    pited: false,
    depthOfPit: false,
    sand: false,
    clay: false,
    loam: false,
    cinders: false,
    refuse: false,
    dry: false,
    damp: false,
    wet: false,
    loose: false,
    medium: false,
    hard: false,
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
      // project_id: id,
      jsonData: jsonData,
      form_no: 1,
    };
    navigate("/dashboard/formbuilder", { state: data });
  };
  const formid = localStorage.getItem("custom-formid");
  var intValue = parseInt(formid, 10);


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
          Create and Save as New Template
        </Button>
      </Box>
      <Typography variant="h6" align="center" gutterBottom>
        REPORT OF MAIN AND SERVICE LINE INSPECTION
      </Typography>
      <FormControl>
        <FormLabel component="legend">OPERATOR:</FormLabel>
        <TextField fullWidth name="operator" variant="outlined" size="small" />

        <Typography variant="body1" align="center" gutterBottom mt={3}>
          This form is to be completed each time a transmission or distribution
          main or service line is uncovered for inspection or any other reason,
          such as making service connections, main extensions, replacements,
          etc.
        </Typography>
        <Grid container spacing={2} mt={2}>
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
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Location</FormLabel>
              <TextField
                fullWidth
                name="location"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Name of Inspector:</FormLabel>
              <TextField
                fullWidth
                name="inspector"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Designation of Line:</FormLabel>
              <TextField
                fullWidth
                name="designation"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Main</FormLabel>
              <TextField
                fullWidth
                name="main"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Services:</FormLabel>
              <TextField
                fullWidth
                name="services"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Line Size:</FormLabel>
              <TextField
                fullWidth
                name="size"
                variant="outlined"
                type="number"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Inches</FormLabel>
              <TextField
                fullWidth
                name="inches"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">
                Maximum Operating Pressure:
              </FormLabel>
              <TextField
                fullWidth
                name="pressure"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Pipe Material:</FormLabel>
              <TextField
                fullWidth
                name="material"
                type="text"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Pipe to Soil Potential:</FormLabel>
              <TextField
                fullWidth
                name="potential"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Coating: Type:</FormLabel>
              <TextField
                fullWidth
                name="type"
                variant="outlined"
                size="small"
              />
            </Box>
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
                  checked={selectedLoadings.good}
                  onChange={() => handleLoadingChange("good")}
                />
              }
              label="Good"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.poor}
                  onChange={() => handleLoadingChange("poor")}
                />
              }
              label="Poor"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.uncoated}
                  onChange={() => handleLoadingChange("uncoated")}
                />
              }
              label="Uncoated"
            />
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
              label="Smooth"
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
              label="Pitted"
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
              label="Depth of Pits"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Internal Pipe Condition:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.smoth}
                  onChange={() => handleLoadingChange("smoth")}
                />
              }
              label="Smooth"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.pited}
                  onChange={() => handleLoadingChange("pited")}
                />
              }
              label="Pitted"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.depthOfPit}
                  onChange={() => handleLoadingChange("depthOfPit")}
                />
              }
              label="Depth of Pits"
            />
          </Grid>
        </Grid>

        <Grid mt={2}>
          <FormLabel component="legend">
            Other Structures in the Area Endangering Pipeline:
          </FormLabel>
          <TextField
            fullWidth
            name="pipeline"
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">Condition of Right-of-Way:</FormLabel>
            <TextField fullWidth name="way" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Corrective Measures Taken if Needed:
            </FormLabel>
            <TextField
              fullWidth
              name="measures"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Anodes Installed:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">How Many?</FormLabel>
              <TextField
                fullWidth
                name="installed"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Size</FormLabel>
              <TextField
                fullWidth
                name="anodessize"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Location</FormLabel>
              <TextField
                fullWidth
                name="location"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Soil:</FormLabel>
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.sand}
                  onChange={() => handleLoadingChange("sand")}
                />
              }
              label="Sand"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.clay}
                  onChange={() => handleLoadingChange("clay")}
                />
              }
              label="Clay"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.loam}
                  onChange={() => handleLoadingChange("loam")}
                />
              }
              label="Loam"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.cinders}
                  onChange={() => handleLoadingChange("cinders")}
                />
              }
              label="Cinders"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.refuse}
                  onChange={() => handleLoadingChange("refuse")}
                />
              }
              label="Refuse"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Packing:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.loose}
                  onChange={() => handleLoadingChange("loose")}
                />
              }
              label="Loose"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.medium}
                  onChange={() => handleLoadingChange("medium")}
                />
              }
              label="Medium"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.hard}
                  onChange={() => handleLoadingChange("hard")}
                />
              }
              label="Hard"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Moisture Content:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.dry}
                  onChange={() => handleLoadingChange("dry")}
                />
              }
              label="Dry"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.damp}
                  onChange={() => handleLoadingChange("damp")}
                />
              }
              label="Damp"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.wet}
                  onChange={() => handleLoadingChange("wet")}
                />
              }
              label="Wet"
            />
          </Grid>
        </Grid>

        <Box maxWidth="lg" style={{ width: "100%", marginTop: "30px" }}>
          <Button
            type="submit"
            variant="contained"
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
          *Cross through this section if the pipe is not open to allow internal
          inspection
        </Typography>
      </FormControl>
    </Container>
  );
};

export default Form1;
