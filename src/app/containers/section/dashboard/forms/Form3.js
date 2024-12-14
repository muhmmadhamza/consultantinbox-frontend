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
  FormLabel,
  TextareaAutosize,
  FormControl,
} from "@mui/material";

const Form3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h2",
      label: "PATROLLING OF PIPELINE SYSTEM",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "OPERATOR:",
      className: "form-control",
      name: "text-1696858010639-0",
      access: false,
      subtype: "text",
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Period Covered:",
      access: false,
    },

    {
      type: "number",
      required: false,
      label: "Began",
      className: "form-control",
      name: "number-1698326158746-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Ended",
      className: "form-control",
      name: "number-1698326172730-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Areas Covered",
      className: "form-control",
      name: "number-1698326183153-0",
      access: false,
    },

    {
      type: "text",
      required: false,
      label: "Map References:",
      className: "form-control",
      name: "text-1696858024767-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label:
        "Leakage Indications Discovered (describe locations and indications, such as a condition of vegetation):",
      className: "form-control",
      name: "text-1696858025254-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label:
        "Describe any unusual conditions at highway and railroad crossings:",
      className: "form-control",
      name: "text-1696858025982-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label:
        "Other Factors noted which could affect present or future safety or operations of the gas system:",
      className: "form-control",
      name: "text-1696858027382-0",
      access: false,
      subtype: "text",
    },
    {
      type: "text",
      required: false,
      label:
        "Follow-up (repairs, maintenance or test resulting from this inspection):",
      className: "form-control",
      name: "text-1696858291782-0",
      access: false,
      subtype: "text",
    },
    {
      type: "textarea",
      required: false,
      label: "Comments:",
      className: "form-control",
      name: "textarea-1696858452694-0",
      access: false,
      subtype: "textarea",
      rows: 3,
    },
    {
      type: "number",
      required: false,
      label: "Number Of Persons in Patrol Party",
      className: "form-control",
      name: "number-1698326318043-0",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Signature of person in charge of patrol party:",
      className: "form-control",
      name: "text-1696858510110-0",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date:",
      className: "form-control",
      name: "date-1696858514214-0",
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

  const handleNavigate = () => {
    const data = {
      name: null,
      // project_id: id,
      jsonData: jsonData,
      form_no: 3,
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
      <Typography variant="h6" align="center" gutterBottom>
        PATROLLING OF PIPELINE SYSTEM
      </Typography>

      <FormControl>
        <FormLabel component="legend">OPERATOR:</FormLabel>
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

        <Grid mt={2}>
          <Box>
            <Typography>Period Covered: </Typography>
          </Box>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6} mt={2}>
            <FormLabel component="legend">Began:</FormLabel>
            <TextField
              fullWidth
              name="began"
              type="number"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
          <Grid item xs={6} mt={2}>
            <FormLabel component="legend">Ended:</FormLabel>
            <TextField
              fullWidth
              name="ended"
              type="number"
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
            <FormLabel component="legend">Areas Covered:</FormLabel>
            <TextField
              fullWidth
              name="covered"
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
            <FormLabel component="legend">Map References:</FormLabel>
            <TextField
              fullWidth
              name="references"
              variant="outlined"
              InputProps={{
                style: {
                  height: "40px",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">
            Leakage Indications Discovered (describe locations and indications,
            such as a condition of vegetation):
          </FormLabel>
          <TextField
            fullWidth
            name="leakage"
            variant="outlined"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
        </Grid>
        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">
            Describe any unusual conditions at highway and railroad crossings:
          </FormLabel>
          <TextField
            fullWidth
            name="describe"
            variant="outlined"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
        </Grid>
        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">
            Other Factors noted which could affect present or future safety or
            operations of the gas system:
          </FormLabel>
          <TextField
            fullWidth
            name="factors"
            variant="outlined"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
        </Grid>

        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">
            Follow-up (repairs, maintenance or test resulting from this
            inspection):
          </FormLabel>
          <TextField
            fullWidth
            name="follow"
            variant="outlined"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
        </Grid>

        <Grid item xs={6} mt={2}>
          <FormLabel component="legend">Comments:</FormLabel>
          <TextareaAutosize
            rowsMin={3}
            rowsMax={6}
            style={{
              width: "100%",
              height: "80px",
              padding: "10px",
            }}
            name="comments"
            //value={values.comments}
            //onChange={handleChange}
            placeholder="Enter your comments here..."
          />
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FormLabel component="legend">
              {" "}
              Number of Persons in Patrol Party:
            </FormLabel>
            <TextField
              fullWidth
              name="persons"
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
            <FormLabel component="legend">
              {" "}
              Signature of person in charge of patrol party:
            </FormLabel>
            <TextField
              fullWidth
              name="signature"
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
          <FormLabel component="legend">Date:</FormLabel>
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

export default Form3;
