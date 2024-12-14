import React, { useState } from "react";
import swal from "sweetalert";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Box,
  TablePagination,
  Button,
  Grid,
} from "@mui/material";
import { API_BASE_URL } from "../../../../constant/apiEndPoints";
import CustomPagination from "../userstate/CustomPagination ";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const Users = [
    {
      id: 1,
      name: "waqar",
      userId: 123,
      phone: "555-123-4567",
      email: "john.doe@example.com",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "saim",
      userId: 456,
      phone: "555-987-6543",
      email: "jane.smith@example.com",
      address: "456 Elm St",
    },
    {
      id: 3,
      name: "saim",
      userId: 456,
      phone: "555-987-6543",
      email: "jane.smith@example.com",
      address: "456 Elm St",
    },
    {
      id: 4,
      name: "saim",
      userId: 456,
      phone: "555-987-6543",
      email: "jane.smith@example.com",
      address: "456 Elm St",
    },
    {
      id: 5,
      name: "saim",
      userId: 456,
      phone: "555-987-6543",
      email: "jane.smith@example.com",
      address: "456 Elm St",
    },
    {
      id: 6,
      name: "saim",
      userId: 456,
      phone: "555-987-6543",
      email: "jane.smith@example.com",
      address: "456 Elm St",
    },
  ];
  useState(() => {
    setUsers(Users);
  }, []);

  const columns = [
    { title: "User", type: "avatar" },
    { title: "User Id", type: "number" },
    { title: "Name", type: "text" },
    { title: "Phone", type: "number" },
    { title: "Email", type: "text" },
    { title: "Address", type: "text" },
    { title: "Action", type: "button" },
  ];

  const handleBlockClick = (user) => {
    swal({
      title: `Confirm Block ${user.name}`,
      text: `Are you sure you want to Block ${user.name}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willBlock) => {
      if (willBlock) {
        swal(`Block ${user.name}`, {
          icon: "success",
        });
      } else {
        swal(`Cancelled Block`);
      }
    });
  };

  const handleUnblockClick = (user) => {
    swal({
      title: `Confirm Unblock ${user.name}`,
      text: `Are you sure you want to Unblock ${user.name}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUnblock) => {
      if (willUnblock) {
        swal(`Unblock ${user.name}`, {
          icon: "success",
        });
      } else {
        swal(`Cancelled Unblock`);
      }
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            marginTop: "14px",
            background: "white",
            borderRadius: "5px",
            overflow: "auto",
            width: "100%",
          }}
        >
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
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>
                      <Avatar
                        alt={user.name}
                        src={`${API_BASE_URL}/${user.imageUrl}`}
                      />
                    </TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Button
                            size="small"
                            type="submit"
                            variant="outlined"
                            sx={{
                              color: "#3C4256 !important",
                              borderColor: "#3C4256",
                              fontSize: ".7rem !important",
                              "&:hover": {
                                borderColor: "black",
                              },
                            }}
                            onClick={() => handleBlockClick(user, "Block")}
                          >
                            Block
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            size="small"
                            type="submit"
                            variant="outlined"
                            sx={{
                              color: "#3C4256 !important",
                              borderColor: "#3C4256",
                              fontSize: ".7rem !important",
                              "&:hover": {
                                borderColor: "black",
                              },
                            }}
                            onClick={() => handleUnblockClick(user, "Unblock")}
                          >
                            Unblock
                          </Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <CustomPagination  records={users} page={page} handleChangePage={handleChangePage} rowsPerPage={rowsPerPage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
          
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserTable;
