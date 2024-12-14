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
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";

const Form2 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;

  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "GAS LEAK AND REPAIR REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "OPERATOR:",
      className: "form-control",
      name: "text-1696847469566-0",
      access: false,
      subtype: "text",
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Receipt of Report:",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696847484118-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696847557077-0",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "option-1",
          selected: false,
        },
        {
          label: "PM",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Location of Leak:",
      className: "form-control",
      name: "text-1696847569293-0",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "Regulator Information",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Reported by",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Name",
      className: "form-control",
      name: "text-1696847908390-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Address",
      className: "form-control",
      name: "text-1696847909870-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Description of Leak:",
      inline: true,
      name: "radio-group-1696847958516-0",
      access: false,
      other: false,
      values: [
        {
          label: "Inside",
          value: "option-1",
          selected: false,
        },
        {
          label: "Outside",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Dispatched",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696847976830-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696848370822",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "option-1",
          selected: false,
        },
        {
          label: "PM",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Investigation Assigned to:",
      placeholder: "name",
      className: "form-control",
      name: "text-1696848022854-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Assigned as Immediate Action Required?",
      inline: true,
      name: "radio-group-1696847989263",
      access: false,
      other: false,
      values: [
        {
          label: "Yes",
          value: "option-1",
          selected: false,
        },
        {
          label: "No",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Investigation",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696848363214-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696848393814",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "option-1",
          selected: false,
        },
        {
          label: "PM",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Investigation by:",
      className: "form-control",
      name: "text-1696848385374-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Leak Found?",
      inline: true,
      name: "radio-group-1696848032182",
      access: false,
      other: false,
      values: [
        {
          label: "Yes",
          value: "option-1",
          selected: false,
        },
        {
          label: "No",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "CGI Used?",
      inline: true,
      name: "radio-group-1696848402910",
      access: false,
      other: false,
      values: [
        {
          label: "Yes",
          value: "option-1",
          selected: false,
        },
        {
          label: "No",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Leak Grade:",
      inline: true,
      name: "radio-group-1696848411134",
      access: false,
      other: false,
      values: [
        {
          label: "1",
          value: "option-1",
          selected: false,
        },
        {
          label: "2",
          value: "option-2",
          selected: false,
        },
        {
          label: "3",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Location of Leak:",
      className: "form-control",
      name: "text-1696848419710-0",
      access: false,
      subtype: "text",
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Cause of Leak:",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Condition Made Safe:",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696848456382",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696848504006",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "option-1",
          selected: false,
        },
        {
          label: "PM",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Repair Report:",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Length of Pipe Exposed: ",
      placeholder: "feet",
      className: "form-control",
      name: "number-1696848967030-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Leak at: Threads",
      inline: true,
      name: "radio-group-1696849063686",
      access: false,
      other: false,
      values: [
        {
          label: "Coupling",
          value: "option-1",
          selected: false,
        },
        {
          label: "Weld (type)",
          value: "option-2",
          selected: false,
        },
        {
          label: "Value",
          value: "option-3",
          selected: false,
        },
        {
          label: "Other",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Pipe Size:",
      inline: true,
      name: "radio-group-1696849157894",
      access: false,
      other: false,
      values: [
        {
          label: "Inches/Steel",
          value: "option-1",
          selected: false,
        },
        {
          label: "Plastic",
          value: "option-2",
          selected: false,
        },
        {
          label: "Cast Iron",
          value: "option-3",
          selected: false,
        },
        {
          label: "Other",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Coating:",
      inline: true,
      name: "radio-group-1696849223430",
      access: false,
      other: false,
      values: [
        {
          label: "Enamel",
          value: "option-1",
          selected: false,
        },
        {
          label: "Wrapped",
          value: "option-2",
          selected: false,
        },
        {
          label: "Galvanized",
          value: "option-3",
          selected: false,
        },
        {
          label: "Other",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Condition:",
      inline: true,
      name: "radio-group-1696849278542",
      access: false,
      other: false,
      values: [
        {
          label: "Excellent",
          value: "option-1",
          selected: false,
        },
        {
          label: "Good",
          value: "option-2",
          selected: false,
        },
        {
          label: "Fair",
          value: "option-3",
          selected: false,
        },
        {
          label: "Poor",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Soil Conditions:",
      inline: true,
      name: "radio-group-1696849328078",
      access: false,
      other: false,
      values: [
        {
          label: "Sand",
          value: "option-1",
          selected: false,
        },
        {
          label: "Clay",
          value: "option-2",
          selected: false,
        },
        {
          label: "Loam",
          value: "option-3",
          selected: false,
        },
        {
          label: "Other (describe)",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Moisture:",
      inline: true,
      name: "radio-group-1696849388886",
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
      type: "text",
      required: false,
      label: "Repair Made:",
      className: "form-control",
      name: "text-1696849513542-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Repair Coating Type: ",
      inline: true,
      name: "radio-group-1696849492662",
      access: false,
      other: false,
      values: [
        {
          label: "Mastic",
          value: "option-1",
          selected: false,
        },
        {
          label: "Hot Applied Tape",
          value: "option-2",
          selected: false,
        },
        {
          label: "Other (describe)",
          value: "option-3",
          selected: false,
        },
      ],
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
      label: "How many?",
      className: "form-control",
      name: "number-1696849516766",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Anode Weight",
      className: "form-control",
      name: "number-1696849516559",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "lbs Depth Installed",
      className: "form-control",
      name: "number-1696849535294",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Repairs Made by:",
      placeholder: "name",
      className: "form-control",
      name: "text-1696849943670",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696849600742-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Foreman",
      placeholder: "signature",
      className: "form-control",
      name: "text-1696849619326",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Supervisor:",
      placeholder: "signature",
      className: "form-control",
      name: "text-1696849647166",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Posted by:",
      className: "form-control",
      name: "text-1696849646430",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696849650694",
      access: false,
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696860409494-0",
      access: false,
      style: "default",
    },
  ]);

  const [selectedLoadings, setSelectedLoadings] = useState({
    am: false,
    pm: false,
    inside: false,
    outside: false,
    dispatch_am: false,
    dispatch_pm: false,
    invest_am: false,
    dinvest_pm: false,
    leak_am: false,
    leak_pm: false,

    leak_yes: false,
    leak_no: false,
    yes: false,
    no: false,
    immediateAction_yes: false,
    immediateAction_no: false,
    grade1: false,
    grade2: false,
    grade3: false,
    coupling: false,
    weld: false,
    value: false,
    other_leak: false,
    steel: false,
    plastic: false,
    cast: false,
    pipe_other: false,
    enamel: false,
    wrapped: false,
    galvanized: false,
    coating_other: false,
    excellent: false,
    good: false,
    fair: false,
    poor: false,
    sand: false,
    clay: false,
    loam: false,
    describe: false,
    damp: false,
    dry: false,
    wet: false,
    mastic: false,
    tap: false,
    other: false,
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
      form_no: 2,
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
        GAS LEAK AND REPAIR REPORT
      </Typography>

      <FormControl>
        <FormLabel component="legend">OPERATOR:</FormLabel>
        <TextField fullWidth name="operator" variant="outlined" size="small" />

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Receipt of Report:</FormLabel>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Date:</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={1}>
              {" "}
              Time{" "}
            </FormLabel>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.am}
                  onChange={() => handleLoadingChange("am")}
                />
              }
              label="AM"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.pm}
                  onChange={() => handleLoadingChange("pm")}
                />
              }
              label="PM"
            />
          </Grid>
        </Grid>

        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">Location of Leak:</FormLabel>
          <TextField
            fullWidth
            name="leak_location"
            variant="outlined"
            size="small"
          />
        </Grid>

        <Typography variant="h6" align="center" gutterBottom mt={3}>
          Regulator Information
        </Typography>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Reported by</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">Name</FormLabel>
              <TextField
                fullWidth
                name="name"
                variant="outlined"
                size="small"
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
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={3}>
              {" "}
              Description of Leak:
            </FormLabel>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.inside}
                  onChange={() => handleLoadingChange("inside")}
                />
              }
              label="Inside"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.outside}
                  onChange={() => handleLoadingChange("outside")}
                />
              }
              label="Outside"
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Dispatched</FormLabel>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Date:</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={1}>
              {" "}
              Time{" "}
            </FormLabel>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.dispatch_am}
                  onChange={() => handleLoadingChange("dispatch_am")}
                />
              }
              label="AM"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.dispatch_pm}
                  onChange={() => handleLoadingChange("dispatch_pm")}
                />
              }
              label="PM"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle1">
              Investigation Assigned to:
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              name="date"
              variant="outlined"
              placeholder="name"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">
                  Assigned as Immediate Action Required?
                </FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.immediateAction_yes}
                      onChange={() =>
                        handleLoadingChange("immediateAction_yes")
                      }
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.immediateAction_no}
                      onChange={() => handleLoadingChange("immediateAction_no")}
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Investigation</FormLabel>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Date:</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={1}>
              {" "}
              Time{" "}
            </FormLabel>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.invest_am}
                  onChange={() => handleLoadingChange("invest_am")}
                />
              }
              label="AM"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.invest_pm}
                  onChange={() => handleLoadingChange("invest_pm")}
                />
              }
              label="PM"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <FormLabel component="legend">Investigation by:</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  name="investigation_by"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item xs={2} ml={3}>
                <FormLabel component="legend">Leak Found?</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.leak_yes}
                      onChange={() => handleLoadingChange("leak_yes")}
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.leak_no}
                      onChange={() => handleLoadingChange("leak_no")}
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">CGI Used?</FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.yes}
                      onChange={() => handleLoadingChange("yes")}
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.no}
                      onChange={() => handleLoadingChange("no")}
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <FormLabel component="legend">Leak Grade:</FormLabel>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.grade1}
                      onChange={() => handleLoadingChange("grade1")}
                    />
                  }
                  label="1"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.grade2}
                      onChange={() => handleLoadingChange("grade2")}
                    />
                  }
                  label="2"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.grade3}
                      onChange={() => handleLoadingChange("grade3")}
                    />
                  }
                  label="3"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">Location of Leak:</FormLabel>
          <TextField
            fullWidth
            name="leak_location"
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Cause of Leak:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">Condition Made Safe:</FormLabel>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Date:</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={1}>
              {" "}
              Time{" "}
            </FormLabel>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.leak_am}
                  onChange={() => handleLoadingChange("leak_am")}
                />
              }
              label="AM"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.leak_pm}
                  onChange={() => handleLoadingChange("leak_pm")}
                />
              }
              label="PM"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Repair Report</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">Length of Pipe Exposed:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="length"
              type="number"
              placeholder="feet"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Leak at: Threads</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.coupling}
                      onChange={() => handleLoadingChange("coupling")}
                    />
                  }
                  label="Coupling"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.weld}
                      onChange={() => handleLoadingChange("weld")}
                    />
                  }
                  label="Weld (type)"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.value}
                      onChange={() => handleLoadingChange("value")}
                    />
                  }
                  label="value"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.leak_other}
                      onChange={() => handleLoadingChange("leak_other")}
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Pipe: Size:</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.steel}
                      onChange={() => handleLoadingChange("steel")}
                    />
                  }
                  label="Inches/Steel"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.plastic}
                      onChange={() => handleLoadingChange("plastic")}
                    />
                  }
                  label="Plastic"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.cast}
                      onChange={() => handleLoadingChange("cast")}
                    />
                  }
                  label="Cast Iron"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.pipe_other}
                      onChange={() => handleLoadingChange("pipe_other")}
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Coating: </FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.enamel}
                      onChange={() => handleLoadingChange("enamel")}
                    />
                  }
                  label="Enamel"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.wrapped}
                      onChange={() => handleLoadingChange("wrapped")}
                    />
                  }
                  label="Wrapped"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.galvanized}
                      onChange={() => handleLoadingChange("galvanized")}
                    />
                  }
                  label="Galvanized"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.coating_other}
                      onChange={() => handleLoadingChange("coating_other")}
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Condition: </FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.excellent}
                      onChange={() => handleLoadingChange("excellent")}
                    />
                  }
                  label="Excellent"
                />
              </Grid>
              <Grid item xs={2}>
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
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.fair}
                      onChange={() => handleLoadingChange("fair")}
                    />
                  }
                  label="Fair"
                />
              </Grid>
              <Grid item xs={2}>
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
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Soil Conditions: </FormLabel>
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
                      checked={selectedLoadings.describe}
                      onChange={() => handleLoadingChange("describe")}
                    />
                  }
                  label="Other(describe)"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Moisture: </FormLabel>
              </Grid>
              <Grid item xs={2}>
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
              <Grid item xs={2}>
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
              <Grid item xs={2}>
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
          </Grid>
        </Grid>

        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">Repairs Made:</FormLabel>
          <TextField
            fullWidth
            name="repair_made"
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <FormLabel component="legend">Repair Coating Type: </FormLabel>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.mastic}
                      onChange={() => handleLoadingChange("mastic")}
                    />
                  }
                  label="Mastic"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.tap}
                      onChange={() => handleLoadingChange("tap")}
                    />
                  }
                  label="Hot Applied Tape"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.ther}
                      onChange={() => handleLoadingChange("other")}
                    />
                  }
                  label="Other (describe) "
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Anodes Installed:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">How many?</FormLabel>
              <TextField
                fullWidth
                name="how_many"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Anode Weight</FormLabel>
              <TextField
                fullWidth
                name="weight"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">lbs Depth Installed</FormLabel>
              <TextField
                fullWidth
                name="depth"
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
              <FormLabel component="legend">Repairs Made by:</FormLabel>
              <TextField
                fullWidth
                name="made_by"
                type="text"
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
              <FormLabel component="legend">Foreman:</FormLabel>
              <TextField
                fullWidth
                name="foreman"
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
              <FormLabel component="legend">Supervisor:</FormLabel>
              <TextField
                fullWidth
                name="supervisor"
                placeholder="signature"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Posted by:</FormLabel>
              <TextField
                fullWidth
                name="posted_by:"
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

export default Form2;
