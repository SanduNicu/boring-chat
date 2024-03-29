import { Button, Flex, Form, TextField } from "@adobe/react-spectrum";
import { useForm } from "react-hook-form";
import { registerUser } from "../../api/user";
import { UserRegisterData } from "../../types/user";
import { validation } from "./helpers";
import { useNavigate } from "react-router-dom";
import { flexCenterPage } from "../../constants/constants";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UserRegisterData>();

  const nameField = register("name", validation.name);
  const emailField = register("email", validation.email);
  const passwordField = register("password", validation.password);

  const onSubmit = async (values: UserRegisterData) => {
    const { error } = await registerUser(values);

    if (error) {
      setError(error.field, { message: error.message });
    } else {
      navigate("/login");
    }
  };

  return (
    <Flex {...flexCenterPage}>
      <h1>Register</h1>
      <Form maxWidth="size-3600" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          isRequired
          validationState={errors.name ? "invalid" : "valid"}
          errorMessage={errors.name?.message as string}
          ref={nameField.ref}
          name={nameField.name}
          onBlur={nameField.onBlur}
          onChange={(value) => setValue("name", value)}
        />

        <TextField
          label="Email"
          isRequired
          validationState={errors.email ? "invalid" : "valid"}
          errorMessage={errors.email?.message as string}
          ref={emailField.ref}
          name={emailField.name}
          onBlur={emailField.onBlur}
          onChange={(value) => setValue("email", value)}
        />
        <TextField
          label="Password"
          type="password"
          isRequired
          errorMessage={errors.password?.message as string}
          validationState={errors.password ? "invalid" : "valid"}
          ref={passwordField.ref}
          name={passwordField.name}
          onBlur={passwordField.onBlur}
          onChange={(value) => setValue("password", value)}
        />
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Flex>
  );
};

export default Register;
