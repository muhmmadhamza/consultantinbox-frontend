import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// @mui
import { LoadingButton } from "@mui/lab";
import { Card, Grid, Stack, TextField } from "@mui/material";
import HeaderBreadcrumbs from "../../../../component/HeaderBreadcrumbs";

import { CreateRoleSchema } from "../../../../validation/addroles";
import { useFormik } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import httpRequest from "../../../../axios/index";
import show_Toast from "../../../../helpers/toast.helper";
import { useEffect } from "react";
import { UpdateRoles } from "../../../../services";
// ----------------------------------------------------------------------
const initialValues = {
  name: "",
};

export default function EditRole() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchCreateRoleData();
  }, []);

  const fetchCreateRoleData = async () => {
    try {
      const response = await httpRequest.get(`/api/roles/edit/${id}`);
      const data = response?.data?.response;
      setValues(data);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const {
    values,
    errors,
    touched,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: CreateRoleSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const response = await UpdateRoles(values);
        if (response?.data?.status === "success") {
          navigate("/admin/roles");
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
        <title> Admin | Edit Role</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading={"Edit Role"}
            links={[
              { name: "Admin", href: "/" },
              { name: "Roles", href: "/admin/roles" },
              { name: "Edit Role" },
            ]}
          />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <TextField
                      name="name"
                      label="Add Role"
                      type="name"
                      id="name"
                      fullWidth
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && Boolean(errors.name)}
                      helperText={
                        touched.name && errors.name ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.name}
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
                          border: "1px solid #3C4256",
                        },
                      }}
                    >
                      Update Role
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
