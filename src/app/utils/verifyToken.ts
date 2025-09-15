import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const verifyToken = (chatToken: string) => {
  if (!chatToken) {
    throw new Error("Unauthorized Access");
  }

  const token = chatToken.split(" ")[1];

  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  if (!decoded) {
    throw new Error("Unauthorized Access");
  }

  return decoded;
};

export default verifyToken;
