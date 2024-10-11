import zod from "zod";
import { User } from "../models/user.models.js";

const userSchema = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(8),
});

const userRegisterHandler = async (req, res) => {
  const userData = req.body;
  const isValidData = userSchema.safeParse(userData);

  if (!isValidData.success) {
    return res
      .status(401)
      .json({ error: "Invalid Data Sent", details: isValidData.error.errors });
  }

  const isUserExist = await User.findOne({
    $or: [{ username: userData.username }, { email: userData.email }],
  });

  if (isUserExist) {
    return res.status(400).json({ error: "User already exists" });
  }

  const user = await User.create({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });

  const createdUser = await User.findById(user._id).select("-password ");

  if (!createdUser) {
    return res.status(501).json("Something went wrong while creating User");
  }

  return res.status(201).json({
    message: "User Registered SuccesFully",
    createdUser,
  });
};

export { userRegisterHandler };
