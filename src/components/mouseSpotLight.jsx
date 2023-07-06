import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MouseSpotLight = () => {
  const theme = useTheme();

  const [pos, setPos] = useState({ x: null, y: null });
  const spotLightDiv = useRef();
  const initialLoad = useRef(false);

  useEffect((evt) => {
    if (initialLoad.current === false) {
      document.onmousemove = (evt) => {
        spotLightDiv.current.style.display = "inline-block";

        let xPos = evt.pageX;

        let yPos = evt.pageY;

        setPos((prev) => {
          return { x: xPos, y: yPos };
        });
      };

      return () => {
        initialLoad.current = true;
      };
    }
  }, []);

  return (
    <Box
      ref={spotLightDiv}
      sx={{
        [theme.breakpoints.down("mobile", "tablet")]: {
          display: "none",
        },
        zIndex: "99999",
        width: 200,
        height: 200,
        display: "none",
        borderRadius: "50%",
        "&:before": {
          width: 400,
          height: 400,
          content: '""',
          background: "",
          boxShadow: "0px 700px 600px 0px rgba(78, 150, 189, 0.255)",
          display: "inline-block",
          borderRadius: "50%",
          position: "absolute",
        },
        position: "absolute",
        transform: "translate(-100%, -900px)",
        top: pos.y + "px",
        left: pos.x + "px",
      }}
    ></Box>
  );
};

export default MouseSpotLight;
