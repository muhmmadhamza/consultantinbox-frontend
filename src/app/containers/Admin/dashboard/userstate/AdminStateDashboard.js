import React, { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import UserRecordGraph from "./UserRecordGraph";
import { Helmet } from "react-helmet-async";
import { LoginUsersList, SignupUsersList } from "../../../../services";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const AdminStateDashboard = () => {
  const { companyId = null } = useSelector((state) => state.login);
  const { user = {} } = useSelector((state) => state.login);

  const [numberOfSignupUsers, setNumberOfSignupUsers] = useState([]);
  const [LogedInUser, setLogedInUer] = useState([]);

  const fetchSignupUsers = async () => {
    try {
      const response = await SignupUsersList(companyId);
      const result = response.data;

      if (result && result.status === "success") {
        setNumberOfSignupUsers([result.response]);
      } else {
        console.error("Invalid response format or status is not success");
      }
    } catch (error) {
      console.error("Error fetching signup users:", error);
    }
  };
  const fetchLogedInUsers = async () => {
    try {
      const response = await LoginUsersList(companyId);
      const result = response.data;

      if (result && result.status === "success") {
        setLogedInUer([result.response]);
      } else {
        console.error("Invalid response format or status is not success");
      }
    } catch (error) {
      console.error("Error fetching signup users:", error);
    }
  };

  useEffect(() => {
    fetchSignupUsers();
    fetchLogedInUsers();
  }, []);

  return (
    <>
      <Helmet>
        <title> Admin | Dashboard </title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: "2 50%",
          }}
        >
          <LeftSection
            title={`Welcome Back ${user?.name} 🎉`}
            description={`Today's ${numberOfSignupUsers} users`}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            flex: "1 48%",
            justifyContent: "center",
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Box
            sx={{
              flex: "1 ",
              //  minWidth: "250px"
            }}
          >
            <UserRecordGraph title={"New Users"} result={numberOfSignupUsers} />
          </Box>
          <Box
            sx={{
              flex: "1 ",
              // minWidth: "250px"
            }}
          >
            <UserRecordGraph title={"Login Users"} result={LogedInUser} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminStateDashboard;
