import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// @mui
import { LoadingButton } from "@mui/lab";

import { Card, Grid, Stack, TextField } from "@mui/material";
import HeaderBreadcrumbs from "../../../../component/HeaderBreadcrumbs";

import { CreateComplianceTaskSchema } from "../../../../validation/compliancetask";
import { useFormik } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import show_Toast from "../../../../helpers/toast.helper";
import { useState } from "react";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { FormsData } from "../../../../services/index";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  ComplianceTaskUpdate,
  CreateComplianceTask,
} from "../../../../services";

// ----------------------------------------------------------------------
const initialValues = {
  title: "",
  description: "",
};

export default function CreateProject() {
  const { companyId = null } = useSelector((state) => state.login);

  const [managers, setManagers] = useState([]);
  const [Name, setName] = React.useState([]);
  const navigate = useNavigate();
  const theme = useTheme();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    getFieldProps,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      ...initialValues,
      company_id: companyId,
    },
    validationSchema: CreateComplianceTaskSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const payload = {
          ...values,
          company_id: companyId,
        };
        const response = await CreateComplianceTask(payload);
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
        <title> Admin | Create Compliance Task</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading={"Create Compliance Task"}
            links={[
              { name: "Admin", href: "/" },
              { name: "New Compliance Task" },
            ]}
          />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <TextField
                      name="title"
                      label="Title"
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
                      Create Compliance Task
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
