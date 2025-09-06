import { defineConfig } from "vite";  
import react from "@vitejs/plugin-react";  

// 替換成你的 GitHub 帳號與 Repo 名稱
const repoName = "Vibe Coding";  

export default defineConfig({  
  plugins: [react()],
  base: `/` + repoName + `/`,  
});