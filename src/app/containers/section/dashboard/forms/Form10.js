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

const Form10 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;

  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "TELEPHONIC REPORT OF ODOR",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "OPERATOR:",
      className: "form-control",
      name: "text-1696926121670-0",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "Customer Information",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Time Call Received:",
      placeholder: "hh:mm",
      className: "form-control",
      name: "number-1696926878333-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696927100891-0",
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
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696926979022-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Name of Caller:",
      placeholder: "signature",
      className: "form-control",
      name: "text-1696927161006-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Caller's Phone Number:",
      className: "form-control",
      name: "number-1696927206885-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Name of Customer if not Caller:",
      className: "form-control",
      name: "text-1696927163631",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Nature of Complaint:",
      inline: true,
      name: "radio-group-1696927295181-0",
      access: false,
      other: false,
      values: [
        {
          label: "Odor",
          value: "option-1",
          selected: false,
        },
        {
          label: "Blowing Gas",
          value: "option-2",
          selected: false,
        },
        {
          label: "Dead Vegetation",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Other(Describe)",
      className: "form-control",
      name: "text-1697820876707-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Is the Gas odor or sound inside the residence?",
      inline: true,
      name: "radio-group-1696927438485-0",
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
      type: "text",
      required: false,
      label:
        "If so, where is it located? (at the water heater, at the heating system, at the stove, in the hall, in the kitchen, etc.):",
      className: "form-control",
      name: "text-1696927508493-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Is the Gas odor or sound outside the residence?",
      inline: true,
      name: "radio-group-1696927556357",
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
      type: "text",
      required: false,
      label:
        "If so, where is it located? (at the water heater, at the heating system, at the stove, in the hall, in the kitchen, etc.):",
      className: "form-control",
      name: "text-1696927578966",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "How long have you been smelling or hearing the gas?",
      className: "form-control",
      name: "text-1696927677061",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Will someone be home for us to check the leak?",
      inline: true,
      name: "radio-group-1696929652077",
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
      type: "header",
      subtype: "h4",
      label: "Leak Response Information",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Time Dispatched Investigator:",
      placeholder: "hh:mm",
      className: "form-control",
      name: "number-1696927795045-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696927848797",
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
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696927917158-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Name of Investigator",
      className: "form-control",
      name: "text-1697821026540-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Time of  Investigator arrival at scene of Leak:",
      placeholder: "hh:mm",
      className: "form-control",
      name: "number-1696927950182",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696927957870",
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
      label: "Action Taken:",
      placeholder: "name",
      className: "form-control",
      name: "text-1696929551548-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Time of Investigator completion at scene of Leak:",
      placeholder: "hh:mm",
      className: "form-control",
      name: "number-1696929598916",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Time",
      inline: true,
      name: "radio-group-1696929601252",
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
      type: "radio-group",
      required: false,
      label: "Additional Follow-up (if needed):",
      inline: true,
      name: "radio-group-1696927704654",
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
      type: "text",
      required: false,
      label: "if so, what type of follow-up:",
      placeholder: "signature",
      className: "form-control",
      name: "text-1696929748492-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Additional Remarks:",
      className: "form-control",
      name: "text-1696929765660",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Signature of Investigators:",
      className: "form-control",
      name: "text-1696929762972",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Signature of Supervisor:",
      className: "form-control",
      name: "text-1696929762340",
      access: false,
      subtype: "text",
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696929884926-0",
      access: false,
      style: "default",
    },
  ]);

  const [selectedLoadings, setSelectedLoadings] = useState({
    am: false,
    pm: false,
    odor: false,
    gas: false,
    dead: false,
    inside_yes: false,
    inside_no: false,
    outside_yes: false,
    outside_no: false,
    home_yes: false,
    home_no: false,
    invest_am: false,
    invest_pm: false,
    arrival_am: false,
    arrival_pm: false,
    scene_am: false,
    scene_pm: false,
    completion_am: false,
    completion_pm: false,
    follow_yes: false,
    follow_no: false,
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
      // name: "Telephonic Report of Odor",
      // project_id: id,
      jsonData: jsonData,
      form_no: 10,
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
        TELEPHONIC REPORT OF ODOR
      </Typography>
      <FormControl>
        <FormLabel component="legend">OPERATOR:</FormLabel>
        <TextField fullWidth name="operator" variant="outlined" size="small" />

        <Typography variant="h6" mt={3} align="center" gutterBottom>
          Customer Information
        </Typography>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">Time Call Received</FormLabel>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              name="caller"
              type="time"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">Date:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
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

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Name of Caller:</FormLabel>
              <TextField
                fullWidth
                name="caller"
                placeholder="signature"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Caller’s Phone Number:</FormLabel>
              <TextField
                fullWidth
                name="phone"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">
                Name of Customer if not Caller:
              </FormLabel>
              <TextField
                fullWidth
                name="customer"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <FormLabel component="legend">Nature of Complaint: </FormLabel>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.odor}
                      onChange={() => handleLoadingChange("odor")}
                    />
                  }
                  label="Odor"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.gas}
                      onChange={() => handleLoadingChange("gas")}
                    />
                  }
                  label="Blowing Gas"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.dead}
                      onChange={() => handleLoadingChange("dead")}
                    />
                  }
                  label="Dead Vegetation"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">Other (describe):</FormLabel>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              name="describe"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <FormLabel component="legend">
                  Is the gas odor or sound inside the residence?{" "}
                </FormLabel>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.inside_yes}
                      onChange={() => handleLoadingChange("inside_yes")}
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.inside_no}
                      onChange={() => handleLoadingChange("inside_no")}
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={12} mt={1}>
            <FormLabel component="legend">
              If so, where is it located? (at the water heater, at the heating
              system, at the stove, in the hall, in the kitchen, etc.):
            </FormLabel>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="located"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <FormLabel component="legend">
                  Is the gas odor or sound outside the residence?{" "}
                </FormLabel>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.outside_yes}
                      onChange={() => handleLoadingChange("outside_yes")}
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.outside_no}
                      onChange={() => handleLoadingChange("outside_no")}
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={12} mt={1}>
            <FormLabel component="legend">
              If so, where is it located? (at the water heater, at the heating
              system, at the stove, in the hall, in the kitchen, etc.):
            </FormLabel>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="out_located"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={12} mt={1}>
            <FormLabel component="legend">
              How long have you been smelling or hearing the gas?
            </FormLabel>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="smelling"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <FormLabel component="legend">
                  Will someone be home for us to check the leak?{" "}
                </FormLabel>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.home_yes}
                      onChange={() => handleLoadingChange("home_yes")}
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.home_no}
                      onChange={() => handleLoadingChange("home_no")}
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="h6" align="center" gutterBottom mt={3}>
          Leak Response Information
        </Typography>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">
              Time Dispatched Investigator:{" "}
            </FormLabel>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              name="investigator"
              type="time"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">Date:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
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

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">Name of Investigator:</FormLabel>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              name="investigator"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">
              Time of Investigator Arrival at Scene of Leak:{" "}
            </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="arrival"
              type="time"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.arrival_am}
                  onChange={() => handleLoadingChange("arrival_am")}
                />
              }
              label="AM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.arrival_pm}
                  onChange={() => handleLoadingChange("arrival_pm")}
                />
              }
              label="PM"
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
            <Typography variant="subtitle1">Action Taken</Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              name="action"
              variant="outlined"
              placeholder="name"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">
              Time of Investigator Completion at Scene of Leak:
            </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="completion"
              type="time"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.completion_am}
                  onChange={() => handleLoadingChange("completion_am")}
                />
              }
              label="AM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.completion_pm}
                  onChange={() => handleLoadingChange("completion_pm")}
                />
              }
              label="PM"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">
                  Additional Follow-up (if needed):{" "}
                </FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.follow_yes}
                      onChange={() => handleLoadingChange("follow_yes")}
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.follow_no}
                      onChange={() => handleLoadingChange("follow_no")}
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">
                If so, what type of follow-up:
              </FormLabel>
              <TextField
                fullWidth
                name="follow_up"
                placeholder="signature"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">Additional Remarks:</FormLabel>
              <TextField
                fullWidth
                name="remarks:"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">
                Signature of Investigators:
              </FormLabel>
              <TextField
                fullWidth
                name="investigators:"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <FormLabel component="legend">Signature of Supervisor:</FormLabel>
              <TextField
                fullWidth
                name="supervisor"
                placeholder="signature"
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

export default Form10;
