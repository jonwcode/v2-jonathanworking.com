import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SiteContext from "../store/siteContext";

const About = () => {
  const siteCtx = useContext(SiteContext);

  return (
    <Box
      sx={{
        paddingLeft: { desktop: 0, medium: 2, mobile: 1 },
        marginLeft: { desktop: 0, medium: 2 },
        marginTop: { tablet: 1 },
        paddingLeft: 5,
        paddingRight: 5,
        width: "90vw",
        maxWidth: { desktop: "100%", uhd: "700px" },
      }}
    >
      <Typography
        variant="body"
        dangerouslySetInnerHTML={{ __html: siteCtx.about }}
      ></Typography>
    </Box>
  );
};

export default About;
