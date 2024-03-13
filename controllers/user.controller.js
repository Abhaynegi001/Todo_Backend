import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";

export const getAlluser = async (req, res) => {
  const users = await User.find({}); // data base sa data liya hai...Important

  res.json({
    sucess: true,
    users,
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return res.status(404).json({
      success: false,
      message: "Invalid Email",
    });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "Invalid  password",
    });

  sendCookie(user, res, "Welcome back ", 200);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: "User is Already exist",
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, "Register Successfully", 201);
};

export const myprofile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expire: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "DEVLOPMENT" ? "lax" : "none",
      secure: process.env.NODE_ENV === "DEVLOPMENT" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};
