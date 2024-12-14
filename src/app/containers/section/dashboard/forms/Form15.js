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
  FormControl,
} from "@mui/material";

const Form15 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jsonData, setJsonData] = useState([
    {
      type: "header",
      subtype: "h1",
      label: "MECHANICAL FITTING FAILURE REPORT",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Location of Field Fitting (Adress, Etc):",
      className: "form-control",
      name: "text-1697802858132-0",
      access: false,
      subtype: "text",
    },
    {
      type: "date",
      required: false,
      label: "Date of failure:",
      className: "form-control",
      name: "date-1697635376029-0",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Specify the Mechanical Fitting Involved:",
      inline: true,
      name: "radio-group-1697635449787-0",
      access: false,
      other: false,
      values: [
        {
          label: "Stab",
          value: "option-1",
          selected: false,
        },
        {
          label: "Nut Follower",
          value: "option-2",
          selected: false,
        },
        {
          label: "Bolted",
          value: "option-3",
          selected: true,
        },
        {
          label: "Other",
          value: "option-4",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Specify the Type of Mechanical Fitting:",
      inline: true,
      name: "radio-group-1697635450637-0",
      access: false,
      other: false,
      values: [
        {
          label: "Service/Main Tee",
          value: "option-1",
          selected: false,
        },
        {
          label: "Tapping Tee",
          value: "option-2",
          selected: true,
        },
        {
          label: "Transition Fitting",
          value: "option-3",
          selected: false,
        },
        {
          label: "Coupling",
          value: "option-4",
          selected: false,
        },
        {
          label: "Riser",
          value: "option-5",
          selected: false,
        },
        {
          label: "Adapter",
          value: "option-6",
          selected: false,
        },
        {
          label: "Valve",
          value: "option-7",
          selected: false,
        },
        {
          label: "Sleeve",
          value: "option-8",
          selected: false,
        },
        {
          label: "End Cap",
          value: "option-9",
          selected: false,
        },
        {
          label: "Other",
          value: "option-10",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Leak Location:",
      inline: true,
      name: "radio-group-1697635808917-0",
      access: false,
      other: false,
      values: [
        {
          label: "Aboveground",
          value: "option-1",
          selected: false,
        },
        {
          label: "Belowground",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Leak Location:",
      inline: true,
      name: "radio-group-1697635861311",
      access: false,
      other: false,
      values: [
        {
          label: "Inside",
          value: "option-1",
          selected: false,
        },
        {
          label: "Outside",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Leak Location:",
      inline: true,
      name: "radio-group-1697635883244",
      access: false,
      other: false,
      values: [
        {
          label: "Main-to-Main",
          value: "option-1",
          selected: false,
        },
        {
          label: "Main-to-Service",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Leak Location:",
      inline: true,
      name: "radio-group-1697635922373",
      access: false,
      other: false,
      values: [
        {
          label: "Service-to-Service",
          value: "option-1",
          selected: false,
        },
        {
          label: "Meter Set",
          value: "option-2",
          selected: false,
        },
      ],
    },
    {
      type: "number",
      required: false,
      label: "Year Installed:",
      className: "form-control",
      name: "number-1697636060709-0",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Year Manufactured:",
      className: "form-control",
      name: "number-1697636092140",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "If Both not Known, Provide Decade Installed:",
      className: "form-control",
      name: "number-1697636131484",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Manufacturer:",
      className: "form-control",
      name: "text-1697636182036-0",
      access: false,
      subtype: "text",
    },
    {
      type: "number",
      required: false,
      label: "Part or Model Number:",
      className: "form-control",
      name: "number-1697636226925",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Lot Number:",
      className: "form-control",
      name: "number-1697636265829",
      access: false,
    },
    {
      type: "text",
      required: false,
      label: "Other Attributes:",
      className: "form-control",
      name: "text-1697636287813-0",
      access: false,
      subtype: "text",
    },
    {
      type: "radio-group",
      required: false,
      label: "Fitting Material: ",
      inline: true,
      name: "radio-group-1697636439219-0",
      access: false,
      other: false,
      values: [
        {
          label: "Steel",
          value: "option-1",
          selected: false,
        },
        {
          label: "Plastic",
          value: "option-2",
          selected: false,
        },
        {
          label: "Combination of these two",
          value: "option-3",
          selected: false,
        },
        {
          label: "Bolted",
          value: "option-4",
          selected: false,
        },
        {
          label: "Unknow",
          value: "option-5",
          selected: false,
        },
        {
          label: "Other",
          value: "option-6",
          selected: false,
        },
      ],
    },
    {
      type: "paragraph",
      subtype: "p",
      label:
        "Specify the two materials connected to the failed mechanical fitting:",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "a. First Pipe",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Normal Size:",
      inline: true,
      name: "radio-group-1697636765633-0",
      access: false,
      other: false,
      values: [
        {
          label: '1/4"',
          value: "option-1",
          selected: false,
        },
        {
          label: '1/2"',
          value: "option-2",
          selected: false,
        },
        {
          label: '3/4"',
          value: "option-3",
          selected: false,
        },
        {
          label: '1"',
          value: "",
          selected: false,
        },
        {
          label: '1-1/4"',
          value: "",
          selected: false,
        },
        {
          label: '1-1/2"',
          value: "",
          selected: false,
        },
        {
          label: '1-3/4"',
          value: "",
          selected: false,
        },
        {
          label: '2"',
          value: "",
          selected: false,
        },
        {
          label: '3"',
          value: "",
          selected: false,
        },
        {
          label: '4"',
          value: "",
          selected: false,
        },
        {
          label: '6"',
          value: "",
          selected: false,
        },
        {
          label: '8"',
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Units:",
      inline: true,
      name: "radio-group-1697636992379-0",
      access: false,
      other: false,
      values: [
        {
          label: "IPS",
          value: "option-1",
          selected: false,
        },
        {
          label: "CTS",
          value: "option-2",
          selected: false,
        },
        {
          label: "NPS",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Material:",
      inline: true,
      name: "radio-group-1697647017457-0",
      access: false,
      other: false,
      values: [
        {
          label: "Steel",
          value: "option-1",
          selected: false,
        },
        {
          label: "Cast/Wrought Iron",
          value: "option-2",
          selected: false,
        },
        {
          label: "Ductile Iron",
          value: "option-3",
          selected: false,
        },
        {
          label: "Copper",
          value: "option-4",
          selected: false,
        },
        {
          label: "Plastic",
          value: "option-5",
          selected: false,
        },
        {
          label: "Unkown",
          value: "option-6",
          selected: false,
        },
        {
          label: "Other",
          value: "option-7",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "If Plastic, then specify: ",
      inline: true,
      name: "radio-group-1697637037411-0",
      access: false,
      other: false,
      values: [
        {
          label: "Polyethylene (PE)",
          value: "option-1",
          selected: false,
        },
        {
          label: "Polyvinyl Chloride (PVC)",
          value: "option-2",
          selected: false,
        },
        {
          label: "Cross-linked Polyethylene (PEX)",
          value: "option-3",
          selected: false,
        },
        {
          label: "Polybutylene (PB)",
          value: "",
          selected: false,
        },
        {
          label: "Polypropylene (PP)",
          value: "",
          selected: false,
        },
        {
          label: "Acrylonitrile Butadiene Styrene (ABS)",
          value: "",
          selected: false,
        },
        {
          label: "Polyamide (PA)",
          value: "",
          selected: false,
        },
        {
          label: "Cellulose Acetate Butyrate (CAB)",
          value: "",
          selected: false,
        },
        {
          label: "Other",
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "b. Second Pipe",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Normal Size:",
      inline: true,
      name: "radio-group-1697646897598",
      access: false,
      other: false,
      values: [
        {
          label: '1/4"',
          value: "option-1",
          selected: false,
        },
        {
          label: '1/2"',
          value: "option-2",
          selected: false,
        },
        {
          label: '3/4"',
          value: "option-3",
          selected: false,
        },
        {
          label: '1"',
          value: "",
          selected: false,
        },
        {
          label: '1-1/4"',
          value: "",
          selected: false,
        },
        {
          label: '1-1/2"',
          value: "",
          selected: false,
        },
        {
          label: '1-3/4"',
          value: "",
          selected: false,
        },
        {
          label: '2"',
          value: "",
          selected: false,
        },
        {
          label: '3"',
          value: "",
          selected: false,
        },
        {
          label: '4"',
          value: "",
          selected: false,
        },
        {
          label: '6"',
          value: "",
          selected: false,
        },
        {
          label: '8"',
          value: "",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Units:",
      inline: true,
      name: "radio-group-1697646933713",
      access: false,
      other: false,
      values: [
        {
          label: "IPS",
          value: "option-1",
          selected: false,
        },
        {
          label: "CTS",
          value: "option-2",
          selected: false,
        },
        {
          label: "NPS",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Material:",
      inline: true,
      name: "radio-group-1697647139763",
      access: false,
      other: false,
      values: [
        {
          label: "Steel",
          value: "option-1",
          selected: false,
        },
        {
          label: "Cast/Wrought Iron",
          value: "option-2",
          selected: false,
        },
        {
          label: "Ductile Iron",
          value: "option-3",
          selected: false,
        },
        {
          label: "Copper",
          value: "option-4",
          selected: false,
        },
        {
          label: "Plastic",
          value: "option-5",
          selected: false,
        },
        {
          label: "Unkown",
          value: "option-6",
          selected: false,
        },
        {
          label: "Other",
          value: "option-7",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Apparent Cause of Failure:",
      inline: true,
      name: "radio-group-1697647319111-0",
      access: false,
      other: false,
      values: [
        {
          label: "Corrosion",
          value: "option-1",
          selected: false,
        },
        {
          label: "Natural Forces",
          value: "option-2",
          selected: false,
        },
        {
          label: "Excavation Damage",
          value: "option-3",
          selected: false,
        },
        {
          label: "Other Outside Force Damage",
          value: "option-4",
          selected: false,
        },
        {
          label: "Material or Welds/Fusions",
          value: "option-5",
          selected: false,
        },
        {
          label: "Equipment",
          value: "option-6",
          selected: false,
        },
        {
          label: "Incorrect Operation",
          value: "option-7",
          selected: false,
        },
        {
          label: "Other",
          value: "option-8",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "How did the leak occur?:",
      inline: true,
      name: "radio-group-1697647512822-0",
      access: false,
      other: false,
      values: [
        {
          label: "Leaked Through Seal",
          value: "option-1",
          selected: false,
        },
        {
          label: "Leaked Through Body",
          value: "option-2",
          selected: false,
        },
        {
          label: "Pulled Out",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "radio-group",
      required: false,
      label: "Was this a hazardous leak requiring reporting?",
      inline: true,
      name: "radio-group-1697647591607-0",
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
      type: "button",
      subtype: "submit",
      label: "Submit Form",
      className: "btn-default btn",
      name: "button-1697647654146-0",
      access: false,
      style: "default",
    },
  ]);

  const [selectedLoadings, setSelectedLoadings] = useState({
    fittingInvolved: "",
    fittingType: "",
    leakFromGround: "",
    leakFromInsideOutside: "",
    leakFromMainTo: "",
    leakFromServiceTo: "",
    fittingMaterial: "",
    firstPipeNominalSize: "",
    firstPipeUnits: "",
    firstPipeMaterial: "",
    ifPlasticThenSpecify: "",
    secondPipeNominalSize: "",
    secondPipeUnits: "",
    secondPipeMaterial: "",
    apparentCauseOfFailure: "",
    howLeakOccur: "",
    hazardousLeak: "",
  });

  const handleLoadingChange = (name, value) => {
    setSelectedLoadings((prevLoadings) => ({
      ...prevLoadings,
      [name]: value,
    }));
  };

  const handleNavigate = () => {
    const data = {
      name: null,
      // name: "MECHANICAL FITTING FAILURE REPORT",
      // project_id: id,
      jsonData: jsonData,
      form_no: 15,
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
        MECHANICAL FITTING FAILURE REPORT
      </Typography>
      <FormControl>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Location of Failed Fitting (Address, etc.):
            </FormLabel>
            <TextField
              fullWidth
              name="location"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Date of failure:</FormLabel>
            <TextField fullWidth name="date" type="date" variant="outlined" />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">
              Specify the Mechanical Fitting Involved:
            </FormLabel>
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.fittingInvolved === "stab"}
                  onChange={() =>
                    handleLoadingChange("fittingInvolved", "stab")
                  }
                />
              }
              label="Stab"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.fittingInvolved === "nutFollower"}
                  onChange={() =>
                    handleLoadingChange("fittingInvolved", "nutFollower")
                  }
                />
              }
              label="Nut Follower"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.fittingInvolved === "bolted"}
                  onChange={() =>
                    handleLoadingChange("fittingInvolved", "bolted")
                  }
                />
              }
              label="Bolted"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.fittingInvolved === "other"}
                  onChange={() =>
                    handleLoadingChange("fittingInvolved", "other")
                  }
                />
              }
              label="Other"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">
              Specify the Type of Mechanical Fitting:{" "}
            </FormLabel>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.fittingType === "serviceMainTee"
                      }
                      onChange={() =>
                        handleLoadingChange("fittingType", "serviceMainTee")
                      }
                    />
                  }
                  label="Service/Main Tee"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "TappingTee"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "TappingTee")
                      }
                    />
                  }
                  label="Tapping Tee"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.fittingType === "TransitionFitting"
                      }
                      onChange={() =>
                        handleLoadingChange("fittingType", "TransitionFitting")
                      }
                    />
                  }
                  label="Transition Fitting"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "coupling"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "coupling")
                      }
                    />
                  }
                  label="Coupling"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "riser"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "riser")
                      }
                    />
                  }
                  label="Riser"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "adapter"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "adapter")
                      }
                    />
                  }
                  label="Adapter"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "valve"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "valve")
                      }
                    />
                  }
                  label="Valve"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "sleeve"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "sleeve")
                      }
                    />
                  }
                  label="Sleeve"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "endCap"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "endCap")
                      }
                    />
                  }
                  label="End Cap"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingType === "other"}
                      onChange={() =>
                        handleLoadingChange("fittingType", "other")
                      }
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Leak Location: </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.leakFromGround === "aboveGround"}
                  onChange={() =>
                    handleLoadingChange("leakFromGround", "aboveGround")
                  }
                />
              }
              label="Aboveground"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.leakFromGround === "belowGround"}
                  onChange={() =>
                    handleLoadingChange("leakFromGround", "belowGround")
                  }
                />
              }
              label="Belowground"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Leak Location: </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.leakFromInsideOutside === "inSide"}
                  onChange={() =>
                    handleLoadingChange("leakFromInsideOutside", "inSide")
                  }
                />
              }
              label="Inside"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.leakFromInsideOutside === "outSide"}
                  onChange={() =>
                    handleLoadingChange("leakFromInsideOutside", "outSide")
                  }
                />
              }
              label="Outside"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Leak Location: </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.leakFromMainTo === "mainToMain"}
                  onChange={() =>
                    handleLoadingChange("leakFromMainTo", "mainToMain")
                  }
                />
              }
              label="Main-to-Main"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.leakFromMainTo === "MainToService"}
                  onChange={() =>
                    handleLoadingChange("leakFromMainTo", "MainToService")
                  }
                />
              }
              label="Main-to-Service"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Leak Location: </FormLabel>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={
                    selectedLoadings.leakFromServiceTo === "serviceToService"
                  }
                  onChange={() =>
                    handleLoadingChange("leakFromServiceTo", "serviceToService")
                  }
                />
              }
              label="Service-to-Service"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.leakFromServiceTo === "meterSet"}
                  onChange={() =>
                    handleLoadingChange("leakFromServiceTo", "meterSet")
                  }
                />
              }
              label="Meter Set"
            />
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Year Installed:</FormLabel>
            <TextField
              fullWidth
              name="installed"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">Year Manufactured:</FormLabel>
            <TextField
              fullWidth
              name="manufacured"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">
              If Both not known, Provide Decade Installed:
            </FormLabel>
            <TextField
              fullWidth
              name="installed"
              type="number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={2}>
          <Grid item xs={4}>
            <FormLabel component="legend">Manufacturer:</FormLabel>
            <TextField
              fullWidth
              name="installed"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">Part or Model Number:</FormLabel>
            <TextField
              fullWidth
              name="manufacured"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <FormLabel component="legend">Lot Number:</FormLabel>
            <TextField
              fullWidth
              name="installed"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Other Attributes:</FormLabel>
            <TextField
              fullWidth
              name="installed"
              type="text"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">Fitting Material: </FormLabel>
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingMaterial === "steel"}
                      onChange={() =>
                        handleLoadingChange("fittingMaterial", "steel")
                      }
                    />
                  }
                  label="Steel"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingMaterial === "plastic"}
                      onChange={() =>
                        handleLoadingChange("fittingMaterial", "plastic")
                      }
                    />
                  }
                  label="Plastic"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.fittingMaterial ===
                        "combinationOfThese"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "fittingMaterial",
                          "combinationOfThese"
                        )
                      }
                    />
                  }
                  label="Combitnation of these two"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingMaterial === "bolted"}
                      onChange={() =>
                        handleLoadingChange("fittingMaterial", "bolted")
                      }
                    />
                  }
                  label="Bolted"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingMaterial === "unKnown"}
                      onChange={() =>
                        handleLoadingChange("fittingMaterial", "unKnown")
                      }
                    />
                  }
                  label="Unknown"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.fittingMaterial === "other"}
                      onChange={() =>
                        handleLoadingChange("fittingMaterial", "other")
                      }
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
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
              Specify the two materials connected to the failed mechanical
              fitting:
            </Typography>
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
              a. First Pipe
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">Nominal Size:</FormLabel>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeNominalSize === "quater"
                      }
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "quater")
                      }
                    />
                  }
                  label='1/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeNominalSize === "half"}
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "half")
                      }
                    />
                  }
                  label='1/2"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeNominalSize === "threeQuaters"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "firstPipeNominalSize",
                          "threeQuaters"
                        )
                      }
                    />
                  }
                  label='3/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeNominalSize === "one"}
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "one")
                      }
                    />
                  }
                  label='1"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeNominalSize ===
                        "oneAndOneQuater"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "firstPipeNominalSize",
                          "oneAndOneQuater"
                        )
                      }
                    />
                  }
                  label='1-1/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeNominalSize === "oneAndHalf"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "firstPipeNominalSize",
                          "oneAndHalf"
                        )
                      }
                    />
                  }
                  label='1-1/2"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeNominalSize ===
                        "oneAndThreeQuaters"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "firstPipeNominalSize",
                          "oneAndThreeQuaters"
                        )
                      }
                    />
                  }
                  label='1-3/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeNominalSize === "two"}
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "two")
                      }
                    />
                  }
                  label='2"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeNominalSize === "three"
                      }
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "three")
                      }
                    />
                  }
                  label='3"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeNominalSize === "four"}
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "four")
                      }
                    />
                  }
                  label='4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeNominalSize === "six"}
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "six")
                      }
                    />
                  }
                  label='6"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeNominalSize === "eight"
                      }
                      onChange={() =>
                        handleLoadingChange("firstPipeNominalSize", "eight")
                      }
                    />
                  }
                  label='8"'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">Units:</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.firstPipeUnits === "ips"}
                  onChange={() => handleLoadingChange("firstPipeUnits", "ips")}
                />
              }
              label="IPS"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.firstPipeUnits === "cts"}
                  onChange={() => handleLoadingChange("firstPipeUnits", "cts")}
                />
              }
              label="CTS"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.firstPipeUnits === "nps"}
                  onChange={() => handleLoadingChange("firstPipeUnits", "nps")}
                />
              }
              label="NPS"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">Material:</FormLabel>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeMaterial === "steel"}
                      onChange={() =>
                        handleLoadingChange("firstPipeMaterial", "steel")
                      }
                    />
                  }
                  label="Steel"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeMaterial === "castWroughtIron"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "firstPipeMaterial",
                          "castWroughtIron"
                        )
                      }
                    />
                  }
                  label="Cast/Wrought Iron"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.firstPipeMaterial === "ductileIron"
                      }
                      onChange={() =>
                        handleLoadingChange("firstPipeMaterial", "ductileIron")
                      }
                    />
                  }
                  label="Ductile Iron"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeMaterial === "copper"}
                      onChange={() =>
                        handleLoadingChange("firstPipeMaterial", "copper")
                      }
                    />
                  }
                  label="Copper"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeMaterial === "plastic"}
                      onChange={() =>
                        handleLoadingChange("firstPipeMaterial", "plastic")
                      }
                    />
                  }
                  label="Plastic"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeMaterial === "unKwon"}
                      onChange={() =>
                        handleLoadingChange("firstPipeMaterial", "unKwon")
                      }
                    />
                  }
                  label="Unknown"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.firstPipeMaterial === "other"}
                      onChange={() =>
                        handleLoadingChange("firstPipeMaterial", "other")
                      }
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">If Plastic, then specify:</FormLabel>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify === "polyethylene"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "ifPlasticThenSpecify",
                          "polyethylene"
                        )
                      }
                    />
                  }
                  label="Polyethylene (PE)"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify ===
                        "polyvinylChloride"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "ifPlasticThenSpecify",
                          "polyvinylChloride"
                        )
                      }
                    />
                  }
                  label="Polyvinyl Chloride (PVC)"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify ===
                        "crossLinkedPolyethylene"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "ifPlasticThenSpecify",
                          "crossLinkedPolyethylene"
                        )
                      }
                    />
                  }
                  label="Cross-linked Polyethylene (PEX) "
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify === "polyButylene"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "ifPlasticThenSpecify",
                          "polyButylene"
                        )
                      }
                    />
                  }
                  label="Polybutylene (PB)"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify ===
                        "polyPropylene"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "ifPlasticThenSpecify",
                          "polyPropylene"
                        )
                      }
                    />
                  }
                  label="Polypropylene (PP)"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify ===
                        "acrylonitrileButadieneStyrene"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "ifPlasticThenSpecify",
                          "acrylonitrileButadieneStyrene"
                        )
                      }
                    />
                  }
                  label="Acrylonitrile Butadiene Styrene (ABS)"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify === "polyAmide"
                      }
                      onChange={() =>
                        handleLoadingChange("ifPlasticThenSpecify", "polyAmide")
                      }
                    />
                  }
                  label="Polyamide (PA)"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify ===
                        "celluloseAcetateButyrate"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "ifPlasticThenSpecify",
                          "celluloseAcetateButyrate"
                        )
                      }
                    />
                  }
                  label="Cellulose Acetate Butyrate (CAB)"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.ifPlasticThenSpecify === "other"
                      }
                      onChange={() =>
                        handleLoadingChange("ifPlasticThenSpecify", "other")
                      }
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
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
              b. Second Pipe
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">Nominal Size:</FormLabel>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize === "quater"
                      }
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "quater")
                      }
                    />
                  }
                  label='1/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize === "half"
                      }
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "half")
                      }
                    />
                  }
                  label='1/2"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize ===
                        "threeQuaters"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "secondPipeNominalSize",
                          "threeQuaters"
                        )
                      }
                    />
                  }
                  label='3/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.secondPipeNominalSize === "one"}
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "one")
                      }
                    />
                  }
                  label='1"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize ===
                        "oneAndOneQuater"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "secondPipeNominalSize",
                          "oneAndOneQuater"
                        )
                      }
                    />
                  }
                  label='1-1/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize === "oneAndHalf"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "secondPipeNominalSize",
                          "oneAndHalf"
                        )
                      }
                    />
                  }
                  label='1-1/2"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize ===
                        "oneAndThreeQuaters"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "secondPipeNominalSize",
                          "oneAndThreeQuaters"
                        )
                      }
                    />
                  }
                  label='1-3/4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.secondPipeNominalSize === "two"}
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "two")
                      }
                    />
                  }
                  label='2"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize === "three"
                      }
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "three")
                      }
                    />
                  }
                  label='3"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize === "four"
                      }
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "four")
                      }
                    />
                  }
                  label='4"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.secondPipeNominalSize === "six"}
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "six")
                      }
                    />
                  }
                  label='6"'
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeNominalSize === "eight"
                      }
                      onChange={() =>
                        handleLoadingChange("secondPipeNominalSize", "eight")
                      }
                    />
                  }
                  label='8"'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">Units:</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.secondPipeUnits === "ips"}
                  onChange={() => handleLoadingChange("secondPipeUnits", "ips")}
                />
              }
              label="IPS"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.secondPipeUnits === "cts"}
                  onChange={() => handleLoadingChange("secondPipeUnits", "cts")}
                />
              }
              label="CTS"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.secondPipeUnits === "nps"}
                  onChange={() => handleLoadingChange("secondPipeUnits", "nps")}
                />
              }
              label="NPS"
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">Material:</FormLabel>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.secondPipeMaterial === "steel"}
                      onChange={() =>
                        handleLoadingChange("secondPipeMaterial", "steel")
                      }
                    />
                  }
                  label="Steel"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeMaterial ===
                        "castWroughtIron"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "secondPipeMaterial",
                          "castWroughtIron"
                        )
                      }
                    />
                  }
                  label="Cast/Wrought Iron"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeMaterial === "ductileIron"
                      }
                      onChange={() =>
                        handleLoadingChange("secondPipeMaterial", "ductileIron")
                      }
                    />
                  }
                  label="Ductile Iron"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.secondPipeMaterial === "copper"}
                      onChange={() =>
                        handleLoadingChange("secondPipeMaterial", "copper")
                      }
                    />
                  }
                  label="Copper"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.secondPipeMaterial === "plastic"
                      }
                      onChange={() =>
                        handleLoadingChange("secondPipeMaterial", "plastic")
                      }
                    />
                  }
                  label="Plastic"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.secondPipeMaterial === "unKown"}
                      onChange={() =>
                        handleLoadingChange("secondPipeMaterial", "unKown")
                      }
                    />
                  }
                  label="Unknown"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.secondPipeMaterial === "other"}
                      onChange={() =>
                        handleLoadingChange("secondPipeMaterial", "other")
                      }
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={2}>
            <FormLabel component="legend">Apparent Cause of Failure:</FormLabel>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure === "corrosion"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "apparentCauseOfFailure",
                          "corrosion"
                        )
                      }
                    />
                  }
                  label="Corrosion"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure ===
                        "naturalForces"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "apparentCauseOfFailure",
                          "naturalForces"
                        )
                      }
                    />
                  }
                  label="Natural Forces"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure ===
                        "execavationDemage"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "apparentCauseOfFailure",
                          "execavationDemage"
                        )
                      }
                    />
                  }
                  label="Excavation Damage"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure ===
                        "OutsideForceDemage"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "apparentCauseOfFailure",
                          "OutsideForceDemage"
                        )
                      }
                    />
                  }
                  label="Other Outside Force Damage"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure === "fusions"
                      }
                      onChange={() =>
                        handleLoadingChange("apparentCauseOfFailure", "fusions")
                      }
                    />
                  }
                  label="Material or Welds/Fusions"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure === "equipment"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "apparentCauseOfFailure",
                          "equipment"
                        )
                      }
                    />
                  }
                  label="Equipment"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure ===
                        "incorrectOperation"
                      }
                      onChange={() =>
                        handleLoadingChange(
                          "apparentCauseOfFailure",
                          "incorrectOperation"
                        )
                      }
                    />
                  }
                  label="Incorrect Operation"
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={
                        selectedLoadings.apparentCauseOfFailure === "other"
                      }
                      onChange={() =>
                        handleLoadingChange("apparentCauseOfFailure", "other")
                      }
                    />
                  }
                  label="Other"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={3}>
            <FormLabel component="legend">How did the leak occur?:</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.howLeakOccur === "throughSeal"}
                      onChange={() =>
                        handleLoadingChange("howLeakOccur", "throughSeal")
                      }
                    />
                  }
                  label=" Leaked Through Seal"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.howLeakOccur === "throughBody"}
                      onChange={() =>
                        handleLoadingChange("howLeakOccur", "throughBody")
                      }
                    />
                  }
                  label=" Leaked Through Body"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedLoadings.howLeakOccur === "pulledOut"}
                      onChange={() =>
                        handleLoadingChange("howLeakOccur", "pulledOut")
                      }
                    />
                  }
                  label="Pulled Out"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={6}>
            <FormLabel component="legend">
              Was this a hazardous leak requiring reporting?:
            </FormLabel>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.hazardousLeak === "yes"}
                  onChange={() => handleLoadingChange("hazardousLeak", "yes")}
                />
              }
              label=" Yes"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedLoadings.hazardousLeak === "no"}
                  onChange={() => handleLoadingChange("hazardousLeak", "no")}
                />
              }
              label=" No"
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

export default Form15;
