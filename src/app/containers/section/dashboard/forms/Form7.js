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
  FormLabel,
  FormControl,
} from "@mui/material";

const Form7 = () => {
  const { id } = useParams();
  const location = useLocation();
  const { ...state } = location;

  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "MONTHLY ODORANT USE REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1696869016434-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Odorizer Location",
      className: "form-control",
      name: "text-1696869023179",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date of Last inspection:",
      className: "form-control",
      name: "date-1696869052355-0",
      access: false,
    },
    {
      type: "date",
      required: false,
      label: "Today's date:",
      className: "form-control",
      name: "date-1696869054532",
      access: false,
    },
    {
      type: "header",
      subtype: "h4",
      label: "Odorizer Information",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Make",
      className: "form-control",
      name: "text-1696869163899",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Type",
      className: "form-control",
      name: "text-1696869196235",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Tank Capacity:",
      className: "form-control",
      name: "number-1696869195659",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Brand Name of Odorant Used:",
      className: "form-control",
      name: "text-1696869195115",
      access: false,
      subtype: "text",
    },

    {
      type: "paragraph",
      subtype: "p",
      label: "Odorant Usage:",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Odorant in tank at last Inspection:",
      className: "form-control",
      name: "text-1696869194611",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Odorant Added Since Last Inspection:",
      className: "form-control",
      name: "text-1696869296411",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Total Odorant to Account for (Items 1 + 2):",
      className: "form-control",
      name: "number-1696869295947",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Odorant in Tank Today:",
      className: "form-control",
      name: "text-1696869295491",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Odorant Used During this Period (items 3 - 4):",
      className: "form-control",
      name: "text-1696869476915",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Gas Delivery this Period:",
      placeholder: "mmmcf",
      className: "form-control",
      name: "text-1696869484451",
      access: false,
      subtype: "number",
    },
    {
      type: "number",
      required: false,
      label: "Rate of Odorization in lbs. or gal./mmcf::",
      className: "form-control",
      name: "text-1696869484091",
      access: false,
      subtype: "number",
    },
    {
      type: "paragraph",
      subtype: "p",
      label:
        "Odorant Used in lbs./gal                             (item 5)                                            lbs. or gals./mmcf",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Gas Delivery in mmcf                            (item 5)",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "[Note: mmcf = million cubic foot]",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Inspector:",
      className: "form-control",
      name: "text-1696869851660",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label: "Signature:",
      className: "form-control",
      name: "text-1696869857071",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696869909572-0",
      access: false,
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1696869924044-0",
      access: false,
      style: "default",
    },
  ]);

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "Monthly Odorant Use Report",
      // project_id: id,
      jsonData: jsonData,
      form_no: 7,
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
        MONTHLY ODORANT USE REPORT
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
            <FormLabel component="legend">Odorizer Location</FormLabel>
            <TextField
              fullWidth
              name="location"
              variant="outlined"
              type="text"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">Date of Last inspection:</FormLabel>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend"> Today’s date</FormLabel>
            <TextField
              fullWidth
              name="date"
              type="date"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Typography variant="h6" align="center" gutterBottom mt={3}>
          Odorizer Information
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
            <FormLabel component="legend">Tank Capacity:</FormLabel>
            <TextField
              fullWidth
              name="capacity"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">
              Brand Name of Odorant Used:
            </FormLabel>
            <TextField
              fullWidth
              name="brand"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <FormLabel component="legend">Odorant Usage:</FormLabel>
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">
              Odorant in tank at last Inspection:
            </FormLabel>
            <TextField
              fullWidth
              name="inspection"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">
              Odorant Added Since Last Inspection:
            </FormLabel>
            <TextField
              fullWidth
              name="added"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Total Odorant to Account for (Items 1 + 2):
            </FormLabel>
            <TextField
              fullWidth
              name="odorant"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Odorant in Tank Today:</FormLabel>
            <TextField
              fullWidth
              name="tank"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Odorant Used During this Period (Items 3 – 4):
            </FormLabel>
            <TextField
              fullWidth
              name="period"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormLabel component="legend">Gas Delivery this Period:</FormLabel>
            <TextField
              fullWidth
              name="delivery"
              type="number"
              variant="outlined"
              placeholder="mmcf"
              size="small"
            />
          </Grid>
        </Grid>

        <FormLabel component="legend">
          Rate of Odorization in lbs. or gal./mmcf:
        </FormLabel>
        <TextField
          fullWidth
          name="odorization"
          type="number"
          variant="outlined"
          size="small"
        />

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <Typography variant="subtitle1">
                Odorant Used in lbs./gal
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">(Item 5) </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography variant="subtitle1">lbs. or gals./mmcf</Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box>
              <Typography variant="subtitle1"> Gas Delivery in mmcf</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">(Item 6) </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom mt={2}>
          [Note: mmcf = million cubic foot]
        </Typography>

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
                type="text"
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

export default Form7;
