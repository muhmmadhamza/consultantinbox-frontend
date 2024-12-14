import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const Form19 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h4",
      label: "DAILY ODOR CALL LOG",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "OPERATOR:",
      className: "form-control",
      name: "text-1704453230964-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location: ",
      className: "form-control",
      name: "text-1704453289033-0",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date: ",
      className: "form-control",
      name: "date-1704453317409-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "No.",
      className: "form-control",
      name: "number-1704454270183",
      access: false,
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Received: ",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704453568567-0",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Caller's Name",
      className: "form-control",
      name: "text-1704454431368",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Phone Number",
      className: "form-control",
      name: "number-1704454147664-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Code",
      className: "form-control",
      name: "text-1704454174905-0",
      access: false,
      subtype: "text",
    },
    {
      type: "textarea",
      required: false,
      label: "Address of order",
      className: "form-control",
      name: "textarea-1704454197625-0",
      access: false,
      subtype: "textarea",
    },
    {
      type: "number",
      required: false,
      label: "No.",
      className: "form-control",
      name: "number-1704453474233-0",
      access: false,
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Received: ",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704454314336",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Caller's Name",
      className: "form-control",
      name: "text-1704454091113-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Phone Number",
      className: "form-control",
      name: "number-1704454396408",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Code",
      className: "form-control",
      name: "text-1704454468576",
      access: false,
      subtype: "text",
    },
    {
      type: "textarea",
      required: false,
      label: "Address of order",
      className: "form-control",
      name: "textarea-1704454488232",
      access: false,
      subtype: "textarea",
    },
    {
      type: "number",
      required: false,
      label: "No.",
      className: "form-control",
      name: "number-1704454510432",
      access: false,
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Received: ",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704454520153",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Caller's Name",
      className: "form-control",
      name: "text-1704454529497",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Phone Number",
      className: "form-control",
      name: "number-1704454540473",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Code",
      className: "form-control",
      name: "text-1704454547377",
      access: false,
      subtype: "text",
    },
    {
      type: "textarea",
      required: false,
      label: "Address of order",
      className: "form-control",
      name: "textarea-1704454556385",
      access: false,
      subtype: "textarea",
    },
    {
      type: "number",
      required: false,
      label: "No.",
      className: "form-control",
      name: "number-1704454597722",
      access: false,
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Received: ",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704454604017",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Caller's Name",
      className: "form-control",
      name: "text-1704454612553",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Phone Number",
      className: "form-control",
      name: "number-1704454619761",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Code",
      className: "form-control",
      name: "text-1704454626753",
      access: false,
      subtype: "text",
    },
    {
      type: "textarea",
      required: false,
      label: "Address of order",
      className: "form-control",
      name: "textarea-1704454635857",
      access: false,
      subtype: "textarea",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Dispatched",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704456594974-0",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Arrived",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704456655153",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "number",
      required: false,
      label: "Tec & No.",
      className: "form-control",
      name: "number-1704456684866-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Action Taken",
      className: "form-control",
      name: "text-1704456726410-0",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Compl.",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704456750203",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Superv. Initials",
      className: "form-control",
      name: "text-1704456784386-0",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Dispatched",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704456838852",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Arrived",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704456850371",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "number",
      required: false,
      label: "Tec & No.",
      className: "form-control",
      name: "number-1704456859723",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Action Taken",
      className: "form-control",
      name: "text-1704456873244",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Compl.",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704456889347",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Superv. Initials",
      className: "form-control",
      name: "text-1704456905614",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Dispatched",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704458511657",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Arrived",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704458518122",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "number",
      required: false,
      label: "Tec & No.",
      className: "form-control",
      name: "number-1704458527850",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Action Taken",
      className: "form-control",
      name: "text-1704458540276",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Compl.",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704458552554",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Superv. Initials",
      className: "form-control",
      name: "text-1704458564315",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Dispatched",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704458605780",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Arrived",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704458613371",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "number",
      required: false,
      label: "Tec & No.",
      className: "form-control",
      name: "number-1704458620782",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Action Taken",
      className: "form-control",
      name: "text-1704458629019",
      access: false,
      subtype: "text",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Time Compl.",
      toggle: false,
      inline: true,
      name: "checkbox-group-1704458648662",
      access: false,
      other: false,
      values: [
        {
          label: "AM",
          value: "AM",
          selected: false,
        },
        {
          label: "PM",
          value: "PM",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Superv. Initials",
      className: "form-control",
      name: "text-1704458655650",
      access: false,
      subtype: "text",
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1704458687833-0",
      access: false,
      style: "default",
    },
  ]);

  // const [formData, setFormData] = useState({
  //   operator: "",
  //   location: "",
  //   date: "",
  // });

  const [selectedLoadings, setSelectedLoadings] = useState({
    revieced1: "",
    revieced2: "",
    revieced3: "",
    revieced4: "",
    dispatched1: "",
    dispatched2: "",
    dispatched3: "",
    dispatched4: "",
    arrived1: "",
    arrived2: "",
    arrived3: "",
    arrived4: "",
    complete1: "",
    complete2: "",
    complete3: "",
    complete4: "",
  });

  const handleLoadingChange = (name, value, group) => {
    setSelectedLoadings((prevLoadings) => {
      const updatedLoadings = { ...prevLoadings };
      updatedLoadings[name] = prevLoadings[name] === value ? "" : value;
      for (const loadingName in updatedLoadings) {
        if (loadingName !== name && loadingName.startsWith(group)) {
          updatedLoadings[loadingName] = "";
        }
      }

      return updatedLoadings;
    });
  };

  // const handleValue = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "DAILY ODOR CALL LOG",
      // project_id: id,
      jsonData: jsonData,
      form_no: 19,
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
        DAILY ODOR CALL LOG
      </Typography>

      <FormControl fullWidth>
        <FormLabel component="legend">OPERATOR:</FormLabel>
        <TextField fullWidth name="operator" variant="outlined" size="small" />

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Location:</FormLabel>
            <TextField
              fullWidth
              name="location"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Date</FormLabel>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">No.</FormLabel>
            <Box>
              <TextField
                fullWidth
                type="number"
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
                type="number"
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
                InputProps={{
                  style: {
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Time Received</FormLabel>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced1 === "am"}
                    onChange={() => handleLoadingChange("revieced1", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced1 === "pm"}
                    onChange={() => handleLoadingChange("revieced1", "pm")}
                  />
                }
                label="PM"
              />
            </Box>

            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced2 === "am"}
                    onChange={() => handleLoadingChange("revieced2", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced2 === "pm"}
                    onChange={() => handleLoadingChange("revieced2", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced3 === "am"}
                    onChange={() => handleLoadingChange("revieced3", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced3 === "pm"}
                    onChange={() => handleLoadingChange("revieced3", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced4 === "am"}
                    onChange={() => handleLoadingChange("revieced4", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.revieced4 === "pm"}
                    onChange={() => handleLoadingChange("revieced4", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Caller's Name</FormLabel>
            <Box>
              <TextField
                fullWidth
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
                name="volts1"
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
                name="volts1"
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
            <FormLabel component="legend">Phone Number</FormLabel>
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
            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                type="number"
                name="condition1"
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
            <FormLabel component="legend">code</FormLabel>
            <Box>
              <TextField
                fullWidth
                name="amps"
                type="number"
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
            <Box sx={{ mt: "5px" }}>
              <TextField
                fullWidth
                name="condition1"
                type="number"
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
            <FormLabel component="legend">Address of order</FormLabel>
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
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">Time Dispatched</FormLabel>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched1 === "am"}
                    onChange={() => handleLoadingChange("dispatched1", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched1 === "pm"}
                    onChange={() => handleLoadingChange("dispatched1", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched2 === "am"}
                    onChange={() => handleLoadingChange("dispatched2", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched2 === "pm"}
                    onChange={() => handleLoadingChange("dispatched2", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched3 === "am"}
                    onChange={() => handleLoadingChange("dispatched3", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched3 === "pm"}
                    onChange={() => handleLoadingChange("dispatched3", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched4 === "am"}
                    onChange={() => handleLoadingChange("dispatched4", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.dispatched4 === "pm"}
                    onChange={() => handleLoadingChange("dispatched4", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <FormLabel component="legend">Time Arrived</FormLabel>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived1 === "am"}
                    onChange={() => handleLoadingChange("arrived1", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived1 === "pm"}
                    onChange={() => handleLoadingChange("arrived1", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived2 === "am"}
                    onChange={() => handleLoadingChange("arrived2", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived2 === "pm"}
                    onChange={() => handleLoadingChange("arrived2", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived3 === "am"}
                    onChange={() => handleLoadingChange("arrived3", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived3 === "pm"}
                    onChange={() => handleLoadingChange("arrived3", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived4 === "am"}
                    onChange={() => handleLoadingChange("arrived4", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.arrived4 === "pm"}
                    onChange={() => handleLoadingChange("arrived4", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Tech & No.</FormLabel>
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
            <FormLabel component="legend">Action Taken</FormLabel>
            <Box>
              <TextField
                fullWidth
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
                name="volts1"
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
                name="voltage1"
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
            <FormLabel component="legend">Time Compl.</FormLabel>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete1 === "am"}
                    onChange={() => handleLoadingChange("complete1", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete1 === "pm"}
                    onChange={() => handleLoadingChange("complete1", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete2 === "am"}
                    onChange={() => handleLoadingChange("complete2", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete2 === "pm"}
                    onChange={() => handleLoadingChange("complete2", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete3 === "am"}
                    onChange={() => handleLoadingChange("complete3", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete3 === "pm"}
                    onChange={() => handleLoadingChange("complete3", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete4 === "am"}
                    onChange={() => handleLoadingChange("complete4", "am")}
                  />
                }
                label="AM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedLoadings.complete4 === "pm"}
                    onChange={() => handleLoadingChange("complete4", "pm")}
                  />
                }
                label="PM"
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <FormLabel component="legend">Superv. Initials</FormLabel>
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
                name="voltage1"
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
                name="voltage1"
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
        </Grid>

        <Box style={{ marginTop: "30px" }}>
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
      </FormControl>
    </Container>
  );
};

export default Form19;
