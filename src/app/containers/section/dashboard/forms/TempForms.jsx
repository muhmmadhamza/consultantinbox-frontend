import React, { useEffect } from "react";
import { Grid, Paper, Button, Box, Typography } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import httpRequest from "../../../../axios/index";
import show_Toast from "../../../../helpers/toast.helper";
import FormDetail from "./FormDetail";
import useToggle from "../../../../hooks/useToggle";
import EmptyContent from "../../../../component/EmptyContent";
import { FormList, GetTempForm } from "../../../../services";
const TempForms = () => {
 
  const [Temlist, setTempList] = React.useState([]);
  // const Result=Temlist +formlist
  console.log('formlist is applied',Temlist)
 
  const navigate = useNavigate();

  const handleOpenFormDetails = (data) => {
    navigate("/dashboard/formDetail", { state: data });
  };
  useEffect(() => {
    
    TempListData()
  }, []);

  const TempListData = async () => {
    try {
      const response = await GetTempForm();
      if (response?.data?.status === "success") {
        // dispatch(assignUserList(response?.data?.response));
        setTempList(response?.data?.response);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

 
 
  const isNotFound = Temlist.length === 0;

  return (
    <>
     

      {Temlist.length === 0 ? (
        <EmptyContent
          title="No Record Found"
          sx={{
            "& span.MuiBox-root": { height: 160 },
          }}
        />
      ) : (
        <Grid container spacing={2}>
          {Temlist?.map((form) => (
            <Grid key={form.id} item xs={12} sm={6} md={4} lg={3}>
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
                  onClick={() => handleOpenFormDetails(form)}
                >
                  {form.name.toUpperCase()}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default TempForms;
