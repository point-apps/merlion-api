import { config } from "dotenv";

config();

export const appName = "pointhub-merlion";
export const apiUrl = process.env.API_URL || "https://api.merlion.pointhub.app";
export const appUrl = process.env.APP_URL || "https://merlion.pointhub.app";
