import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import React from "react";

export default function CustomPagination(props) {
  const {
    
    totalPages,
    page,
    handleChangePage,
    rowsPerPage,
    handleChangeRowsPerPage,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        margin: "0px 8px",
      }}
    >
      <FormControl sx={{ minWidth: 140 }} size="small">
        <InputLabel id="demo-select-small-label">Rows Per Page</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={rowsPerPage}
          label="Rows Per Page"
          onChange={handleChangeRowsPerPage}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ pt: 0.5 }}>
        <Stack spacing={2}>
          <Pagination
            variant="outlined"
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            // rowsPerPage={rowsPerPage}
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "white",
                color: "black",
                border: "2px solid #3C4256",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: "#3C4256",
                color: "white",
                border: "2px solid #3C4256",
              },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}
