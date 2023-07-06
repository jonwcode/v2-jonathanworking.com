import React, { useEffect, useRef, useState, useContext } from "react";
import SiteContext from "../store/siteContext";
import { Stack, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { Helmet } from "react-helmet";

const Catagory = ({ component, header, id }) => {
  const theme = useTheme();
  const [stuck, setStuck] = useState(false);

  const siteCtx = useContext(SiteContext);

  const stickyHeaderContainer = useRef();

  let timeout = null;

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        clearTimeout(timeout);

        if (entry.isIntersecting || entry.intersectionRatio >= 0.5) {
          siteCtx.setActiveCatagory(entry.target.id);
          setStuck(entry.target.id);

          timeout = setTimeout(() => {
            window.history.pushState("hash_url", "", "#" + entry.target.id);
          }, 500);
        }
      });
    },
    {
      threshold: "0",
      rootMargin: "-20% 0% -80% 0%",
    }
  );

  const initialLoad = useRef(false);

  useEffect(() => {
    if (initialLoad.current !== true) {
      observer.observe(stickyHeaderContainer.current);

      return () => {
        initialLoad.current = true;
      };
    }
  }, []);

  const headerClass = {
    zIndex: 9999,
    alignItems: "center",
    padding: 10,
    textAlign: "left",
    display: "flex",
    margin: "0px 0px 50px 0px",
    background: "rgba(59, 59, 79, 0.25)",
    // backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("desktop")]: {
      top: 94,
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  };

  const CatagoryHeader = styled(Box)(({ theme }) => ({
    marginTop: "200px",
    ...headerClass,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  }));

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Jonathan Working Portfolio -{" "}
          {siteCtx.activeCatagory.charAt(0).toUpperCase() +
            siteCtx.activeCatagory.slice(1)}
        </title>
      </Helmet>
      <Stack
        id={id}
        ref={stickyHeaderContainer}
        sx={{
          width: "98vw",
          maxWidth: { desktop: "90%" },
          opacity: { tablet: "0.5" },
        }}
        style={{
          padding: { tablet: "50px 20px 0px 20px" },
          scrollMarginTop: "120px",
          marginTop: "50px",
          transition: "opacity 500ms",
          marginBottom: "150px",
          color: "#c9def3",
          borderRadius: "10px",
          background:
            "linear-gradient(276deg, rgba(41, 53, 86, 0.27) 48%, rgba(25, 30, 44, 0.48) 85%)",
          boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.4)",
          ...(stuck === siteCtx.activeCatagory && {
            color: "#e7c086",
            opacity: 1,
            zIndex: "50",
          }),
        }}
      >
        <Stack
          sx={{
            display: "inline-block",
            flexDirection: { mobile: "column", desktop: "column" },
            justifyContent: "flex-start",
            alignItems: { desktop: "center" },
            marginBottom: 10,
          }}
        >
          <CatagoryHeader>
            <Typography
              textAlign="center"
              variant="h2"
              style={{ display: "inline-block" }}
            >
              {header}
            </Typography>
          </CatagoryHeader>
          {component}
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Catagory;
