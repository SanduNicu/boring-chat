import { Button, Flex, Form, TextField } from "@adobe/react-spectrum";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user";
import { flexCenterPage } from "../../constants/constants";
import { setUser } from "../../redux/userSlice/userSlice";
import { UserLoginData } from "../../types/user";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UserLoginData>();
  const dispatch = useDispatch();

  const emailField = register("email");
  const passwordField = register("password");

  const onSubmit = async (values: UserLoginData) => {
    const { error, user } = await loginUser(values);
    if (error) {
      setError(error.field, { message: error.message });
    } else {
      dispatch(setUser(user));
      navigate("/chat");
    }
  };

  return (
    <Flex {...flexCenterPage}>
      <h1>Login</h1>
      <Form maxWidth="size-3600" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          errorMessage={errors.email?.message as string}
          ref={emailField.ref}
          name={emailField.name}
          onBlur={emailField.onBlur}
          onChange={(value) => setValue("email", value)}
        />
        <TextField
          label="Password"
          type="password"
          errorMessage={errors.password?.message as string}
          ref={passwordField.ref}
          name={passwordField.name}
          onBlur={passwordField.onBlur}
          onChange={(value) => setValue("password", value)}
        />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Flex>
  );
}
