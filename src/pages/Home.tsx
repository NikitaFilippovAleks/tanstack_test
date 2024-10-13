import { ROUTER_PATHS } from "@/shared/constants/routes";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <Box>
      <Link to={ROUTER_PATHS.CHARACTERS}>Characters</Link>
    </Box>
  )
}
