import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// @mui
import { LoadingButton } from "@mui/lab";
import {
  Card,
  Grid,
  Stack,
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
  MenuItem,
} from "@mui/material";
import HeaderBreadcrumbs from "../../../../component/HeaderBreadcrumbs";

import { EditProjectsSchema } from "../../../../validation/editprojects";
import { useFormik } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import httpRequest from "../../../../axios/index";
import show_Toast from "../../../../helpers/toast.helper";
import { FormsData } from "../../../../services/index";
import { AssignListData } from "../../../../services";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------
const initialValues = {
  title: "",
  description: "",
  manager_id: "",
  form_ids: [],
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function EditProject() {
  const { companyId = null } = useSelector((state) => state.login);

  const [managers, setManagers] = useState([]);
  const [Name, setName] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  const theme = useTheme();

  const fetchCreateProjectData = async () => {
    try {
      const response = await httpRequest.get(`/api/projects/edit/${id}`);
      const data = response?.data?.response;

      data.form_ids = JSON.parse(data.form_ids);
      setValues(data);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };
  const fetchManagerData = async () => {
    try {
      const response = await AssignListData(companyId);
      if (response?.data?.status === "success") {
        setManagers(response?.data?.response);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const fetchProjectData = async () => {
    try {
      const response = await FormsData(companyId);
      const data = response?.data?.response;
      setName(data);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  useEffect(() => {
    fetchCreateProjectData();
    fetchManagerData();
    fetchProjectData();
  }, []);

  const {
    values,
    errors,
    touched,
    setValues,
    setFieldValue,
    getFieldProps,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: EditProjectsSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const response = await httpRequest.put("/api/projects/update", values);
        if (response?.data?.status === "success") {
          navigate("/dashboard/projects");
        }
        show_Toast({
          status: true,
          message: response?.data?.message || "Success",
        });
        resetForm();
      } catch (error) {
        show_Toast({
          status: false,
          message: error?.response?.data?.message || "Something went wrong",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Helmet>
        <title> Dashboard | Edit Project</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading={"Edit project"}
            links={[
              { name: "Admin", href: "/" },
              { name: "Projects", href: "/dashboard/projects" },
              { name: "Edit Project" },
            ]}
          />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <TextField
                      name="title"
                      label="Project Title"
                      type="title"
                      id="title"
                      fullWidth
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.title && Boolean(errors.title)}
                      helperText={
                        touched.title && errors.title ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.title}
                            </span>
                          </>
                        ) : null
                      }
                    />
                    <TextField
                      name="description"
                      label="Description"
                      type="description"
                      id="description"
                      fullWidth
                      multiline
                      rows={3}
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.description && Boolean(errors.description)}
                      helperText={
                        touched.description && errors.description ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.description}
                            </span>
                          </>
                        ) : null
                      }
                    />

                    <Autocomplete
                      id="manager_id"
                      options={managers}
                      getOptionLabel={(option) => option.name}
                      value={
                        managers.find(
                          (manager) => manager.id === values.manager_id
                        ) || null
                      }
                      onChange={(event, newValue) => {
                        handleChange({
                          target: {
                            name: "manager_id",
                            value: newValue ? newValue.id : "",
                          },
                        });
                      }}
                      onBlur={handleBlur}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Manager"
                          error={
                            touched.manager_id && Boolean(errors.manager_id)
                          }
                          helperText={
                            touched.manager_id && errors.manager_id ? (
                              <>
                                <span style={{ marginLeft: "-14px" }}>
                                  <ErrorOutlineIcon
                                    style={{
                                      marginRight: "4px",
                                      fontSize: "15px",
                                    }}
                                  />
                                  {errors.manager_id}
                                </span>
                              </>
                            ) : null
                          }
                        />
                      )}
                    />
                    <FormControl
                      // sx={{ width: 990 }}
                      error={touched.form_ids && Boolean(errors.form_ids)}
                    >
                      <InputLabel id="demo-multiple-chip-label">
                        Form
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        name="form_ids"
                        value={
                          Name?.find((form) => form.id === values.form_ids) ||
                          null
                        }
                        {...getFieldProps("form_ids")}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Chip"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 0.5,
                            }}
                          >
                            {selected?.map((value) => (
                              <Chip
                                key={value}
                                label={
                                  Name.find((item) => item.id === value)?.name
                                }
                                onDelete={() => {
                                  const newSelected = values.form_ids.filter(
                                    (name) => name !== value
                                  );
                                  setFieldValue("form_ids", newSelected);
                                }}
                              />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {Name?.map((item) => (
                          <MenuItem
                            key={item.id}
                            value={item.id}
                            style={getStyles(item.id, values.form_ids, theme)}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {touched.form_ids && Boolean(errors.form_ids) ? (
                        <Box sx={{ color: "#FF4842", marginLeft: "13px" }}>
                          <span style={{ marginLeft: "-14px" }}>
                            <ErrorOutlineIcon
                              style={{
                                marginRight: "4px",
                                fontSize: "15px",
                              }}
                            />
                            {errors.form_ids}
                          </span>
                        </Box>
                      ) : null}
                    </FormControl>
                  </Stack>
                  <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
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
                      Update Project
                    </LoadingButton>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
