import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Editor = ({code, setCode, handlesubmit, output}) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Box>
          <TextField
            sx={{
              width: "60em"
            }}
            id="outlined-multiline-static"
            label="Code"
            multiline
            rows={10}
            defaultValue='//online c++ compiler 
            #include <iostream> 
            
            int main() { 
              // Write C++ code here 
              std::cout << "Hello world!";  
              
              return 0; 
            }'
            onChange = {(e)=>{setCode(e.target.value)}}
          />
        </Box>
        <Box mt={2}>
          <Box
            display="flex"
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box mr={5}>
              <Typography sx={{ fontWeight: 200, color: "grey" }}>
                Custom Input
              </Typography>
              <TextField
                sx={{
                  width: "20em",
                }}
                id="outlined-multiline-static"
                multiline
                rows={5}
              />
            </Box>
            <Box mr={5}>
            <Typography sx={{ fontWeight: 200, color: "grey" }}>
                Output
              </Typography>
              <TextField
                sx={{
                  width: "20em",
                }}
                id="outlined-multiline-static"
                multiline
                rows={5}
                value={output}
                InputProps={{readOnly: true, }}
              />
            </Box>
            <Box>
              <Box display="flex" flexDirection={"column"}>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "green",
                      "&:hover": { backgroundColor: "green" },
                    }}
                    onClick={handlesubmit}
                  >
                    Run
                  </Button>
                </Box>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#285430",
                      "&:hover": { backgroundColor: "#285430" },
                    }}
                  >
                    Run and get URL
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Editor;
