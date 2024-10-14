import { api } from "..";
import { IError } from "../types/error";
import { handleErrors } from "@/shared/utils/handle-errors";
import { ICharacter } from "@/shared/models/Character";
import { QueryFunction } from "@tanstack/react-query";

export const getCharacter: QueryFunction<ICharacter> = async ({ queryKey }) => {
  const response = await api.get<ICharacter, IError>(queryKey.toString());

  if (!response.ok) {
    throw new Error(handleErrors(response));
  }

  return response.data!;
}
