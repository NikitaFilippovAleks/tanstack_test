import { api } from "@/shared/api";
import { ICharactersResponse } from "@/shared/api/types/characters-response";
import { API_URLS } from "@/shared/constants/api";
import { ICharacter } from "@/shared/models/Character";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material"
import { deepPurple, pink } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const CharactersList = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getCh()
  }, []);

  const selectChar = (id: number) => {
    setSearchParams({ id: id.toString() })
  }

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
    <List
      sx={{
        backgroundColor: 'white',
        borderRadius: 4,
        overflow: 'auto',
        width: 284
      }}
    >
      {characters.map(char => (
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
    </List>
  )
}
