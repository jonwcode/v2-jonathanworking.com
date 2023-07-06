import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LeadHeader = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Stack
        sx={{
          // width: { [theme.breakpoints.down("tablet", "mobile")]: "100%" },
          position: { desktop: "sticky", mobile: "relative" },
          top: { desktop: "120px", mobile: "0" },
          paddingLeft: 2,
          paddingRight: 4,
          textAlign: { xs: "left" },
          justifyContent: "flex-start",
          alignContent: "flex-start",
          height: "max-content",
          clear: "both",
          float: "left",
          "&::before": {
            desktop: {
              content: '""',
              height: "100%",
              position: "absolute",
              right: 0,
            },
          },
        }}
      >
        <Box
          sx={{
            justifyContent: "flex-start",
            alignContent: "flex-start",
            paddingRight: { desktop: 10, mobile: 0 },
            width: { mobile: "max-content" },
          }}
        >
          <Typography
            sx={{ textShadow: "#FFF 1px 0 3px" }}
            variant="nameHeader"
            align="left"
          >
            Jonathan Working
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: { tablet: 2 },
            width: { mobile: "max-content" },
            mb: { mobile: 2 },
          }}
        >
          <Typography
            sx={{ textShadow: "#FFF 1px 0 2px" }}
            variant="subHeader"
            align="left"
          >
            Full Stack Web Developer
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: 2,
            width: { mobile: "100%" },
            paddingBottom: 2,
            position: "relative",
          }}
        >
          <Typography
            variant="subText"
            sx={{
              padding: 0,
              overflow: "hidden",
              a: { textDecoration: "none" },
            }}
          >
            Bringing Responsive Websites to Life, One Keystroke at a Time!
            <a href="/jonathan_working_resume.pdf" target="_blank">
              <Stack
                sx={{
                  background:
                    "linear-gradient(276deg, rgba(41, 53, 86, 0.27) 48%, rgba(25, 30, 44, 0.48) 85%)",
                  boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.4)",
                  color: "#C4B695",
                  fontFamily: "Fredoka-Medium",
                  letterSpacing: "1px",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.1em",
                  stroke: "1px",
                  textShadow: "-1px -1px 1px #161515",
                  fontWeight: "bold",
                  border: "1px solid #262C3F",
                  width: "max-content",
                  padding: "5px",
                  borderRadius: 1,
                  cursor: "pointer",
                  userSelect: "none",
                  flexDirection: "row",
                  marginTop: 2,
                  "&:hover": {
                    color: "#c5c5c5",
                    borderBottomColor: "rgba(157, 124, 100, 0.5)",
                    textShadow: "-1px -1px 1px #222222",
                  },
                  "& svg": {
                    transition: "transform 500ms ease",
                    height: "100%",
                  },
                  "&:hover svg": {
                    transform: "translateX(3px)",
                  },
                }}
              >
                View Resume <ArrowForwardIcon />
              </Stack>
            </a>
          </Typography>
        </Box>
      </Stack>
    </React.Fragment>
  );
};

export default LeadHeader;
