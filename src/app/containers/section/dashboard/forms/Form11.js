import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  FormControl,
} from "@mui/material";

const Form11 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;
  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "ATMOSPHERIC CORROSION CONTROL INSPECTION",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1696930133754-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location",
      className: "form-control",
      name: "text-1696930187107",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Inspector",
      className: "form-control",
      name: "text-1696930186379",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696930219794-0",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label:
        "This form is to be completed when above ground piping is inspected for corrosion from atmospheric conditions or corrosive conditions that cannot be controlled by cathodic protection. Inspect all exposed piping every three years for atmospheric corrosion per §§192.479, 192.481 and 192.491.",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Designation of Line:",
      inline: true,
      name: "radio-group-1696930268563-0",
      access: false,
      other: false,
      values: [
        {
          label: "Transmission",
          value: "option-1",
          selected: false,
        },
        {
          label: "Distribution",
          value: "option-2",
          selected: false,
        },
        {
          label: "Service",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Line Size:",
      className: "form-control",
      name: "text-1696930314675",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Area of Corrosion:",
      inline: true,
      name: "radio-group-1696930392410-0",
      access: false,
      other: false,
      values: [
        {
          label: "Pipe",
          value: "option-1",
          selected: false,
        },
        {
          label: "Meter Set",
          value: "option-2",
          selected: false,
        },
        {
          label: "Fitting",
          value: "option-3",
          selected: false,
        },
        {
          label: "Regulator",
          value: "option-4",
          selected: false,
        },
        {
          label: "Support",
          value: "option-5",
          selected: false,
        },
        {
          label: "Vent",
          value: "option-6",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Other",
      placeholder: "describe",
      className: "form-control",
      name: "text-1696930507994-0",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Corrective Measure Taken",
      toggle: false,
      inline: false,
      name: "checkbox-group-1698311071741-0",
      access: false,
      other: false,
      values: [
        {
          label: "Painted",
          value: "option-1",
          selected: false,
        },
        {
          label: "Coated",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Other",
      placeholder: "describe",
      className: "form-control",
      name: "text-1698311116884-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Type of Paint or Coating Used:",
      className: "form-control",
      name: "text-1696930533939-0",
      access: false,
      subtype: "text",
    },
    {
      type: "select",
      required: false,
      label:
        "If General Painting of Exposed Piping is Undertaken, List Addresses Below:",
      className: "form-control",
      name: "select-1696930588514-0",
      access: false,
      multiple: false,
      values: [
        {
          label: "Inbox",
          value: "option-1",
          selected: true,
        },
        {
          label: "Sent",
          value: "option-2",
          selected: false,
        },
        {
          label: "Sent",
          value: "option-3",
          selected: false,
        },
        {
          label: "Trash",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696930662219-0",
      access: false,
      style: "default",
    },
  ]);
  const [formData, setFormData] = useState({
    operator: "",
    date: "",
    location: "",
    inspector: "",
    size: "",
    describe: "",
    paint: "",
    subscribe: "",
  });

  const [selectedLoadings, setSelectedLoadings] = useState({
    pipe: false,
    set: false,
    fitting: false,
    regulator: false,
    support: false,
    vent: false,
    painted: false,
    coated: false,
    paint: false,
    coat: false,
  });

  const handleLoadingChange = (loadingType) => {
    setSelectedLoadings((prevSelectedLoadings) => ({
      ...prevSelectedLoadings,
      [loadingType]: !prevSelectedLoadings[loadingType],
    }));
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "Atmospheric Corrosion Control Inspection",
      // project_id: id,
      jsonData: jsonData,
      form_no: 11,
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
        ATMOSPHERIC CORROSION CONTROL INSPECTION
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
            <FormLabel component="legend">Inspector</FormLabel>
            <TextField
              fullWidth
              name="inspector"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>

          <Grid item xs={6}>
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
          </Grid>
        </Grid>

        <Box mt={3}>
          <Typography variant="h10" align="left" gutterBottom>
            This form is to be completed when above ground piping is inspected
            for corrosion from atmospheric conditions or corrosive conditions
            that cannot be controlled by cathodic protection. Inspect all
            exposed piping every three years for atmospheric corrosion per
            §§192.479, 192.481 and 192.491.
          </Typography>
        </Box>

        <Grid item xs={12} mt={2}>
          <FormLabel component="legend">Line Size:</FormLabel>
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

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <FormLabel component="legend">
                  Corrective Measures Taken:
                </FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.painted}
                      onChange={() => handleLoadingChange("painted")}
                    />
                  }
                  label="Painted"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLoadings.coated}
                      onChange={() => handleLoadingChange("coated")}
                    />
                  }
                  label="Coated"
                />
              </Grid>
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

        <Grid item xs={12} mt={2}>
          <FormLabel component="legend">
            Type of Paint or Coating Used:
          </FormLabel>
          <TextField
            fullWidth
            name="paint"
            variant="outlined"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
        </Grid>

        <Grid item xs={12} mt={2}>
          <FormLabel component="legend">
            If General Painting of Exposed Piping is Undertaken, List Addresses
            Below:
          </FormLabel>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
          </List>
        </Grid>

        <Box maxWidth="lg" style={{ width: "100%", marginTop: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            // disabled={isSubmitting}
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

export default Form11;
