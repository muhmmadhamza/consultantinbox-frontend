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
  FormControl,
  FormLabel,
} from "@mui/material";

const Form16 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "CATHODIC PROTECTION WORKSHEET",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Operator",
      className: "form-control",
      name: "text-1698079264400-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Test Location Number:",
      className: "form-control",
      name: "number-1698079272545-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079404200",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079403546",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079402595",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Indicates Test Station TEST LOCATION",
      className: "form-control",
      name: "text-1698079279495-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698079428808",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698079429592",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      className: "form-control",
      name: "text-1698079430264",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Soil: Resistivity (Ohms-cm)",
      className: "form-control",
      name: "number-1698079288368-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079456289",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079456912",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079457424",
      access: false,
    },
    {
      type: "header",
      subtype: "h4",
      label: "Current Drain\n(milliamps)",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "1st-Qtr Month::",
      className: "form-control",
      name: "number-1698079553823-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079597608",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079596973",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079620239",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "2nd-Qtr Month::",
      className: "form-control",
      name: "number-1698079887627",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079652736",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079661296",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079661751",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "3rd-Qtr Month::",
      className: "form-control",
      name: "number-1698079873513",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079702218",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079714952",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079723888",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "4th-Qtr Month::",
      className: "form-control",
      name: "number-1698079860840",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079762155",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079770299",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079770985",
      access: false,
    },
    {
      type: "header",
      subtype: "h4",
      label: "Pipe-To-Soil Readings\n(–Volts)",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "1st-Qtr Month::",
      className: "form-control",
      name: "number-1698079822052",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079840265",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079853849",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079854442",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "2nd-Qtr Month::",
      className: "form-control",
      name: "number-1698079637812",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079918009",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079918699",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079905170",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "3rd-Qtr Month::",
      className: "form-control",
      name: "number-1698079739274",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079950097",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079960924",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079961616",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "4th-Qtr Month::",
      className: "form-control",
      name: "number-1698079968530",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079668937",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079982899",
      access: false,
    },
    {
      type: "number",
      required: false,
      className: "form-control",
      name: "number-1698079983642",
      access: false,
    },
    {
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1698079997612-0",
      access: false,
      style: "default",
    },
  ]);

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "CATHODIC PROTECTION WORKSHEET",
      // project_id: id,
      jsonData: jsonData,
      form_no: 16,
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
        CATHODIC PROTECTION WORKSHEET
      </Typography>

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

        <Grid container mt={0.5} spacing={1}>
          <Grid item xs={3}>
            <FormLabel component="legend">Test Location Number:</FormLabel>
            <TextField
              fullWidth
              name="locationNumber"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">
              *Indicates Test Station TEST LOCATION
            </FormLabel>
            <TextField
              fullWidth
              name="testStation"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <FormLabel component="legend">
              Soil: Resistivity (Ohms-cm)
            </FormLabel>
            <TextField
              fullWidth
              name="soilResistivity"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        {/* Row#2 */}
        <Grid container spacing={1}>
          <Grid item xs={3} mt={0.5}>
            <TextField
              fullWidth
              name="row2Col1"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6} mt={0.5}>
            <TextField
              fullWidth
              name="row2Col2"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={3} mt={0.5}>
            <TextField
              fullWidth
              name="row2Col3"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        {/* Row3 */}
        <Grid container spacing={1}>
          <Grid item xs={3} mt={0.5}>
            <TextField
              fullWidth
              name="row3Col1"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6} mt={0.5}>
            <TextField
              fullWidth
              name="rows3Col2"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={3} mt={0.5}>
            <TextField
              fullWidth
              name="row3Col3"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        {/* Row4 */}
        <Grid container spacing={1}>
          <Grid item xs={3} mt={0.5}>
            <TextField
              fullWidth
              name="row4Col1"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6} mt={0.5}>
            <TextField
              fullWidth
              name="row4Col2"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={3} mt={0.5}>
            <TextField
              fullWidth
              name="row4Col3"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        {/* Below is last two Columns */}
        <Grid container mt={1} spacing={2}>
          <Grid item xs={6} mt={0.5}>
            <Grid item xs={12}>
              <Typography
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Current Drain (milliamps)
              </Typography>
            </Grid>
            {/* row#5 */}
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <FormLabel component="legend">1st-Qtr Month::</FormLabel>
                <TextField
                  name="row5Col1"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">2nd-Qtr Month::</FormLabel>
                <TextField
                  fullWidth
                  name="row5Col2"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">3rd-Qtr Month::</FormLabel>
                <TextField
                  fullWidth
                  name="row5Col3"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">4th-Qtr Month::</FormLabel>
                <TextField
                  fullWidth
                  name="row5Col4"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} mt={0.5}>
            <Grid item xs={12}>
              <Typography
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Pipe-To-Soil Readings (–Volts)
              </Typography>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <FormLabel component="legend">1st-Qtr Month::</FormLabel>
                <TextField
                  fullWidth
                  name="row5col5"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">2nd-Qtr Month::</FormLabel>
                <TextField
                  fullWidth
                  name="row5Col6"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">3rd-Qtr Month::</FormLabel>
                <TextField
                  fullWidth
                  name="row5Col7"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">4th-Qtr Month::</FormLabel>
                <TextField
                  fullWidth
                  name="row5Col8"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Row#6 */}
        <Grid container spacing={2}>
          <Grid item xs={6} mt={0.5}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  name="row6Col1"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row6Col2"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row6Col3"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row6Col4"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} mt={0.5}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row6Col5"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row6Col6"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row6Col7"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row6Col8"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Row#7 */}
        <Grid container spacing={2}>
          <Grid item xs={6} mt={0.5}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  name="row7Col1"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row7Col2"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row7Col3"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row7Col4"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} mt={0.5}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row7Col5"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row7Col6"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row7Col7"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row7Col8"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Row#8 */}
        <Grid container spacing={2}>
          <Grid item xs={6} mt={0.5}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  name="row8Col1"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row8Col2"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row8Col3"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row8Col4"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} mt={0.5}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row8Col5"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row8Col6"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row8Col7"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="row8Col8"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
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

export default Form16;
