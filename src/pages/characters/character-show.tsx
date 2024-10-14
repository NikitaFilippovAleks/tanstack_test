import { getCharacter } from "@/shared/api/actions/get-character";
import { API_URLS } from "@/shared/constants/api";
import { Avatar, Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  charId: string;
}

export const CharacterShow = ({ charId }: IProps) => {
  const { isPending, isError, data, error } = useQuery({ queryKey: [API_URLS.characters.show(charId)], queryFn: getCharacter})

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
    <Stack>
      <Avatar src={data.image} />

      <Typography>Name: {data.name}</Typography>

      <Typography>Status: {data.status}</Typography>

      <Typography>Species: {data.species}</Typography>
    </Stack>
  );
}
