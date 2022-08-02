import dotenv from "dotenv";

dotenv.config();

export const config = {
  REACT_APP_URL: process.env.REACT_APP_URL || "http://localhost",
};

