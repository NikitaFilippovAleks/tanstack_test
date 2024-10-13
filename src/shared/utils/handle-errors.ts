import { ApiErrorResponse } from "apisauce";
import { IError } from "../api/types/error";

export const handleErrors = ({ data, problem }: ApiErrorResponse<IError>) => {
  if (problem === 'NETWORK_ERROR') return 'Network error.';

  if (data) return data.error;
  
  return 'Unknown error';
}
