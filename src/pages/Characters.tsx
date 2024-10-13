import { api } from "@/shared/api";
import { ICharactersResponse } from "@/shared/api/types/characters-response";
import { API_URLS } from "@/shared/constants/api";
import { ROUTER_PATHS } from "@/shared/constants/routes"
import { ICharacter } from "@/shared/models/Character";
import { Box, List, ListItem, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const CharactersPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCh()
  }, []);

  const getCh = async () => {
    const { data } = await api.get<ICharactersResponse>(API_URLS.character);
    console.log('data:', data?.results)
    if (data) {
      setCharacters(data.results);
    }
  }

  useEffect(() => {
    console.log('characters:', characters)
  }, [characters]);

  return (
    <Box>
      <Link to={ROUTER_PATHS.HOME}>Home</Link>

      <List>
        {characters.map(char => (
          <ListItem key={char.id}>
            <Typography>{char.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
