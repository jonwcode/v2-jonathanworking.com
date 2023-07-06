import { Typography, Box, Stack } from "@mui/material";
import React from "react";

const Date = ({ set }) => {
  return (
    <Typography variant="date">
      <Stack flexDirection="row" sx={{ height: "20px", color: "#929293" }}>
        <Box
          sx={{
            position: "relative",
            "&:after": {
              content: '""',
              width: "15px",
              height: "2px",
              position: "absolute",
              top: "50%",
              translate: "translateX(-50%)",
              lineHeight: "10px",
              marginLeft: 1,
              marginRight: 1,
              backgroundColor: "#a9acb5",
              borderRadius: "50%",
              display: "inline-block",
            },
          }}
        >
          {set.month}
        </Box>
        <Box sx={{ marginLeft: 4 }}>{set.year}</Box>
      </Stack>
    </Typography>
  );
};

export default Date;
