import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              crackDSA IDE
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Home;
