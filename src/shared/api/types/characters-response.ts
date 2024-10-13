import { ICharacter } from "@/shared/models/Character";

export interface ICharactersResponse {
  info: {
    count: number;
    pages: number;
  },
  results: ICharacter[];
}
