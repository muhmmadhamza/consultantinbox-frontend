import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Container,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";

const Form18 = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "VALVE LOCATIONS",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator:",
      className: "form-control",
      name: "text-1698159466682-0",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "Distribution Valve Location and Reference",
      access: false,
    },
    {
      type: "checkbox-group",
      required: false,
      toggle: false,
      inline: false,
      name: "checkbox-group-1698159579109-0",
      access: false,
      other: false,
      values: [
        {
          label: "GAS MAIN",
          value: "option-1",
          selected: false,
        },
        {
          label: "SIDEWALK",
          value: "",
          selected: false,
        },
        {
          label: "POWER POLE",
          value: "",
          selected: false,
        },
        {
          label: "GAS VALVE",
          value: "",
          selected: false,
        },
        {
          label: "EDGE OF PAVEMENT",
          value: "",
          selected: false,
        },
        {
          label: "TELEPHONE POLE",
          value: "",
          selected: false,
        },
        {
          label: "MANHOLE",
          value: "",
          selected: false,
        },
        {
          label: "FIRE HYDRANT",
          value: "",
          selected: false,
        },
        {
          label: "TREET",
          value: "",
          selected: false,
        },
        {
          label: "CURB",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "header",
      subtype: "h4",
      label:
        "NOTE: All Reference Distances are nearest to the face of the curb, fire hydrant, pavement, telephone pole, power pole, tree or sidewalk at the ground line.",
      access: false,
    },
    {
      type: "header",
      subtype: "h4",
      label: "North",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Valve No.",
      className: "form-control",
      name: "number-1698159804480-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Size of Valve:",
      className: "form-control",
      name: "number-1698160034719",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Type of Street Surface:",
      className: "form-control",
      name: "text-1698159924832-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Depth of Box Below Surface:",
      className: "form-control",
      name: "text-1698159951703",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "North",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Valve No.",
      className: "form-control",
      name: "number-1698159869161",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Size of Valve:",
      className: "form-control",
      name: "number-1698160043446",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Type of Street Surface:",
      className: "form-control",
      name: "text-1698160051998",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Depth of Box Below Surface:",
      className: "form-control",
      name: "text-1698160059134",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "North",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Valve No.",
      className: "form-control",
      name: "number-1698160138134",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Size of Valve:",
      className: "form-control",
      name: "number-1698160076318",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Type of Street Surface:",
      className: "form-control",
      name: "text-1698160146566",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Depth of Box Below Surface:",
      className: "form-control",
      name: "text-1698160153350",
      access: false,
      subtype: "text",
    },
    {
      type: "header",
      subtype: "h4",
      label: "North",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Valve No.",
      className: "form-control",
      name: "number-1698160174198",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Size of Valve:",
      className: "form-control",
      name: "number-1698160181134",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Type of Street Surface:",
      className: "form-control",
      name: "text-1698160191358",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Depth of Box Below Surface:",
      className: "form-control",
      name: "text-1698160197558",
      access: false,
      subtype: "text",
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1698160232702-0",
      access: false,
      style: "default",
    },
  ]);

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "VALVE LOCATIONS",
      // project_id: id,
      jsonData: jsonData,
      form_no: 18,
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
        VALVE LOCATIONS
      </Typography>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleSubmit, errors, touched, values }) => ( */}
      <FormControl>
        <Grid container mt={1} spacing={1}>
          <Grid item xs={12}>
            <FormLabel component="legend">Operator:</FormLabel>
            <TextField
              fullWidth
              name="operator"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                textDecoration: "underline",
              }}
            >
              Distribution Valve Location and Reference
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <RadioGroup value={selectedOption} onChange={handleChange}>
              <FormControlLabel
                value="GAS_MAIN"
                control={<Radio />}
                label={<Typography>GAS MAIN</Typography>}
              />
              <FormControlLabel
                value="SIDEWALK"
                control={<Radio />}
                label={<Typography>SIDEWALK</Typography>}
              />
              <FormControlLabel
                value="POWER_POLE"
                control={<Radio />}
                label={<Typography>POWER POLE</Typography>}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={4}>
            <RadioGroup value={selectedOption} onChange={handleChange}>
              <FormControlLabel
                value="GAS_VALVE"
                control={<Radio />}
                label={<Typography>GAS VALVE</Typography>}
              />
              <FormControlLabel
                value="EDGE_OF_PAVEMENT"
                control={<Radio />}
                label={<Typography>EDGE OF PAVEMENT</Typography>}
              />
              <FormControlLabel
                value="TELEPHONE_POLE"
                control={<Radio />}
                label={<Typography>TELEPHONE POLE</Typography>}
              />
              <FormControlLabel
                value="MANHOLE"
                control={<Radio />}
                label={<Typography>MANHOLE</Typography>}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={4}>
            <RadioGroup value={selectedOption} onChange={handleChange}>
              <FormControlLabel
                value="FIRE_HYDRANT"
                control={<Radio />}
                label={<Typography>FIRE HYDRANT</Typography>}
              />
              <FormControlLabel
                value="TREET"
                control={<Radio />}
                label={<Typography>TREET</Typography>}
              />
              <FormControlLabel
                value="CURB"
                control={<Radio />}
                label={<Typography>CURB</Typography>}
              />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              NOTE: All Reference Distances are nearest to the face of the curb,
              fire hydrant, pavement, telephone pole, power pole, tree or
              sidewalk at the ground line.
            </Typography>
          </Grid>
        </Grid>
        {/* Box#01 */}
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                paddingTop: "24px",
                marginRight: "18px",
              }}
            >
              North:
            </Typography>
            <Box sx={{ width: "100%" }}>
              <FormLabel component="legend">Valve No.</FormLabel>
              <TextField
                fullWidth
                name="valve1"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Size of Valve:</FormLabel>
            <TextField
              fullWidth
              name="valveSize"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Type of Street Surface:</FormLabel>
            <TextField
              fullWidth
              name="streetSurface"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Depth of Box Below Surface:
            </FormLabel>
            <TextField
              fullWidth
              name="surfaceDepth"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        {/* Box#02 */}
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                paddingTop: "24px",
                marginRight: "18px",
              }}
            >
              North:
            </Typography>
            <Box sx={{ width: "100%" }}>
              <FormLabel component="legend">Valve No.</FormLabel>
              <TextField
                fullWidth
                name="valve2"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Size of Valve:</FormLabel>
            <TextField
              fullWidth
              name="valveSize2"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Type of Street Surface:</FormLabel>
            <TextField
              fullWidth
              name="streetSurface2"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Depth of Box Below Surface:
            </FormLabel>
            <TextField
              fullWidth
              name="surfaceDepth2"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        {/* Box#03 */}
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                paddingTop: "24px",
                marginRight: "18px",
              }}
            >
              North:
            </Typography>
            <Box sx={{ width: "100%" }}>
              <FormLabel component="legend">Valve No.</FormLabel>
              <TextField
                fullWidth
                name="valve3"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Size of Valve:</FormLabel>
            <TextField
              fullWidth
              name="valveSize3"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Type of Street Surface:</FormLabel>
            <TextField
              fullWidth
              name="streetSurface3"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Depth of Box Below Surface:
            </FormLabel>
            <TextField
              fullWidth
              name="surfaceDepth3"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        {/* Box#04 */}
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                paddingTop: "24px",
                marginRight: "18px",
              }}
            >
              North:
            </Typography>
            <Box sx={{ width: "100%" }}>
              <FormLabel component="legend">Valve No.</FormLabel>
              <TextField
                fullWidth
                name="valve4"
                type="number"
                variant="outlined"
                size="small"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Size of Valve:</FormLabel>
            <TextField
              fullWidth
              name="valveSize4"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Type of Street Surface:</FormLabel>
            <TextField
              fullWidth
              name="streetSurface4"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Depth of Box Below Surface:
            </FormLabel>
            <TextField
              fullWidth
              name="surfaceDepth4"
              type="text"
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

export default Form18;
