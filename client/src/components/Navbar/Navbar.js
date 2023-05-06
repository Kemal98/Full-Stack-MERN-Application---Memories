import React, { useState, useEffect } from "react";

import styled from '@emotion/styled';
import Link from "@mui/material/Link";
import { Box, Stack, Typography } from '@mui/material';

const slogans = [
  "Save your memories in one place",
  "Always carry your journey with you",
  "Remember every moment of your trip",
  "Store your adventures in a safe place",
  "Memories you want to keep forever",
];
const Navbar = () => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex(
        (currentSloganIndex) => (currentSloganIndex + 1) % slogans.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <Box
      sx={{
        maxWidth: "auto",
        width: "100%",
        marginLeft: "4rem",
        py: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ borderBottom: "1px solid #1E40AF", mb: "20px", pb: "20px" }}
        width="100%"
      >
        <Box display="flex" alignItems="center">
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2rem",
              color: "white",
              cursor: "pointer",
              fontFamily: "Montserrat",
              marginRight: "20px",
              ml: "10px",
            }}
          >
            Memories Card
          </Typography>
          <img
            style={{ width: "60px" }}
            src="https://github.com/adrianhajdin/project_mern_memories/blob/PART_1_and_2/client/src/images/memories.png?raw=true"
            alt="memoryImg"
          />
        </Box>
        <Box display="flex" sx={{textTransform: "uppercase",fontFamily: "Montserrat"}}>
          {slogans[currentSloganIndex]}</Box>
      </Stack>
    </Box>
  );
}

export default Navbar