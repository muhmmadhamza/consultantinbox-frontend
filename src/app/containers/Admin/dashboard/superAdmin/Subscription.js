import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
} from "@mui/material";
import CustomPagination from "../userstate/CustomPagination ";
  


const Subscription = () => {
  const [subscribers, setSubscribers] = useState([
    {
        id: 1, 
        name: "XYZ",
        price: 150, 
        type: "montly",
        date: "Jan 02, 2024"
    }, 
    {
        id: 2, 
        name: "XYZ",
        price: 150, 
        type: "montly",
        date: "Jan 02, 2024"
    }, 
    {
        id: 3, 
        name: "XYZ",
        price: 150, 
        type: "montly",
        date: "Jan 02, 2024"
    }, 
    {
        id: 4, 
        name: "XYZ",
        price: 150, 
        type: "montly",
        date: "Jan 02, 2024"
    }, 
    {
        id: 5, 
        name: "XYZ",
        price: 150, 
        type: "montly",
        date: "Jan 02, 2024"
    }, 
    {
        id: 6, 
        name: "XYZ",
        price: 150, 
        type: "montly",
        date: "Jan 02, 2024"
    }, 
  ]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  
 
  //   try {
  //     const response = await UsersData();
  //     const data = response?.data?.response;
  //     setUsers(data);
  //   } catch (error) {
  //     show_Toast({
  //       status: false,
  //       message: error?.response?.data?.message || "Something went wrong",
  //     });
  //   }
  // };

  const columns = [
    { title: "Id", type: "number" },
    { title: "Name", type: "text" },
    { title: "Price", type: "number" },
    { title: "Type", type: "text" },
    { title: "Date", type: "date" },
  ];

  return (
    <Box
      sx={{
        marginTop: "14px",
        background: "white",
        borderRadius: "5px",
        overflow: "auto",
        width: "100%",
      }}     
    >
         <Typography variant="h4" gutterBottom>
      All Subscribers
    </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                sx={{
                  background: "white",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <CustomPagination  records={subscribers} page={page} handleChangePage={handleChangePage} rowsPerPage={rowsPerPage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
     
    </Box>
  );
};

export default Subscription;
