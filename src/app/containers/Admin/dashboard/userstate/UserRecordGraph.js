import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ApexCharts from "react-apexcharts";

const UserRecordGraph = (props) => {
  const { title, result } = props;

  const chartData = {
    series: result,
    options: {
      type: "donut",
      dataLabels: {
        enabled: false,
      },
      colors: ["#6F7381"],
      legend: {
        show: false,
        position: "bottom",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "15px",
              },
              value: {
                show: true,
                fontSize: "10px",
                offsetY: 8,
              },
              total: {
                show: true,
                label: "Total",
                fontSize: "10px",
                offsetY: -8,
              },
            },
          },
        },
      },
    },
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography
            sx={{
              m: 1.3,
              fontWeight: "bold",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ApexCharts
              options={chartData.options}
              series={chartData.series}
              type="donut"
              width={150}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserRecordGraph;
