import { useNavigate } from "react-router-dom";
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
  InputAdornment,
  IconButton,
} from "@mui/material";
import HeaderBreadcrumbs from "../component/HeaderBreadcrumbs";
import { UploadAvatar } from "../component/upload";
import { CreateUsersData } from "../services/index";
import { CreateNewUserSchema } from "../validation/createuser";
import { useFormik } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Iconify from "../component/iconify";

import show_Toast from "../helpers/toast.helper";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  role_id: "",
  imageUrl: null,
};

export default function AdminCreateUser() {
  const { permissionRoles = [] } = useSelector((state) => state.roles);
  const roleWithId2 = permissionRoles.find((role) => role.id === 2);

  const { companyId = null } = useSelector((state) => state.login);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: CreateNewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("confirmPassword", values.confirmPassword);
      formData.append("phone", values.phone);
      formData.append("role_id", values.role_id);
      formData.append("profilePhoto", values.imageUrl);
      // formData.append("company_id", companyId);
      try {
        setSubmitting(true);
        const response = await CreateUsersData(formData);
        if (response?.data?.status === "success") {
          navigate("/admin/adminlist");
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
        <title> Admin | Create a new admin</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading={"Create a new admin"}
            links={[
              { name: "Admin", href: "/" },
              { name: "AdminList", href: "/admin/adminlist" },
              { name: "New Admin" },
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
                          <br /> max size of 24 MB
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
                      name="password"
                      label="Password"
                      id="password"
                      fullWidth
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={
                        touched.password && errors.password ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.password}
                            </span>
                          </>
                        ) : null
                      }
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              <Iconify
                                icon={
                                  showPassword
                                    ? "eva:eye-fill"
                                    : "eva:eye-off-fill"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      fullWidth
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.confirmPassword &&
                        Boolean(errors.confirmPassword)
                      }
                      helperText={
                        touched.confirmPassword && errors.confirmPassword ? (
                          <>
                            <span style={{ marginLeft: "-14px" }}>
                              <ErrorOutlineIcon
                                style={{ marginRight: "4px", fontSize: "15px" }}
                              />
                              {errors.confirmPassword}
                            </span>
                          </>
                        ) : null
                      }
                      type={showConfirmPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              edge="end"
                            >
                              <Iconify
                                icon={
                                  showConfirmPassword
                                    ? "eva:eye-fill"
                                    : "eva:eye-off-fill"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
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
                      <MenuItem key={roleWithId2?.id} value={roleWithId2?.id}>
                        {roleWithId2?.name}
                      </MenuItem>
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
                      Create Admin
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
