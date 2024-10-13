import { List } from "@mui/material"
import { CharactersList } from "./characters-list"

export const LeftBlock = () => {
  return (
    <List
      sx={{
        backgroundColor: 'white',
        borderRadius: 4,
        overflow: 'auto',
        width: 284
      }}
    >
      <CharactersList />
    </List>
  )
}
