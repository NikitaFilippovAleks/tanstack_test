import { Box } from "@mui/material"
import { pink } from "@mui/material/colors"
import { useSearchParams } from "react-router-dom";

export const CharactersShow = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Box
      sx={{
        backgroundColor: pink[200],
        borderRadius: 4,
        flex: 1,
        p: 1
      }}
    >
      SHOW: {searchParams.get('id')}
    </Box>
  )
}
