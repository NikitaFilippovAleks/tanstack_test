import { getCharacters } from "@/shared/api/actions/get-characters";
import { Avatar, Box, CircularProgress, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const CharactersList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending, isError, data, error } = useQuery({ queryKey: ['characters'], queryFn: getCharacters})

  const selectChar = (id: number) => {
    setSearchParams({ id: id.toString() })
  }

  if (isError) {
    return <Typography>{error.message}</Typography>
  }

  if (isPending) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      {data.results.map(char => (
        <ListItemButton
          key={char.id}
          onClick={() => selectChar(char.id)}
          selected={searchParams.get('id') === char.id.toString()}
          // sx={{
          //   backgroundColor: searchParams.get('id') === char.id.toString() ? deepPurple[500] : null
          // }}
        >
          <ListItemAvatar>
            <Avatar src={char.image} />
          </ListItemAvatar>

          <ListItemText>{char.name}</ListItemText>
        </ListItemButton>
      ))}
    </>
  )
}
