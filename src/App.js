import "./App.css";
import Box from "@mui/material/Box";
import Home from "./components/Home";
import Editor from "./components/Editor";
import SideBar from "./components/SideBar";

function App() {
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
          <Editor />
        </Box>
      </Box>
    </>
  );
}

export default App;
