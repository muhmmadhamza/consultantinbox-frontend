// material-ui
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// assets
import { SearchOutlined } from "@ant-design/icons";
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  borderRadius: "18px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));
const Searchs = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#F5F5F5",
  borderRadius: "18px",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
  <Searchs>
    <StyledInputBase
      sxv={{ size: "small" }}
      placeholder="Search for anything…"
      inputProps={{ "aria-label": "search" }}
    />
    <SearchIconWrapper>
      <SearchOutlined sx={{ color: "black" }} />
    </SearchIconWrapper>
  </Searchs>
);

export default Search;
