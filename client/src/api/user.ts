import { UserLoginData, UserRegisterData } from "../types/user";

const registerURL = "http://localhost:8000/register";
const loginURL = "http://localhost:8000/login";

export async function registerUser(data: UserRegisterData) {
  return fetch(registerURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export async function loginUser(data: UserLoginData) {
  return fetch(loginURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
