import { config } from "dotenv";

config();

export const appName = "pointhub-merlion";
export const apiUrl = process.env.API_URL || "";
export const appUrl = process.env.APP_URL || "";
