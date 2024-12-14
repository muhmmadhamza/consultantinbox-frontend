import { Helmet } from "react-helmet-async";

// @mui
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import HeaderBreadcrumbs from "../component/HeaderBreadcrumbs";
import { UploadAvatar } from "../component/upload";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import show_Toast from "../helpers/toast.helper";
import { EditUserSchema } from "../validation/edituser";
import httpRequest from "../axios/index";
import httpFormRequest from "../axios/form_index";

import { useFormik } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { API_BASE_URL } from "../constant/apiEndPoints";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

const initialValues = {
  name: "",
  email: "",
  phone: "",
  role_id: "",
  imageUrl: null,
};

export default function EditUser() {
  const { permissionRoles = [] } = useSelector((state) => state.roles);

  const [userEditProfile, setUserEditProfile] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchCreateUserData();
  }, []);

  const fetchCreateUserData = async () => {
    try {
      const response = await httpRequest.get(`/api/users/edit/${id}`);
      const data = response?.data?.response;
      const user = `${API_BASE_URL}/${data?.imageUrl}`;
      setUserEditProfile(user);

      setValues({
        ...data,
        imageUrl: null,
      });
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
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: EditUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("role_id", values.role_id);
      formData.append("profilePhoto", values.imageUrl);
      try {
        setSubmitting(true);
        const response = await httpFormRequest.put(
          "/api/users/update",
          formData
        );
        if (response?.data?.status === "success") {
          navigate("/admin/user");
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

  const handleDrop = useCallback(
    (acceptedFiles) => {
      try {
        const file = acceptedFiles[0];

        const maxSize = 24 * 1024 * 1024; // 24MB
        const allowedExtensions = [".jpg", ".jpeg", ".png"];

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

        if (file) {
          setFieldValue(
            "imageUrl",
            file,
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          );
        }
      } catch (error) {
        show_Toast({
          status: false,
          message: error?.message || "Something went wrong",
        });
      }
    },
    [setFieldValue]
  );

  return (
    <>
      <Helmet>
        <title> Admin | Edit User</title>
      </Helmet>{" "}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading={"Edit user"}
            links={[
              { name: "Admin", href: "/" },
              { name: "User", href: "/admin/user" },
              { name: "Edit user" },
            ]}
          />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ py: 10, px: 3 }}>
                  <Box sx={{ mb: 5 }}>
                    <UploadAvatar
                      name="imageUrl"
                      onDrop={handleDrop}
                      file={values.imageUrl}
                      userEditProfile={userEditProfile}
                      accept={{ "image/*": [] }}
                      helperText={
                        <Typography
                          variant="caption"
                          sx={{
                            mt: 2,
                            mx: "auto",
                            display: "block",
                            textAlign: "center",
                            color: "text.secondary",
                          }}
                        >
                          Allowed *.jpeg, *.jpg, *.png
                          <br /> max size of 24MB
                        </Typography>
                      }
                    />
                  </Box>
                </Card>
              </Grid>

              <Grid item xs={12} md={8}>
                <Card sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "grid",
                      columnGap: 2,
                      rowGap: 3,
                      gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                      },
                    }}
                  >
                    <TextField
                      name="name"
                      label="Full Name"
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
                    <TextField
                      name="email"
                      label="Email Address"
                      type="email"
                      id="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        readOnly: true,
                      }}
                      error={touched.email && Boolean(errors.email)}
                      helperText={
                        touched.email && errors.email ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.email}
                            </span>
                          </>
                        ) : null
                      }
                    />
                    <TextField
                      name="phone"
                      label="Phone Number"
                      type="phone"
                      id="phone"
                      fullWidth
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={
                        touched.phone && errors.phone ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.phone}
                            </span>
                          </>
                        ) : null
                      }
                    />
                    <TextField
                      id="role_id"
                      name="role_id"
                      select
                      label="Role"
                      type="role_id"
                      fullWidth
                      value={values.role_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.role_id && Boolean(errors.role_id)}
                      helperText={
                        touched.role_id && errors.role_id ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.role_id}
                            </span>
                          </>
                        ) : null
                      }
                    >
                      {permissionRoles
                        .filter((option) => option.id !== 2)
                        .map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.name}
                          </MenuItem>
                        ))}
                    </TextField>
                  </Box>

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
                      Update User
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
