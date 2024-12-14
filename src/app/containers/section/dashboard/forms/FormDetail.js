import React, { useState } from "react";
import {
  TextField,
  FormLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  MenuItem,
  Select,
  Autocomplete,
  Stack,
} from "@mui/material";
import { Box, Grid } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FullScreenDialog from "./Modal";
import useToggle from "../../../../hooks/useToggle";
import { FaTimes } from "react-icons/fa";
import show_Toast from "../../../../helpers/toast.helper";
import httpRequest from "../../../../axios/index";
import { CreateForm } from "../../../../services";

const FormDetail = () => {
  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();
  const location = useLocation();
  const { state } = location;
  const {id}=useParams();

  const initialFormData = state ? JSON.parse(state.form_data) : [];
  const [formData, setFormData] = useState(initialFormData);

  const [imageUrl, setImageUrl] = useState(null);


  
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    const maxSize = 24 * 1024 * 1024; // 24MB
    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    try {
      if (!file) {
        throw new Error("No image selected.");
      }

      if (file.size > maxSize) {
        throw new Error("Image size Must Be Lesser than 24 MB");
      }

      const fileExtension = file.name.toLowerCase();

      if (
        !allowedExtensions.some((extension) =>
          fileExtension.endsWith(extension)
        )
      ) {
        throw new Error(
          "Invalid file extension. Allowed extensions are .jpg, .jpeg, and .png."
        );
      }

      reader.onloadend = () => {
        setImageUrl(file);
      };

      reader.onerror = (error) => {
        throw new Error("Error occurred while reading the image file.");
      };

      reader.readAsDataURL(file);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.message || "Something went wrong",
      });
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
  };

  const handleFieldChange = (fieldName, value, checked) => {
    const updatedFormData = formData.map((field) => {
      if (field.name === fieldName) {
        if (field.type === "checkbox-group") {
          // For checkboxes, update the 'selected' property of the respective option
          const updatedValues = field.values.map((option) => {
            if (option.value === value) {
              return { ...option, selected: checked };
            }
            return option;
          });
          return { ...field, values: updatedValues };
        } else if (field.type === "radio-group") {
          // For radio buttons, set the 'selected' property of the selected option to true and others to false
          const updatedValues = field.values.map((option) => {
            return { ...option, selected: option.value === value };
          });
          return { ...field, values: updatedValues };
        } else if (field.type === "select") {
          // For select buttons, set the 'selected' property of the selected option to true and others to false
          const updatedValues = field.values.map((option) => {
            return { ...option, selected: option.value === value };
          });
          return { ...field, values: updatedValues };
        } else if (field.type === "autocomplete") {
          // For autocomplete buttons, set the 'selected' property of the selected option to true and others to false
          const updatedValues = field.values.map((option) => {
            return { ...option, selected: option.value === value };
          });
          return { ...field, values: updatedValues };
        } else {
          // For other field types like text, number, date, etc., update the 'value'
          return { ...field, value };
        }
      }
      return field;
    });

    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the JSON data to the backend
      const response = await CreateForm({
        name: state.name,
        project_id: state.project_id,
        form_no: state.form_no,
        form_data: JSON.stringify(formData),
        // Use the formData obtained from the formBuilder
      });

      // Show a success message or handle the response as needed
      if (response?.data?.status === "success") {
        show_Toast({
          status: true,
          message: "Form saved successfully",
        });
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error.response?.data?.message || "Something went wrong",
      });
    }
  };


  const handleNavigate = () => {
 
    navigate('/dashboard/edittemplate-formbuilder',{state:state})
  }

  
  const handleCustomFormDelete = async () => {
    try {
      let id = state?.id;
      const response = await httpRequest.delete(
        `/api/customforms/delete/${id}`
      );
      if (response?.data?.status === "success") {
        navigate("/dashboard/custom-template-Form");
        show_Toast({
          status: true,
          message: "Form deleted successfully",
        });
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error.response?.data?.message || "Something went wrong",
      });
    }
  };



  return (
    <div>
      <Stack direction={'row'} gap={1.5}
        justifyContent={"flex-end"}
      >
        <Button
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
          onClick={onOpenConfirm}
        >
          Preview
        </Button>

        {/* <Button
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
          onClick={()=>handleNavigate()}
        >
          Edit
        </Button> */}
        {/* <Button
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
          onClick={handleCustomFormDelete}
        >
          Delete
        </Button> */}

      </Stack>
      <form onSubmit={handleSubmit}>
        {formData.map((field, index) => {
          if (field.type === "header") {
            return (
              <Typography
                sx={{
                  fontSize: "1rem !important",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
                variant={field.subtype}
                key={index}
              >
                {field.label}
              </Typography>
            );
          } else if (field.type === "text" || field.type === "number") {
            return (
              <Box key={index} sx={{ marginBottom: "15px" }}>
                <FormLabel component="legend">{field.label}</FormLabel>
                <TextField
                  name={field.name}
                  fullWidth
                  value={field.value}
                  onChange={(e) =>
                    handleFieldChange(field.name, e.target.value)
                  }
                />
              </Box>
            );
          } else if (field.type === "textarea") {
            return (
              <Box key={index} sx={{ marginBottom: "15px" }}>
                <FormLabel component="legend">{field.label}</FormLabel>
                <TextField
                  fullWidth
                  multiline
                  rows={field.rows}
                  name={field.name}
                  value={field.value}
                  onChange={(e) =>
                    handleFieldChange(field.name, e.target.value)
                  }
                />
              </Box>
            );
          } else if (field.type === "file") {
            return (
              <Box key={index} sx={{ marginBottom: "15px" }}>
                <FormLabel component="legend">{field.label}</FormLabel>
                <Box>
                  <input
                    type="file"
                    accept="image/*"
                    name={field.name}
                    onChange={handleImageChange}
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
                  {imageUrl && (
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
                  )}
                </Box>
              </Box>
            );
          } else if (field.type === "hidden") {
            return (
              <Box key={index} sx={{ marginBottom: "15px" }}>
                <FormLabel component="legend">{field.label}</FormLabel>
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
          } else if (field.type === "paragraph") {
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
                }}
              >
                {field.label}
              </Typography>
            );
          } else if (field.type === "date") {
            return (
              <Box key={index} sx={{ marginBottom: "15px" }}>
                <FormLabel component="legend">{field.label}</FormLabel>
                <TextField
                  fullWidth
                  type="date"
                  name={field.name}
                  value={field.value}
                  onChange={(e) =>
                    handleFieldChange(field.name, e.target.value)
                  }
                />
              </Box>
            );
          } else if (
            field.type === "checkbox-group" ||
            field.type === "radio-group"
          ) {
            return (
              <Grid container key={index} sx={{ marginBottom: "15px" }}>
                <Grid item xs={12}>
                  <FormLabel component="legend">{field.label}</FormLabel>
                </Grid>
                <Grid item xs={12}>
                  {field.values.map((option) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={field.name}
                          value={option.value}
                          checked={option.selected}
                          onChange={(e) =>
                            handleFieldChange(
                              field.name,
                              option.value,
                              e.target.checked
                            )
                          }
                        />
                      }
                      label={option.label}
                    />
                  ))}
                </Grid>
              </Grid>
            );
          } else if (field.type === "radio-group") {
            return (
              <Grid container key={index} sx={{ marginBottom: "15px" }}>
                <Grid item xs={12}>
                  <FormLabel component="legend">{field.label}</FormLabel>
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
                            onChange={(e) =>
                              handleFieldChange(
                                field.name,
                                option.value,
                                e.target.checked
                              )
                            }
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            );
          } else if (field.type === "select") {
            return (
              <Grid container key={index} sx={{ marginBottom: "15px" }}>
                <Grid item xs={12}>
                  <FormLabel component="legend">{field.label}</FormLabel>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Select
                      name={field.name}
                      value={
                        field.values.find((option) => option.selected)?.value
                      }
                      onChange={(e) =>
                        handleFieldChange(field.name, e.target.value)
                      }
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
          } else if (field.type === "autocomplete") {
            return (
              <Grid container key={index} sx={{ marginBottom: "15px" }}>
                <Grid item xs={12}>
                  <FormLabel component="legend">{field.label}</FormLabel>
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    name={field.name}
                    options={field.values}
                    getOptionLabel={(option) => option.label}
                    value={field.values.find((option) => option.selected)}
                    onChange={(event, newValue) => {
                      const selectedValue = newValue ? newValue.value : null;
                      handleFieldChange(field.name, selectedValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} variant="outlined" />
                    )}
                  />
                </Grid>
              </Grid>
            );
          } else if (field.type === "button") {
            return (
              <Box sx={{ width: "100%", marginTop: "30px" }} key={index}>
                <Button
                  type={field.subtype}
                  variant="contained"
                  fullWidth
                  sx={{
                    width: "100%",
                    marginBottom: "15px",
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
                  {field.label}
                </Button>
              </Box>
            );
          }
        })}
      </form>
      <FullScreenDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        formData={formData}
      />
    </div>
  );
};

export default FormDetail;
