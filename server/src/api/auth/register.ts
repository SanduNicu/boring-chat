import { Request, Response } from "express";
import { connectToDB } from "../../db/config";
import { hash } from "bcrypt";
import User from "../../models/user";
import { emailValidator, nameValidator, passwordValidator } from "../helpers";

async function register(req: Request, res: Response) {
  const { error } = await connectToDB();
  if (error) {
    return console.log("error");
  }

  const { name, email, password } = req.body;
  const [isEmailValid, emailError] = emailValidator(email);
  const [isNameValid, nameError] = nameValidator(name);
  const [isPasswordValid, passwordError] = passwordValidator(password);

  if (!isPasswordValid) {
    return res.status(400).json({ error: passwordError });
  }
  if (!isNameValid) {
    return res.status(400).json({ error: nameError });
  }
  if (!isEmailValid) {
    return res.status(400).json({ error: emailError });
  }

  const emailAlreadyTaken = await User.findOne({ email });

  if (emailAlreadyTaken) {
    return res.status(400).json({ error: "Email already taken!" });
  }

  const hashPassword = await hash(password, 12);
  User.create({
    name: name,
    email: email,
    password: hashPassword,
  })
    .then((data) => res.status(200).json({ user: data }))
    .catch((err) => res.status(400).json({ error: err }));

  // res.status(200).json({ success: true });
}

export default register;
