import { Helmet } from "react-helmet-async";

// @mui
import { LoadingButton } from "@mui/lab";
import {
  Card,
  Grid,
  Stack,
  TextField,
  MenuItem,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import show_Toast from "../../../../helpers/toast.helper";
import httpRequest from "../../../../axios/index";
import { PermissionList, PermissionOnRole } from "../../../../services";
import { useSelector } from "react-redux";

function getPermissionsWithStatusTrue(permissions) {
  const result = {};

  for (const module in permissions) {
    const modulePermissions = permissions[module];
    const permissionsWithStatusTrue = modulePermissions.filter(
      (permission) => permission.status
    );

    if (permissionsWithStatusTrue.length > 0) {
      result[module] = permissionsWithStatusTrue.map(
        (permission) => permission.permission_id
      );
    }
  }

  return result;
}

export default function PermissionsAssign() {
  const { permissionRoles = [] } = useSelector((state) => state.roles);
  const { companyId = null } = useSelector((state) => state.login);
  const [selectedRole, setSelectedRole] = useState("");
  const [permissionsList, setPermissionsList] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState({});

  useEffect(() => {
    fetchPermissionData();
  }, []);

  const fetchPermissionData = async () => {
    try {
      const response = await PermissionList();
      const data = response?.data?.response;
      setPermissionsList(data);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const fetchPermissionDataByRoleId = async (id) => {
    try {
      const response = await httpRequest.get(
        `/api/permissions/${id}/${companyId}`
      );
      const data = response?.data?.response;
      const permissionsWithStatusTrue = getPermissionsWithStatusTrue(data);
      setSelectedPermissions(permissionsWithStatusTrue);
      // console.log(permissionsWithStatusTrue, "current user permissions");
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleParentCheckboxChange = (module, checked) => {
    const updatedSelectedPermissions = { ...selectedPermissions };
    updatedSelectedPermissions[module] = checked
      ? permissionsList[module].map((permission) => permission.id)
      : [];
    setSelectedPermissions(updatedSelectedPermissions);
  };

  const handleChildCheckboxChange = (module, permissionId, checked) => {
    const updatedSelectedPermissions = { ...selectedPermissions };
    if (!updatedSelectedPermissions[module]) {
      updatedSelectedPermissions[module] = [];
    }
    if (checked) {
      updatedSelectedPermissions[module].push(permissionId);
    } else {
      const index = updatedSelectedPermissions[module].indexOf(permissionId);
      if (index !== -1) {
        updatedSelectedPermissions[module].splice(index, 1);
      }
    }
    setSelectedPermissions(updatedSelectedPermissions);
  };

  const handleSubmit = async () => {
    if (!selectedRole) {
      show_Toast({
        status: false,
        message: "Please select a role",
      });
      return;
    }

    try {
      let selectedValues = {};
      for (const module in permissionsList) {
        const modulePermissions = permissionsList[module];
        const anyMatch = modulePermissions.map((permission) => {
          if (selectedPermissions[module]?.includes(permission.id)) {
            return { ...permission, status: true };
          } else {
            return { ...permission, status: false };
          }
        });
        selectedValues[module] = anyMatch;
      }
      // console.log(selectedValues, "selectedValues");

      const response = await PermissionOnRole({
        params: {
          role_id: selectedRole,
          company_id: companyId,
        },
        permissions: {
          ...selectedValues,
        },
      });
      show_Toast({
        status: true,
        message: response?.data?.message || "Success",
      });
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title> Admin | Permissions</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Role Manangement
            </Typography>
          </Stack>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <TextField
                      id="role"
                      name="role"
                      select
                      label="Role"
                      type="role"
                      fullWidth
                      value={selectedRole}
                      onChange={(event) => {
                        fetchPermissionDataByRoleId(event.target.value);
                        setSelectedRole(event.target.value);
                      }}
                    >
                      {permissionRoles?.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={1}
                    mt={5}
                  >
                    <Typography variant="h5" gutterBottom>
                      Permissions
                    </Typography>
                  </Stack>
                  <Divider />

                  {Object.keys(permissionsList).map((module) => (
                    <Box key={module}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="start"
                        mb={1}
                        mt={2}
                      >
                        <Typography variant="h6">
                          {capitalizeFirstLetter(module)}
                        </Typography>
                        <Checkbox
                          onChange={(event) =>
                            handleParentCheckboxChange(
                              module,
                              event.target.checked
                            )
                          }
                          checked={
                            selectedPermissions[module]?.length ===
                            permissionsList[module]?.length
                          }
                        />
                      </Stack>
                      <Divider />
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="start"
                      >
                        {permissionsList[module].map((permission) => (
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="start"
                            mb={1}
                            key={permission.id}
                          >
                            <FormControlLabel
                              label={capitalizeFirstLetter(permission.name)}
                              control={
                                <>
                                  <Checkbox
                                    onChange={(event) =>
                                      handleChildCheckboxChange(
                                        module,
                                        permission.id,
                                        event.target.checked
                                      )
                                    }
                                    checked={
                                      selectedPermissions[module]?.includes(
                                        permission.id
                                      ) || false
                                    }
                                  />
                                </>
                              }
                            />
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  ))}
                  <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                    <LoadingButton
                      type="button"
                      variant="contained"
                      onClick={handleSubmit}
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
                      Assign
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
