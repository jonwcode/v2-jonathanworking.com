import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      mobile: 0,
      medium: 400,
      tablet: 1080,
      desktop: 1200,
      uhd: 1700,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          overflowX: "hidden",
          background:
            "linear-gradient(135deg, rgba(28, 36, 53, 1) 11%, rgba(23, 27, 36, 1) 100%)",
        },
      }),
    },
  },
  typography: {
    date: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontFamily: "Rajdhani-SemiBold",
      color: "#90caf9;",
    },
    title: {
      fontSize: "1.2em",
      fontFamily: "InterBold",
    },
    projectTitle: {
      fontFamily: "InterMedium",
      fontSize: "1.2em",
    },
    h2: {
      fontFamily: "InterBold",
      letterSpacing: 2,
      position: "sticky",
      textTransform: "uppercase",
      fontSize: "1.5em",
      textShadow: "#a9bcda 0px 0 2px",
    },
    logo: {
      fontFamily: "AcmeRegular",
      fontSize: "4em",
      color: orange[500],
      cursor: "pointer",
    },
    subHeader: {
      fontFamily: "InterMedium",
      fontSize: "1.8em",
      color: "#f4faff",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "1.2em",
      },
      [theme.breakpoints.up("tablet")]: {
        fontSize: "1.5em",
      },
    },
    catHeader: {
      fontFamily: "InterMedium",
      fontSize: "1.5em",
      color: "#f4faff",
      [theme.breakpoints.down("tablet", "mobile", "desktop")]: {
        fontSize: "1.5em",
      },
      [theme.breakpoints.down("medium")]: {
        fontSize: "1.2em",
      },
      [theme.breakpoints.between("mobile", "medium")]: {
        fontSize: "1em",
      },
    },
    subText: {
      fontFamily: "InterLight",
      fontSize: "1.1em",
      color: "#f0f0f0",
      [theme.breakpoints.down("tablet", "mobile", "desktop")]: {
        fontSize: "1em",
      },
    },
    nameHeader: {
      fontFamily: "InterBold",
      fontSize: "3.1em",
      color: "#f4faff",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "2.8em",
      },
      [theme.breakpoints.up("medium")]: {
        fontSize: "2.5em",
      },
      [theme.breakpoints.down("medium")]: {
        fontSize: "1.9em",
      },
    },

    body: {
      fontFamily: "InterRegular",
      color: "#cfd8dc",
    },
  },
});

export { theme };
