import { Form, TextField } from "@adobe/react-spectrum";

const Register = () => {
  return (
    <section className="wrapper">
      <Form maxWidth="size-3600">
        <TextField label="Name" />
        <TextField label="Email" />
        <TextField label="Password" />
      </Form>
    </section>
  );
};

export default Register;
