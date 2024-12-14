// @mui
import {
  Box,
  Card,
  Avatar,
  Typography,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

// utils
import HeaderBreadcrumbs from "../component/HeaderBreadcrumbs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import httpRequest from "../axios/index";
import show_Toast from "../helpers/toast.helper";
import { API_BASE_URL } from "../constant/apiEndPoints";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

export default function ViewUser() {
  const { roles = [] } = useSelector((state) => state.roles);

  const [viewUsers, setViewUsers] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await httpRequest.get(`/api/users/edit/${id}`);
      const data = response?.data?.response;
      const user = `${API_BASE_URL}/${data?.imageUrl}`;

      setViewUsers({
        ...data,
        imageUrl: user,
      });
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const { name, email, phone, role_id, imageUrl } = viewUsers;

  return (
    <>
      <Helmet>
        <title> Admin | View User</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading={"Profile"}
            links={[
              { name: "Admin", href: "/" },
              { name: "User", href: "/admin/user" },
              { name: "Profile" },
            ]}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ py: 10, px: 3, textAlign: "center" }}>
                <Box>
                  <Avatar
                    alt="name"
                    src={imageUrl}
                    sx={{
                      width: 144,
                      height: 144,
                      margin: "auto",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                <Typography variant="subtitle1" sx={{ mt: 3 }}>
                  {name}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {email}
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  mb={2}
                >
                  <Typography variant="h5">About</Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  mb={2}
                  mt={4}
                >
                  <Typography variant="h5" sx={{ width: "40%" }}>
                    Full Name
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.secondary" }}
                  >
                    {name}
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  mb={2}
                  mt={2}
                >
                  <Typography variant="h5" sx={{ width: "40%" }}>
                    Email
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.secondary" }}
                  >
                    {email}
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  mb={2}
                  mt={2}
                >
                  <Typography variant="h5" sx={{ width: "40%" }}>
                    Phone Number
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.secondary" }}
                  >
                    {phone}
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  mb={2}
                  mt={2}
                >
                  <Typography variant="h5" sx={{ width: "40%" }}>
                    Role
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.secondary" }}
                  >
                    {roles.find((role) => role.id === role_id)?.name}
                  </Typography>
                </Stack>
                <Divider />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
