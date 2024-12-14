import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

// @mui
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Typography,
  TableContainer,
  IconButton,
} from "@mui/material";
// components
import Iconify from "../../../../component/iconify";
import Scrollbar from "../../../../component/scrollbar";
// sections
import RolesListToolbar from "../roles&permissions/RolesListToolbar";
import RolesListHead from "../roles&permissions/RolesListHead";
// mock
import { RolesListData } from "../../../../services/index";
import show_Toast from "../../../../helpers/toast.helper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRoles } from "../../../../store/slices/roles";
import { useSelector } from "react-redux";
import EmptyContent from "../../../../component/EmptyContent";
import CustomPagination from "../../../../pages/CustomPagination";
// ----------------------------------------------------------------------
const TABLE_HEAD = [{ id: "name", label: "Role", alignRight: false }];
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
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function AllRoles() {
  const { roles = [] } = useSelector((state) => state.roles);

  const [page, setPage] = useState(1);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddRole = () => {
    navigate("/admin/createrole");
  };

  useEffect(() => {
    fetchRoleData();
  }, []);

  const fetchRoleData = async () => {
    try {
      const response = await RolesListData();
      if (response?.data?.status === "success") {
        dispatch(setRoles(response?.data?.response));
      }
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(1);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    // setPage(0);
    setPage(1);
    setFilterName(event.target.value);
  };

  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - roles.length) : 0;

  const filteredUsers = applySortFilter(
    roles,
    getComparator(order, orderBy),
    filterName
  );

  // const isNotFound = !filteredUsers.length && !!filterName;
  const isNotFound = (!filteredUsers.length && !!filterName) || !roles.length;

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  return (
    <>
      <Helmet>
        <title> Admin | Roles</title>
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
              All Roles
            </Typography>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={handleAddRole}
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
            >
              Add New Role
            </Button>
          </Stack>
          <Card>
            <RolesListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <RolesListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    onRequestSort={handleRequestSort}
                  />
                  <TableBody>
                    {filteredUsers
                      .slice(
                        (page - 1) * rowsPerPage,
                        (page - 1) * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        const { id, name } = row;
                        const selectedUser = selected.indexOf(name) !== -1;
                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            selected={selectedUser}
                          >
                            <TableCell />
                            <TableCell component="th" scope="row">
                              {name}
                            </TableCell>

                            <TableCell align="left">
                              <IconButton
                                component={RouterLink}
                                to={`/admin/editrole/${id}`}
                              >
                                <Iconify icon={"eva:edit-fill"} />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {/* {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={2} />
                      </TableRow>
                    )} */}
                  </TableBody>

                  {isNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={2} sx={{ py: 3 }}>
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
    </>
  );
}
