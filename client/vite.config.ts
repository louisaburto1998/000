import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** Same default as server (`PORT` / Bun); override with `PORT` in env when both run via turbo. */
const apiDevPort = Number(process.env.PORT) || 3001;

export default defineConfig({
	resolve: {
		alias: {
			"@client": path.join(rootDir, "src"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: `http://localhost:${apiDevPort}`,
				changeOrigin: true,
			},
		},
	},
	plugins: [
		// Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
		tailwindcss(),
	],
});
