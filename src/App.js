import "./App.css";
import Box from "@mui/material/Box";
import Home from "./components/Home";
import Editor from "./components/Editor";
import SideBar from "./components/SideBar";
import { useState } from "react";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handlesubmit = async () => {
    const payload = {
      language: "cpp",
      code,
    };

    try {
      const output = await axios.post("http://localhost:5000/run", payload);
      setOutput(output?.data?.output);
      console.log(output?.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <Box>
        <Home />
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box mt={2}>
          <SideBar />
        </Box>
        <Box>
          <Editor code={code} setCode={setCode} handlesubmit={handlesubmit} output={output}/>
        </Box>
      </Box>
    </>
  );
}

export default App;
