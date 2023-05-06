import Box from "@mui/material/Box";
import MainPages from "./pages/MainPages";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <MainPages />
      </Box>
    </Box>
  );
}

export default App;
