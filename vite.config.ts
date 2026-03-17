import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function copyDirectory(sourceDir: string, destinationDir: string) {
  fs.mkdirSync(destinationDir, { recursive: true });

  fs.cpSync(sourceDir, destinationDir, {
    recursive: true,
    force: true,
    filter: (sourcePath) => !sourcePath.includes(`${path.sep}.git`) && !sourcePath.includes(`${path.sep}.github`),
  });
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: "copy-space-tech-radar",
      closeBundle() {
        const sourceDir = path.resolve(__dirname, "space-tech-radar");
        const destinationDir = path.resolve(__dirname, "dist/space-tech-radar");

        copyDirectory(sourceDir, destinationDir);
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        radar: path.resolve(__dirname, "earth-observation-tech-radar/index.html"),
        training: path.resolve(__dirname, "training/index.html"),
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
