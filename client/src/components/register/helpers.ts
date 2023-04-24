const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const validation = {
  name: {
    required: "Name is required!",
    minLength: { value: 4, message: "Name must be at least 4 characters!" },
  },
  email: {
    required: "Email is required!",
    pattern: { value: emailValidationRegex, message: "Email not valid!" },
  },
  password: {
    required: "Passowrd is required!",
    minLength: { value: 4, message: "Password must be at least 4 characters!" },
  },
};
