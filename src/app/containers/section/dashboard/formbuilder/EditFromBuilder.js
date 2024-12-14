import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import httpRequest from "../../../../axios/index";
import show_Toast from "../../../../helpers/toast.helper";

import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { UpdateFormData } from "../../../../services";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const EditFormBuilder = () => {
  const location = useLocation();
  const { state } = location;

  const [JsonField, setJsonData] = useState(state.form_data || []);

  const [values, setValues] = useState();
  const fb = useRef(null);
  const navigate = useNavigate();
  var storedId = localStorage.getItem("editproject_id");
  var intValue = parseInt(storedId, 10);

  const handleManageProject = () => {
    navigate(`/dashboard/kanban/${intValue}/${state.id}`);
  };
  useEffect(() => {
    initializeFormBuilder();
  }, []);

  const initializeFormBuilder = () => {
    if (fb.current) {
      $(fb.current).formBuilder("destroy");
    }
    $(fb.current).formBuilder({
      formData: JsonField,
    });
  };

  // Function to save and log JSON data

  const handleSave = async () => {
    // Get the form data from the formBuilder instance
    const formData = $(fb.current).formBuilder("getData");
    const result = JSON.stringify(formData);

    try {
      // Send the JSON data to the backend
      const response = await UpdateFormData({
        id: state?.id,
        name: state?.name,
        form_data: result,
      });

      const data = response?.data?.response;
      setValues(data);

      // Show a success message or handle the response as needed
      if (response?.data?.status === "success") {
        show_Toast({
          status: true,
          message: "Form data Update successfully",
        });

        handleManageProject();
      } else {
        show_Toast({
          status: false,
          message: "Failed to save JSON data",
        });
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleNavigate = () => {
    navigate(`/dashboard/form_${state?.Form?.form_no}/${state?.id}`);
  };

  return (
    <div>
      <Button
        component={RouterLink}
        to="/dashboard/projects"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{
          backgroundColor: "#3C4256 !important",
          color: "white !important",
          marginBottom: "1em",
          "&:hover": {
            backgroundColor: "white !important",
            color: "black !important",
            border: "1px solid #3C4256",
          },
        }}
      >
        Go back
      </Button>
      <div id="fb-editor" ref={fb}></div>
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
        onClick={handleSave}
      >
        Update Form
      </Button>
    </div>
  );
};

export default EditFormBuilder;
