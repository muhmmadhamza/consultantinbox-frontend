import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, TextareaAutosize } from "@mui/material";
import Logo from "../../../../assets/logo.png";
import {
  TextField,
  FormLabel,
  Autocomplete,
  MenuItem,
  Checkbox,
  FormControl,
  Radio,
  RadioGroup,
  Select,
  FormControlLabel,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import "./style.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, onClose, formData }) {
  const [checkboxStates, setCheckboxStates] = useState({});
  const [isAppBarVisible, setIsAppBarVisible] = useState();

  const handleCheckboxChange = (fieldName, value) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [fieldName]: {
        ...prevStates[fieldName],
        [value]: !prevStates[fieldName]?.[value],
      },
    }));
  };

  const handlePrint = () => {
    setIsAppBarVisible(false);
    window.print();
  };
  const handleClose = () => {
    onClose();
    setIsAppBarVisible(true);
  };

  // React.useEffect(()=>{
  //   handlePrint();
  //   handleClose();

  // },[isAppBarVisible])

  const renderFormField = (field, index) => {
    switch (field.type) {
      case "header":
        return (
          <Typography
            sx={{
              fontSize: "1rem !important",
              marginBottom: "15px",
              textAlign: "center",
              "@media print": {
                fontSize: "14px !important",
                marginBottom: "5px",
              },
            }}
            variant={field.subtype}
            key={index}
          >
            {field.label}
          </Typography>
        );
      case "paragraph":
        return (
          <Typography
            key={index}
            variant="body1"
            mt={2}
            mb={2}
            sx={{
              width: "100%",
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #d1d1d1",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
              "@media print": {
                fontSize: "12px !important",
                marginBottom: "5px",
                padding: "5px",
              },
            }}
          >
            {field.label}
          </Typography>
        );

      case "text":
        return (
          <Box
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {field.label}
            </FormLabel>
            <TextField
              name={field.name}
              type={field.type}
              fullWidth
              value={field.value}
              sx={{
                "@media print": {
                  "& .MuiInputBase-input": {
                    padding: "5px 10px !important",
                  },
                },
              }}
            />
          </Box>
        );
      case "number":
        return (
          <Box
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {field.label}
            </FormLabel>
            <TextField
              name={field.name}
              type={field.type}
              fullWidth
              value={field.value}
              sx={{
                "@media print": {
                  "& .MuiInputBase-input": {
                    padding: "5px 10px !important",
                  },
                },
              }}
            />
          </Box>
        );

      case "textarea":
        return (
          <Box
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {field.label}
            </FormLabel>
            <TextField
              fullWidth
              multiline
              rows={field.rows}
              name={field.name}
              value={field.value}
              sx={{
                "@media print": {
                  "& .MuiInputBase-input": {
                    padding: "5px 10px !important",
                  },
                },
              }}
            />
          </Box>
        );

      case "date":
        return (
          <Box
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {field.label}
            </FormLabel>
            <TextField
              fullWidth
              type="date"
              name={field.name}
              value={field.value}
              sx={{
                "@media print": {
                  "& .MuiInputBase-input": {
                    padding: "5px 10px !important",
                  },
                },
              }}
            />
          </Box>
        );

      case "checkbox-group":
        return (
          <Grid
            container
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <Grid item xs={12}>
              <FormLabel
                component="legend"
                sx={{
                  "@media print": {
                    fontSize: "12px",
                  },
                }}
              >
                {field.label}
              </FormLabel>
            </Grid>
            <Grid item xs={12}>
              {field.values.map((option) => (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Checkbox
                      name={field.name}
                      value={option.value}
                      checked={option.selected}
                    />
                  }
                  label={option.label}
                />
              ))}
            </Grid>
          </Grid>
        );

      case "radio-group":
        return (
          <Grid
            container
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <Grid item xs={12}>
              <FormLabel
                component="legend"
                sx={{
                  "@media print": {
                    fontSize: "12px",
                  },
                }}
              >
                {field.label}
              </FormLabel>
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name={field.name}
              >
                {field.values.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    control={
                      <Radio
                        name={field.name}
                        value={option.value}
                        checked={option.selected}
                      />
                    }
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        );

      case "select":
        return (
          <Grid
            container
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <Grid item xs={12}>
              <FormLabel
                component="legend"
                sx={{
                  "@media print": {
                    fontSize: "12px",
                  },
                }}
              >
                {field.label}
              </FormLabel>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  name={field.name}
                  value={field.values.find((option) => option.selected)?.value}
                >
                  {field.values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );

      case "autocomplete":
        return (
          <Grid
            container
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <Grid item xs={12}>
              <FormLabel
                component="legend"
                sx={{
                  "@media print": {
                    fontSize: "12px",
                  },
                }}
              >
                {field.label}
              </FormLabel>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                name={field.name}
                options={field.values}
                getOptionLabel={(option) => option.label}
                value={field.values.find((option) => option.selected) || null}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
              />
            </Grid>
          </Grid>
        );

      case "file":
        return (
          <Box
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {field.label}
            </FormLabel>
            <Box>
              <input
                type="file"
                accept="image/*"
                name={field.name}
                // onChange={handleImageChange}
                id="file"
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "5px",
                  border: "1px solid #d1d1d1",
                  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                  outline: "none",
                }}
              />
              {/*{imageUrl && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={URL.createObjectURL(imageUrl)}
                  alt="Selected"
                  style={{ maxWidth: "100px" }}
                />
                <FaTimes
                  className="ml-2"
                  onClick={handleRemoveImage}
                  style={{ cursor: "pointer" }}
                />
              </Box>
              )}*/}
            </Box>
          </Box>
        );

      case "hidden":
        return (
          <Box
            key={index}
            sx={{
              marginBottom: "15px",
              "@media print": {
                marginBottom: "5px",
              },
            }}
          >
            <FormLabel
              component="legend"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {field.label}
            </FormLabel>
            <Box>
              <input
                type="file"
                accept="image/*"
                name={field.name}
                id="file"
                hidden
              />
            </Box>
          </Box>
        );

      case "button":
        return (
          <Box
            sx={{
              width: "100%",
              marginTop: "30px",
              "@media print": {
                fontSize: "12px !important",
                marginTop: "5px",
              },
            }}
            key={index}
          >
            <Button
              type={field.subtype}
              variant="contained"
              fullWidth
              disabled
              sx={{
                width: "100%",
                backgroundColor: "#3C4256 !important",
                color: "white !important",
                "&:hover": {
                  backgroundColor: "white !important",
                  color: "black !important",
                  border: "1px solid #3C4256",
                },
              }}
            >
              {field.label}
            </Button>
          </Box>
        );

      default:
        return null; // Handle unknown field types or ignore them
    }
  };

  return (
    <Dialog
      fullScreen
      fullWidth
      maxWidth="xl"
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <Box sx={{ paddingX: "2rem", paddingY: "2rem" }}>
        <AppBar
          sx={{ position: "relative", backgroundColor: "#3C4256 !important" }}
          className={isAppBarVisible ? "no-print" : "print"}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Stack direction="row" gap={2} justifyContent="space-between">
          <Box>
            <img src={Logo} alt="Logo" style={{ maxWidth: "50px" }} />
          </Box>
          <Box justifyContent="flex-end">
            <Button
              variant="outlined"
              sx={{
                marginTop: "10px",
                backgroundColor: "#3C4256 !important",
                color: "white !important",
                "&:hover": {
                  backgroundColor: "white !important",
                  color: "black !important",
                  border: "1px solid #3C4256",
                },
                "@media print": {
                  display: "none !important", // Hide the specific button on print
                },
              }}
              onClick={handlePrint}
            >
              Print
            </Button>
          </Box>
        </Stack>

        <Box
          sx={{
            "@media print": {
              display: "flex !important",
              justifyContent: "space-between",
            },
          }}
        >
          {/* Left side of the form */}
          <Box
            sx={{
              width: "100%",
              "@media print": {
                width: "48%", // Take full width for printing
              },
            }}
          >
            <form>
              {formData?.map((field, index) => renderFormField(field, index))}
            </form>
          </Box>

          {/* Right side of the form */}
          {/* <Box
            sx={{
              width: "100%",
              "@media print": {
                width: "48%", // Take full width for printing
                marginTop: "20px", // Add margin between the pages
              },
            }}
          >
            <form>
              {formData
                ?.slice(Math.ceil(formData.length / 2))
                .map((field, index) => renderFormField(field, index))}
            </form>
          </Box> */}
        </Box>
        <Typography
          sx={{
            mt: "10px",
            textAlign: "center",
            "@media print": {
              fontSize: "12px !important",
              marginTop: "5px",
            },
          }}
        >
          Copyright 2023 COMPLYCORE All rights reserved
        </Typography>
      </Box>
    </Dialog>
  );
}
