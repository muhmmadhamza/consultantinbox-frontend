import React, { useEffect } from "react";
import { Grid, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import show_Toast from "../../../../helpers/toast.helper";
import EmptyContent from "../../../../component/EmptyContent";
import { FormList, GetTempForm } from "../../../../services";
import { useSelector } from "react-redux";

const CustomForms = () => {
  const { companyId = null } = useSelector((state) => state.login);

  const [combinedList, setCombinedList] = React.useState([]);
  const navigate = useNavigate();

  const handleOpenFormDetails = (data) => {
    navigate("/dashboard/formDetail", { state: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const formListResponse = await FormList();
      // const tempFormResponse = await GetTempForm(companyId);

      if (formListResponse?.data?.status === "success") {
        const combinedData = formListResponse?.data?.response;
        setCombinedList(combinedData);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const isNotFound = combinedList.length === 0;

  return (
    <>
      <Helmet>
        <title>Dashboard | Forms</title>
      </Helmet>

      {isNotFound ? (
        <EmptyContent
          title="No Record Found"
          sx={{
            "& span.MuiBox-root": { height: 160 },
          }}
        />
      ) : (
        <Grid container spacing={2}>
          {combinedList?.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={3}
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "#3C4256",
                  color: "#fff",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "background-color 0.2s, transform 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#303444";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#3C4256";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Box
                  sx={{ textAlign: "center", padding: "16px" }}
                  onClick={() => handleOpenFormDetails(item)}
                >
                  {item.name.toUpperCase()}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default CustomForms;
