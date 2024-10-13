import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <Box
    sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black'
    }}
  >
    <Outlet />
  </Box>
);
