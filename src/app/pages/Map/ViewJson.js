import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const JsonViewer = ({ jsonData }) => {
  const [showJsonData, setShowJsonData] = useState(false);

  useEffect(() => {
    if (jsonData) {
      setShowJsonData(true);
    } else {
      setShowJsonData(false);
    }
  }, [jsonData]);

  const toggleJsonData = () => {
    setShowJsonData(!showJsonData);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={toggleJsonData}
        sx={{
          marginTop: '10px', // Adjusted property name
          backgroundColor: "#3C4256 !important",
          color: "white !important",
          "&:hover": {
            backgroundColor: "white !important",
            color: "black !important",
            border: "1px solid #3C4256",
          },
        }}
      >
        {showJsonData ? "Hide JSON Data" : "Show JSON Data"}
      </Button>

      {showJsonData && (
        <div>
          <h2>JSON Data:</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default JsonViewer;
