import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: "-2",
        height: { uhd: "500px" },
      }}
    ></Box>
  );
};

export default Footer;
