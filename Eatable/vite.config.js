import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

export const tokenKey = "react_eatable";
export const BASE_URI = "https://react-eatable-api.herokuapp.com";
