import React from "react";
import { Box, Stack } from "@mui/material";
import { ReactComponent as LinkedInIcon } from "../assets/svg/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../assets/svg/gitHub.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";

const Social = () => {
  return (
    <Stack
      sx={{
        position: { desktop: "sticky", mobile: "relative" },
        top: "90%",
        height: "50px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
          transition: "fill 250ms",
          width: "100px",
          height: "25px",
          fill: "#b2b2b2",
        },
        "& svg:hover": {
          fill: "#fff",
        },
      }}
    >
      <a target="_blank" href="https://www.linkedin.com/in/jonwcode/">
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://github.com/jonwcode">
        <GitHubIcon />
      </a>
      <a target="_blank" href="https://www.instagram.com/jonathanworking/">
        <Instagram />
      </a>
      <a target="_blank" href="https://twitter.com/jonwcode">
        <Twitter />
      </a>
    </Stack>
  );
};

export default Social;
