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
import { API_BASE_URL } from "../constant/apiEndPoints";
import { useSelector } from "react-redux";

export default function ViewUser() {
  const { user = {} } = useSelector((state) => state.login);
  const { roles } = useSelector((state) => state.roles);

  const { name, email, phone, role_id, imageUrl } = user;

  return (
    <>
      <Helmet>
        <title> Dashboard | User Profile</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading={"Profile"}
            links={[{ name: "Dashboard", href: "/" }, { name: "User" }]}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ py: 10, px: 3, textAlign: "center" }}>
                <Box>
                  <Avatar
                    alt="name"
                    src={`${API_BASE_URL}/${imageUrl}`}
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
