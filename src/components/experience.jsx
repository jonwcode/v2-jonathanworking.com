import React, { ReactComponent } from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Date from "./date";

const Experiences = () => {
  const theme = useTheme();

  const container = {
    color: "red !important",
    marginLeft: { desktop: 0, medium: 2 },
    marginTop: { md: 1, sm: 5 },
    borderRadius: 2,
    padding: 2,
    marginLeft: 2,
    borderTop: "2px solid transparent",
    width: "90vw",
    maxWidth: { desktop: "100%", uhd: "700px" },
    "a:hover p": {
      color: "#E7C086 !important",
    },
    "&:a": {
      // animation: "moveIcon 250ms"
    },

    "a:hover svg": {
      transform: "translate(12px,-5px)",
    },

    svg: {
      transform: "translate(0,0)",
      transition: "transform 250ms ease",
    },
  };

  return (
    <Box sx={{ ...container }}>
      <Link href="https://perucomputercenter.com" underline="none">
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            [theme.breakpoints.up("desktop")]: {
              flexDirection: "row",
            },
            [theme.breakpoints.down("uhd")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              paddingRight: 5,
              flex: 1,
              minWidth: "max-content",
              marginTop: 3,
            }}
          >
            <Typography variant="dates">
              <Date set={{ month: "jun 2006", year: "2011" }} />
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "inline-block",
              padding: { desktop: 2, mobile: 1 },
            }}
          >
            <Typography variant="body">
              <Typography component="p" variant="title" data-linkarrow="true">
                Computer Technician - Peru Computer Center{" "}
              </Typography>
              <br /> Peru, IN
              <br />
              <br />
              As a Computer Technician and Website Administrator at the computer
              center, I played a pivotal role in ensuring smooth operations and
              excellent customer service. My responsibilities encompassed a wide
              range of tasks, including computer building and repair, website
              maintenance, server administration, and customer support. In the
              realm of computer hardware, I utilized my expertise to construct
              and repair computers, focusing on optimizing performance and
              resolving technical issues efficiently. This involved diagnosing
              hardware problems, replacing faulty components, and ensuring the
              proper functioning of computer systems. Additionally, I took
              charge of maintaining the organization's website, ensuring its
              responsiveness, functionality, and up-to-date content.
            </Typography>
          </Box>
        </Stack>
      </Link>
    </Box>
  );
};

export default Experiences;
