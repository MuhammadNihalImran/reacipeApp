import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.REACT_APP_APP_ID": JSON.stringify(
      process.env.REACT_APP_APP_ID
    ),
    "process.env.REACT_APP_APP_KEY": JSON.stringify(
      process.env.REACT_APP_APP_KEY
    ),
  },
});
