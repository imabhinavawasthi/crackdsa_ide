import { Button, Tab, Tabs } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const SideBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{justifyContent:"center"}}
        >
          <Tab label="C++" />
          <Tab label="C" />
          <Tab label="Java" />
          <Tab label="Python" />
          <Tab label="Ruby" />
          <Tab label="Javascript" />
        </Tabs>
      </Box>
    </>
  );
};

export default SideBar;
