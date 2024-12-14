import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Switch,
} from "@mui/material";
// components
import Label from "../component/label";
import Iconify from "../component/iconify";
import Scrollbar from "../component/scrollbar";
// sections
import {
  AdminListHead,
  AdminListToolbar,
} from "../containers/Admin/dashboard/admin";
 
// mock
import { AdminData, AdminVerify } from "../services/index";
import show_Toast from "../helpers/toast.helper";
import IconsFile from "../pages/AdminUserIcons";
import { API_BASE_URL } from "../constant/apiEndPoints";
import { useSelector } from "react-redux";
import CustomPagination from "./CustomPagination";
import EmptyContent from "../component/EmptyContent";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Export from "./Export";
import AdminPdf from "./AdminPdf";
import httpRequest from "../axios/index";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "phone", label: "Phone Number", alignRight: false },
  { id: "role", label: "Role", alignRight: false },
  { id: "is_verified", label: "Verified", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "isAdmin", label: "Approved", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (user) => user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function AdminList() {
  const { roles = [] } = useSelector((state) => state.roles);

  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [isPDFModalOpen, setPDFModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleUser = () => {
    navigate("/admin/createadminuser");
  };

  useEffect(() => {
    fetchAdminList();
  }, []);

  const fetchAdminList = async () => {
    try {
      const response = await AdminData();
      const data = response?.data?.response;
      setUsers(data);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users?.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleFilterByName = (event) => {
    setPage(1);
    setFilterName(event.target.value);
  };

  const filteredUsers = applySortFilter(
    users,
    getComparator(order, orderBy),
    filterName
  );
  const isNotFound = (!filteredUsers.length && !!filterName) || !users.length;

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(1);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  // PDF
  const handleExportPDF = () => {
    setPDFModalOpen(true);
  };

  const excelData = users.map((user) => ({
    Name: user.name,
    "Phone Number": user.phone,
    Role: roles.find((role) => role.id === user.role_id)?.name,
    Verified: user.is_verified ? "Yes" : "No",
    Status: "Active",
  }));

  const handleSwitchChange = async (userId, isAdmin, name) => {
    try {
      const payload = {
        userId: userId,
      };

      await AdminVerify(payload);
      fetchAdminList();
      !isAdmin
        ? show_Toast({
            status: true,
            message: `${name} approved as Admin  `,
          })
        : show_Toast({
            status: false,
            message: `${name} disapproved as Admin`,
          });
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title> Admin | Company Admin List</title>
      </Helmet>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              All Company Admin
            </Typography>
            <Box>
            <Button
                variant="contained"
                startIcon={<Iconify icon="eva:plus-fill" />}
                onClick={handleUser}
                sx={{
                  m: 1,
                  backgroundColor: "#3C4256 !important",
                  color: "white !important",
                  "&:hover": {
                    backgroundColor: "white !important",
                    color: "black !important",
                    outline: "2px solid #3C4256",
                    outlineOffset: "-2px",
                  },
                }}
              >
                New Admin
              </Button>
              <Button
                variant="contained"
                onClick={handleExportPDF}
                sx={{
                  backgroundColor: "#3C4256 !important",
                  color: "white !important",
                  marginRight: ".5rem",
                  "&:hover": {
                    backgroundColor: "white !important",
                    color: "black !important",
                    outline: "2px solid #3C4256",
                    outlineOffset: "-2px",
                  },
                }}
              >
                PDF Export
              </Button>

              <Export fileName={"Excel Export"} excelData={excelData} />
            </Box>
          </Stack>

          <Card>
            <AdminListToolbar
              numSelected={selected?.length}
              numSelectedId={selected}
              filterName={filterName}
              onFilterName={handleFilterByName}
              users={fetchAdminList}
              setSelected={setSelected}
              setPage={setPage}
            />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <AdminListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={users.length}
                    numSelected={selected?.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredUsers
                      .slice(
                        (page - 1) * rowsPerPage,
                        (page - 1) * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        const {
                          id,
                          name,
                          role_id,
                          phone,
                          email,
                          is_verified,
                          imageUrl,
                          isAdmin,
                          company_id,
                        } = row;

                        const selectedUser = selected.indexOf(id) !== -1;

                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={selectedUser}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={selectedUser}
                                onChange={(event) => handleClick(event, id)}
                              />
                            </TableCell>

                            <TableCell
                              component="th"
                              scope="row"
                              padding="none"
                            >
                              <Box>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={2}
                                >
                                  <Avatar
                                    alt={name}
                                    src={`${API_BASE_URL}/${imageUrl}`}
                                  />
                                  <Box ml={0.5}>
                                    <Typography variant="subtitle2" noWrap>
                                      {name}
                                    </Typography>
                                    <Typography variant="subtitle2" noWrap>
                                      {email}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Box>
                            </TableCell>

                            <TableCell align="left">{phone}</TableCell>

                            <TableCell align="left">
                              {roles.find((role) => role.id === role_id)?.name}
                            </TableCell>
                            <TableCell align="left">
                              {is_verified ? "Yes" : "No"}
                            </TableCell>

                            <TableCell align="left">
                              <Label color={is_verified ? "success" : "error"}>
                                {is_verified ? "Active" : "In Active"}
                              </Label>
                            </TableCell>
                            <TableCell align="left">
                              <Switch
                                checked={isAdmin}
                                color="success"
                                onChange={() => {
                                  handleSwitchChange(id, isAdmin, name);
                                }}
                              />
                            </TableCell>

                            <TableCell align="right">
                              <IconsFile id={id} company_id={company_id} isAdmin={isAdmin} users={fetchAdminList} />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {/* {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell 
                        colSpan={6} 
                        />
                      </TableRow>
                    )} */}
                  </TableBody>
                  {isNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <EmptyContent
                            title="No Data"
                            sx={{
                              "& span.MuiBox-root": { height: 160 },
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>

            <CustomPagination
              totalPages={totalPages}
              page={page}
              handleChangePage={handleChangePage}
              rowsPerPage={rowsPerPage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={isPDFModalOpen}
        onClose={() => setPDFModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Admin List PDF</DialogTitle>
        <DialogContent>
          <PDFViewer width="100%" height={500}>
            <AdminPdf users={users} roles={roles} />
          </PDFViewer>
        </DialogContent>
        <DialogActions>
          <PDFDownloadLink
            document={<AdminPdf users={users} roles={roles} />}
            fileName="admin-list.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
          <Button onClick={() => setPDFModalOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
