import { create } from 'apisauce';

// Настройки заголовков и базового url
export const api = create({
  baseURL: 'https://rickandmortyapi.com/api/',
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  //   'token-type': 'Bearer',
  //   'X-CSRF-Token': csrfMetaTag?.content
  // }
});
