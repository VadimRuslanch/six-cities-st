import exp from "node:constants";

const AUTH_TOKEN = "MY-TOKEN";

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ?? ''
}

export const saveToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN, token);
}

export const dropToken = (token: Token) => {
  localStorage.removeItem(AUTH_TOKEN);
}
