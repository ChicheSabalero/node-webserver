import env from "dotenv";
import envvar from "env-var";

env.config();

export const envs = {
  PORT: process.env.PORT,
  PUBLIC_PATH: process.env.PUBLIC_PATH || "public",
};
