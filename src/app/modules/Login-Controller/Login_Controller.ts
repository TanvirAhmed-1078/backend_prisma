import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { generateToken } from "../../utils/jwt";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // 1️⃣ ইউজার চেক
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 2️⃣ Password verify
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 3️⃣ JWT generate
  const token = generateToken(user.id);

  // 4️⃣ Cookie তে পাঠানো
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false, // HTTPS হলে true
    sameSite: "lax",
    maxAge: 3600000, // 1 ঘন্টা
  });

  // 5️⃣ Response
  res.json({
    success: true,
    statusCode: 200,
    message: "Login successful",
    result: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};
