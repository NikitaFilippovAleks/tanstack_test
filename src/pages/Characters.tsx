import { ROUTER_PATHS } from "@/shared/constants/routes"
import { CharactersList } from "@/widgets/characters/List";
import { CharactersShow } from "@/widgets/characters/Show";
import { Box } from "@mui/material"
import { Link } from "react-router-dom"

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
        <CharactersList />

        <CharactersShow />
      </Box>
    </Box>
  )
}
