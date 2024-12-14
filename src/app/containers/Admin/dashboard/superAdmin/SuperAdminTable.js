import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { API_BASE_URL } from "../../../../constant/apiEndPoints";
import CustomPagination from "../userstate/CustomPagination ";
// import UserDashboardIcons from "./UserDashboardIcons";

const SuperAdminTable = () => {
  const [superAdmins, setSuperAdmins] = useState([
    {
    id: 1,
    name: "M. Hamza",
    phone: "03001122333", 
    email: "hamza@gmail.com",
    address: "ABC, XYZ",    
  },
    {
    id: 2,
    name: "M. Hamza",
    phone: "03001122333", 
    email: "hamza@gmail.com",
    address: "ABC, XYZ",    
  },
    {
    id: 3,
    name: "M. Hamza",
    phone: "03001122333", 
    email: "hamza@gmail.com",
    address: "ABC, XYZ",    
  },
    {
    id: 4,
    name: "M. Hamza",
    phone: "03001122333", 
    email: "hamza@gmail.com",
    address: "ABC, XYZ",    
  },
    {
    id: 5,
    name: "M. Hamza",
    phone: "03001122333", 
    email: "hamza@gmail.com",
    address: "ABC, XYZ",    
  },
    {
    id: 6,
    name: "M. Hamza",
    phone: "03001122333", 
    email: "hamza@gmail.com",
    address: "ABC, XYZ",    
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

  useEffect(() => {
    // fetchUserData();
  }, []);

  // const fetchUserData = async () => {
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
    { title: "Admin", type: "avatar" },
    { title: "Admin Id", type: "number" },
    { title: "Name", type: "text" },
    { title: "Phone", type: "number" },
    { title: "Email", type: "text" },
    { title: "Address", type: "text" },
    { title: "", type: "icon" },
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
      All Super Admins
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
          {superAdmins
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <Avatar
                    alt={item.name}
                    src={`${API_BASE_URL}/${item.imageUrl}`}
                  />
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{"ABC, XYZ"}</TableCell>
                <TableCell>
                  {/* <UserDashboardIcons  id={item.id} users={fetchUserData} /> */}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <CustomPagination  records={superAdmins} page={page} handleChangePage={handleChangePage} rowsPerPage={rowsPerPage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
    </Box>
  );
};

export default SuperAdminTable;
