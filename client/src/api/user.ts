import { User } from "../types/user";

const registerURL = "http://localhost:8000/register";

export function registerUser(data: User) {
  return fetch(registerURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((res) => res.json);
}
