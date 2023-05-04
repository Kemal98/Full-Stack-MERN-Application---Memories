import Box from "@mui/material/Box";
import GlobalPages from "./pages/GlobalPages";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <GlobalPages />
      </Box>
    </Box>
  );
}

export default App;
