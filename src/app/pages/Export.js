import { Button, Tooltip } from "@mui/material";
import React from "react";
import XLSX from "sheetjs-style";
import * as FileSaver from "file-saver";

const Export = ({ fileName, excelData }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset-UTF-8";
  const fileExtension = ".xlsx";

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    const currentDate = getCurrentDate();
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <Button
      variant="contained"
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
      onClick={(e) => exportToExcel(fileName)}
    >
      Excel Export
    </Button>
  );
};

export default Export;
