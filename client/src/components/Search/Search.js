import SearchIcon from "@mui/icons-material/Search";
import { alpha, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
// import NavigationList from "../components/Sidebar/NavigationList";
// import SidebarFooter from "../components/Sidebar/SidebarFooter";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  margin: "14px 12px 17px 10px",
  height: "5%",
  alignItems: "center",
  padding: "20px",

  //   borderColor: "rgba(0, 0, 0, 0.23",
  border: "1px solid #0000003b",
  //   boxShadow: "-3px 0px 12px 8px rgb(0 0 0 / 4%)",
  backgroundColor: alpha("#fff", 0.09),
  "&:hover": {
    backgroundColor: alpha("#fff", 0.09),
  },
  [theme.breakpoints.up("sm")]: {
    mrginLeft: theme.spacing(1),
    padding: "0px",
  },
}));

export const SearchIconWraper = styled("div")(({ theme }) => ({
  position: "absolute",
  height: "100%",
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
}));

export const StyledSearchInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  right: "40px",
  fontSize: "0.8em",
  left: " 45px",
  position: "absolute",
  "&. MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const SearchInput = ({ open }) => {

  
  return (
    <>
      {open ? (
        <Search
          sx={{ justifyContent: "initial", borderRadius: "27px", height: "5%" }}
        >
          <SearchIconWraper sx={{ color: "#d6d6d6" }}>
            <SearchIcon />
          </SearchIconWraper>
          <StyledSearchInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      ) : (
        <Search
          sx={{
            justifyContent: "center",
            width: "50%",
            margin: "15px auto",
            borderRadius: "50%",
          }}
        >
          <SearchIconWraper sx={{ color: "#d6d6d6" }}>
            <SearchIcon />
          </SearchIconWraper>
        </Search>
      )}
    </>
  );
};

export default SearchInput;
