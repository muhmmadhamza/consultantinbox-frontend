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

const Form5 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;

  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "REGULATOR INSPECTION REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator: ",
      className: "form-control",
      name: "text-1696863858283-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location:",
      className: "form-control",
      name: "text-1696863936633",
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
      type: "text",
      required: false,
      label: "Make",
      className: "form-control",
      name: "text-1696864014146",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Type",
      className: "form-control",
      name: "text-1696864013625",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Size",
      className: "form-control",
      name: "number-1696864012689",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Orifice Size",
      className: "form-control",
      name: "number-1696864061089",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "M.A.O.P. of Downstream Piping:",
      className: "form-control",
      name: "text-1696864135281",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Operating Pressure: Inlet: ",
      className: "form-control",
      name: "number-1696864184881",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Outlet",
      className: "form-control",
      name: "number-1696864184361",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Lock Up Pressure:",
      className: "form-control",
      name: "number-1696864183489",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Monitoring Regulator or Relief Settings",
      className: "form-control",
      name: "text-1696864246857-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Was the Regulator Stroked (to fully open)?",
      inline: true,
      name: "radio-group-1696864395023-0",
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
      label: "General Condition  of the Station: ",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Atmospheric Corrosion:",
      inline: true,
      name: "radio-group-1696864414761",
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
      label: "Support Piping Rigid: ",
      inline: true,
      name: "radio-group-1696864513337",
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
      label: "Station Guards:",
      inline: true,
      name: "radio-group-1696864512809",
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
      label: "Area Clean of Weeds and Grass:",
      inline: true,
      name: "radio-group-1696864512249",
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
      type: "number",
      required: false,
      label: "Capacity at Inlet and Outlet Pressure:",
      className: "form-control",
      name: "number-1696864757137-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Corrections Made:",
      className: "form-control",
      name: "text-1696864874442",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Remarks:",
      className: "form-control",
      name: "text-1696864884971",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Inspector:",
      className: "form-control",
      name: "text-1696864884507",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Signature",
      className: "form-control",
      name: "text-1696864884106",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696864964891-0",
      access: false,
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696865006228-0",
      access: false,
      style: "default",
    },
  ]);

  const [selectedLoadings, setSelectedLoadings] = useState({
    strok: "",
    corrion: "",
    piping: "",
    guard: "",
    grass: "",
  });

  const handleLoadingChange = (value, name) => {
    setSelectedLoadings((prevLoadings) => ({
      ...prevLoadings,
      [name]: value,
    }));
  };

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "REGULATOR INSPECTION REPORT",
      // project_id: id,
      jsonData: jsonData,
      form_no: 5,
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
        REGULATOR INSPECTION REPORT
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
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Typography
          mt={4}
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Regulator Information
        </Typography>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Make</FormLabel>
            <TextField
              fullWidth
              name="make"
              type="text"
              variant="outlined"
              size="small"
            />
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

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">
              M.A.O.P. of Downstream Piping:
            </FormLabel>
            <TextField
              fullWidth
              name="downstream"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">
              Operating Pressure: Inlet:{" "}
            </FormLabel>
            <TextField
              fullWidth
              name="pressure"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">Outlet</FormLabel>
            <TextField
              fullWidth
              name="outlet"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Lock Up Pressure:</FormLabel>
            <TextField
              fullWidth
              name="lock"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">
              Monitoring Regulator or Relief Setting:
            </FormLabel>
            <TextField
              fullWidth
              name="regulator"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">
                  Was the Regulator Stroked (to fully open)?
                </FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.strok === "Yes"}
                      onChange={() => handleLoadingChange("Yes", "strok")}
                      value="Yes"
                      name="strok"
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.strok === "No"}
                      onChange={() => handleLoadingChange("No", "strok")}
                      value="No"
                      name="strok"
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
            <FormLabel component="legend">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                General Condition of the Station:
              </Typography>
            </FormLabel>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <FormLabel component="legend">Atmospheric Corrosion:</FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.corrion === "Yes"}
                      onChange={() => handleLoadingChange("Yes", "corrion")}
                      value="Yes"
                      name="corrion"
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.corrion === "No"}
                      onChange={() => handleLoadingChange("No", "corrion")}
                      value="No"
                      name="corrion"
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
                <FormLabel component="legend">Support Piping Rigid:</FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.piping === "Yes"}
                      onChange={() => handleLoadingChange("Yes", "piping")}
                      value="Yes"
                      name="piping"
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.piping === "No"}
                      onChange={() => handleLoadingChange("No", "piping")}
                      value="No"
                      name="piping"
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
                <FormLabel component="legend">Station Guards:</FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.guard === "Yes"}
                      onChange={() => handleLoadingChange("Yes", "guard")}
                      value="Yes"
                      name="guard"
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.guard === "No"}
                      onChange={() => handleLoadingChange("No", "guard")}
                      value="No"
                      name="guard"
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
                <FormLabel component="legend">
                  Area Clean of Weeds and Grass:
                </FormLabel>
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.grass === "Yes"}
                      onChange={() => handleLoadingChange("Yes", "grass")}
                      value="Yes"
                      name="grass"
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.grass === "No"}
                      onChange={() => handleLoadingChange("No", "grass")}
                      value="No"
                      name="grass"
                    />
                  }
                  label="No"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">
                Capacity at Inlet and Outlet pressure:
              </FormLabel>
              <TextField
                fullWidth
                name="capacity"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Corrections Made:</FormLabel>
              <TextField
                fullWidth
                name="made"
                type="text"
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
                type="text"
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
                type="text"
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

export default Form5;
