import React from "react";
import About from "./About";
import Experiences from "./experience";
import Projects from "./projects";
import LeadHeader from "./LeadHeader";
import { styled } from "@mui/material/styles";
import Catagory from "./Catagory";
import { Stack } from "@mui/material";
import Social from "./social";

const ContentRight = () => {
  const CatagoryGroup = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("desktop")]: {
      width: "50%",
    },
    [theme.breakpoints.up("mobile")]: {
      width: "57%",
    },
    flexDirection: "column",
  }));
  return (
    <React.Fragment>
      <Stack
        sx={{
          width: "100%",
          paddingTop: { desktop: 5 },
        }}
        direction="column"
      >
        <Stack
          sx={{
            flexDirection: {
              mobile: "column",
              tablet: "column",
              desktop: "row",
            },
            position: "relative",
            justifyContent: "center",
            marginTop: { desktop: 10, medium: 3 },
          }}
        >
          <Stack>
            <LeadHeader />
            <Social />
          </Stack>
          <CatagoryGroup>
            <Catagory id="about" header="About" component={<About />} />
            <Catagory
              id="experience"
              header="experience"
              component={<Experiences />}
            />
            <Catagory
              id="projects"
              header="projects"
              component={<Projects />}
            />
          </CatagoryGroup>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default ContentRight;
