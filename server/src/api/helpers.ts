const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const emailValidator = (email: string) => {
  let isValid = true;
  let error = "";

  if (!email) {
    isValid = false;
    error = "Email not found! ";
  } else if (!email.match(emailRegex)) {
    isValid = false;
    error = "Email format not valid";
  }

  return [isValid, error];
};

export const nameValidator = (name: string) => {
  let isValid = true;
  let error = "";

  if (!name) {
    isValid = false;
    error = "Name not found! ";
  } else if (name.length < 4) {
    isValid = false;
    error = "Name too short";
  }

  return [isValid, error];
};

export const passwordValidator = (password: string) => {
  let isValid = true;
  let error = "";

  if (!password) {
    isValid = false;
    error = "Password not found! ";
  } else if (password.length < 4) {
    isValid = false;
    error = "Password too short";
  }

  return [isValid, error];
};
