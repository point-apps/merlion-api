import { config } from "dotenv";

config();

export const appName = "pointhub-hyouman";
export const apiUrl = process.env.API_URL || "https://api.hyouman.pointhub.app";
export const appUrl = process.env.APP_URL || "https://hyouman.pointhub.app";
