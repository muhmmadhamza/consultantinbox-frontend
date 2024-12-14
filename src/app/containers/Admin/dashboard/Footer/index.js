import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Toolbar, useMediaQuery } from "@mui/material";

// project import
import FooterContent from "./FooterContent";
import FooterStyled from "./FooterStyled";

// assets

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Footer = ({ open }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  // common header
  const mainHeader = (
    <Toolbar
      sx={{
        backgroundColor: "#ffffff",
      }}
    >
      <FooterContent />
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: "fixed",
    bottom: "0%",
    width: "100%",

    color: "inherit",
    elevation: 0,
    sx: {
      backgroundColor: "inherit !important",
    },
  };

  return (
    <>
      {!matchDownMD ? (
        <FooterStyled open={open} {...appBar}>
          {mainHeader}
        </FooterStyled>
      ) : (
        <Box {...appBar}>{mainHeader}</Box>
      )}
    </>
  );
};

Footer.propTypes = {
  open: PropTypes.bool,
};

export default Footer;
