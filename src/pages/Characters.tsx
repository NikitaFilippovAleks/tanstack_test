import { ROUTER_PATHS } from "@/shared/constants/routes"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export const CharactersPage = () => {
  return (
    <Box>
      <Link to={ROUTER_PATHS.HOME}>Home</Link>
    </Box>
  )
}
