import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import MouseSpotLight from "./components/mouseSpotLight";
import ContentRight from "./components/ContentRight";
import NavBar from "./components/NavBar";
import React from "react";
import SiteProvider from "./store/siteProvider";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <MouseSpotLight />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteProvider>
          <NavBar />
          <Stack
            sx={{
              width: "100vw",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <Stack
              sx={{
                flexDirection: {
                  desktop: "row",
                },
                width: "100%",
                height: "100%",
                maxWidth: "1440px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ContentRight />
            </Stack>
          </Stack>
          <Footer />
        </SiteProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
