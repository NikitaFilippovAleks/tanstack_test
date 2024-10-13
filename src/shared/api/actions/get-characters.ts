import { API_URLS } from "@/shared/constants/api";
import { api } from "..";
import { ICharactersResponse } from "../types/characters-response";
import { IError } from "../types/error";
import { handleErrors } from "@/shared/utils/handle-errors";

export const getCharacters = async () => {
  const response = await api.get<ICharactersResponse, IError>(API_URLS.character);

  if (!response.ok) {
    throw new Error(handleErrors(response));
  }

  return response.data!;
}
