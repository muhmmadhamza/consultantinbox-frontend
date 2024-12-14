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

const Form12 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;
  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "PIPELINE TEST REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1696931169729-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Testing Company:",
      className: "form-control",
      name: "text-1696931170369-0",
      access: false,
      subtype: "text",
    },
    {
      type: "paragraph",
      subtype: "p",
      label:
        "This form must be completed for each section of newly installed section of pipe or service line and on each service line that is disconnected from the main for any reason.",
      access: false,
    },
    {
      type: "header",
      subtype: "h4",
      label: "Test Data",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Type of Pipe:",
      className: "form-control",
      name: "text-1696931182962-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Size of Pipe:",
      className: "form-control",
      name: "text-1696931336018",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Inches",
      className: "form-control",
      name: "text-1696931335682",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Length of Line:",
      className: "form-control",
      name: "text-1696931335058",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location of Line:",
      className: "form-control",
      name: "text-1696931459978",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Tested with: ",
      inline: true,
      name: "radio-group-1696931529112-0",
      access: false,
      other: false,
      values: [
        {
          label: "Nitrogen",
          value: "option-1",
          selected: false,
        },
        {
          label: "Air",
          value: "option-2",
          selected: false,
        },
        {
          label: "Natural Gas",
          value: "option-3",
          selected: false,
        },
        {
          label: "Water",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "date",
      required: false,
      label: "Time Started: ",
      className: "form-control",
      name: "date-1696931622610-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      inline: true,
      name: "radio-group-1696931726890-0",
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
      label: "Time Ended: ",
      className: "form-control",
      name: "date-1696931773482",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      inline: true,
      name: "radio-group-1696931775906",
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
      label: "Test Pressure Start:",
      placeholder: "psig",
      className: "form-control",
      name: "text-1696931806434",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Test Pressure Stop:",
      placeholder: "psig",
      className: "form-control",
      name: "text-1696931863475",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Line Loss:",
      inline: true,
      name: "radio-group-1696931889258-0",
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
      label: "Amount Loss",
      className: "form-control",
      name: "text-1698313277562-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Reason For Line Loss",
      className: "form-control",
      name: "text-1698313297082-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Corrective Measure Taken:",
      className: "form-control",
      name: "text-1696931926083",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Remarks:",
      className: "form-control",
      name: "text-1696931959394",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Operator Representative:",
      placeholder: "signature",
      className: "form-control",
      name: "text-1696931993170",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Signature:",
      className: "form-control",
      name: "text-1696931993482",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696932058298-0",
      access: false,
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696932076442-0",
      access: false,
      style: "default",
    },
  ]);
  const [formData, setFormData] = useState({
    operator: "",
    date: "",
    testing: "",
    type: "",
    size: "",
    inches: "",
    length: "",
    location: "",
    describe: "",
    started: "",
    ended: "",
    pressure_start: "",
    pressure_stop: "",
    amount: "",
    line_loss: "",
    measure: "",
    remarks: "",
    supervisor: "",
    signature: "",
    subscribe: "",
  });

  const [selectedLoadings, setSelectedLoadings] = useState({
    pipe: false,
    set: false,
    fitting: false,
    regulator: false,
    support: false,
    vent: false,
    nitrogen: false,
    air: false,
    gas: false,
    water: false,
    started_am: false,
    started_pm: false,
    ended_am: false,
    ended_pm: false,
    yes: false,
    no: false,
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
      // name: "Pipeline Test Report",
      // project_id: id,
      jsonData: jsonData,
      form_no: 12,
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
          // component={RouterLink}
          // to="/dashboard/formbuilder"
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
        PIPELINE TEST REPORT
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
            <FormLabel component="legend">Testing Company:</FormLabel>
            <TextField
              fullWidth
              name="testing"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Typography variant="h10" align="left" gutterBottom>
            This form must be completed for each section of newly installed
            section of pipe or service line and on each service line that is
            disconnected from the main for any reason.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Test Data
          </Typography>
        </Box>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Type of Pipe:</FormLabel>
              <TextField
                fullWidth
                name="type"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Size of Pipe:</FormLabel>
              <TextField
                fullWidth
                name="size"
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
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Inches</FormLabel>
              <TextField
                fullWidth
                name="inches"
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
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Length of Line: </FormLabel>
            <TextField
              fullWidth
              name="length"
              type="number"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Location of Line:</FormLabel>
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

        <Grid item xs={12} mt={2}>
          <FormLabel component="legend">Line Size:</FormLabel>
          <TextField
            fullWidth
            name="size"
            variant="outlined"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <FormLabel component="legend">Area of Corrosion: </FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.pipe}
                      onChange={() => handleLoadingChange("pipe")}
                    />
                  }
                  label="Pipe"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.set}
                      onChange={() => handleLoadingChange("set")}
                    />
                  }
                  label="Meter Set"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.fitting}
                      onChange={() => handleLoadingChange("fitting")}
                    />
                  }
                  label="Fitting"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.regulator}
                      onChange={() => handleLoadingChange("regulator")}
                    />
                  }
                  label="Regulator"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.support}
                      onChange={() => handleLoadingChange("support")}
                    />
                  }
                  label="Support"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.vent}
                      onChange={() => handleLoadingChange("vent")}
                    />
                  }
                  label="Vent"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid container mt={3}>
            <Grid item xs={4}>
              <FormLabel component="legend">Tested with: </FormLabel>
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.nitrogen}
                    onChange={() => handleLoadingChange("nitrogen")}
                  />
                }
                label="Nitrogen"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.air}
                    onChange={() => handleLoadingChange("air")}
                  />
                }
                label="Air"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.gas}
                    onChange={() => handleLoadingChange("gas")}
                  />
                }
                label="Natural Gas"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.water}
                    onChange={() => handleLoadingChange("water")}
                  />
                }
                label="Water"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={2}>
          <FormLabel component="legend">Other</FormLabel>
          <TextField
            fullWidth
            name="describe"
            placeholder="describe"
            variant="outlined"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">Time Started:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="started"
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
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedLoadings.started_am}
                onChange={() => handleLoadingChange("started_am")}
              />
            }
            label="AM"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedLoadings.started_pm}
                onChange={() => handleLoadingChange("started_pm")}
              />
            }
            label="PM"
          />
        </Grid>

        <Grid container item xs={12} mt={2}>
          <Grid item xs={4} mt={1}>
            <FormLabel component="legend">Time Ended:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="ended"
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
        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.ended_am}
                  onChange={() => handleLoadingChange("ended_am")}
                />
              }
              label="AM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.ended_pm}
                  onChange={() => handleLoadingChange("ended_pm")}
                />
              }
              label="PM"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Test Pressure Start: </FormLabel>
            <TextField
              fullWidth
              name="pressure_start"
              type="number"
              placeholder="psig"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Test Pressure Stop:</FormLabel>
            <TextField
              fullWidth
              type="number"
              name="pressure_stop"
              placeholder="psig"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Line Loss: </FormLabel>
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

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Amount Loss: </FormLabel>
            <TextField
              fullWidth
              name="amount_loss"
              type="number"
              placeholder="psig"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Reason for line loss</FormLabel>
            <TextField
              fullWidth
              name="reason_loss"
              placeholder="psig"
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
            <FormLabel component="legend">Corrective Measures Taken:</FormLabel>
            <TextField
              fullWidth
              name="measure"
              type="number"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Remarks:</FormLabel>
            <TextField
              fullWidth
              name="remarks"
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
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Operator Representative:</FormLabel>
              <TextField
                fullWidth
                name="supervisor"
                placeholder="signature"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Signature: </FormLabel>
              <TextField
                fullWidth
                name="signature:"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
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
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box maxWidth="lg" style={{ width: "100%", marginTop: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
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

export default Form12;
