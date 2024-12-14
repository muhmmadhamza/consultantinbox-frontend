import React, { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFieldValue } from "../../../../store/slices/formbuilder";
import FullScreenDialog from "./Modal";
import Button from "@mui/material/Button"; // Import the Button component from Material-UI
import TextField from "@mui/material/TextField"; // Import the TextField component from Material-UI
import Typography from "@mui/material/Typography"; // Import the Typography component from Material-UI
import Container from "@mui/material/Container"; // Import the Container component from Material-UI
import { Grid, Stack } from "@mui/material";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

const Preview = () => {
  const { formFields = [] } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    handleSave();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const formDataObject = formFields.reduce((acc, field) => {
      acc[field.id] = {
        label: field.label || getDefaultLabel(field.type),
        type: field.type,
        value: field.value,
      };
      return acc;
    }, {});

    setFormData(formDataObject);

    console.log(JSON.stringify(formDataObject, null, 2));
  };

  const handleInputChange = (id, value) => {
    const updatedFields = formFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );

    setFormData(updatedFields);

    dispatch(updateFieldValue({ id, value }));
  };

  const navigate = useNavigate(); // Initialize the history object

  const handleGoBack = () => {
    navigate("/dashboard/formbuilder");
  };

  const getDefaultLabel = (type) => {
    return type === "text"
      ? "Text"
      : type === "textarea"
      ? "Textarea"
      : type === "number"
      ? "Number"
      : type === "date"
      ? "Date"
      : type === "checkbox"
      ? "Checkbox"
      : "";
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* <Container maxWidth="md"> */}
        <Typography variant="h2" gutterBottom>
          Form Preview
        </Typography>
        <form>
          {formFields.map((field) => (
            <div key={field.id} className="mb-3">
              <TextField
                label={field.label || getDefaultLabel(field.type)}
                fullWidth
                variant="outlined"
                value={field.value || ""}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                type={
                  field.type === "date"
                    ? "date"
                    : "" || field.type === "checkbox"
                    ? "checkbox"
                    : "text"
                }
                // multiline={field.type === "textarea" && field.type==="text"?"text":"number"}

                // rows={field.type === "textarea" ? 5 : undefined}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          ))}
        </form>
        <Stack direction={"row"} gap={2}>
          <Button
            variant="outlined"
            sx={{
              color:"black",
            borderColor:'black',
              "&:hover": {
                color:"white",
                backgroundColor: "#3C4256 !important",
                backgroundColor: "black",
                borderColor:'#3C4256'
              },
            }}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
          <Button
            variant="outlined"
          
            sx={{
              color:"black",
              borderColor:'black',
              "&:hover": {
                backgroundColor: "#3C4256 !important",                color:"white",
                borderColor:'black',
              },
            }}
            onClick={handleClickOpen}
          >
            Save
          </Button>
        </Stack>

        <FullScreenDialog
          open={open}
          handleClose={handleClose}
          formData={formData}
        />
        {/* </Container> */}
      </Grid>
    </Grid>
  );
};

export default Preview;
