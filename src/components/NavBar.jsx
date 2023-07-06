import React, { useState, useContext } from "react";
import Logo from "./Logo";
import { orange } from "@mui/material/colors";
import SiteContext from "../store/siteContext";

import { AppBar, Toolbar, Stack, Link, Box } from "@mui/material";

const NavBar = () => {
  const siteCtx = useContext(SiteContext);

  const linkGroup = {
    width: "800px",
    display: { desktop: "flex", medium: "none", mobile: "none" },
    flexDirection: "row",
    div: {
      position: "relative",
      width: "300px",
    },
    a: {
      marginLeft: 10,
      textDecoration: "none",
      position: "relative",
      padding: 2,
      backgroundColor: "rgba(16, 20, 28, 0.527)",
      borderRadius: "10px",
      color: "#c9def3",
    },
    "a:hover": {
      color: orange[200],
    },
    "a:after": {
      transition: "all 200ms ease",
      position: "sticky",
      transform: "translateY(-100%)",
      content: '""',
      width: "10px",
      display: "inline-block",
      borderBottom: "3px solid #fff",
      height: "1px",
      marginLeft: 1,
    },
    "a:hover:after": {
      borderColor: orange[200],
      position: "relative",
      content: '""',
      width: "30px",
    },
  };

  const activeLink = {
    a: {
      color: orange[200],
    },
    "a:after": {
      transition: "all 200ms ease",
      position: "sticky",
      transform: "translateY(-100%)",
      content: '""',
      width: "10px",
      display: "inline-block",
      borderBottom: "3px solid #fff",
      height: "1px",
      marginLeft: 1,
      borderColor: orange[200],
      position: "relative",
      content: '""',
      width: "30px",
    },
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "transparent",
          display: {
            medium: "none",
            mobile: "none",
            tablet: "none",
            desktop: "inline-block",
          },
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            alignItems: "center",
            position: "sticky",
            background: "rgba(16, 20, 28, 0.379)",
            backdropFilter: "blur(8px)",
            zIndex: "50",
            position: "relative",
          }}
        >
          <Logo />
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ ...linkGroup }}>
              <Box
                id="aboutLink"
                sx={{
                  ...(siteCtx.activeCatagory === "about" && {
                    ...activeLink,
                  }),
                }}
              >
                <Link to="#about" href="#about">
                  About
                </Link>
              </Box>
              <Box
                id="experienceLink"
                sx={{
                  ...(siteCtx.activeCatagory === "experience" && {
                    ...activeLink,
                  }),
                }}
              >
                <Link href="#experience">Experience</Link>
              </Box>
              <Box
                sx={{
                  ...(siteCtx.activeCatagory === "projects" && {
                    ...activeLink,
                  }),
                }}
              >
                <Link href="#projects">Projects</Link>
              </Box>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
