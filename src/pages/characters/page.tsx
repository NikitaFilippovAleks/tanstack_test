import { ROUTER_PATHS } from "@/shared/constants/routes"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import { LeftBlock } from "./left-block";
import { RightBlock } from "./right-block";

export const CharactersPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
      }}
    >
      <Box mb={2}>
        <Link to={ROUTER_PATHS.HOME}>Home</Link>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flex: 1,
          gap: 2,
          overflow: 'hidden'
        }}
      >
        <LeftBlock />

        <RightBlock />
      </Box>
    </Box>
  )
}
