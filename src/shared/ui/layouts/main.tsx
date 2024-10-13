import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <Box
    sx={{
      display: 'flex',
      flex: 1,
      backgroundColor: 'black',
      p: 2
    }}
  >
    <Outlet />
  </Box>
);
