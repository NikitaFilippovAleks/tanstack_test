import { API_URLS } from "@/shared/constants/api";
import { api } from "..";
import { IError } from "../types/error";
import { handleErrors } from "@/shared/utils/handle-errors";
import { ICharacter } from "@/shared/models/Character";

export const getCharacter = async (charId: string) => {
  const response = await api.get<ICharacter, IError>(API_URLS.characters.show(charId));

  if (!response.ok) {
    throw new Error(handleErrors(response));
  }

  return response.data!;
}
