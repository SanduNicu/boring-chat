import { Request, Response } from "express";
import { connectToDB } from "../../db/config";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/user";

const { JWT_SECRET = "" } = process.env;

async function login(req: Request, res: Response) {
  const { error } = await connectToDB();

  if (error) {
    return res.status(500).json({ error: "DB problem" });
  }

  const { email, password } = req.body;

  const user = await User.findOne({
    email: email,
  });

  if (!user) {
    return res
      .status(400)
      .json({
        error: { message: "User or password incorrect!", field: "email" },
      });
  }

  const isPasswordValid = await compare(password, user?.password);

  if (!isPasswordValid) {
    return res
      .status(400)
      .json({
        error: { message: "User or password incorrect!", field: "email" },
      });
  }

  const token = jwt.sign(
    {
      userId: user._id,
      userEmail: user.email,
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );

  return res
    .status(200)
    .json({ user: { name: user.name, email: user.email, token } });
}

export default login;
