import React, { useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function DashboardForm() {
  const location = useLocation();
  const { state } = location;

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/dashboard/projects");
  //   }
  // }, [state]);
  const linkData = [
    {
      id: 1,
      title: "Report of Main and Service Line Inspection".toUpperCase(),
      path: `/dashboard/form_1`,
    },
    {
      id: 2,
      title: "Gas Leak and Repair Report".toUpperCase(),
      path: `/dashboard/form_2`,
    },
    {
      id: 3,
      title: "PATROLLING OF PIPELINE SYSTEM".toUpperCase(),
      path: `/dashboard/form_3`,
    },
    {
      id: 4,
      title: "INSPECTION REPORT FOR MOST MASTER METER SYSTEMS".toUpperCase(),
      path: `/dashboard/form_4`,
    },
    {
      id: 5,
      title: "REGULATOR INSPECTION REPORT".toUpperCase(),
      path: `/dashboard/form_5`,
    },
    {
      id: 6,
      title: "Relief Valve Inspection Report".toUpperCase(),
      path: `/dashboard/form_6`,
    },

    {
      id: 7,
      title: "Monthly Odorant Use Report".toUpperCase(),
      path: `/dashboard/form_7`,
    },
    {
      id: 8,
      title: "Odorization Check Report – Odor Concentration Test".toUpperCase(),
      path: `/dashboard/form_8`,
    },
    {
      id: 9,
      title:
        "Odorization Check Report – Odor Concentration Test part(2)".toUpperCase(),
      path: `/dashboard/form_9`,
    },
    {
      id: 10,
      title: "Telephonic Report of Odor".toUpperCase(),
      path: `/dashboard/form_10`,
    },
    {
      id: 11,
      title: "Atmospheric Corrosion Control Inspection".toUpperCase(),
      path: `/dashboard/form_11`,
    },

    {
      id: 12,
      title: "Pipeline Test Report".toUpperCase(),
      path: `/dashboard/form_12`,
    },
    {
      id: 13,
      title: "VALVE INSPECTION REPORT".toUpperCase(),
      path: `/dashboard/form_13`,
    },
    {
      id: 14,
      title: "CORROSION CONTROL – RECTIFIER INSPECTION".toUpperCase(),
      path: `/dashboard/form_14`,
    },
    {
      id: 15,
      title: "MECHANICAL FITTING FAILURE RepORT".toUpperCase(),
      path: `/dashboard/form_15`,
    },
    {
      id: 16,
      title: "CATHODIC PROTECTION WORKSHEET".toUpperCase(),
      path: `/dashboard/form_16`,
    },
    {
      id: 17,
      title: "GAS DISTRIBUTION INSPECTION AND LEAKAGE REPAIR".toUpperCase(),
      path: `/dashboard/form_17`,
    },
    {
      id: 18,
      title: "VALVE LOCATIONS".toUpperCase(),
      path: `/dashboard/form_18`,
    },
    {
      id: 19,
      title: "DAILY ODOR CALL LOG".toUpperCase(),
      path: `/dashboard/form_19`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | Forms</title>
      </Helmet>

      <Grid container spacing={2}>
        {linkData.map((link) => (
          <Grid key={link.id.toString()} item xs={12} sm={6} md={4} lg={3}>
            <Link
              to={{
                pathname: link.path,
                state: { state },
              }}
              style={{ textDecoration: "none" }}
            >
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
                <div style={{ textAlign: "center", padding: "16px" }}>
                  {link.title}
                </div>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
