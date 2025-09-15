import jwt from "jsonwebtoken";
import config from "../config";

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, config.jwt_access_secret as string, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, config.jwt_access_secret as string);
};
