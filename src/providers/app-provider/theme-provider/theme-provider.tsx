import { createTheme } from "@mui/material/styles";
import ArrowLeftIcon from "src/components/pagination/pagination-icons/arrow-left-icon";
import ArrowRightIcon from "src/components/pagination/pagination-icons/arrow-right-icon";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "var(--font-36-size)",
      fontWeight: "var(--font-500-weight)",
      lineHeight: "2.7rem",
    },
    body1: {
      color: "var(--pretitle-txt-color)",
      fontSize: "var(--font-24-size)",
      fontWeight: "var(--font-400-weight)",
      lineHeight: "2.7rem",
    },
    h2:{
      height: "1.875rem",
      fontSize: "var(--font-20-size)",
      fontWeight: "var(--font-600-weight)",
      lineHeight: "2.7rem",
    },
    h3:{
      fontSize: "1.25rem",
      textAlign: "center",
      paddingLeft:"20px",
      paddingRight:"20px",
      marginTop:"20px",
      fontWeight:"600",
    },
    h4:{
      fontSize: "0.875rem",
      fontWeight: "400",
      lineHeight: "1.5rem",
      textAlign: "left",
    },
    h5: {
      fontSize: "1.75rem",
      fontWeight: "400",
      letterSpacing: "-0.019rem",
      margin: "0",
    },
    h6:{
      fontSize:"0.875rem",
      fontWeight: "400",
      lineHeight: "1.3rem",
    }
  },
  
  components: {
    MuiPaginationItem: {
      defaultProps: {
        components: { previous: ArrowLeftIcon, next: ArrowRightIcon },
      },
    
    }
  },
});

export default theme;
