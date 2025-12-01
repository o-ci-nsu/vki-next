import crypto from "node:crypto";

const getSecretKey = (): string => {
  const secret = process.env.PASSWORD_SECRET_KEY;

  if (!secret) {
    throw new Error("PASSWORD_SECRET_KEY is not set");
  }

  return secret;
};

export const hashPassword = (password: string): string => {
  const pwd = crypto
    .createHmac("sha256", getSecretKey())
    .update(password)
    .digest("hex");

  console.log(pwd);
  return pwd;
};

export const verifyPassword = (
  password: string,
  hashedPassword: string
): boolean => {
  return hashPassword(password) === hashedPassword;
};
