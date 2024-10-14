import { Box } from "@mui/material"
import { pink } from "@mui/material/colors"
import { useSearchParams } from "react-router-dom";
import { CharacterShow } from "./character-show";

export const RightBlock = () => {
  const [searchParams] = useSearchParams();

  const charId = searchParams.get('id');

  return (
    <Box
      sx={{
        backgroundColor: pink[200],
        borderRadius: 4,
        flex: 1,
        p: 1
      }}
    >
      {charId && <CharacterShow charId={charId} />}
    </Box>
  )
}
