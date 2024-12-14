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

const Form4 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;

  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "INSPECTION REPORT FOR MOST MASTER METER SYSTEMS",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "OPERATOR:",
      className: "form-control",
      name: "text-1696859048276-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Name of Building:",
      className: "form-control",
      name: "text-1696859064685",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Town",
      className: "form-control",
      name: "text-1696859062325",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location:",
      className: "form-control",
      name: "text-1696859061845",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Inspector(s):",
      className: "form-control",
      name: "text-1696859059909",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "CHECK LISTS",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Supply Main:",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Average pressure:",
      className: "form-control",
      name: "number-1696859289589-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Location:",
      className: "form-control",
      name: "text-1696859296926",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Methof of Leak Test:",
      className: "form-control",
      name: "text-1696859296101",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Results",
      className: "form-control",
      name: "number-1696859295229",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Service Line:",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Size",
      className: "form-control",
      name: "text-1696859396213-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Location:",
      className: "form-control",
      name: "text-1696859425789",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Method of Leak Test:",
      className: "form-control",
      name: "text-1696859425021",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Results:",
      inline: true,
      name: "radio-group-1696859542124-0",
      access: false,
      other: false,
      values: [
        {
          label: "Entrance Above",
          value: "option-1",
          selected: false,
        },
        {
          label: "Below",
          value: "option-2",
          selected: false,
        },
        {
          label: "Ground",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Is Meter Stop Accessible and in Good Working Order?",
      inline: true,
      name: "radio-group-1696859564269",
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
      label: "Meter:",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Make",
      className: "form-control",
      name: "text-1696859681220",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Size",
      className: "form-control",
      name: "number-1696859709453",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Number",
      className: "form-control",
      name: "number-1696859708582",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Results: Regulators",
      inline: true,
      name: "radio-group-1696859869941-0",
      access: false,
      other: false,
      values: [
        {
          label: "Make",
          value: "option-1",
          selected: false,
        },
        {
          label: "Size",
          value: "option-2",
          selected: false,
        },
        {
          label: "Number",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Delivery Pressure:",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Vented Properly to Outside?",
      inline: true,
      name: "radio-group-1696859872853",
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
      label: "Relief Valve:",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Make",
      className: "form-control",
      name: "text-1696860032469",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Size",
      className: "form-control",
      name: "number-1696860034949",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Number",
      className: "form-control",
      name: "number-1696860035356",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Location",
      className: "form-control",
      name: "text-1696860095133",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Case and Fittings Tested for Leaks?",
      className: "form-control",
      name: "text-1696860105197",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Method of Leak Test:",
      className: "form-control",
      name: "text-1696860105805",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Were Regulator and Fittings Tested for Leaks?",
      inline: true,
      name: "radio-group-1696860250667-0",
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
      label: "Results:",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Was there Indication of Leakage on Meter with Appliances off?",
      inline: true,
      name: "radio-group-1696860257861",
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
      label: "Signed:",
      className: "form-control",
      name: "text-1696860377750",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696860403837-0",
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
    above: false,
    belwow: false,
    ground: false,
    yes: false,
    no: false,
    make: false,
    size: false,
    nuber: false,
    yess: false,
    no: false,
    ys: false,
    nu: false,
    yesss: false,
    nooo: false,
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
      // name: "INSPECTION REPORT FOR MOST MASTER METER SYSTEMS",
      // project_id: id,
      jsonData: jsonData,
      form_no: 4,
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
        INSPECTION REPORT FOR MOST MASTER METER SYSTEMS
      </Typography>

      <FormControl>
        <FormLabel component="legend">OPERATOR:</FormLabel>
        <TextField fullWidth name="operator" variant="outlined" size="small" />

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Name of Building:</FormLabel>
            <TextField
              fullWidth
              name="building"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Town</FormLabel>
            <TextField fullWidth name="town" variant="outlined" size="small" />
          </Grid>
        </Grid>

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
            <FormLabel component="legend">Inspector(s):</FormLabel>
            <TextField
              fullWidth
              name="inspector"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" align="center" gutterBottom mt={3}>
          CHECK LISTS{" "}
        </Typography>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Supply Main:</FormLabel>
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Average pressure:</FormLabel>
            <TextField
              fullWidth
              name="pressure"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Location:</FormLabel>
            <TextField
              fullWidth
              name="location"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Method of Leak Test:</FormLabel>
            <TextField
              fullWidth
              name="leak_test"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Results</FormLabel>
            <TextField
              fullWidth
              name="result"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Service Line:</FormLabel>
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Size</FormLabel>
            <TextField
              fullWidth
              name="size"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Location:</FormLabel>
            <TextField
              fullWidth
              name="location"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <FormLabel component="legend">Method of Leak Test:</FormLabel>
        <TextField fullWidth name="test" variant="outlined" size="small" />

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Results:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.above}
                  onChange={() => handleLoadingChange("above")}
                />
              }
              label="Entrance Above"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.below}
                  onChange={() => handleLoadingChange("below")}
                />
              }
              label="Below"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.ground}
                  onChange={() => handleLoadingChange("ground")}
                />
              }
              label="Ground"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">
              Is Meter Stop Accessible and in Good Working Order?
            </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.yes}
                  onChange={() => handleLoadingChange("yes")}
                />
              }
              label="yes"
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

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Meter:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Make</FormLabel>
              <TextField
                fullWidth
                name="make"
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
                name="size"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Number</FormLabel>
              <TextField
                fullWidth
                name="number"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Results:Regulators</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.maek}
                  onChange={() => handleLoadingChange("make")}
                />
              }
              label="Make"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.size}
                  onChange={() => handleLoadingChange("size")}
                />
              }
              label="Size"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.number}
                  onChange={() => handleLoadingChange("number")}
                />
              }
              label="Number"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend"> Delivery Pressure:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={1}>
              {" "}
              Vented Properly to Outside?
            </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.yess}
                  onChange={() => handleLoadingChange("yess")}
                />
              }
              label="Yes"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.noo}
                  onChange={() => handleLoadingChange("noo")}
                />
              }
              label="No"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Relief Valve:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Make</FormLabel>
              <TextField
                fullWidth
                name="make"
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
                name="size"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Number</FormLabel>
              <TextField
                fullWidth
                name="number"
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
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">
                Case and Fittings Tested for Leaks?
              </FormLabel>
              <TextField
                fullWidth
                name="fitting"
                type="text"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormLabel component="legend">Method of Leak Test:</FormLabel>
              <TextField
                fullWidth
                name="leak"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={1}>
              {" "}
              Were Regulator and Fittings Tested for Leaks?{" "}
            </FormLabel>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.ys}
                  onChange={() => handleLoadingChange("ys")}
                />
              }
              label="Yes"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.nu}
                  onChange={() => handleLoadingChange("nu")}
                />
              }
              label="No"
            />
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend"> Results:</FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend" mt={1}>
              {" "}
              Was there Indication of Leakage on Meter with Appliances off?
            </FormLabel>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.yesss}
                  onChange={() => handleLoadingChange("yesss")}
                />
              }
              label="Yes"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLoadings.nooo}
                  onChange={() => handleLoadingChange("nooo")}
                />
              }
              label="No"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Signed:</FormLabel>
            <TextField
              fullWidth
              name="signature"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Date:</FormLabel>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
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

export default Form4;
